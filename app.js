//      
// let func = new Function (
// 	'arg', `
// 	{
// 		return arg
// 	}`
// )

// console.log(5);

// let btn = document.getElementById("btn")
// let list = document.getElementById("list")

// let answers = [
// 	[22, 67, true],
// 	[45, 75, false],
// 	[8, 33, true],
// 	[32, 1, true],
// 	[66, 44, false]
// ]

// btn.onclick = () => {
// 	let func = new Function("arg1", 'arg2', textarea.value);
// 	list.innerHTML = ''
// 	for(let i of answers) {
// 		let li = document.createElement("li")
// 		li.textContent = func(i[0], i[1]) === i[2];
// 		list.append(li)
// 	}
// }

//                                            d

// function Func(name) {
// 	if(!new.target) return new Func(name)
// 	this.call = name;
// 	this.info = () => {
// 		return this.call
// 	}
// 	return
// }

// let func = new Func('hello')
// console.log(func);