// deconstruct the following objects...

//1)
const Car = {
  color: "Gray",
  vin: 1234,
  model: "toyota"
}

const {color, vin, model} = Car;

console.log(color);
console.log(vin);
console.log(model);


//2)
let CPU = {

  ram: "16gbs",
  gpu_chip: true, 
  clock_speed: 1.8
}

const {ram, gpu_chip, clock_speed} = CPU;

console.log(ram);
console.log(gpu_chip);
console.log(clock_speed);

// //3) Nested Destructering
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Blue", "Purple"],
  extra: true
};

const {size: {width}, size: {height}, items, extra} = options;

console.log(width);
console.log(height);
console.log(items);
console.log(extra);


// //Now lets practice spread notation ... 

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
// //before running the console.log below try and predict the output
console.log(sum(...numbers));

// //4) clone/copy obj1 into another variable using spread notation
const obj1 = { key: 'value', x: 42 };


// //5)  use spread notation to merge these two objects into a single variable
// const user1 = { 
//     name: 'Steph', 
//     age: 55, 
// }; 
  
// const user2 = { 
//     name: "Tiff", 
//     location: "Alaska" 
// }; 