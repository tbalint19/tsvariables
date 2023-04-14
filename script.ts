// basic datastructures

// primitve datastructures
let canBuyBeer: boolean = true // variable
let canVote: boolean = false 

let username: string = "John Smith"

let age: number = 20

let loggedInUser: string | null = null

// complex datastructures
let myLuckyNumbers: number[] = [ 7, 19, 91 ]
let myFavoriteFruits: string[] = [ "alma", "körte", "banán" ]
let someStuff: any[] = [ 1, true, false, 3, "korte", 4 ] // !!!!!! NE

type Pet = { name: string, type: string }

type Person = {
  name: {
    firstname: string,
    lastname: string,
    nicknames: string[]
  }
  age: number,
  canVote: boolean,
  pets: Pet[]
}

let person: Person = {
  "name": {
    "firstname": "John",
    "lastname": "Smith",
    "nicknames": [ "Johnny" ]
  },
  "age": 20,
  "canVote": true,
  "pets": [
    { "name": "bodri", "type": "dog" },
    { "name": "cirmi", "type": "cat" },
  ]
}

let car: object = { "brand": "BMW", "numberOfWheels": 4, "isSportCar": true } // !!!!! NE






