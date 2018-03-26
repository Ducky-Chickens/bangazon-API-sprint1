# bangazon-API-sprint1

## Basic Project Setup

```
// To run the program, first install dependencies

npm i 

// Then build local SQL database and populate

npm build tables

// Run a local server to access the data in browser

http-server

```
# Helper Applications
- [DB Browser for SQLite](http://sqlitebrowser.org/) to work directly with database without command line
- [Postman](https://www.getpostman.com/) to use PUT/POST/DELETE http methods


# Employees ERD

![Employees ERD](/ERD/employees-better.png)
# Customers ERD

![Customers ERD](/ERD/customers-products_v2.png)

# Departments
_GET_: access a list of all departments by running a GET call to http://localhost:8080/departments
- You can get the information on a single department by runnning a GET call to http://localhost:8080/departments/{departmentId}
> Note you need to have the unique ID number
- _PUT_: update the info on a specific department by running a PUT call to http://localhost:8080/departments/{departmentId}
- Running a PUT requires that you submit the desired column and value to be edited. 
- Example: 
 ```
 { "column": "dept_name", 
  "value": "HR" }
  ```
- _POST_: submit a new department by running a POST call to http://localhost:8080/departments
- You must send a dept_name, followed by supervisor_id and budget to POST a new employee.
- Example: { "dept_name": "[TEXT]", "supervisor_id": [INT], "budget": [INT] }
# Employees
_GET_: access a list of all employees by running a GET call to http://localhost:8080/employees
- You can get the information on a single employee by runnning a GET call to http://localhost:8080/employees/{employeeId}
> Note you need to have the unique ID number
- _PUT_: update the info on a specific employee by running a PUT call to http://localhost:8080/employees/{employeeId}
- Running a PUT requires that you submit the desired column and value to be edited.
- Example: 
```
  { "column": "first_name", 
  "value": "John" }
  ```
- _POST_: submit a new employee by running a POST call to http://localhost:8080/employees
- You must send a first_name, last_name, email followed by department_id to POST a new employee.
- Example: { "first_name": "[TEXT]", "last_name": [TEXT], "email": [TEXT] "department_id": [INT] }
# Third Party Libraries
- [Express](https://expressjs.com/)
- [Sqlite3](https://www.npmjs.com/package/sqlite3)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Body-parser](https://www.npmjs.com/package/body-parser-json)

# Credits

## Project Manager
- [Emily Lemmon](https://github.com/Rian501)

## API Developers
- [David Hazlett](https://github.com/dhazlettjr)
- [Melissa Bell](https://github.com/melissabell456)
- [Valerie Freeman](https://github.com/Valerie-Freeman)
- [Hunter Phillips](https://github.com/hunterphillips)
- [Eli WIlson](https://github.com/e-x-wilson)

