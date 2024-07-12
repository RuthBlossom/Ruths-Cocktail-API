# Cocktail Randomizer

This Express.js application fetches a random cocktail from [TheCocktailDB API](https://www.thecocktaildb.com/api.php) and displays it on a web page. It utilizes Axios for making HTTP requests and EJS for rendering views.

![Capturewebsite](https://github.com/user-attachments/assets/2b23132e-25dd-4e24-8d78-6d0d63db7821)

![Capturewebsite2](https://github.com/user-attachments/assets/669c9e28-f951-4731-8878-008ed55b1917)

![Capturewebsite3](https://github.com/user-attachments/assets/3d50ebce-f238-47c8-85f1-481847b61aca)



## Prerequisites
- Node.js installed on your machine.

## Installation
1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. Open your web browser and go to `http://localhost:3000`.
3. Each time you refresh the page, a new random cocktail will be displayed.

## File Structure
- **index.js**: Main application file containing the Express.js server setup and route definitions.
- **public/**: Directory containing static assets like CSS and client-side JavaScript.
- **views/index.ejs**: EJS template file for rendering the cocktail details.
- **views/error.ejs**: EJS template file for rendering error messages.

## Dependencies
- **express**: Web framework for Node.js.
- **axios**: Promise-based HTTP client for making requests to external APIs.
- **ejs**: Templating engine for rendering HTML templates.

## Routes
- **GET "/":** Renders the index page with a random cocktail fetched from TheCocktailDB API.

## Error Handling
- Error handling is implemented for failed API requests. If there's an error fetching the cocktail, an error message will be displayed on the page.

## Disclaimer
This application is for educational purposes only. 
```
