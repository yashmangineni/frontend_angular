# MySQL Workbench Guide

This guide provides instructions for using MySQL Workbench to manage the Freshers Job database.

## Connecting to the Database

1. Open MySQL Workbench
2. Click on "Database" -> "Manage Connections"
3. Click "New" to create a new connection
4. Enter connection details:
   - Connection Name: FreshersJobDb
   - Hostname: localhost
   - Port: 3306
   - Username: your_mysql_username
   - Password: your_mysql_password
5. Click "Test Connection" to verify the connection works
6. Click "OK" to save the connection

## Running SQL Scripts

1. Open MySQL Workbench and connect to your FreshersJobDb connection
2. Click on "File" -> "Open SQL Script"
3. Select the database-setup.sql file
4. Click the lightning bolt icon or press Ctrl+Shift+Enter to execute the script
5. Verify that all statements executed successfully

## Viewing Database Structure

1. In the left sidebar, expand the "SCHEMAS" section
2. Find and expand the "FreshersJobDb" schema
3. You can view tables, columns, indexes, and relationships

## Managing Data

To view or edit data in a table:
1. Right-click on the table name
2. Select "Select Rows" -> "Limit 1000"
3. You can view, edit, add, or delete rows directly in the grid

## Backup and Restore

To backup the database:
1. Click on "Server" -> "Data Export"
2. Select the FreshersJobDb schema
3. Choose export options and destination
4. Click "Start Export"

To restore from backup:
1. Click on "Server" -> "Data Import"
2. Select the backup file
3. Choose import options
4. Click "Start Import"

## Troubleshooting

### Common Issues

1. **Connection Failed**
   - Check that MySQL Server is running
   - Verify hostname, port, username, and password
   - Check firewall settings

2. **Access Denied**
   - Verify MySQL user credentials
   - Ensure the user has proper privileges

3. **Schema Not Visible**
   - Refresh the schema list (click the refresh icon)
   - Check that the database was created successfully

4. **Query Errors**
   - Check SQL syntax
   - Verify table and column names
   - Ensure proper use of quotes and semicolons

## Best Practices

1. **Always backup** your database before making significant changes
2. **Use transactions** for multiple related operations
3. **Test queries** on a development database first
4. **Use proper indexing** for better query performance
5. **Regularly monitor** database performance and size

## Next Steps

1. Populate the database with sample data for testing
2. Create additional indexes for frequently queried columns
3. Set up user accounts with appropriate privileges
4. Schedule regular backups
5. Monitor database performance as your application grows