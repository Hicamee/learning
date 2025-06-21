// 1. Бонусная карта пользователя
// Создай объект bonusCard с полем points = 100. Сделай так, чтобы:
// bonusCard + 50 возвращало 150;
// String(bonusCard) → "Bonus Card".

const bonusCard = {
    points: 100,

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? "Bonus Card" : this.points;
    }
}

console.log((bonusCard + 50));
console.log(String(bonusCard));


// 2. Объект с переопределённым toString и valueOf
// Создай объект calc, у которого:
// toString возвращает "calculator";
// valueOf возвращает 42.
// Проверь результат:
// console.log(String(calc));   // ?
// console.log(calc + 8);  

const calc = {
    // №1 
    [Symbol.toPrimitive](hint) {
        return hint === "string" ? "calculator" : 42
    },

    // №2
    toString() {
        return "calculator"
    },

    valueOf() {
        return 42
    }
}

console.log(String(calc));
console.log(calc + 8);


// 3. Символ как ключ + преобразование объекта
// Создай объект account, в который добавь символ-ключ Symbol("secretCode") и обычные поля name и balance.
// Реализуй Symbol.toPrimitive, чтобы:
// при сложении account + 0 возвращался balance;
// при String(account) — имя;
// при Number(account) — balance.

const secret = Symbol("secretCode")

const account = {
    [secret]: "ABC123",
    name: "Nety",
    balance: 101,

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? this.name : this.balance
    }
}

console.log(account + 0);
console.log(String(account));
console.log(Number(account));
console.log(account[secret]);


// 4. Используй глобальный символ и преобразование
// Создай глобальный символ:
// Создай объект user, использующий этот символ как ключ, и добавь Symbol.toPrimitive для вывода:
// user + '!' // → 'User#123!'

const id = Symbol.for('id');

const user = {
    name: "Oleg",
    [id]: 123,

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? this.name : `User#${this[id]}`
    }
}

console.log(user + '!');         // 'User#123!'
console.log(String(user));       // 'Oleg'
console.log(user[id]);           // 123



// 5. Объект-наблюдатель
// Создай объект logger, который при каждом преобразовании к
// примитиву (любой хинт) выводит в консоль:
// [!] Преобразование с хинтом: string/number/default
// Проверь String(logger), logger + 1, Number(logger) и посмотри в консоли, какой хинт передаётся.

const logger = {
    [Symbol.toPrimitive](hint) {
        console.log(`[!] Преобразование с хинтом: ${hint}`);
        return hint === "string" ? "log" : 0
    }
}

console.log(String(logger));  // [!] Преобразование с хинтом: string
console.log(logger + 1);      // [!] Преобразование с хинтом: default
console.log(Number(logger));