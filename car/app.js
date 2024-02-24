import Car from "./car.js";
import Item from "./item.js";

const car = new Car();

car.addItem(new Item('Apple', 1, 3));
car.addItem(new Item('Strawberry', 5, 2));
car.addItem(new Item('Banana', 2, 1));
car.addItem(new Item('Orange', 0.5, 10));
car.addItem(new Item('Grape', 3, 5));

car.addFreight(10);

car.finishPurchase();

console.log(car);