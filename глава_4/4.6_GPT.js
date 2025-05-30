//  Задание 1 — Безопасный доступ
// У тебя есть объект:

let user = {
    name: "Иван",
    address: {
        street: "Ленина",
        city: "Москва"
    }
};

// Выведи в консоль название улицы, используя?.,
// и сделай то же самое для user.address.building(которого нет).

console.log(user.address?.street);
console.log(user.address?.building);

// Ленина
// undefined



// Задание 2 — Вызов метода с?.
// Есть объект:

let admin = {
    name: "Олег",
    greet() {
        return "Здравствуйте!";
    }
};

// Напиши выражение, которое вызовет метод greet,
// если он существует, иначе вернёт строку "Метод недоступен".

delete admin?.greet
alert(admin.greet?.() || 'Метод недоступен')


// Проверь это поведение:
// Когда greet есть.
// Когда greet удалён: delete admin.greet.



// Задание 3 — Использование ?.[]
// У тебя есть объект:

let settings = {
    theme: {
        colors: {
            background: "#ffffff",
            text: "#000000"
        }
    }
};

// Выведи в консоль:

settings.theme.colors["background"]  // — с?.
settings.theme["fonts"]?.["main"] // — тоже с?.

console.log(settings.theme.colors?.["background"]);
console.log(settings.theme?.["fonts"]?.["main"]);

// Ожидаемый результат:
// #ffffff
// undefined



// Задание 4 — Опциональная цепочка и функция
// У тебя есть код:

let user1 = {
    sayHi() {
        console.log("Привет!");
    }
};

let user2 = {};
// Задача:
// Создай универсальную функцию greetUser(user), 
// которая вызывает user.sayHi(), если метод существует.
// Проверь поведение с user1 и user2, чтобы избежать ошибок.

function greetUser(user) {
    user.sayHi?.()
}

greetUser(user1)
greetUser(user2)


// Задание №5 — Проверка доступа к профилю пользователя
// У тебя есть массив пользователей, каждый из которых может (или не может)
// иметь вложенный объект profile, а в нём — метод getStatus.

let users = [
    {
        name: "Аня",
        profile: {
            getStatus() {
                return "Активен";
            }
        }
    },
    {
        name: "Борис",
        profile: null
    },
    {
        name: "Вика"
    },
    {
        name: "Дима",
        profile: {
            status: "Неактивен"
        }
    }
];

// Твоя задача:
// Напиши функцию printUserStatuses(users), которая для каждого пользователя:
// вызывает user.profile.getStatus() — если он есть
// иначе выводит "Статус недоступен"
// используй опциональную цепочку и логическое ИЛИ (||)

function printUserStatuses(users) {
    for (element of users) {
        let status = element.profile?.getStatus?.() || 'Статус недоступен'
        console.log(`${element.name}: ${status}`);
    }
}

printUserStatuses(users)


// Аня: Активен
// Борис: Статус недоступен
// Вика: Статус недоступен
// Дима: Статус недоступен