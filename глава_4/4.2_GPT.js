// Поверхностное копирование вручную
// Реализуй функцию shallowCopy(obj), которая создаёт поверхностную копию объекта без использования Object.assign.
// copy должен быть независимым объектом с теми же свойствами

let original = { a: 1, b: 2 };

function shallowCopy(obj) { // создаю функцию, принимающую объект
    let clone = {} // создаю пустой объект, куда буду копировать свойства

    for (key in obj) { // перебираю все ключи в объекте
        clone[key] = obj[key] // копирую значение по ключу из исходного объекта в клон
    }

    return clone // возвращаю новый объект-клон
}

let copyy = shallowCopy(original);
console.log(copyy);



// Глубокая копия с массивами
// Напиши функцию deepCloneWithArrays(obj), которая делает глубокую копию объекта, включая массивы внутри.
// Внутри должен использоваться Array.isArray(...).

let data = {
    users: ["Ivan", "Anna"],
    settings: {
        theme: "dark"
    }
};

function deepCloneWithArrays(obj) { // создаю функцию, принимающую объект
    let clone = {} // создаю пустой объект-клон

    for (let key in obj) { // перебираю ключи объекта
        let value = obj[key] // сохраняю значение ключа в переменную

        if (Array.isArray(value)) { // если значение — массив
            // создаю копию массива, проверяя каждый элемент — если он объект, клонирую его рекурсивно
            clone[key] = value.map(item =>
                typeof item === 'object' && item !== null ? deepCloneWithArrays(item) : item
            )
        } else if (typeof value === 'object' && value !== null) { // если значение — вложенный объект (не null)
            clone[key] = deepCloneWithArrays(value) // рекурсивно копирую вложенный объект
        } else {
            clone[key] = value // просто копирую значение
        }
    }

    return clone // возвращаю клонированный объект
}

let copy = deepCloneWithArrays(data);
copy.users.push("Nina");

console.log(data.users); // ["Ivan", "Anna"] ✅ должно остаться прежним
console.log(copy.users); // ["Ivan", "Anna", "Nina"] ✅ независимая копия

copy.settings.theme = "light";
console.log(data.settings.theme); // "dark" ✅ не должен измениться



// !!!!!!!!!!!!!!!!!!!!!!!!

// Сравнение до и после
// Создай функцию isDeepEqual(obj1, obj2), которая сравнивает два объекта 
// по значению, включая вложенные объекты и массивы.

// isDeepEqual({ a: 1 }, { a: 1 }) // true
// isDeepEqual({ a: { b: 2 } }, { a: { b: 2 } }) // true

function isDeepEqual(obj1, obj2) {
    // 1. Сравнение по ссылке
    if (obj1 === obj2) return true;

    // 2. Один не объект или null
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    // 3. Если оба массивы
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }

    // 4. Если оба обычные объекты
    if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // 5. Иначе — не равны
    return false;
}

console.log(isDeepEqual({ a: 1 }, { a: 1 })); // ✅ true
console.log(isDeepEqual({ a: { b: 2 } }, { a: { b: 2 } })); // ✅ true
console.log(isDeepEqual([1, 2], [1, 2])); // ✅ true
console.log(isDeepEqual([1, 2], [2, 1])); // ❌ false
console.log(isDeepEqual(null, {}));       // ❌ false
console.log(isDeepEqual({ a: 1 }, { a: 1 })); // true
console.log(isDeepEqual({ a: { b: 2 } }, { a: { b: 2 } })); // true
