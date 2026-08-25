import os

import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel, Field, field_validator

load_dotenv()

app = FastAPI()

class VisitorLog(BaseModel):
    alias: str = Field(min_length=1, max_length=50)
    message: str = Field(min_length=1, max_length=500)

    @field_validator("alias", "message")
    @classmethod
    def validate_text(cls, value):
        value = value.strip()

        if not value:
            raise ValueError("Value cannot be empty or whitespace only")

        return value


@app.post("/api/visitor-logs/test")
def test_visitor_log(visitor: VisitorLog):

    return {
        "message": "Input accepted",
        "data": visitor
    }

@app.get("/")
def root():
    return {
        "message": "ISANYA Visitor API is online"
    }


@app.get("/db-test")
def database_test():

    connection = psycopg.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
    )

    connection.close()

    return {
        "message": "PostgreSQL connection successful"
    }

@app.post("/api/visitor-logs")
def create_visitor_log(visitor: VisitorLog):

    connection = psycopg.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
    )

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO visitor_logs (alias, message)
        VALUES (%s, %s)
        RETURNING id, alias, message, created_at
        """,
        (visitor.alias, visitor.message)
    )

    row = cursor.fetchone()

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Visitor log created",
        "log": {
            "id": row[0],
            "alias": row[1],
            "message": row[2],
            "created_at": row[3],
        }
    }