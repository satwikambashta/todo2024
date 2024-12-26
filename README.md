
# Todo App Backend
This is the backend for the Todo App, built with Node.js. It provides an API for user authentication, task management (create, update, delete), and more.
LIVE AT: https://todo2024-jvl1.onrender.com/api/v1/

**OR YOU CAN CLONE THE GITHUB REPOSITORY AND RUN IT ON LOCALHOST:5000**

## API Endpoints

### User Endpoints
- **Register** (POST): `/api/v1/users/new`  
  Registers a new user.
  - Request body: `{ "name": "userm", "email": "user@example.com", "password": "password" }`
  
- **Login** (POST): `/api/v1/users/login`  
  Logs in a user.
  - Request body: `{ "email": "user@example.com", "password": "password" }`
  
- **Profile** (GET): `/api/v1/users/me`  
  Fetches the currently authenticated user's profile.
  - Headers: `Authorization: Bearer <token>`
  
- **Logout** (GET): `/api/v1/users/logout`  
  Logs out the currently authenticated user.
  - Headers: `Authorization: Bearer <token>`

### Task Endpoints
- **Create Task** (POST): `/api/v1/task/new`  
  Creates a new task for the authenticated user.
  - Request body: `{ "title": "New Task", "description": "Task details" }`
  - Headers: `Authorization: Bearer <token>`

- **Get All Tasks** (GET): `/api/v1/task/my`  
  Fetches all tasks for the authenticated user.
  - Headers: `Authorization: Bearer <token>`

- **Update Task** (PUT): `/api/v1/task/:taskid`  
  Updates the task with the specified ID.
  - Request body: `{ "title": "Updated Task", "description": "Updated details" }`
  - Headers: `Authorization: Bearer <token>`

- **Delete Task** (DELETE): `/api/v1/task/:taskid`  
  Deletes the task with the specified ID.
  - Headers: `Authorization: Bearer <token>`

## Technologies Used
- Node.js
- Express.js
- MongoDB
- CORS (for frontend integration)

## Getting Started
To run the backend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000` by default.

## CORS
To allow your frontend to connect to the API, ensure that the frontend's domain is added to the allowed URLs in CORS. You can contact me on [LinkedIn](https://www.linkedin.com/in/satwik-saurav-a058aa21b/) to request access.
OR YOU CAN CLONE THE GITHUB REPOSITORY AND RUN IT ON LOCALHOST:5000

## License
This project is open-source and available under the MIT License.
