function sum(a) {
	return function(b) {
		return a + b;
	}
}

let res = sum(1)(2);
console.log(res)


function makeBuffer() {
	var str = "";
	function buffer(value) {
		if(value == undefined) {
			return str;
		}
		str += value;
	}
	buffer.clear = function() {
		return str = "";
	}
	return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!

buffer.clear();
console.log(buffer()); 


var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


function byField(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

users.sort(byField('name'));
users.forEach(function(user) {
 console.log(user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  console.log(user.name );
}); // Маша, Вася, Петя


var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
	var arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if(func(arr[i]) == true) {
			arr2.push(arr[i]);
		}
	}
	return arr2;
}

function inBetween(a, b) {
	return function(elem) {
		return elem >= a && elem <= b;
	}
}

function inArray(arr) {
	return function(elem) {
		return arr.indexOf(elem) >= 0;
	}
}

console.log( filter(arr, function(a) {
	return a % 2 == 0
}) ); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2


function cloneObjAssign(obj) {
	return Object.assign({}, obj);
}

function cloneObjCreate(obj) {
	return Object.create(obj);
}

Dates = {
	date1: 1539869400,
	date2: 1539860000,
	date3: 1539869800,
	date4: 1539866700,
	date5: 15398400,
	date6: 1539564300,
	date7: 1539875400,
};

Person = {
	name: "Vasya",
	gender: 'male',
	age: 99,
	getInfo: function() {
		return "This is a " + this.gender + " aged" + this.age;
	}
};

var resu = cloneObjCreate(Person);
console.log(resu)

/*Human = {
	hasBrain: true,
	walkStraight: () => "isWalking"
};

TaxPayer1 = {
	prototype: Human,
	name: "Vasya",
	age: 99,
	getInfo: function() {
		return "This is a " + this.gender + " aged" + this.age;
	},
	Company: {
		name: "DTEK",
		employees: {
			TaxPayer1,
			TaxPayer2,
			TaxPayer3,
		}
	}
};
*/
