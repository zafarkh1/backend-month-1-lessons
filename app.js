//                            classes
// class GirlFriend {
// 	constructor() {
// 		this.name = 'NNU'
// 		this.age = 18
// 	}
// }

// console.log(new GirlFriend());


// class Car {
// 	constructor(type, year) {
// 		this.type = type
// 		this.year = year
// 	}
// }

// console.log(new Car('K5', 2023));
// console.log(new Car('BMW-X7', 2023));

// class Food {
// 	constructor (type, price) {
// 		this.type = type
// 		this.price = price
// 	}

// 	getFood() {
// 		return `I like ${this.type} and it's ${this.price} sum`
// 	}
// }

// console.log(new Food('somsa', 8000).getFood());
// console.log(new Food('osh', 20000).getFood());

// class Programming {
// 	constructor (programme, rating) {
// 		this.programme = programme
// 		this.rating = rating
// 	}

// 	getProgramming(programme = 'Javascript', rating = 1) {
// 		return `I know that ${programme} is the ${rating} place`
// 	}
// }

// console.log(new Programming().getProgramming());
// console.log(new Programming('Python', 3).getProgramming());



// class Notebook {
// 	#producer
// 	constructor (type, price, producer) {
// 		this.type = type
// 		this.price = price
// 		this.#producer = producer
// 	}

// 	getNotebook() {
// 		return `${this.type} is popular type of notebook and it costs ${this.price} dollar`
// 	}

// 	getProducer () {
// 		return this.#producer
// 	}
// }

// console.log(new Notebook('Victus', 700).getNotebook());
// console.log(new Notebook("Victus", 700, 'HP').getProducer());



// class MobilePhone {
// 	static type = "Apple";

// 	constructor () {
// 		this.type = 'Samsung'
// 	}

// 	static getMobilePhone() {
// 		return MobilePhone.type
// 	}
// }

// console.log(MobilePhone.type);
// console.log(new MobilePhone());
// console.log(MobilePhone.getMobilePhone());

// class TV {
// 	#producerCountry
// 	constructor (brand, price) {
// 		this.brand = brand
// 		this.price = price
// 	}

// 	get country() {
// 		return this.#producerCountry
// 	}

// 	set country (name) {
// 		this.#producerCountry = name
// 	}
// }

// Television.country = 'Germany'

// console.log(Television);
// console.log(Television.country);
// console.log(new TV('Samsung'));


// class Car {
// 	constructor () {
// 		this.wheels = 4
// 		this.type = 'Crossover' 
// 	}
// }

// class Ford extends Car {
// 	constructor (price) {
// 		super()
// 		this.price= price
// 		this.manufacrurer = 'USA'
// 	}
// }

// class Mustang extends Ford {
// 	constructor (price, color, maxSpeed) {
// 		super(price)
// 		this.color = color
// 		this.maxSpeed = maxSpeed
// 	}
// }

// console.log(new Ford(60000));
// console.log(new Mustang(300000, 'black', 400));