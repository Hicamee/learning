// Задача №1
let user = {
    name: "Jone",
    surname: "Smith",
}
user.name = "Pete"

for (key in user) {
    console.log(key);
}
delete user.name


// Задача №2  
function isEmpty(obj) {
    for (key in obj) {
        return false
    }
    return true
}

alert(isEmpty(user))


// Задача №4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (key in salaries) {
    sum += salaries[key]
}
console.log(sum);


// Задача №5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2
        }
    }
    console.log(obj);

}

multiplyNumeric(menu);



