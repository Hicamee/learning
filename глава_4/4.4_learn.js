// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.



let calculator = {
    read() {
        this.a = Number(prompt('Введите первое число:'))
        this.b = Number(prompt('Введите второе число:'))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let user = {
    name: "Ivan",
    sayHi() {
        alert("Привет " + user.name);
    }
};
user.sayHi()