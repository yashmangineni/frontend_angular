-- Freshers Job Database Setup Script
-- This script creates the database and tables needed for the application

-- Create the database
CREATE DATABASE IF NOT EXISTS FreshersJobDb;
USE FreshersJobDb;

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON Users(Email);

-- Sample data (optional - for testing purposes)
-- INSERT INTO Users (Name, Email, PasswordHash) VALUES 
-- ('John Doe', 'john@example.com', 'hashed_password_here'),
-- ('Jane Smith', 'jane@example.com', 'hashed_password_here');

-- Create Sessions table (for JWT token management)
CREATE TABLE IF NOT EXISTS Sessions (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    Token VARCHAR(512) NOT NULL,
    ExpiresAt TIMESTAMP NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE
);

-- Create indexes for Sessions table
CREATE INDEX idx_sessions_token ON Sessions(Token);
CREATE INDEX idx_sessions_userid ON Sessions(UserId);
CREATE INDEX idx_sessions_expires ON Sessions(ExpiresAt);

-- Create InterviewQuestions table
CREATE TABLE IF NOT EXISTS InterviewQuestions (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Question TEXT NOT NULL,
    Topic VARCHAR(100) NOT NULL,
    Difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for InterviewQuestions table
CREATE INDEX idx_questions_topic ON InterviewQuestions(Topic);
CREATE INDEX idx_questions_difficulty ON InterviewQuestions(Difficulty);

-- Create UserInterviews table (to track user interview attempts)
CREATE TABLE IF NOT EXISTS UserInterviews (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    QuestionId INT NOT NULL,
    Answer TEXT,
    Score INT,
    Feedback TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (QuestionId) REFERENCES InterviewQuestions(Id) ON DELETE CASCADE
);

-- Create indexes for UserInterviews table
CREATE INDEX idx_userinterviews_user ON UserInterviews(UserId);
CREATE INDEX idx_userinterviews_question ON UserInterviews(QuestionId);

-- Create CodingTests table
CREATE TABLE IF NOT EXISTS CodingTests (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    Language VARCHAR(50) NOT NULL,
    TemplateCode TEXT,
    SolutionCode TEXT,
    TestCases TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for CodingTests table
CREATE INDEX idx_codingtests_difficulty ON CodingTests(Difficulty);
CREATE INDEX idx_codingtests_language ON CodingTests(Language);

-- Create UserCodingTests table (to track user coding test attempts)
CREATE TABLE IF NOT EXISTS UserCodingTests (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    TestId INT NOT NULL,
    CodeSubmitted TEXT,
    Result TEXT,
    Score INT,
    PassedTests INT,
    TotalTests INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (TestId) REFERENCES CodingTests(Id) ON DELETE CASCADE
);

-- Create indexes for UserCodingTests table
CREATE INDEX idx_usercodingtests_user ON UserCodingTests(UserId);
CREATE INDEX idx_usercodingtests_test ON UserCodingTests(TestId);

-- Create ResumeTemplates table
CREATE TABLE IF NOT EXISTS ResumeTemplates (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Content TEXT NOT NULL,
    Category VARCHAR(100),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create indexes for ResumeTemplates table
CREATE INDEX idx_resumetemplates_category ON ResumeTemplates(Category);

-- Create UserResumes table (to store user resume data)
CREATE TABLE IF NOT EXISTS UserResumes (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    TemplateId INT,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    IsPublic BOOLEAN DEFAULT FALSE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (TemplateId) REFERENCES ResumeTemplates(Id) ON DELETE SET NULL
);

-- Create indexes for UserResumes table
CREATE INDEX idx_userresumes_user ON UserResumes(UserId);
CREATE INDEX idx_userresumes_template ON UserResumes(TemplateId);

-- Display success message
SELECT 'Database setup completed successfully!' AS Message;