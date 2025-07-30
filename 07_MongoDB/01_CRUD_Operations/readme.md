# MongoDB CRUD Example: Courses Collection

This is a simple example using MongoDB to demonstrate basic CRUD (Create, Read, Update, Delete) operations on a database called `CrudDB` with a collection named `Courses`.

## Database & Collection Setup

```js
use("CrudDB")            // Switch to or create database CrudDB

db.createCollection("Courses")   // Create a collection called Courses
```

## Create (Insert Data)

* Insert a single document:

```js
db.Courses.insertOne({
  "Course": "Sigma Web Development Course",
  "Price": 0,
  "projects": 45,
  "assignments": 12
})
```

* Insert multiple documents:

```js
db.Courses.insertMany([
  {
    "Course": "Sigma Web Development Course",
    "Price": 0,
    "projects": 45,
    "assignments": 12
  },
  {
    "Course": "Omega Backend Bootcamp",
    "Price": 500,
    "projects": 30,
    "assignments": 10
  },
  {
    "Course": "Alpha Frontend Mastery",
    "Price": 299,
    "projects": 25,
    "assignments": 8
  },
  {
    "Course": "Delta Full Stack Path",
    "Price": 799,
    "projects": 50,
    "assignments": 15
  },
  {
    "Course": "Zeta JavaScript Essentials",
    "Price": 199,
    "projects": 20,
    "assignments": 5
  }
])
```

## Read (Find Data)

* Find one document:

```js
let b = db.Courses.findOne({Price: 0})
console.log(b);
```

* To find all documents with certain criteria:

```js
db.Courses.find({Price: 0})
```

## Update (Modify Data)

* Update multiple documents:

```js
db.Courses.updateMany({Price: 0}, {$set: {Price: 150}})
```

## Delete (Remove Data)

* Delete documents where `Price` is 150:

```js
db.Courses.deleteMany({Price: 150})
```

---

## Common MongoDB Query Operators

* `$ne`: Not equal to

  ```js
  db.Courses.find({Price: {$ne: 0}})
  ```

* `$gt`, `$gte`, `$lt`, `$lte`: Greater than, Greater than or equal, Less than, Less than or equal

  ```js
  db.Courses.find({Price: {$gt: 200}})
  ```

* `$in`: Matches any value in an array

  ```js
  db.Courses.find({Price: {$in: [0, 199]}})
  ```

* `$or`: Logical OR between queries

  ```js
  db.Courses.find({$or: [{Price: 0}, {projects: {$gt: 30}}]})
  ```

These operators allow you to create powerful and flexible queries in MongoDB.
