# 2024-11-07 OOP

OOP stands of **Object Oriented Programmbing**

OOP revolves around creating structures called objects _( not the kind of objects we have been creating so far, but similar )_. These objects are called instances of classes and a class is "blueprint" that defines the properties and methods of each object.

The OOP strcture is very common in the it world. There are programming languages that are completely OOP-depenedant, like Java or C#. In those languages everything needs to be a class. So no code outside classes.

In JS, that's is not the case, and we can create code wherever we would like to. but in order to make developers of say C# happy, we can create and use classes in JS as well.

Support for classes came with ES6.

Class syntax looks like this:

```js
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`The animal, ${this.name} makes a sound`);
  }
}
```

Explanation of above:

- **class**: reserved keyword i JS, only to be used when creating classes.

- **Animal**: the name of the class, convention is to use PascalCase. Capital letter in the beginning and on every "new" word.

- **constructor**: is the "start method" that is invoked when we create a new instance of the class. The constructor usually takes some parameters but this is not mandatory. It all depends on how the class is defined. But if the class has some properties that need values, they must be passed in to the constructor.

- **properties**: in this case, the name and the species are properties on the class. They can be mandatory, then they need to be set via the constructor, otherwise they can be empty.

- **speak**: this is a method that exists on the class. It's a method that is shared by all the instances of the class.

### Create and access a class

Let's create an instanceo of the animal class:

```js
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`The animal, ${this.name} makes a sound`);
  }
}

const myDog = new Animal("Fido", "Labrador");
const myOtherDock = new Animal("Sigge", "Tax");
const myCat = new Animal("Mozart", "Russian Blue");

console.log(myDog.name); // Fido
console.log(myOtherDock.name); // Sigge
console.log(myCat.name); // Mozart
```

### Encapsulation

Encapsulation refers to hiding the internal representation of an instance of a class while _( if we want )_ providing controlled access trough methods. This can be done with something called **getters**, **setters** or public methods. Things that are private in JS classes uses a prefix `#`.

```js
class Animal {
  #name;
  #species; // The # indicates a private property.

  constructor(name, species) {
    this.#name = name;
    this.#species = species;
  }

  speak() {
    console.log(`The animal, ${this.name} makes a sound`);
  }
}

const myDog = new Animal("Fido", "Labrador");

console.log(myDog.#name); // Won't work.
```

Above we create private fields with the help of a `#` as a prefix to the variable. Observe that we don't need `const` or `let` in a class. And this is because it should look like it does in other languages. private field are not accesible outside of the class.

In order to solve this, we need to create methods that allows us to do something with the properties in a controlled fashion.

```js
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
```

So, the `getName()` methods returns the name of the instance making it avaialable outside the class even though the name itself is a private property. And this is alright, we are now sharing the name in a controlled way.

### Inheritance

### Polymorphism
