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