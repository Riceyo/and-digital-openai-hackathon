from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = os.environ["openai_api_key"]
current_cpi_value = "6.3"


@app.route("/")
def home():
    return "hello"


@app.route("/api/cpi/value")
def current_cpi():
    return current_cpi_value


@app.route("/api/cpi/process", methods=["GET", "POST"])
def process_cpi():
    req = request.json
    expenditure_input = req["expenditure"]
    cpi_input = req["cpi"]
    query = f"Given a household's current weekly expenditure of £{expenditure_input} and UK CPI of {current_cpi_value}%, use publically available historical data to predict the household expenditure if CPI changes to {cpi_input}%. Dont give a working, just give a number value."
    response = openai.completions.create(
        prompt=query,
        model="gpt-3.5-turbo-instruct",
    )
    answer = response.choices[0].text
    return jsonify(answer), 200


if __name__ == "__main__":
    app.run(port=5000)
