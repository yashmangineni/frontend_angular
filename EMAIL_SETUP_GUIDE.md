# Email Setup Guide for CrackIT Job Application

This guide explains how to implement email functionality in the CrackIT Job application to send welcome emails to users when they create an account.

## Overview

When a user successfully signs up for an account, the application should:
1. Validate their email and password
2. Save their information to the database
3. Send a welcome email to their email address
4. Redirect them to the login page

## Current Implementation

The frontend implementation is already in place:
- Email validation using regex pattern
- Password strength requirements (8+ characters, uppercase, lowercase, digit, special character)
- Welcome email simulation in the console
- User redirection to login page after signup

## Backend Implementation

To implement actual email sending, you need to set up a backend server. Here's how:

### 1. Node.js/Express Backend Setup

Create a new file `backend/server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Configure email transporter (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

// Send welcome email function
async function sendWelcomeEmail(email, name) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to CrackIT Job!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28a745;">Welcome to CrackIT Job, ${name}!</h2>
          <p>Your account has been successfully created.</p>
          <p>You can now access all our interview preparation resources to help you land your dream job.</p>
          <p>Best of luck with your job search!</p>
          <br>
          <p>Best regards,<br><strong>The CrackIT Job Team</strong></p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully to:', email);
    return { success: true };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
}

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
    
    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({ message: 'Password must contain at least one uppercase letter' });
    }
    
    if (!/[a-z]/.test(password)) {
      return res.status(400).json({ message: 'Password must contain at least one lowercase letter' });
    }
    
    if (!/\d/.test(password)) {
      return res.status(400).json({ message: 'Password must contain at least one digit' });
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return res.status(400).json({ message: 'Password must contain at least one special character' });
    }

    // Here you would save the user to your database
    // For this example, we'll just simulate it
    console.log('User saved to database:', { name, email });

    // Send welcome email
    await sendWelcomeEmail(email, name);

    res.status(201).json({ 
      message: 'Account created successfully! A welcome email has been sent to your email address.' 
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2. Environment Variables

Create a `.env` file in your backend directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

### 3. Package.json

```json
{
  "name": "crackit-job-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "nodemailer": "^6.9.4",
    "bcrypt": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 4. Installation and Running

```bash
cd backend
npm install
npm run dev
```

## Updating the Frontend

Update the DatabaseService to make actual HTTP requests:

```typescript
// src/app/services/backend/db.service.ts

// Replace the saveUser method with:
saveUser(user: Omit<User, 'id' | 'createdAt'>): Observable<{ success: boolean; message?: string; user?: User }> {
  // Validate email
  if (!this.validateEmail(user.email)) {
    return of({ success: false, message: 'Invalid email format' });
  }
  
  // Validate password
  const passwordValidation = this.validatePassword(user.password);
  if (!passwordValidation.isValid) {
    return of({ success: false, message: passwordValidation.message });
  }
  
  // Make actual HTTP request to backend
  return this.http.post<{ message: string }>(`${this.apiUrl}/signup`, user, this.httpOptions).pipe(
    map(response => ({ success: true, message: response.message })),
    catchError(error => {
      console.error('Signup error:', error);
      return of({ success: false, message: error.error?.message || 'Failed to create account' });
    })
  );
}
```

Update the apiUrl in the DatabaseService:

```typescript
private apiUrl = 'http://localhost:3000/api'; // Point to your backend
```

## Email Service Options

### 1. Gmail (Free but requires App Passwords)
- Enable 2-factor authentication
- Generate an App Password
- Use the App Password in your code

### 2. SendGrid (Free tier available)
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendWelcomeEmail(email, name) {
  const msg = {
    to: email,
    from: 'welcome@crackitjob.com',
    subject: 'Welcome to CrackIT Job!',
    html: `<h2>Welcome, ${name}!</h2><p>Your account has been created successfully.</p>`,
  };
  
  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('SendGrid error:', error);
    return { success: false, error: error.message };
  }
}
```

### 3. Amazon SES
### 4. Mailgun

## Testing

You can test your email functionality using curl:

```bash
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"Password123!"}'
```

## Security Considerations

1. Never commit email credentials to version control
2. Use environment variables for sensitive data
3. Use App Passwords for Gmail instead of your regular password
4. Implement rate limiting to prevent abuse
5. Use HTTPS in production
6. Hash passwords before storing in database

## Troubleshooting

1. **Emails not being sent**: Check your email credentials and firewall settings
2. **Gmail authentication issues**: Ensure you're using an App Password
3. **CORS errors**: Make sure your backend allows requests from your frontend origin
4. **Password validation errors**: Ensure the password meets all requirements

## Next Steps

1. Implement user authentication with JWT tokens
2. Add password reset functionality
3. Implement email verification for new accounts
4. Add database integration (MongoDB, PostgreSQL, etc.)
5. Deploy your backend to a cloud service (Heroku, AWS, etc.)