//                 Call Apply Bind
// let p1 = {
// 	name: 'White',
// 	age: 33
// }

// let p2 = {
//   name: "Black",
//   age: 44,
// 	cut(arg1, arg2) {
// 	return this.name + arg1 + ' Kill you' + arg2;
// }
// };

// console.log(p2.cut.bind(p1, " I will", " tomorrow")());

let person1 = {
  name: "Sarvar",
  car: {
    type: "Gentra",
    price: 15000,
  },
  money: 5000,
};

let person2 = {
  name: "A'zam",
  car: null,
  money: 15000,
};

let person3 = {
  name: "Umid",
  car: {
    type: "Matiz",
    price: 5000,
  },
  money: 10000,
};

function sell(buyer) {
  if (this.car) {
    if (buyer.money >= this.car.price) {
      this.car = buyer.car;
      this.money += this.car.price;
      buyer.money -= this.car.price;
      this.car = null;
    } else {
			console.log("Don't have enough money");
		}
  } else {
		console.log("Don't lie");
	}
}

console.log(person1);
console.log(person2);
console.log(person3);
console.log("========================================");
sell.apply(person3, [person2]);
console.log(person1);
console.log(person2);
console.log(person3);
