# Classes 

Classes in typescript can be create in a proprieties for classes.

- Constructor's
- static, public, private protected proprierties
- getters and setters

- **Example the class:**

```ts
class Car {
    // Properties
    private static numberOfCars: number = 0;  // New static property
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
    // ...
}
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