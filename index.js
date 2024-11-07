// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   speak() {
//     console.log(`The animal, ${this.name} makes a sound`);
//   }
// }

// const myDog = new Animal("Fido", "Labrador");
// const myOtherDock = new Animal("Sigge", "Tax");
// const myCat = new Animal("Mozart", "Russian Blue");

// console.log(myDog.name); // Fido
// console.log(myOtherDock.name); // Sigge
// console.log(myCat.name); // Mozart

// class Animal {
//   #name;
//   #species;

//   constructor(name, species) {
//     this.#name = name; // The # indicates a private property.
//     this.#species = species; // The # indicates a private property.
//   }

//   speak() {
//     console.log(`The animal, ${this.name} makes a sound`);
//   }
// }

// const myDog = new Animal("Fido", "Labrador");

// console.log(myDog.#name);

class Animal {
  #name;
  #species; // The # indicates a private property.

  constructor(name, species) {
    this.#name = name;
    this.#species = species;
  }

  getName() {
    return this.#name;
  }

  speak() {
    console.log(`The animal, ${this.#name} makes a sound`);
  }
}

const myDog = new Animal("Fido", "Labrador");

console.log(myDog.getName());
myDog.speak();
