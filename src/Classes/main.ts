import { Car } from './index'

// Instantiate the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2

export function getInstanceCars(req, res){
    return res.json(Car.getNumberOfCars());
}