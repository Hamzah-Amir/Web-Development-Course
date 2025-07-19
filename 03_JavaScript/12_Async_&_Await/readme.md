# Async/Await Demo

This project demonstrates the usage of JavaScript's `async`/`await` syntax for handling asynchronous operations, specifically by fetching JSON data from a fake REST API and displaying it dynamically on a webpage.

## Features

* Uses `fetch()` to retrieve data asynchronously
* Implements `async` and `await` for clean and readable code
* Dynamically creates and appends elements to the DOM
* Logs progress to console for better understanding of async flow

## Tech Stack

* HTML5
* Vanilla JavaScript (ES6+)

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Open Developer Console to view the logs.
4. After 4 seconds, fetched data will be displayed on the page and logged in the console.

## API Used

Data is fetched from: [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos/1)

## Sample Output

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## Author

Hamza Amir
