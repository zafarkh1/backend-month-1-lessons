// class ParseBoolean {
// 	constructor ({value, exception}) {
// 		this.value = value
// 		this.exception = exception ? exception : new Error ("Something went wrong while parsing into Boolean literal")
// 	}
// }

// class CustomProductModule extends ParseBoolean {
// 	constructor () {
// 		super ({
// 			value: 'Custom exception',
// 			exception: new Error ("Custom exception in product module")
// 		})
// 	}
// }

// class CustomUserModule extends ParseBoolean {
//   constructor() {
//     super({
//       value: "Custom exception",
//       exception: new Error("Custom exception in user module"),
//     });
//   }
// }

// class Person {
//   constructor(name, country) {
//     this.name = name;
//     this.country = country;
//   }
// }

// class Male extends Person {
//   constructor(name, country, gender) {
//     super(name, country);
//     this.gender = "male";
//   }
// }

// console.log(new Male('Zafar', 'Uzbekistan'));

/* let result = Number.MAX_SAFE_INTEGER
result = Number.MAX_VALUE
result = Number.MIN_SAFE_INTEGER
result = Number.NEGATIVE_INFINITY
result = Number.MIN_VALUE
result = Number.POSITIVE_INFINITY
console.log(result); */