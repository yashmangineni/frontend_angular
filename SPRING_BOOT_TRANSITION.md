# Backend Transition: Node.js to Spring Boot

## Overview
This document summarizes the transition from the Node.js backend to a Spring Boot backend for the Freshers Job application.

## Changes Made

### 1. Created Spring Boot Application Structure
- Created Maven project structure
- Implemented all required API endpoints matching the Node.js implementation
- Used H2 in-memory database for development
- Implemented JWT-based authentication
- Added email notification functionality

### 2. API Endpoints Implemented
All endpoints match the previous Node.js implementation:
- POST /api/users - User signup with validation
- POST /api/login - User login with JWT token generation
- GET /api/users?email={email} - Get user by email
- GET /api/health - Health check endpoint

### 3. Features Implemented
- User registration with password encryption (BCrypt)
- User authentication with JWT tokens
- Email notifications for signup and login
- Input validation for all endpoints
- CORS configuration for frontend access
- Database persistence with JPA/Hibernate

### 4. Security Features
- Password hashing with BCrypt
- JWT token-based authentication
- CORS configuration for secure frontend access
- Input validation to prevent injection attacks

## Directory Structure
```
spring-backend/
├── pom.xml                    # Maven configuration
├── README.md                  # Documentation
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── DemoApplication.java      # Main application class
│   │   │   ├── controller/               # REST controllers
│   │   │   ├── entity/                   # JPA entities
│   │   │   ├── repository/               # Spring Data repositories
│   │   │   ├── service/                  # Business logic services
│   │   │   ├── dto/                      # Data transfer objects
│   │   │   ├── util/                     # Utility classes
│   │   │   └── config/                   # Configuration classes
│   │   └── resources/
│   │       ├── application.properties     # Main configuration
│   │       └── application-dev.properties # Development configuration
└── scripts/
    ├── start-spring-backend.bat          # Windows startup script
    └── start-spring-backend.sh           # Linux/Mac startup script
```

## How to Use

### 1. Prerequisites
- Install Java 17 or higher
- Install Maven 3.6 or higher

### 2. Configuration
1. Update email settings in `src/main/resources/application.properties`:
   - `spring.mail.username` - Your Gmail address
   - `spring.mail.password` - Your Gmail App Password

### 3. Running the Application
Option 1: Using Maven
```bash
cd spring-backend
mvn spring-boot:run
```

Option 2: Using the provided scripts
Windows:
```bash
backend\start-spring-backend.bat
```

Linux/Mac:
```bash
backend/start-spring-backend.sh
```

### 4. Testing
- The server runs on port 3000 (same as previous Node.js backend)
- Access H2 console at http://localhost:3000/h2-console (for development)
- Use the same API endpoints as before

## Benefits of Spring Boot
1. **Type Safety**: Java provides compile-time type checking
2. **Performance**: Spring Boot applications typically have better performance
3. **Scalability**: Easier to scale and maintain
4. **Security**: Built-in security features and best practices
5. **Ecosystem**: Rich ecosystem of Spring libraries and tools
6. **Database Integration**: Better ORM support with JPA/Hibernate

## Next Steps
1. Install Java and Maven if not already installed
2. Configure email settings in application.properties
3. Build and run the Spring Boot application
4. Test the API endpoints
5. Update frontend configuration if needed