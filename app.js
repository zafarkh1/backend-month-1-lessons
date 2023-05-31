class CustomArray {
  constructor(array) {
    this.array = array;
  }

  reverse() {
		const result = []
		for (let i=0; i<this.array.length;i--) {
			console.log(i);
		}
		console.log(this.array);
	}

  sort() {}

  filter() {}
}

const arrayResult = new CustomArray([1, 2, 3, 4, 5, 6, "John", false, -1, ""]);