# ExpressJS: Middleware Example

This project demonstrates the use of middleware in an ExpressJS application. It includes global middleware for logging, router-specific middleware, and modular route handling.

## Features

- **ExpressJS Server**: Basic setup using Express.
- **Global Middleware**: Logs request headers and methods to a log file (`Logs.txt`).
- **Router Middleware**: The `/birds` router uses its own middleware to log the time of each request.
- **Routing**:
  - Root route (`/`) returns a simple text response.
  - `/birds` and `/birds/about` handled via a separate router module with its own middleware.

## File Structure

```
03_Middleware/
│
├── main.js                # Main Express server file
├── package.json           # Project metadata and dependencies
├── Logs.txt               # Log file for request methods
├── routers/
│   └── birds.js           # Birds-related routes with router-specific middleware
└── node_modules/          # Installed dependencies
```

## Usage

1. **Install dependencies**  
   Run in this directory:
   ```
   npm install
   ```

2. **Start the server**
   ```
   node main.js
   ```
   The server will start on [http://localhost:3000](http://localhost:3000).

3. **Available Routes**
   - `GET /`  
     Returns: `Hello World!`
   - `GET /birds`  
     Returns: `Birds home page`
   - `GET /birds/about`  
     Returns: `About birds`

## Middleware Overview

- **Global Middleware (main.js)**
  - Logs all request headers to the console.
  - Appends the current timestamp and HTTP method to `Logs.txt` for every request.

- **Router Middleware (routers/birds.js)**
  - Logs the current time to the console for every request to `/birds` routes.

## Dependencies

- [express](https://www.npmjs.com/package/express) ^5.1.0

## License

ISC