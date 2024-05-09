Predict expenditure changes using OpenAI API using forecasted CPI.

# backend

uses flask to stand-up endpoints that can take parameters and hit openai api with predefined prompts

required:

* python
* poetry

cd into `backend` folder

set local env var for openai key:

```
export openai_api_key=blah
```

install dependencies:

```
poetry install
```

run app:

```
poetry run flask run
```

endpoint to see the current cpi:

http://localhost:5000/api/cpi/value

endpoint to hit openai:

http://localhost:5000/api/cpi/process

values will be passed through from the frontend

run linter:

```
poetry run black .
```

# frontend

uses vite to stand-up a react web ui that takes input from users, which are passed to the backend to hit openai with a prompt and display the response

required:

* yarn

cd into `frontend` folder

install dependencies:

```
yarn install
```

run app:

```
run yarn dev
```

access web ui:

http://localhost:5173/

run linter:

```
yarn lint
```