// 1. Уникальный ключ для объекта
// Создай два символа с одинаковым описанием("id"), добавь свойства
// в объект с каждым.Докажи, что они не пересекаются.

const obj = {}
let sym1 = Symbol('id')
let sym2 = Symbol('id')

obj[sym1] = 'Первый символ'
obj[sym2] = 'Второй символ'

console.log(obj);
console.log(obj[sym1]);
console.log(obj[sym2]);
console.log(sym1 === sym2); // false


// 2. Глобальный реестр
// Создай глобальный символ и проверь, что другой вызов
//  с тем же ключом вернёт тот же символ.Добавь его в объект и получи имя.

const obj2 = {}

let user1 = Symbol.for('userId')
let user2 = Symbol.for('userId')

obj2[user1]
console.log(user1);
console.log(user2);
console.log(obj2);
console.log(Symbol.keyFor(user1));


// 3. Скрытые свойства
// Создай объект с обычными и символическими свойствами. Проверь:
// что for...in их не видит,
// что Object.getOwnPropertySymbols их показывает.

let id1 = Symbol('id')
let id2 = Symbol('id')

const obj3 = {
    name: 'Maks',
    age: 21,
    [id1]: 111,
    [id2]: 555,
}

for (key in obj3) {
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(obj3));


// 4. Symbol.toPrimitive
// Создай объект с реализацией Symbol.toPrimitive, чтобы:
// при сложении с числом возвращал сумму,
// при приведении к строке — имя.
// Пример:
// obj + 5 // 10
// String(obj) // "MyObject"

const obj4 = {
    namee: 'Aleks',
    money: 30,

    [Symbol.toPrimitive](x) {
        if (x === "string") {
            return `{name: "${this.namee}"}`
        } else {
            return this.money
        }
    }
}

console.log(obj4 + 5);
console.log(String(obj4));

