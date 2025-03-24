# Online Quiz Maker

An interactive platform to create and take quizzes, with user authentication, scoring, and a leaderboard.

## Task Objectives
- Allow quiz creation with multiple-choice questions.
- Enable users to attempt quizzes and get scores.
- Display a leaderboard of top scorers.
- Implement user authentication for quiz creators.
- Provide basic analytics (score calculation).

## Tech Stack
- **Backend**: Java (Spring Boot), MySQL
- **Frontend**: JavaScript (React)
- **Authentication**: JWT

## Steps to Run

### Prerequisites
- Java 17+
- Node.js and npm
- MySQL

### Backend Setup
1. Navigate to `backend/`.
2. Update `application.properties` with your MySQL credentials and a JWT secret.
3. Run `mvn clean install`.
4. Start the server: `mvn spring-boot:run`.

### Frontend Setup
1. Navigate to `frontend/`.
2. Install dependencies: `npm install`.
3. Start the app: `npm start`.

### Access
- Backend: `http://localhost:8080`
- Frontend: `http://localhost:3000`

## Usage
1. Register and log in at `/`.
2. Create a quiz at `/create`.
3. Attempt a quiz at `/attempt/:id`.
4. View the leaderboard at `/leaderboard`.
