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
