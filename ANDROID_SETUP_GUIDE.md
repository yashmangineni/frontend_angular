# Android APK Setup Guide

This guide will help you properly configure and run the Android APK with working login/signup functionality.

## Prerequisites

1. Make sure your development machine and Android device are on the same network
2. Find your development machine's IP address:
   - Windows: Open Command Prompt and run `ipconfig`
   - Mac/Linux: Open Terminal and run `ifconfig`

## Backend Configuration

1. Update the backend `.env` file:
   - Open `backend/.env`
   - Replace `your-email@gmail.com` with your actual Gmail address
   - Replace `your-8-character-app-password` with your Gmail App Password
   - Update `MACHINE_IP` with your actual machine IP address

2. Generate a Gmail App Password:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this App Password (not your regular Gmail password) in the `.env` file

3. Start the backend server:
   ```
   cd backend
   npm start
   ```

## Android APK Configuration

The APK should now work with the following fixes:

1. Network Security Configuration:
   - Added `network_security_config.xml` to allow HTTP connections to your machine
   - Updated `AndroidManifest.xml` to reference this configuration

2. API Endpoint Configuration:
   - Updated AuthService and DatabaseService to use your machine's IP address
   - Added proper error handling for network connectivity issues

3. UI Improvements:
   - Added loading states to login/signup forms
   - Improved error messages for better user feedback

## Testing the APK

1. Install the APK on your Android device
2. Make sure the backend server is running
3. Try to signup with a new account
4. You should receive a welcome email if email is configured properly
5. Login with your new credentials

## Troubleshooting

### Common Issues:

1. **"Unable to connect to server" error**:
   - Make sure your development machine and Android device are on the same network
   - Verify that the backend server is running
   - Check that the IP address in the `.env` file matches your machine's IP

2. **Email not sending**:
   - Verify that you're using a Gmail App Password, not your regular password
   - Check that the EMAIL_USER and EMAIL_PASS values in `.env` are correct
   - Make sure 2-Factor Authentication is enabled on your Google account

3. **"User already exists" error**:
   - The backend uses an in-memory database that resets when the server restarts
   - If you're getting this error, the server may still be running from a previous session

### Testing Network Connectivity:

You can test if your Android device can reach the backend server:

1. On your Android device, open a web browser
2. Navigate to `http://YOUR_MACHINE_IP:3000/api/health`
3. You should see a JSON response: `{"status":"OK","message":"Server is running"}`

If this doesn't work, check your network configuration and firewall settings.