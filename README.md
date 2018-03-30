# Bangazon API

# Table of Contents  
- [Setup](#setup)  
- [Helper Apps](#helpers)
- [Relationship Diagrams](#erd)
- [Query Methods](#methods)
- [Libraries](#libraries)
- [Credits](#credits)
 

# Basic Project Setup <a name="setup"/>
-----


```
// To run the program, first install dependencies

npm i 

// Then build local SQL database and populate

npm run build-tables

// Run a local server to access the data in browser

node app.js
```


# Helper Applications <a name="helpers"/>
-----

- [NodeJS](https://nodejs.org/en/) to spin up the server
- [DB Browser for SQLite](https://sqlitebrowser.org/) to work directly with database without command line
- [Postman](https://www.getpostman.com/) to use PUT/POST/DELETE http methods
  - In Postman, click "Params", then under "Headers", select "Content-Type" as KEY and "application/json" as VALUE
  - To test the examples provided in the query methods section, under "Body", select "raw" before sending


# Entity Relationship Diagrams <a name="erd"/>
-----

_Employees_

![Employees ERD](/ERD/employees-better.png)

_Customers_

![Customers ERD](/ERD/customers-products_v2.png)


# Methods <a name="methods"/>
-----

# Orders
-----
- _GET_: access a list of all orders by running a GET call to http://localhost:8080/api/orders
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/api/orders/{orderID}
  > Note you need to have the unique ID number

- _PATCH_: update the info on a specific order by running a PATCH call to http://localhost:8080/api/orders/{orderID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "order_date", "value": "2003-3-20" }
  ```

- _PUT_: replace an entire order object by sending all an orders properties starting with the order_id of the order to be replaced to http://localhost:8080/api/orders:
  - Example:
  ```
  { "order_id": 1, "customer_id": 2, "order_date": "2020-3-20", "payment_type_id": null }
  ```

- _DELETE_: delete an order by running a DELETE call to http://localhost:8080/api/orders and sending:
  - Example:
  ```
  { "order_id": 1 }
  ```

- _POST_: submit a new order by running a POST call to http://localhost:8080/api/orders

  - You must send a ORDER_DATE, followed by PAYMENT_TYPE_ID to POST a new order.
  - Example: 
  ```
  { "customer_id": 2, "order_date": "2020/20/20", "payment_type_id": null }
  ```
  - Note: Unless an order is already paid, you must pass NULL without quotes into "payment_type_id"


# Payment-Types
-----
- _GET_: access a list of all payment types by running a GET call to http://localhost:8080/api/payment-types
  - You can get the information on a single payment type by runnning a GET call to http://localhost:8080/api/payment-types/{paymentTypeID}
  > Note you need to have the unique ID number

- _PATCH_: update the info on a specific payment type by running a PATCH call to http://localhost:8080/api/payment-types/{payTypeID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "account_number", "value": "481637138" }
  ```

- _PUT_: replace an entire order object by sending all a payment types properties starting with the payment_type_id of the order to be replaced to http://localhost:8080/api/payment-types:
  - Example: 
  ```
  { "payment_type_id": 1, "type": "MasterCard", "account_number": 22223333 "customer_id": 6 }
  ```

- _DELETE_: delete a payment type by running a DELETE call to http://localhost:8080/api/payment-types and sending:
  - Example: 
  ```
  { "payment_type_id": 2 }
  ```

- _POST_: submit a new payment type by running a POST call to http://localhost:8080/api/payment-types

  - You must send a TYPE and ACCOUNT_NUMBER to POST a new payment type.
  - Example: 
  ```
  { "type": "Visa", "account_number": 481637138 }
  ```

# Computers
-----
- _GET_: access a list of all computers by running a GET call to http://localhost:8080/api/computers
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/api/computers/{computerID}
  > Note you need to have a computer unique ID number to receive information

- _PATCH_: update the info on a specific computer by running a PATCH call to http://localhost:8080/api/computers/{computerID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "decomission_date", "value": "2018/03/20" }
  ```

- _PUT_: replace an entire computer object by sending all a computers properties starting with the computer_id of the order to be replaced to http://localhost:8080/api/computers:
  - Example: 
  ```
  { "computer_id": [1, "purchase_date": "2020-3-20", "decomission_date": "[YYYY/MM/DD]" (or NULL here, without quotes, if active) }
  ```

- _DELETE_: delete a computer by running a DELETE call to http://localhost:8080/api/computers and sending:
  - Example: 
  ```
  { "computer_id": 1 }
  ```

- _POST_: submit a new computer by running a POST call to http://localhost:8080/api/computers

  - You must send a purchase_date to POST a new computer.
  - Example: 
  ```
  { "purchase_date": "YYYY/DD/MM" }
  ```
  

# Product Types
-----
- GET You can access a list of all product types by running a Get call to `http://localhost:8080/api/product-types`
- GET one. You can get the information on a single product type by runnning a Get call to `http://localhost:8080/api/product-types/{id}`
> Note you need to have a product types unique ID number to get the correct information

- PUT You can update a whole product type by running a Put call to `http://localhost:8080/api/product-types`

  * Running a put requires that you submit the entire object.
  * Example: { "id": 1, "name": "Wand" }

- PATCH You can update specific info on a product type by running a Patch call to `http://localhost:8080/api/product-types/{id}`

  * Running a patch requires that you submit the desired column and value.
  * Example: { "column": "name", "value": "sports" }

- DELETE You can delete a product type by running a Delete call to `http://localhost:8080/api/product-types`
  * Submit the target id, Example: { "id": 2 }

- POST You can enter a new product type by running a Post call to `http://localhost:8080/api/product-types`

  * You must put a name with a post.
  * Example: { "name": "Spell Books" }


# Training Programs
-----
- GET You can access a list of all training programs by running a Get call to `http://localhost8080/api/programs`
- GET one. You can get the information on a single training program by runnning a Get call to `http://localhost:8080/api/programs/{id}`
> Note you need to have a training program unique ID number to get the correct information

- PUT You can update a training program by running a Put call to `http://localhost:8080/api/programs`

  * Running a Put requires that you submit the entire object.
  * Example: { "id": 1, "title": "Program Name" "startDate": "02-14-2018", "endDate": "02-15-2018", "maxAttendees": 50 }

- PATCH You can update specific info on a training program by running a Patch call to `http://localhost:8080/api/product-types/{id}`

  * Running a patch requires that you submit the desired column and value.
  * Example: { "column": "title", "value": "Sales" }

- DELETE You can delete a training program by running a Delete call to `http://localhost:8080/api/programs`
  * Submit the desired id, Example: { "id": 2 }

> Note - you can only delete a training program if the current date is before the start date of a program. You cannot delete programs that have already started.

- POST You can enter a new training program by running a Post call to `http://localhost:8080/api/programs`
  * You must put a name, startDate, endDate, and maxAttendees with a Post.
  * Example: { "title": "Learning Vim", "startDate": "02-14-2018", "endDate": "10-15-2018", "maxAttendees": 50 }


# Departments
-----
_GET_: access a list of all departments by running a GET call to http://localhost:8080/api/departments
- You can get the information on a single department by runnning a GET call to http://localhost:8080/api/departments/{departmentId}
> Note you need to have the unique ID number
- _PUT_: update the info on a specific department by running a PUT call to http://localhost:8080/api/departments
- Running a PUT requires that you submit the desired column and value to be edited. 
- Example: 
 ```
{
"department_id": [INT],
"dept_name": "[TEXT]",
"supervisor_id": [INT],
"budget": [INT]
}
```
 - _PATCH_: update the info on a specific deparmtnet by running a PATCH call to http://localhost:8080/departments/{departmentId}

Running a PATCH requires that you submit the desired column and value to be edited.
Example:

 ```
 { "column": "dept_name", 
  "value": "HR" 
  ```

- _POST_: submit a new department by running a POST call to http://localhost:8080/api/departments
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
-----
_GET_: access a list of all employees by running a GET call to http://localhost:8080/api/employees
- You can get the information on a single employee by runnning a GET call to http://localhost:8080/api/employees/{employeeId}
> Note you need to have the unique ID number
- _PUT_: update the info on a specific employee by running a PUT call to http://localhost:8080/api/employees
- Running a PUT requires that you submit the desired column and value to be edited.
- Example: 
```
{
"employee_ID": [INT],
"first_name": "[TEXT]",
"last_name": [TEXT],
"email": [TEXT],
"department_id": [INT]
}
```
- _POST_: submit a new employee by running a POST call to http://localhost:8080/api/employees
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
- _PATCH_: update the info on a specific employee by running a PATCH call to http://localhost:8080/api/employees/{employeeID}

Running a PATCH requires that you submit the desired column and value to be edited.
Example:
```
{ "column": "first_name", 
"value": "sam" }
```

# Customers
-----
* GET You can access a list of all customers by running a Get call to `http://localhost:8080/api/customers`
* GET one. You can get the information on a single customer by running a Get call to http://localhost:8080/api/customers/{customerID}.
> Note you need to have a customers unique ID number to get the correct information
* GET all customers that are active by running Get `http://localhost:8080/api/customers/?active=true`
* GET all customers that are not active by running Get `http://localhost:8080/api/customers/?active=false` 
* PUT You can update the info on a specific customer by running a Put call to `http://localhost:8080/api/customers/`
        *You must Put the entire changed object, which will include the below:
```
    {
      "customer_id": INT,
      "first_name": "TEXT",
      "last_name": "TEXT",
      "join_date": "2018-03-05",
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

* PATCH To edit an existing customer column, patch to `http://localhost:8080/api/customers/${CUSTOMERID}`.
        *The below format is required for patching:
 ```
    {
      "column": "COLUMNNAME",
      "value": "NEWVALUE"
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

# Products
-----
- _GET_: access a list of all products by running a GET call to http://localhost:8080/api/products
  - You can get the information on a single product by runnning a GET call to http://localhost:8080/api/products/{productID}
  > Note you need to have the unique ID number

- _PATCH_: update the info on a specific product by running a PATCH call to http://localhost:8080/api/products/{productID}

  - Running a PATCH requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "title", 
  "value": "Nintendo Switch" }
  ```

- _PUT_: replace an entire product object by sending all of a product's properties starting with the product_id of the product to be replaced to http://localhost:8080/api/products
  ```
  { "product_id": productId#,
    "title": "TEXT",
    "price": "12.34",
    "product_type_id": productTypeId#,
    "customer_id": customerId#,  
    "description": "TEXT" }
  ```

- _DELETE_: delete a product by running a DELETE call to http://localhost:8080/api/products and sending:
  ```
  { "product_id": productId# }
  ```

- _POST_: submit a new product by running a POST call to http://localhost:8080/api/products

  - You must send a whole product object to POST a new product.
  - Example: 
  ```
  { "product_id": productId#,
    "title": "TEXT",
    "price": "12.34",
    "product_type_id": productTypeId#,
    "customer_id": customerId#,  
    "description": "TEXT" }
  ```



# Third Party Libraries <a name="libraries"/>
-----
- [Express](https://expressjs.com/)
- [Sqlite3](https://www.npmjs.com/package/sqlite3)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Body-parser](https://www.npmjs.com/package/body-parser-json)


# Credits <a name="credits"/>


## Project Manager
-----
- [Emily Lemmon](https://github.com/Rian501)

## API Developers
-----
- [David Hazlett](https://github.com/dhazlettjr)
- [Melissa Bell](https://github.com/melissabell456)
- [Valerie Freeman](https://github.com/Valerie-Freeman)
- [Hunter Phillips](https://github.com/hunterphillips)
- [Eli WIlson](https://github.com/e-x-wilson)


