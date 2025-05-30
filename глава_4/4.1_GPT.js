// Создай функцию uniqueValues(obj), которая возвращает массив всех уникальных значений 
// объекта (без повторений, без undefined и null).ъ

// массив
let data = {
    a: 1,
    b: 2,
    c: 1,
    d: null,
    e: 3,
    f: undefined,
    g: 3
};


let result = [] // создаю массив в котором буду проверять есть ли похожие числа и добавлять их
function uniqueValues(obj) { // создаю функцию которая принимает объект
    for (key in obj) { // перебираю каждый ключ
        if (typeof obj[key] === 'number' && !result.includes(obj[key])) { // если ключ это число и не находится в массиве result
            result.push(obj[key]) // добавляю его
        }
    }
    console.log(result);

}

// uniqueValues(data)



// Создай функцию groupByValue(obj), которая возвращает объект, в котором ключи — значения из 
// исходного объекта, а значения — массивы ключей, где они встречались.
let input = {
    a: "x",
    b: "y",
    c: "x",
    d: "z"
};

// → { x: ["a", "c"], y: ["b"], z: ["d"] }

let itog = {} // создаю массив в который буду добавлять ключи и значения
function groupByValue(obj) { // создаю функцию которая принимает объект
    for (key in obj) { // перебираю каждый ключ
        let value = obj[key] // для удобства

        if (!itog[value]) { // проверка если нету в itog ключа
            itog[value] = [] // создаю массив с этим ключом 
        }
        itog[value].push(key) // добавляю значение в ключ 

    }
    console.log(itog);
}

// groupByValue(input)


// Функция findByPrefix(obj, prefix) должна вернуть новый объект,
// включающий только те ключи, которые начинаются с указанного prefix.
let user = {
    user_name: "Ivan",
    user_age: 25,
    admin_level: 2
};

// findByPrefix(user, "user_") 
// → { user_name: "Ivan", user_age: 25 }


function findByPrefix(obj, prefix) { // создаю функцию которая принимает объект и префикс
    let resultt = {} // создаю пустой объект в который буду добавляь ключи с указанным префиксом

    for (key in obj) { // перебираю каждый ключ
        if (key.startsWith(prefix)) { // проверяю если ключ начинается с указанного префикса
            resultt[key] = (obj[key]) // создаю в result ключ и его значение
        }
    }
    console.log(resultt);
}

findByPrefix(user, "user_")


