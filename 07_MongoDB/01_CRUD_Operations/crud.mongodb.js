use("CrudDB")

// Create
db.createCollection("Courses")
// Insert
db.Courses.insertOne({
    "Course":"Sigma Web Development Course",
    "Price":0,
    "projects":45,
    "assignments":12
})


db.Courses.insertMany([
    [
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
      ]
      
])

// Read
// let a = db.Courses.find({Price: 0})
// console.log(a.count());
// console.log(a.toArray());
let b = db.Courses.findOne({Price: 0})
console.log(b);

// Update
db.Courses.updateMany({Price:0}, {$set:{Price: 150}})

db.Courses.deleteMany({Price: 150})