# Student Management API

A RESTful API built with Node.js, Express, and MongoDB for managing student records. This project provides a complete CRUD (Create, Read, Update, Delete) interface for student data management.

## Features

- ✅ Create new student records
- ✅ Retrieve all students or individual student by ID
- ✅ Update existing student information
- ✅ Delete student records
- ✅ MongoDB integration for data persistence
- ✅ CORS enabled for cross-origin requests
- ✅ RESTful API design

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (v4.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ZararSW/Case-Study.git
cd Case-Study
```

2. Install dependencies:
```bash
npm install
```

3. Ensure MongoDB is running locally:
```bash
# On Linux/Mac
sudo systemctl start mongod

# Or if using MongoDB directly
mongod
```

## Configuration

The application is configured to connect to MongoDB at:
- **Database URL**: `mongodb://127.0.0.1:27017/pbl_api`
- **Server Port**: `5000`

To modify these settings, edit the `server.js` file.

## Running the Application

Start the server:
```bash
npm start
```

The server will start on `http://localhost:5000`

You should see:
```
MongoDB connected
🚀 Server running on http://localhost:5000
```

## API Endpoints

### Base URL
```
http://localhost:5000/api/students
```

### Endpoints

#### 1. Get All Students
```http
GET /api/students
```

**Response**: Array of student objects

#### 2. Get Student by ID
```http
GET /api/students/:id
```

**Parameters**:
- `id` (string) - MongoDB ObjectId of the student

**Response**: Student object

#### 3. Create New Student
```http
POST /api/students
```

**Request Body**:
```json
{
  "name": "John Doe",
  "roll_no": "CS001",
  "age": 20,
  "department": "Computer Science",
  "email": "john.doe@example.com"
}
```

**Response**: Created student object with success message

#### 4. Update Student
```http
PUT /api/students/:id
```

**Parameters**:
- `id` (string) - MongoDB ObjectId of the student

**Request Body**: Fields to update
```json
{
  "age": 21,
  "department": "Software Engineering"
}
```

**Response**: Updated student object with success message

#### 5. Delete Student
```http
DELETE /api/students/:id
```

**Parameters**:
- `id` (string) - MongoDB ObjectId of the student

**Response**: Success message

## Student Schema

Each student document contains the following fields:

| Field | Type | Required | Unique | Description |
|-------|------|----------|--------|-------------|
| name | String | Yes | No | Full name of the student |
| roll_no | String | Yes | Yes | Unique roll number |
| age | Number | No | No | Age of the student |
| department | String | No | No | Department/Major |
| email | String | No | No | Email address |

## Usage Examples

### Using cURL

**Create a student**:
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "roll_no": "CS002",
    "age": 22,
    "department": "Computer Science",
    "email": "jane.smith@example.com"
  }'
```

**Get all students**:
```bash
curl http://localhost:5000/api/students
```

**Update a student**:
```bash
curl -X PUT http://localhost:5000/api/students/<student-id> \
  -H "Content-Type: application/json" \
  -d '{"age": 23}'
```

**Delete a student**:
```bash
curl -X DELETE http://localhost:5000/api/students/<student-id>
```

## Project Structure

```
Case-Study/
├── models/
│   └── student.js          # Mongoose schema for Student
├── routes/
│   └── students.js         # API routes for student operations
├── server.js               # Main application entry point
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing middleware
- **body-parser** - Request body parsing middleware

## Error Handling

The API includes error handling for common scenarios:

- **400 Bad Request** - Invalid data or malformed request
- **404 Not Found** - Student not found
- **500 Internal Server Error** - Database or server errors

## License

ISC

## Author

[Your Name]

## Contributing

Feel free to submit issues and enhancement requests!
