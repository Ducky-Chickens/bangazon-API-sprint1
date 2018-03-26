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

### **Customers**
http methods supported: GET, POST, PUT
example body:
```
    {
      "customer_id": INT, (REQUIRED FOR PUT)
      "first_name": "TEXT", (REQUIRED FOR POST, PUT)
      "last_name": "TEXT", (REQUIRED FOR POST, PUT)
      "create_date": "2018-03-05", (REQUIRED FOR POST)
      "active": INT (REQUIRED FOR POST, PUT)
    },
```
### GET all:
http://10.0.0.45:8080/api/customers/
### GET 1: 
http://10.0.0.45:8080/api/customers/2
### GET Active: 
http://localhost:8080/api/customers/?active=true
### GET Inactive: 
http://localhost:8080/api/customers/?active=false
