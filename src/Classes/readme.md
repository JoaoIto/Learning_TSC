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