import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql.html',
  styleUrls: ['./sql.scss']
})
export class Sql {

  qaData: QA[] = [
    { q: 'What is Database?', a: 'A database is a structured way of storing data so that it can be easily accessed, managed, and updated.' },
    { q: 'how many types of Database?', a: 'Relational Database (RDBMS): Data stored in tables (rows and columns). Example: MySQL, Oracle.,NoSQL Database: Data stored in key-value pairs, documents, graphs, etc. Example: MongoDB, Cassandra.'},
    { q: 'What is DBMS?', a: 'A DBMS is software that manages databases. It provides an interface between the user and the database. Example : MYSQL' },
    {q:'what is RDBMS',a:'A special type of DBMS where data is stored in tables with relationships. Example: MySQL, Oracle.'},
    { q: 'What is SQL?', a: 'SQL (Structured Query Language) is the standard language for interacting with relational databases. It is used to create and modify schema (CREATE, ALTER), insert/update/delete data (INSERT, UPDATE, DELETE), and retrieve data (SELECT). Example: SELECT id, name FROM employees WHERE active = 1;' },
    { q: 'What are the main types of SQL commands?', a: 'Four main groups: DDL (Data Definition Language) - CREATE/ALTER/DROP; DML (Data Manipulation Language) - SELECT/INSERT/UPDATE/DELETE; DCL (Data Control Language) - GRANT/REVOKE; TCL (Transaction Control Language) - BEGIN/COMMIT/ROLLBACK.' },
    {
      q: 'What is the difference between DDL and DML commands in SQL?',
      a: 'DDL (Data Definition Language) commands are used to define, modify, or delete the structure of database objects like tables, indexes, and schemas. Examples: CREATE, ALTER, DROP, TRUNCATE. DML (Data Manipulation Language) commands are used to insert, update, delete, or retrieve data stored in tables. Examples: SELECT, INSERT, UPDATE, DELETE. DDL changes are auto-committed and affect structure; DML changes can be rolled back and affect data.'
    },
    {
      q: 'Give examples of DDL commands.',
      a: 'CREATE – creates a table or database object. ALTER – modifies table structure. DROP – deletes a table or object. TRUNCATE – removes all rows from a table quickly.'
    },
    {
      q: 'Give examples of DML commands.',
      a: 'SELECT – retrieves data. INSERT – adds new records. UPDATE – modifies existing records. DELETE – removes records from a table.'
    },
    {
      q: 'Can DDL commands be rolled back?',
      a: 'No. Most DDL commands are auto-committed in the database and cannot be rolled back.'
    },
    {
      q: 'Can DML commands be rolled back?',
      a: 'Yes. DML commands can be rolled back before committing the transaction using ROLLBACK.'
    },
    {
      q: 'What is DQL in SQL?',
      a: 'DQL (Data Query Language) is a subset of SQL commands used to **query or retrieve data** from database tables. The main DQL command is SELECT. Example: SELECT * FROM Employees WHERE Department = \'HR\'; DQL focuses only on fetching data, not modifying it.'
    },
    {
      q: 'What is TCL in SQL?',
      a: 'TCL (Transaction Control Language) commands manage **transactions** in a database. Transactions are sequences of SQL statements executed as a single unit. TCL ensures ACID properties (Atomicity, Consistency, Isolation, Durability).'
    },
    {
      q: 'List TCL commands and their purpose.',
      a: '1. COMMIT – Saves all changes made in the current transaction permanently.\n2. ROLLBACK – Undoes all changes made in the current transaction.\n3. SAVEPOINT – Creates a point within a transaction to which you can rollback partially.\n4. SET TRANSACTION – Sets transaction properties like isolation level.'
    },
    {
      q: 'What are constraints in SQL?',
      a: 'Constraints are **rules applied to columns in a table** to enforce data integrity, accuracy, and consistency. They restrict the type of data that can be inserted into a table.'
    },
    {
      q: 'Why do we use constraints?',
      a: 'Constraints are used to ensure that **data entered into the database is valid and consistent**, prevent duplication, maintain relationships between tables, and avoid invalid or null values.'
    },
    {
      q: 'List the types of constraints in SQL.',
      a: '1. NOT NULL – Ensures a column cannot have NULL values.\n2. UNIQUE – Ensures all values in a column are unique.\n3. PRIMARY KEY – Uniquely identifies each record in a table (combines NOT NULL + UNIQUE).\n4. FOREIGN KEY – Ensures referential integrity between tables.\n5. CHECK – Ensures that values in a column satisfy a specific condition.\n6. DEFAULT – Sets a default value for a column if no value is specified.'
    },

    {
      q: 'What is a Primary Key in SQL?',
      a: 'A Primary Key is a column (or a set of columns) in a table that **uniquely identifies each record**. It ensures that no duplicate or NULL values exist in that column. Each table can have only one Primary Key.'
    },
    {
      q: 'Why do we use Primary Key?',
      a: 'Primary Key is used to uniquely identify records in a table, enforce data integrity, and help in establishing relationships with other tables via Foreign Keys.'
    },
    {
      q: 'What is a Foreign Key in SQL?',
      a: 'A Foreign Key is a column (or a set of columns) in one table that **refers to the Primary Key** in another table. It is used to maintain **referential integrity** between two related tables.'
    },
    {
      q: 'Why do we use Foreign Key?',
      a: 'Foreign Key is used to link tables together, ensure that the value in the referencing table matches a value in the referenced table, and prevent invalid data insertion.'
    },
    {
      q: 'What are SQL Clauses?',
      a: 'SQL Clauses are **keywords used in SQL statements** to specify conditions, filter data, or define the structure of queries. Clauses help in controlling which data is retrieved, updated, or deleted from the database.'
    },
    {
      q: 'List the commonly used SQL Clauses.',
      a: '1. SELECT – Specifies the columns to retrieve.\n2. FROM – Specifies the table(s) to retrieve data from.\n3. WHERE – Filters records based on conditions.\n4. GROUP BY – Groups rows that have the same values in specified columns.\n5. HAVING – Filters groups based on aggregate conditions.\n6. ORDER BY – Sorts the result set by one or more columns.\n7. JOIN – Combines rows from two or more tables.\n8. LIMIT / OFFSET – Restricts the number of rows returned (depends on the database).'
    },
    {
      q: 'Explain SELECT clause with example.',
      a: 'SELECT clause is used to retrieve specific columns from a table. Example: SELECT Name, Salary FROM Employees;'
    },
    {
      q: 'Explain WHERE clause with example.',
      a: 'WHERE clause filters records based on specified conditions. Example: SELECT * FROM Employees WHERE Salary > 50000;'
    },
    {
      q: 'Explain GROUP BY clause with example.',
      a: 'GROUP BY groups rows that have the same values in one or more columns. Example: SELECT Department, COUNT(*) FROM Employees GROUP BY Department;'
    },
    {
      q: 'Explain HAVING clause with example.',
      a: 'HAVING clause filters groups created by GROUP BY. Example: SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 5;'
    },
    {
      q: 'Explain ORDER BY clause with example.',
      a: 'ORDER BY clause sorts the result set by one or more columns. Example: SELECT * FROM Employees ORDER BY Salary DESC;'
    },
    {
      q: 'Explain JOIN clause with example.',
      a: 'JOIN clause is used to combine rows from two or more tables based on related columns. Example: SELECT Employees.Name, Departments.DeptName FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;'
    },
    {
      q: 'Explain LIMIT clause with example.',
      a: 'LIMIT clause restricts the number of rows returned. Example: SELECT * FROM Employees LIMIT 5;'
    },
    {
      q: 'What is the BETWEEN clause in SQL?',
      a: 'BETWEEN clause is used to filter the result set within a **range of values**. It can be used with numbers, dates, or text. Example: SELECT * FROM Employees WHERE Salary BETWEEN 30000 AND 60000;'
    },
    {
      q: 'What is the IN clause in SQL?',
      a: 'IN clause is used to filter the result set based on a **list of specified values**. Example: SELECT * FROM Employees WHERE Department IN (\'HR\', \'IT\', \'Finance\');'
    },
    {
      q: 'What is the LIKE clause in SQL?',
      a: 'LIKE clause is used to search for a **specific pattern** in a column. Example: SELECT * FROM Employees WHERE Name LIKE \'R%\'; -- Finds names starting with R'
    },
    {
      q: 'What is the IS NULL clause in SQL?',
      a: 'IS NULL clause is used to filter rows where a column has **NULL values**. Example: SELECT * FROM Employees WHERE Department IS NULL;'
    },
    {
      q: 'What is the DISTINCT clause in SQL?',
      a: 'DISTINCT clause is used to return **unique values** in the result set. Example: SELECT DISTINCT Department FROM Employees;'
    },
    {
      q: 'What is the UNION clause in SQL?',
      a: 'UNION clause is used to combine the **result sets of two or more SELECT queries** into a single result set, removing duplicates. Example: SELECT Name FROM Employees WHERE Department = \'HR\' UNION SELECT Name FROM Contractors WHERE Dept = \'HR\';'
    },
    {
      q: 'What is the UNION ALL clause in SQL?',
      a: 'UNION ALL is similar to UNION but **does not remove duplicates**. Example: SELECT Name FROM Employees UNION ALL SELECT Name FROM Contractors;'
    },
    {
      q: 'What is the EXISTS clause in SQL?',
      a: 'EXISTS clause is used to check whether a **subquery returns any rows**. Example: SELECT * FROM Employees e WHERE EXISTS (SELECT * FROM Departments d WHERE e.DeptID = d.DeptID);'
    },
    {
      q: 'What is the ANY / ALL clause in SQL?',
      a: 'ANY/ALL clauses are used to compare a value with **any or all values returned by a subquery**. Example: SELECT * FROM Employees WHERE Salary > ALL (SELECT Salary FROM Employees WHERE Department = \'IT\');'
    },
    {
      q: 'What is the CASE clause in SQL?',
      a: 'CASE clause is used to implement **conditional logic** in SQL queries. Example: SELECT Name, CASE WHEN Salary > 50000 THEN \'High\' ELSE \'Low\' END AS Salary_Level FROM Employees;'
    },
    {
      q: 'What is the TOP / LIMIT clause in SQL?',
      a: 'TOP (SQL Server) or LIMIT (MySQL/PostgreSQL) clause restricts the number of rows returned. Example: SELECT TOP 5 * FROM Employees; (SQL Server) or SELECT * FROM Employees LIMIT 5; (MySQL/PostgreSQL)'
    },
    {
      q: 'What is the OFFSET clause in SQL?',
      a: 'OFFSET clause is used to skip a **specified number of rows** before returning the remaining rows. Often used with LIMIT. Example: SELECT * FROM Employees LIMIT 5 OFFSET 10; -- Skips first 10 rows and returns next 5 rows'
    },
    {
      q: 'What is the EXCEPT clause in SQL?',
      a: 'The EXCEPT clause is used to **return all rows from the first SELECT query that are not present in the second SELECT query**. It removes duplicate rows from the final result by default. Essentially, it performs a "difference" operation between two result sets.'
    },
    {
      q: 'What are Aggregate Functions in SQL?',
      a: 'Aggregate Functions perform a **calculation on a set of values** and return a single value. They are commonly used with the GROUP BY clause to summarize data.'
    },
    {
      q: 'List common SQL Aggregate Functions.',
      a: '1. COUNT() – Returns the number of rows.\n2. SUM() – Returns the total sum of a numeric column.\n3. AVG() – Returns the average value of a numeric column.\n4. MIN() – Returns the minimum value.\n5. MAX() – Returns the maximum value.'
    },
    {
      q: 'Explain DROP command with example.',
      a: 'DROP command is used to **delete the entire table, database, or object** including its structure permanently. Example:\nDROP TABLE Employees;\n-- This will remove the Employees table completely along with its data and structure.'
    },
    {
      q: 'Explain TRUNCATE command with example.',
      a: 'TRUNCATE command **removes all rows from a table** but **keeps the table structure** for future use. It is faster than DELETE and usually cannot be rolled back in some databases. Example:\nTRUNCATE TABLE Employees;\n-- This deletes all rows but keeps the Employees table intact.'
    },
    {
      q: 'Explain DELETE command with example.',
      a: 'DELETE command **removes one or more rows** from a table based on a condition using WHERE clause. The table structure remains intact. Example:\nDELETE FROM Employees WHERE Department = \'HR\';\n-- This deletes only HR department employees.'
    },
    {
      q: 'Key differences between DROP, TRUNCATE, and DELETE.',
      a: '1. **Scope**: DROP removes the table and structure, TRUNCATE removes all data, DELETE removes selected data.\n2. **Rollback**: DROP and TRUNCATE usually cannot be rolled back, DELETE can be rolled back (if within a transaction).\n3. **WHERE clause**: Only DELETE supports WHERE clause.\n4. **Performance**: TRUNCATE is faster than DELETE for large tables; DROP is immediate.\n5. **Triggers**: DELETE activates triggers, TRUNCATE usually does not.'
    },
    {
      q: 'What is a Join in SQL?',
      a: 'A Join in SQL is used to **combine rows from two or more tables** based on a related column between them. Joins help in retrieving data from multiple tables in a single query.'
    },
    {
      q: 'What is an INNER JOIN?',
      a: 'INNER JOIN returns **only the rows that have matching values in both tables**. Example:\nSELECT Employees.Name, Departments.DeptName FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;\n-- Only employees with a valid department will be returned.'
    },
    {
      q: 'What is a LEFT JOIN (or LEFT OUTER JOIN)?',
      a: 'LEFT JOIN returns **all rows from the left table** and matching rows from the right table. If no match exists, NULL is returned for columns of the right table. Example:\nSELECT Employees.Name, Departments.DeptName FROM Employees LEFT JOIN Departments ON Employees.DeptID = Departments.DeptID;\n-- All employees are returned, even if they have no department.'
    },
    {
      q: 'What is a RIGHT JOIN (or RIGHT OUTER JOIN)?',
      a: 'RIGHT JOIN returns **all rows from the right table** and matching rows from the left table. If no match exists, NULL is returned for columns of the left table. Example:\nSELECT Employees.Name, Departments.DeptName FROM Employees RIGHT JOIN Departments ON Employees.DeptID = Departments.DeptID;\n-- All departments are returned, even if no employee is assigned.'
    },
    {
      q: 'What is a FULL OUTER JOIN?',
      a: 'FULL OUTER JOIN returns **all rows from both tables**, with matching rows where possible. If no match exists, NULL is returned for the missing side. Example:\nSELECT Employees.Name, Departments.DeptName FROM Employees FULL OUTER JOIN Departments ON Employees.DeptID = Departments.DeptID;\n-- All employees and all departments are included.'
    },
    {
      q: 'Difference between INNER JOIN and OUTER JOIN?',
      a: 'INNER JOIN returns only matching rows, while OUTER JOIN (LEFT, RIGHT, FULL) returns matching rows plus **non-matching rows with NULLs** from one or both tables.'
    },
    {
      q: 'Can you join more than two tables?',
      a: 'Yes. SQL allows **joining multiple tables** in a single query by chaining JOIN clauses. Example:\nSELECT E.Name, D.DeptName, P.ProjectName FROM Employees E INNER JOIN Departments D ON E.DeptID = D.DeptID INNER JOIN Projects P ON E.EmpID = P.EmpID;'
    },
    {
      q: 'What is a CROSS JOIN?',
      a: 'CROSS JOIN returns the **Cartesian product** of two tables, meaning all possible combinations of rows. Example:\nSELECT Employees.Name, Departments.DeptName FROM Employees CROSS JOIN Departments;\n-- Every employee is paired with every department.'
    },
    {
      q: 'Difference between CROSS JOIN and INNER JOIN?',
      a: 'CROSS JOIN returns **all combinations** regardless of matching keys. INNER JOIN returns **only matching rows** based on the join condition.'
    },
    {
      q: 'What is a Subquery in SQL?',
      a: 'A Subquery is a **query nested inside another SQL query**. It is used to return data that will be used in the main query. Subqueries can appear in SELECT, FROM, WHERE, or HAVING clauses.'
    },
    {
      q: 'What are the types of Subqueries?',
      a: '1. **Single-row Subquery** – Returns a single row and single column.\n2. **Multiple-row Subquery** – Returns multiple rows and single column.\n3. **Multiple-column Subquery** – Returns multiple columns.\n4. **Correlated Subquery** – Depends on the outer query for its values.'
    },
    {
      q: 'What is an Alias in SQL?',
      a: 'An Alias in SQL is a **temporary name given to a table or column** for the purpose of making the output more readable or for simplifying queries. Aliases exist only for the duration of the query.'
    },
    {
      q: 'Why do we use Alias?',
      a: 'Alias is used to:\n1. Make column names or table names more readable.\n2. Simplify complex queries.\n3. Avoid name conflicts when joining multiple tables.'
    },
    {
      q: 'How to create a Column Alias?',
      a: 'Column Alias is created using the AS keyword. Example:\nSELECT Name AS EmployeeName, Salary AS EmployeeSalary FROM Employees;\n-- "Name" will appear as "EmployeeName" and "Salary" as "EmployeeSalary" in the output.'
    },
    {
      q: 'How to create a Table Alias?',
      a: 'Table Alias is also created using AS (optional in many databases). Example:\nSELECT E.Name, D.DeptName FROM Employees AS E INNER JOIN Departments AS D ON E.DeptID = D.DeptID;\n-- E and D are aliases for Employees and Departments tables.'
    },
    {
        q: 'What is a Stored Procedure in SQL?',
        a: 'A Stored Procedure is a **precompiled collection of SQL statements** stored in the database, which can be executed repeatedly by calling its name. Stored procedures help in reusing code and improving performance.'
      },
      {
        q: 'Why do we use Stored Procedures?',
        a: 'Stored Procedures are used to:\n1. Encapsulate repetitive SQL code.\n2. Improve performance by reducing network traffic.\n3. Enhance security by controlling access to data.\n4. Simplify complex operations by grouping multiple statements.'
      },
      {
        q: 'How to create a Stored Procedure?',
        a: 'Example:\nCREATE PROCEDURE GetEmployeesByDept (@DeptID INT)\nAS\nBEGIN\n   SELECT * FROM Employees WHERE DeptID = @DeptID;\nEND;'
      },
      {
        q: 'What is a View in SQL?',
        a: 'A View is a **virtual table** in SQL that is based on the result of a SELECT query. It does not store data physically but presents data from one or more tables in a structured way.'
      },
      {
        q: 'Why do we use Views?',
        a: 'Views are used to:\n1. Simplify complex queries.\n2. Enhance security by restricting access to specific columns or rows.\n3. Present data in a particular format.\n4. Reuse queries without rewriting them.'
      },
      {
        q: 'How to create a View?',
        a: 'Example:\nCREATE VIEW EmployeeView AS\nSELECT Name, Salary, DeptID FROM Employees WHERE Salary > 50000;'
      },
      {
        q: 'Difference between Table and View?',
        a: '1. Tables store data physically; Views are virtual and store no data.\n2. Tables can be updated freely; Views may or may not be updatable.\n3. Views are used for abstraction and security.'
      },
      {
        q: 'What is an Index in SQL?',
        a: 'An Index is a **database object** that improves the speed of data retrieval operations on a table. It is created on one or more columns of a table and allows the database to find rows faster.'
      },
      {
        q: 'Why do we use Indexes?',
        a: 'Indexes are used to:\n1. Improve query performance.\n2. Speed up data retrieval using SELECT statements.\n3. Enforce uniqueness when used with UNIQUE constraints.\n4. Reduce the time required for search operations on large tables.'
      },
      {
        q: 'Types of Indexes in SQL.',
        a: '1. **Unique Index** – Ensures all values in the indexed column(s) are unique.\n2. **Non-Unique Index** – Speeds up data retrieval but allows duplicate values.\n3. **Clustered Index** – Stores the table data physically in the order of the indexed column(s). Each table can have only one clustered index.\n4. **Non-Clustered Index** – Stores a separate structure to point to table data. Multiple non-clustered indexes can exist on a table.\n5. **Composite Index** – An index on two or more columns.'
      },
      {
        q: 'What is a Trigger in SQL?',
        a: 'A Trigger is a **special type of stored procedure** that automatically executes or fires when a specified event occurs in a table or view, such as INSERT, UPDATE, or DELETE.'
      },
      {
        q: 'Why do we use Triggers?',
        a: 'Triggers are used to:\n1. Automatically enforce business rules and data integrity.\n2. Maintain audit trails of changes.\n3. Prevent invalid transactions.\n4. Perform cascading actions on related tables.'
      },
      {
        q: 'Types of Triggers in SQL.',
        a: '1. **BEFORE Trigger** – Executes before an INSERT, UPDATE, or DELETE operation.\n2. **AFTER Trigger** – Executes after an INSERT, UPDATE, or DELETE operation.\n3. **INSTEAD OF Trigger** – Executes in place of an INSERT, UPDATE, or DELETE operation (used with views).'
      },
      {
        q: 'How to create a Trigger?',
        a: 'Example (AFTER INSERT trigger):\nCREATE TRIGGER trg_after_insert\nON Employees\nAFTER INSERT\nAS\nBEGIN\n   INSERT INTO AuditLog(EmpID, Action, ActionTime)\n   SELECT EmpID, \'INSERT\', GETDATE() FROM inserted;\nEND;'
      },
      {
        q: 'Difference between TCL and DML?',
        a: 'DML (INSERT, UPDATE, DELETE) **modifies data**. TCL (COMMIT, ROLLBACK, SAVEPOINT) **controls transactions** and ensures changes are permanent or undone as needed.'
      },
      {
        q: 'Difference between TCL and DML?',
        a: 'DML (INSERT, UPDATE, DELETE) **modifies data**. TCL (COMMIT, ROLLBACK, SAVEPOINT) **controls transactions** and ensures changes are permanent or undone as needed.'
      },
      {
        q: 'What is Denormalization?',
        a: 'Denormalization is the process of **combining tables** to reduce joins and improve performance. It may reintroduce redundancy for faster query performance.'
      }




  ]
}
