console.log(typeof ("rgt"))
console.log(typeof ("rgt") === "string")


let age = 20
console.log(typeof (age))
console.log(typeof (age) === "number")

let ageArray = [10, 20, 30, 40]
console.log(typeof (ageArray)) // object
console.log(Array.isArray(ageArray))


function sum(a, b) {
  return a + b
}

console.log(typeof (sum))

class Student {

  constructor(name, age) {
    this.name = name
    this.age = age
  }

}

console.log(typeof (Student)) // strange though


