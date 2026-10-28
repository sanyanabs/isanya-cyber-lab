import os

import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator

from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler


load_dotenv()
limiter = Limiter(key_func=get_remote_address)

app = FastAPI()


app.state.limiter = limiter
app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)

def get_db_connection():
    return psycopg.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
    )


# =====================================================
# CORS
# =====================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

@app.middleware("http")
async def add_security_headers(request: Request, call_next):

    response = await call_next(request)

    response.headers["X-Content-Type-Options"] = "nosniff"

    response.headers["X-Frame-Options"] = "DENY"

    response.headers["Referrer-Policy"] = (
        "strict-origin-when-cross-origin"
    )

    return response

# =====================================================
# VISITOR LOG MODEL
# =====================================================

class VisitorLog(BaseModel):
    alias: str = Field(
        min_length=1,
        max_length=50
    )

    message: str = Field(
        min_length=1,
        max_length=500
    )

    @field_validator("alias", "message")
    @classmethod
    def validate_text(cls, value):

        value = value.strip()

        if not value:
            raise ValueError(
                "Value cannot be empty or whitespace only"
            )

        return value


# =====================================================
# ROOT
# =====================================================

@app.get("/")
def root():

    return {
        "message": "ISANYA Visitor API is online"
    }


# =====================================================
# TEST ENDPOINT
# =====================================================

@app.post("/api/visitor-logs/test")
def test_visitor_log(visitor: VisitorLog):

    return {
        "message": "Input accepted",
        "data": visitor
    }


# =====================================================
# DATABASE TEST
# =====================================================

@app.get("/db-test")
def database_test():

    with get_db_connection() as connection:
        pass

    return {
        "message": "PostgreSQL connection successful"
    }


# =====================================================
# CREATE VISITOR LOG
# =====================================================
@app.post("/api/visitor-logs")
@limiter.limit("5/minute")
def create_visitor_log(request: Request, visitor: VisitorLog):

    with get_db_connection() as connection:

        with connection.cursor() as cursor:

            cursor.execute(
                """
                INSERT INTO visitor_logs (alias, message)
                VALUES (%s, %s)
                RETURNING id, alias, message, created_at
                """,
                (
                    visitor.alias,
                    visitor.message
                )
            )

            row = cursor.fetchone()

        connection.commit()

    return {
        "message": "Visitor log created",

        "log": {
            "id": row[0],
            "alias": row[1],
            "message": row[2],
            "created_at": row[3],
        }
    }
    
@app.get("/api/visitor-logs")
def get_visitor_logs():

    with get_db_connection() as connection:

        with connection.cursor() as cursor:

            cursor.execute(
                """
                SELECT id, alias, message, created_at
                FROM visitor_logs
                ORDER BY created_at DESC
                LIMIT 20
                """
            )

            rows = cursor.fetchall()

    return {
        "logs": [
            {
                "id": row[0],
                "alias": row[1],
                "message": row[2],
                "created_at": row[3],
            }
            for row in rows
        ]
    }