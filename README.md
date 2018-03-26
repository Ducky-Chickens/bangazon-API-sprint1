# bangazon-API-sprint1

Basic Project Setup

```
// To run the program, first install dependencies

npm i 

// Then build local SQL database and populate

npm build tables

// Run a local server to access the data in browser

http-server

```

# Employees ERD

![Employees ERD](/ERD/employees-better.png)
# Customers ERD

![Customers ERD](/ERD/customers-products_v2.png)

# Departments
http methods supported: GET, POST, PUT example body:

###PUT
```
{
	"column": "choose column",
	"value": "choose value"
}
```
###POST
```
{
	"supervisor_id": INT,
	"dept_name": "TEXT,
	"budget": INT
}
```
# Employees
http methods supported: GET, POST, PUT example body:

###PUT
```
{
	"column": "choose column",
	"value": "choose value"
}
```
###POST
```
{
	"first_name": TEXT,
	"last_name": "TEXT,
	"email": TEXT,
	"department_id": INT
}
```
# Third Party Libraries
-[Express](https://expressjs.com/)
-[Sqlite3](https://www.npmjs.com/package/sqlite3)
-[Nodemon](https://www.npmjs.com/package/nodemon)
-[Dotenv](https://www.npmjs.com/package/dotenv)
-[Body-parser](https://www.npmjs.com/package/body-parser-json)

# Credits

##Project Manager
-[Emily Lemmon](https://github.com/Rian501)

##API Developers
-[David Hazlett](https://github.com/dhazlettjr)
-[Melissa Bell](https://github.com/melissabell456)
-[Valerie Freeman](https://github.com/Valerie-Freeman)
-[Hunter Phillips](https://github.com/hunterphillips)
-[Eli WIlson](https://github.com/e-x-wilson)

