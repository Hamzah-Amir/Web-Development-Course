# ExpressJS: Response & Request Example

This project demonstrates the basics of handling requests and responses in an ExpressJS application. It includes simple routing, serving static HTML, and modular route handling.

## Features

- **ExpressJS Server**: Basic setup using Express.
- **Routing**: 
  - Root route (`/`) returns a simple text response.
  - `/index` serves a static HTML page.
  - `/blog` and `/blog/about` handled via a separate router module.
- **Static HTML & CSS**: Serves a styled HTML page from the `templates` directory.
- **Modular Routes**: Blog routes are separated into their own module for clarity.

## File Structure

```
02_Response_Request/
│
├── main.js                # Main Express server file
├── package.json           # Project metadata and dependencies
├── routes/
│   └── blog.js            # Blog-related routes
├── templates/
│   ├── index.html         # Static HTML page served at /index
│   └── style.css          # Styling for the HTML page
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
   - `GET /index`  
     Serves the static HTML page (`templates/index.html`).
   - `GET /blog`  
     Returns: `Birds home page`
   - `GET /blog/about`  
     Returns: `About Blogs`

## Code Overview

- **main.js**  
  Sets up the Express app, imports the blog router, and defines the main routes.

- **routes/blog.js**  
  Contains two routes:
  - `/blog/` – Home page for blogs.
  - `/blog/about` – About page for blogs.

- **templates/index.html**  
  A simple HTML page with a welcome message and a button.

- **templates/style.css**  
  Provides basic styling for the HTML page.

## Dependencies

- [express](https://www.npmjs.com/package/express) ^5.1.0

## License

ISC