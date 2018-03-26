# Bangazon API

# Basic Project Setup


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


# Orders
-----
- _GET_: access a list of all orders by running a GET call to http://localhost:8080/orders
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/orders/{orderID}
  > Note you need to have the unique ID number

- _PATCH_: update the info on a specific order by running a PATCH call to http://localhost:8080/orders/{orderID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "order_date", 
  "value": "2003/3/20" }
  ```

- _PUT_: replace an entire order object by sending all an orders properties starting with the order_id of the order to be replaced to http://localhost:8080/orders:
  ```
  { "order_id": [orderId#], "customer_id": [customerId#], "order_date": "[YYYY/MM/DD]", "payment_type_id": [payTypeId#] }
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

- _PATCH_: update the info on a specific payment type by running a PATCH call to http://localhost:8080/payment-types/{payTypeID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "account_number", 
  "value": "481637138" }
  ```

- _PUT_: replace an entire order object by sending all a payment types properties starting with the payment_type_id of the order to be replaced to http://localhost:8080/payment-types:
  ```
  { "payment_type_id": [orderId#], "type": "[account type name]", "account_number": [accountId#] "customer_id": [customerId#] }
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

- _PATCH_: update the info on a specific computer by running a PATCH call to http://localhost:8080/computers/{computerID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "decomission_date", 
  "value": "2018/03/20" }
  ```

- _PUT_: replace an entire computer object by sending all a computers properties starting with the computer_id of the order to be replaced to http://localhost:8080/computers:
  ```
  { "computer_id": [computerId#], "purchase_date": "[YYYY/MM/DD]", "decomission_date": "[YYYY/MM/DD]" (or NULL here if active) }
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
- Example:
```
{
"dept_name": "[TEXT]",
"supervisor_id": [INT],
"budget": [INT]
}
```
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
- Example: 
```
{
"first_name": "[TEXT]",
"last_name": [TEXT],
"email": [TEXT],
"department_id": [INT]
}
```
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

### Customers

* GET You can access a list of all customers by running a Get call to `http://localhost:8080/api/customers`
* GET one. You can get the information on a single customer by running a Get call to http://localhost:8080/api/customers/{customerID}.
>Note you need to have a customers unique ID number to get the correct information
* GET all customers that are active by running Get `http://localhost:8080/api/customers/?active=true`
* GET all customers that are not active by running Get `http://localhost:8080/api/customers/?active=false` 
* PUT You can update the info on a specific customer by running a Put call to `http://localhost:8080/api/customers/`
        *You must Put the entire changed object, which will include the below:
```
    {
      "customer_id": INT,
      "first_name": "TEXT",
      "last_name": "TEXT",
      "create_date": "2018-03-05",
      "active": INT (0 or 1)
    }
```
* POST To add a new customer, post to `http://localhost:8080/api/customers`.
        *To add a new customer,the below is required:
 ```
    {
      "first_name": "TEXT",
      "last_name": "TEXT",
      "create_date": "2018-03-05",
      "active": INT (0 or 1)
    }
```
