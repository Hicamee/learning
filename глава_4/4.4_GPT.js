// 1. Счётчик (Counter)
// Задача:
// Создай объект counter, у которого есть:

// Свойство value (начинается с 0)

// Метод inc() — увеличивает значение на 1

// Метод dec() — уменьшает на 1

// Метод reset() — обнуляет значение

// Метод show() — показывает текущее значение (в alert или console.log)

// Все методы возвращают this для цепочек

// 🔸 Пример использования:


let counter = {
    value: 0,
    inc() {
        this.value++
        return this;
    },
    dec() {
        this.value--
        return this;
    },
    reset() {
        this.value = 0
        return this;
    },
    show() {
        console.log(this.value);
        return this;
    },
}


// counter.inc().inc().show().dec().show().reset().show();



// 2. Таймер (Timer)
// Задача:
// Создай объект timer, который умеет:

// Метод start(seconds) — запускает таймер и выводит обратный отсчёт в консоль (один раз в секунду)

// Метод stop() — останавливает таймер

// Метод reset() — сбрасывает таймер в 0

// Используй this для хранения текущего времени и setInterval

// 🔸 Пример:
// timer.start(5);
// → 5
// → 4
// → 3
// → 2
// → 1
// → 0

const timer = {
    sec: 0,
    intervalId: null,
    start(second) {
        this.sec = second;
        this.intervalId = setInterval(() => {
            console.log(this.sec);
            this.sec--
            if (this.sec < 0) {
                clearInterval(this.intervalId);
            }
        }, 1000)
        return this
    },
    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
        return this
    },
    reset() {
        this.stop();       // переиспользуем stop
        this.sec = 0;
        return this;
    },
}


// timer.start(5)
// timer.stop()
// timer.reset()
// timer.start(5).stop().reset()





// 3. Мини-банк (BankAccount)
// Задача:

// Создай объект bank, у которого есть:

// Свойство balance (по умолчанию 0)

// Метод deposit(amount) — пополняет счёт на amount

// Метод withdraw(amount) — снимает со счёта сумму, если достаточно средств

// Метод showBalance() — выводит текущий баланс

// Метод reset() — обнуляет счёт

// 🔸 Пример:


const bank = {
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        return this;
    },
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        } else {
            console.log('Недостаточно средств!');
        }
        return this;
    },
    showBalance() {
        console.log(this.balance);
        return this;
    },
    reset() {
        this.balance = 0;
        return this;
    },
}


// bank.deposit(100).withdraw(30).showBalance(); // → 70
// bank.withdraw(1000); // → Недостаточно средств
bank.deposit(100)
bank.withdraw(150)
bank.showBalance()