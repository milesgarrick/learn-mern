# learn-mern
Learning the MERN stack

## Step 1: Build REST API
Use Express for backend framework, which requires Node.js
Use MongoDB for databases modeling
1. Make repository
    - add .gitignore and ignore .env and node_modules
2. Install Postman or other tool for developing a REST API
    - allows sending ambiguous requests to an API endpoint
3. Create backend folder
    - Create server.js file to be the backend entrypoint
4. Run npm init
5. Alter package.json file to dictate start and server scripts
    - ex: "start": "node backend/server.js"
    - ex: "server" : "nodemon backend/server.js"
6. Install dependencies
    - node
    - colors (optional) for coloring console output
    - dotenv for environment variables
    - express for backend framework
    - express-async-handler for error handling
    - mongoose for database framework
    - nodemon as a dev dependency for ease of development (watches for server changes and restarts)
7. Populate server.js with:
    - express
    - dotenv
    - port
    - initialized app {express()}
    - app.listen()
    ** put port and anything else sensitive in .env as a variable
    - create response behaviors for necessary requests
8. Move response behaviors to a controller file
    - backend/router/routes.js will hold functions
    - populate routes.js with express and express.Router() object and port
    - initialize the app {express()}
9. Move actual functions to a controller file
    - /backend/controllers/controller.js
    - populate with each function
    - export functions
    - update /backend/router/routes.js to require the functions from the controller file
10. Add functionality to the controller functions
11. Add /backend/middleware/errorMiddleware.js to allow the use of express error handling of async functions
12. Create /backend/models/model.js for database schema
    - export the model
13. Update controller to require the exported schema
14. Add database functionality to the API

## Step 2: Authentication
Use JWT to implement json web tokens
1. Install dependencies
    - npm i bcryptjs
    - npm i jsonwebtoken