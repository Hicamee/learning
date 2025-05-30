// 🧩 Задание 1. Объект по умолчанию
// Создай функцию - конструктор Person(name), которая:

// сохраняет name в this.name, если имя передано

// если имя не передано, то устанавливает this.name = "Аноним"

function Person(name) {
    if (name === '' || typeof (name) !== 'string') {
        this.name = 'Аноним'
    } else {
        this.name = name
    }
}

let p1 = new Person("Маша");
let p2 = new Person();

console.log(p1.name); // Маша
console.log(p2.name); // Аноним


// 🧩 Задание 2. Конструктор с авто-идентификатором
// Создай функцию-конструктор User, которая:

// принимает имя

// каждому новому пользователю присваивает уникальный id (1, 2, 3, …)


let userId = 0;
function User(name) {
    userId++
    this.name = name
    this.id = userId
}

let u1 = new User("Ann");
let u2 = new User("Bob");

console.log(u1.id); // 1
console.log(u2.id); // 2


// 🧩 Задание 3. Защита от забывчивости
// Создай конструктор Car(model), который:

// работает даже без new

// записывает this.model = model

function Car(model) {
    if (!new.target) {
        return new Car(model)
    }
    this.model = model
}


let c1 = Car("BMW");
console.log(c1.model); // BMW

let c2 = new Car("Audi");
console.log(c2.model); // Audi



// 🧩 Задание 4. Конструктор с логикой внутри
// Создай функцию-конструктор Circle(radius), которая:

// сохраняет radius

// добавляет метод getArea() — возвращает площадь круга π * r^2

// округляет результат до двух знаков


function Circle(radius) {
    this.radius = radius

    this.getArea = function () {
        let r = Math.PI * this.radius * this.radius
        return (r.toFixed(2))
    }
}


let circle = new Circle(3);

console.log(circle.radius);      // 3
console.log(circle.getArea());  // 28.27 (примерно)




