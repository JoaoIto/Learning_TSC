# Interface's

An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.


The easiest way to see how interfaces work is to start with a simple example

```ts
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
---

## Interface base for class

A Interface can be create a data base, methods, and functions for a class. Interface helps a inferres a types and a types of incremenst the class.

- **Example in the same class:**

- Inferres a type

```ts
// Interface

export interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}
```

```ts
// A class

import { Vehicle } from './ICar'

export class Car implements Vehicle{
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car.numberOfCars++; // Increments the value of the static property
  }
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string {
    throw new Error('Method not implemented.');
  }
  brake(): string {
    throw new Error('Method not implemented.');
  }
  turn(direction: 'left' | 'right'): string {
    throw new Error('Method not implemented.');
  }
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
}

```

---
