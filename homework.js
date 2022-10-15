/* Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price */

class Hamster {
  constructor(hamName) {
    (this.owner = ""), (this.name = hamName), (this.price = 15);
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

/* Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()) */

class Person {
  constructor(personName) {
    (this.name = personName),
      (this.age = 0),
      (this.height = 0),
      (this.weight = 0),
      (this.mood = 0),
      (this.hamsters = []),
      (this.bankAccount = 0);
  }
  getName() {
    return this.personName;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(this.name);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount = this.banAccount + 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood = this.mood + 10;
    this.bankAccount = this.bankAccount - hamster.getPrice();
  }
}

/* Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.
Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice */

const timmy = new Person("Timmy");
timmy.age = 5;
console.log(timmy);

timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy);

timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy);

timmy.age = 14;
console.log(timmy);

const gus = new Hamster("Gus");

gus.owner = timmy.name;

timmy.buyHamster(gus);

timmy.age = 29;

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();
console.log(timmy);

/* Chef Make Dinners
class Dinner {
}
class Chef {
}
Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners */

class Dinner {
  constructor(appetizer, entree, dessert) {
    (this.appetizer = appetizer),
      (this.entree = entree),
      (this.dessert = dessert);
  }
}

class Chef {
  cookDinner(app, ent, dess) {
    const dinner = new Dinner(app, ent, dess);
    console.log(dinner);
  }
}

Chef.cookDinner("calamari", "pad thai", "cheesecake");
Chef.cookDinner("cheese sticks", "lasagna", "chocolate mouse");
Chef.cookDinner("fried cauliflower", "vegan pizza", "vegan chocolate cake");
