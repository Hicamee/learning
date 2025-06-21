// Флаги свойств
// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).
// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.


// 1. 🔒 Сделай свойство username объекта user доступным только для чтения.
const user = {}

Object.defineProperty(user, "username", {
    value: "John"
})

user.username = "Oleg"
let res1 = Object.getOwnPropertyDescriptor(user, "username");
console.log(JSON.stringify(res1, null, 2));


// 2. 🔍 Добавь к объекту book свойство hiddenNote со 
// значением "secret", которое не отображается в for..in и Object.keys.

const book = {
    numver: 2,
}

Object.defineProperty(book, "hiddenNote", {
    value: "secret",

})

for (key in book)
    console.log(key);
console.log(Object.keys(book));


// 3. 🚫 Сделай свойство email объекта account таким, чтобы его
// нельзя было удалить, но значение всё ещё можно менять.

const account = {
    email: "nety",
}

Object.defineProperty(account, "email", {
    value: "nety",
    writable: true,
    configurable: false,
    enumerable: true,
})

account.email = "Est"
delete account.email
console.log(account.email);


// 4. 🧱 Запрети добавление новых свойств в объект settings.

const settings = {
    name: "Maks",
}

Object.preventExtensions(settings)
settings.name = "Kirill"
settings[user] = "Misha"
console.log(settings);


// 5. 📦 Клонируй объект profile, сохранив все дескрипторы
// свойств, включая writable, enumerable, configurable.

let profile = {
    name: "Alice"
};

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(profile))
console.log(clone);


// 🔧 Задание 6. "Молчаливый шпион"
// Создай объект spy, у которого есть скрытое неперечислимое свойство logs (массив), 
// и метод track(msg), который добавляет сообщения в этот массив.

// При этом:
// logs не должен быть виден в for..in, Object.keys, JSON.stringify.
// track() должен быть обычным методом объекта.

// Ожидаемое поведение
// spy.track("Start");
// spy.track("Next");
// console.log(spy.logs); // ["Start", "Next"]
// for (let key in spy) console.log(key); // только track

const spy = {
    logs: [],
}

Object.defineProperty(spy, "logs", {
    enumerable: false,
})

spy.track = function (msg) {
    this.logs.push(msg)
    return this.logs
}

spy.track("Start");
spy.track("Next");
console.log(spy.logs); // ["Start", "Next"]
for (let key in spy) console.log(key); // только track


// 🔐 Задание 7. "Неудаляемый, но изменяемый"
// Создай объект config, в котором есть:
// свойство mode = "dark",

// оно должно быть:
// изменяемым
// неперечислимым
// неудаляемым

// Проверь, что оно действительно:
// не видно в for..in
// изменяется через config.mode = 'light'
// не удаляется

const config = {}

Object.defineProperty(config, "mode", {
    value: "dark",
    writable: true,
    enumerable: false,
    configurable: false,
})

config.mode = "light"
delete config.mode
for (key in config) {
    console.log(key);
}

console.log(config);


// Задание 8. "Глубокий клон со всеми флагами"
// Дан объект original, в котором:

// visible — обычное свойство
// hidden — неперечислимое, writable: false, configurable: false
// Создай точную копию объекта clone, где все дескрипторы совпадают с оригиналом.

// Проверь:
// clone.hidden существует
// clone.visible === 'yes'
// hidden не виден в for..in, и его нельзя изменить или удалить

const original = {};
Object.defineProperty(original, 'visible', {
    value: 'yes',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(original, 'hidden', {
    value: 'secret',
    writable: false,
    enumerable: false,
    configurable: false
});


const clone2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(original))

console.log(clone2);
console.log(clone2.visible === 'yes');
for (key in clone2) {
    console.log(key);
}
