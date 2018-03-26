# Bangazon API

Insert short description of project here

# Basic Project Setup

```
// To run the program, first install dependencies

npm i 

// Then build local SQL database and populate

npm build tables

// Run a local server to access the data in browser

http-server

```

# Orders
-----
- _GET_: access a list of all orders by running a GET call to http://localhost:8080/orders
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/orders/{orderID}
  > Note you need to have the unique ID number

- _PUT_: update the info on a specific order by running a PUT call to http://localhost:8080/orders/{orderID}

  - Running a PUT requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "order_date", 
  "value": "2003/3/20" }
  ```
- _DELETE_: delete an order by running a DELETE call to http://localhost:8080/orders and sending:
  ```
  { "order_id": [orderId#] }
  ```

- _POST_: submit a new order by running a POST call to http://localhost:8080/orders

  - You must send a ORDER_DATE, followed by PAYMENT_TYPE_ID to POST a new order.
  - Example: { "order_date": "[date]", "payment_type_id": [paymentTypeId] }

# Payment-Types
-----
- _GET_: access a list of all payment types by running a GET call to http://localhost:8080/payment-types
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/payment-types/{paymentTypeID}
  > Note you need to have the unique ID number

- _PUT_: update the info on a specific payment type by running a PUT call to http://localhost:8080/payment-types/{payTypeID}

  - Running a PUT requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "account_number", 
  "value": "481637138" }
  ```
- _DELETE_: delete a payment type by running a DELETE call to http://localhost:8080/payment-types and sending:
  ```
  { "payment_type_id": [payTypeId#] }
  ```

- _POST_: submit a new computer by running a POST call to http://localhost:8080/computers

  - You must send a TYPE and ACCOUNT_NUMBER to POST a new payment type.
  - Example: { "type": "Visa", "account_number": 481637138 }

# Computer
-----
- _GET_: access a list of all computers by running a GET call to http://localhost:8080/computers
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/computers/{computerID}
  > Note you need to have a computer unique ID number to receive information

- _PUT_: update the info on a specific computer by running a PUT call to http://localhost:8080/computers/{computerID}

  - Running a PUT requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "decomission_date", 
  "value": "2018/03/20" }
  ```
- _DELETE_: delete a computer by running a DELETE call to http://localhost:8080/computers and sending:
  ```
  { "computer_id": [computerId#] }
  ```

- _POST_: submit a new computer by running a POST call to http://localhost:8080/computers

  - You must send a purchase_date to POST a new computer.
  - Example: { "purchase_date": "YYYY/DD/MM" }
  
-----
# Entity Relationship Diagrams

_Employees_

![Employees ERD](/ERD/employees-better.png)

_Customers_

![Customers ERD](/ERD/customers-products_v2.png)

# Departments
http methods supported: GET, POST, PUT example body:

```
{
	"department_id": "INT: include on PUT only",
	"supervisor_id": "INT",
	"budget": "INT: NOT NULL",
	"dept_name": "TEXT: NOT NULL"
}
```
# Employees
http methods supported: GET, POST, PUT example body:

```
{
	"employee_id": "INT: include on PUT only",
	"first_name": "TEXT",
	"last_name": "TEXT",
	"email": "TEXT",
  "department_id": "INT"
}
```
# Third Party Libraries
[Express](https://expressjs.com/)
[Sqlite3](https://www.npmjs.com/package/sqlite3)
[Nodemon](https://www.npmjs.com/package/nodemon)
[Dotenv](https://www.npmjs.com/package/dotenv)
[Body-parser](https://www.npmjs.com/package/body-parser-json)

# Credits

##Project Manager
[Emily Lemmon](https://github.com/Rian501)

##API Developers
[David Hazlett](https://github.com/dhazlettjr)
[Melissa Bell](https://github.com/melissabell456)
[Valerie Freeman](https://github.com/Valerie-Freeman)
[Hunter Phillips](https://github.com/hunterphillips)
[Eli WIlson](https://github.com/e-x-wilson)

