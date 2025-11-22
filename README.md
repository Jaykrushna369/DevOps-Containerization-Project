API and Frontend Containerization – DevOps Project
📌 Project Overview

This project demonstrates how a full-stack application (Frontend + Backend + Database) can be containerized using Docker and orchestrated using Docker Compose.
The goal is to ensure the application runs smoothly in any environment without configuration issues, making development, testing, and deployment more efficient.

🎯 Objective

Containerize the Frontend, Backend, and MongoDB services.

Run all services together using Docker Compose.

Ensure seamless communication between containers.

Simplify deployment so anyone can run the project with a single command.

🛠️ Technologies Used
Frontend

EJS (Embedded JavaScript Templates)

Backend

Node.js

Express.js

REST APIs

Database

MongoDB (containerized)

Tools

Postman (API testing)

Docker Desktop

Docker Compose


🚀 Features

Fully containerized frontend and backend

MongoDB running as a separate container

APIs created using Express.js

Data stored and retrieved from MongoDB

Easy to run, test, and deploy

No need for local installations of Node or MongoDB

🔧 How to Run the Project
1. Clone the Repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2. Build & Start All Containers
docker-compose up --build

3. Access the Application

Frontend: http://localhost:8000


MongoDB: Runs internally in Docker network

🧪 Testing the API

Use Postman to test the backend endpoints.
Example API:

POST /add


Adds data to MongoDB using backend APIs.

🏁 Outcome

Frontend + Backend + Database run perfectly inside containers

No environment issues

Faster testing and development

Scalable and consistent across machines