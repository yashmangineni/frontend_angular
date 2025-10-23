# Fix for "yash" Database Issues

This guide addresses the specific issue where the "yash" database exists in MySQL Workbench but tables are not created and data is not saved.

## Problem Summary

- Database "yash" exists in MySQL Workbench
- Tables are not created
- Data is not saved
- Database connection works properly

## Solution Steps

### Step 1: Run the Automated Fix Script

1. **Update your MySQL password** in [fix-yash-database.js](file:///c:/Users/YaswanthMangineni/OneDrive%20-%20TheMindSpire/Desktop/App/beginner/Freshers_Job/freshers-angular/fix-yash-database.js):
   - Open the file
   - Find the line with `password: 'your_password'`
   - Replace `'your_password'` with your actual MySQL root password

2. **Install dependencies**:
   ```bash
   npm install mysql2
   ```

3. **Run the fix script**:
   ```bash
   node fix-yash-database.js
   ```

Alternatively, on Windows, you can simply double-click [fix-yash-database.bat](file:///c:/Users/YaswanthMangineni/OneDrive%20-%20TheMindSpire/Desktop/App/beginner/Freshers_Job/freshers-angular/fix-yash-database.bat) which will:
- Check for required dependencies
- Prompt for your MySQL password
- Automatically update the script
- Run the database fix

### Step 2: Manual Verification in MySQL Workbench

1. **Open MySQL Workbench**
2. **Connect to your "yash" database**
3. **Verify tables were created**:
   ```sql
   USE yash;
   SHOW TABLES;
   ```
   You should see all the following tables:
   - Users
   - Sessions
   - InterviewQuestions
   - UserInterviews
   - CodingTests
   - UserCodingTests
   - ResumeTemplates
   - UserResumes

4. **Test data insertion**:
   ```sql
   USE yash;
   INSERT INTO Users (Name, Email, PasswordHash) 
   VALUES ('Manual Test User', 'manualtest@example.com', 'testpassword');
   
   -- Important: Commit the transaction
   COMMIT;
   
   -- Verify data was saved
   SELECT * FROM Users WHERE Email = 'manualtest@example.com';
   ```

### Step 3: Configure Your .NET Backend

Update your .NET backend's `appsettings.json` to use the "yash" database:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=yash;Uid=root;Pwd=your_password;"
  }
  // ... rest of your configuration
}
```

## Common Issues and Solutions

### 1. Tables Not Showing Up

**Problem**: After running the script, tables still don't appear in MySQL Workbench.

**Solution**:
1. Refresh the schema browser in MySQL Workbench (click the refresh icon)
2. Make sure you're looking at the "yash" database schema
3. Try disconnecting and reconnecting to the database

### 2. Data Not Persisting

**Problem**: INSERT statements succeed but data disappears after closing MySQL Workbench.

**Solution**:
1. Make sure to run `COMMIT;` after INSERT/UPDATE/DELETE operations
2. Enable auto-commit mode in MySQL Workbench toolbar
3. Check that you're working in the correct database with `SELECT DATABASE();`

### 3. Foreign Key Constraint Errors

**Problem**: Error messages about foreign key constraints when creating tables.

**Solution**:
1. The script creates tables in the correct order to avoid this issue
2. If you still get errors, drop all tables and run the script again:
   ```sql
   USE yash;
   DROP TABLE IF EXISTS UserResumes, ResumeTemplates, UserCodingTests, CodingTests, UserInterviews, InterviewQuestions, Sessions, Users;
   ```

### 4. Duplicate Key Errors

**Problem**: Error messages about duplicate keys when running the script multiple times.

**Solution**:
- These are normal and expected
- The script uses `IF NOT EXISTS` clauses to prevent errors
- The script will continue execution even if some "duplicate key" errors appear

## Verification Checklist

After running the fix script, verify that:

- [ ] All 8 tables are created in the "yash" database
- [ ] Indexes are created on all tables
- [ ] Test data is inserted and can be queried
- [ ] Data persists after closing and reopening MySQL Workbench
- [ ] Your .NET backend can connect to the "yash" database

## Testing Your Application

1. **Start your .NET backend**:
   ```bash
   dotnet run
   ```

2. **Start your Angular frontend**:
   ```bash
   ng serve
   ```

3. **Test user registration**:
   - Open your browser to http://localhost:4200
   - Try to create a new account
   - Check that the user is saved in the Users table:
     ```sql
     USE yash;
     SELECT * FROM Users;
     ```

## Backup Your Database

Before making significant changes, create a backup:

```bash
mysqldump -u root -p yash > yash_backup.sql
```

## Need More Help?

If you're still experiencing issues:

1. Take a screenshot of any error messages
2. Note which step is failing
3. Check MySQL error logs (usually in `C:\ProgramData\MySQL\MySQL Server 8.0\Data\`)
4. Contact support with details of the issue

## Additional Resources

- [MYSQL_WORKBENCH_GUIDE.md](file:///c:/Users/YaswanthMangineni/OneDrive%20-%20TheMindSpire/Desktop/App/beginner/Freshers_Job/freshers-angular/MYSQL_WORKBENCH_GUIDE.md) - General MySQL Workbench usage
- [MYSQL_TROUBLESHOOTING.md](file:///c:/Users/YaswanthMangineni/OneDrive%20-%20TheMindSpire/Desktop/App/beginner/Freshers_Job/freshers-angular/MYSQL_TROUBLESHOOTING.md) - General MySQL troubleshooting
- [MYSQL_BACKEND_SETUP.md](file:///c:/Users/YaswanthMangineni/OneDrive%20-%20TheMindSpire/Desktop/App/beginner/Freshers_Job/freshers-angular/MYSQL_BACKEND_SETUP.md) - Complete .NET backend setup with MySQL