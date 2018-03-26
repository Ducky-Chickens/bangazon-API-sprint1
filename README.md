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

###Product Types
- GET You can access a list of all product types by running a Get call to `http://localhost:8080/product-types`
- GET one. You can get the information on a single product type by runnning a Get call to `http://localhost:8080/product-types/{id}`
> Note you need to have a product types unique ID number to get the correct information

- PUT You can update a whole product type by running a Put call to `http://localhost:8080/product-types`

  * Running a put requires that you submit the entire object.
  * Example: { "id": 1, "name": "Wand" }

- PATCH You can update specific info on a product type by running a Patch call to `http://localhost:8080/product-types/{id}`

  * Running a patch requires that you submit the desired column and value.
  * Example: { "column": "name", "value": "sports" }

- DELETE You can delete a product type by running a Delete call to `http://localhost:8080/product-types`
  * Submit the target id, Example: { "id": 2 }

- POST You can enter a new product type by running a Post call to `http://localhost:8080/product-types`

  * You must put a name with a post.
  * Example: { "name": "Spell Books" }

###Training Programs
- GET You can access a list of all training programs by running a Get call to `http://localhost:5000/programs`
- GET one. You can get the information on a single training program by runnning a Get call to `http://localhost:5000/programs/{id}`
> Note you need to have a training program unique ID number to get the correct information

- PUT You can update a training program by running a Put call to `http://localhost:5000/programs`

  * Running a Put requires that you submit the entire object.
  * Example: { "id": 1 "startDate": "02-14-2018", "endDate": "02-15-2018", "maxAttendees": 50 }

- PATCH You can update specific info on a training program by running a Patch call to `http://localhost:8080/product-types/{id}`

  * Running a patch requires that you submit the desired column and value.
  * Example: { "column": "title", "value": "Sales" }

- DELETE You can delete a training program by running a Delete call to `http://localhost:5000/programs/{id}`

> Note - you can only delete a training program if the current date is before the start date of a program. You cannot delete programs that have already started.

- POST You can enter a new training program by running a Post call to `http://localhost:5000/programs`
  * You must put a name, startDate, endDate, and maxAttendees with a Post.
  * Example: { "name": "Learning Vim", "startDate": "02-14-2018", "endDate": "10-15-2018", "maxAttendees": 50 }
