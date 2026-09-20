# Student Management REST API

A simple RESTful API built with **Node.js** and **Express.js** to manage student records using CRUD operations. Data is stored in an in-memory array (no database), as required by the assignment.

> Web Dev III (Node.js & Express Backend) – Unit 2, Lab Assignment 2

## Features

- Full CRUD operations on student records
- Modular routing with Express Router
- Custom logger middleware (logs method, URL, and time)
- Proper error handling with correct HTTP status codes
- Tested using Postman

## Tech Stack

- Node.js
- Express.js
- Postman (for API testing)

## Project Structure

```
student-management-rest-api/
├── app.js                  # Server setup and middleware
├── routes/
│   └── studentRoutes.js    # All student API routes
├── middleware/
│   └── logger.js           # Custom logger middleware
├── data/
│   └── students.js         # In-memory student data
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer

### Installation

1. Clone the repository
   ```
   git clone https://github.com/akanksha-076/student-management-rest-api.git
   ```
2. Go into the project folder
   ```
   cd student-management-rest-api
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the server
   ```
   node app.js
   ```

The server runs at **http://localhost:3000**

## API Endpoints

| Method | Endpoint          | Description            | Success Code |
|--------|-------------------|------------------------|--------------|
| GET    | `/students`       | Get all students       | 200          |
| GET    | `/students/:id`   | Get a student by ID    | 200          |
| POST   | `/students`       | Add a new student      | 201          |
| PUT    | `/students/:id`   | Update a student       | 200          |
| DELETE | `/students/:id`   | Delete a student       | 200          |

## Example Requests

### Get all students

`GET /students`

```json
[
  { "id": 1, "name": "Rahul", "course": "BCA" },
  { "id": 2, "name": "Priya", "course": "BTech" },
  { "id": 3, "name": "Amit", "course": "BCA" }
]
```

### Add a student

`POST /students`

Request body:
```json
{
  "name": "Neha",
  "course": "BCA"
}
```

Response (201 Created):
```json
{
  "id": 4,
  "name": "Neha",
  "course": "BCA"
}
```

### Update a student

`PUT /students/1`

Request body:
```json
{
  "name": "Rahul Sharma",
  "course": "BTech"
}
```

### Delete a student

`DELETE /students/2`

Response (200 OK):
```json
{
  "message": "Student deleted",
  "student": { "id": 2, "name": "Priya", "course": "BTech" }
}
```

## Status Codes

| Code | Meaning      | When it happens                                   |
|------|--------------|---------------------------------------------------|
| 200  | OK           | Request succeeded                                 |
| 201  | Created      | New student added                                 |
| 400  | Bad Request  | Missing `name` or `course`, or invalid ID         |
| 404  | Not Found    | Student ID or route does not exist                |
| 500  | Server Error | Unexpected error on the server                    |

## Middleware

**Logger** (`middleware/logger.js`) prints the time, HTTP method, and URL of every incoming request to the terminal:

```
[2026-09-20T10:15:32.000Z] GET /students
```

## Testing with Postman

1. Start the server with `node app.js`
2. Open Postman and create a request for each endpoint above
3. For POST and PUT, select **Body → raw → JSON** and add the request body
4. Check that the status code and response match the tables above

## Author

**Akanksha** – B.Tech CSE, K. R. Mangalam University
GitHub: [akanksha-076](https://github.com/akanksha-076)
