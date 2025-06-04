// Написать функцию конструктор для заказа в магазине.

// Новый инстанс - новый заказ у него будут методы:

// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы
// Формат item - объект с:
// Названием итема;
// Ценой за штуку. Два итема с одинаковым именем считаем одной позицией в чеке.
// Использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов


// создаю функцию-конструктор Elements
function Elements() {
    this.items = {} // создаю пустой объект, куда буду добавлять товары
    this.isLocked = false // создаю флаг блокировки, изначально false (разблокировано)

    // создаю метод addItem, который добавляет товар
    this.addItem = function (item, count, number) {

        if (this.isLocked === false) { // если заказ не заблокирован

            if (!this.items[item]) { // если товара ещё нет в списке
                this.items[item] = { // создаю объект товара
                    price: count, // сохраняю цену за 1 товар
                    amount: number || 1, // количество товара, по умолчанию 1
                    total: count * (number || 1) // общая сумма за товар
                }

            } else { // если товар уже есть
                this.items[item].amount += number || 1 // увеличиваю количество
                this.items[item].total = this.items[item].amount * this.items[item].price // пересчитываю сумму
            }

        } else {
            alert('Изменения заблокированы!') // если заказ заблокирован — показываю сообщение
        }
    }

    // создаю метод removeItem, который удаляет товар
    this.removeItem = function (item, number) {
        if (this.isLocked === false) { // если заказ не заблокирован
            if (!this.items[item]) return // если товара нет — ничего не делаю
            if ((number || 1) > this.items[item].amount) return // если пытаюсь удалить больше, чем есть — ничего не делаю

            this.items[item].amount -= number || 1 // уменьшаю количество товара
            this.items[item].total = this.items[item].amount * this.items[item].price // пересчитываю сумму

            if (this.items[item].amount <= 0) { // если товара больше нет
                delete this.items[item] // удаляю товар из списка
            }
        } else {
            alert('Изменения заблокированы!') // если заказ заблокирован — показываю сообщение
        }
    }

    // создаю метод getCheck, который возвращает чек
    this.getCheck = function () {
        let result = 'Чек: \n'; // создаю строку для чека
        let total = 0; // создаю переменную для общей суммы

        for (key in this.items) { // перебираю каждый товар
            // добавляю строку с товаром: название, кол-во, цена, сумма
            result += `${key}: ${this.items[key].amount} шт. * ${this.items[key].price}₽ = ${this.items[key].total}₽ \n`
            total += this.items[key].total // прибавляю к общей сумме
        }
        result += `Итого: ${total}` // добавляю строку с итогом
        return result; // возвращаю чек
    }

    this.lockOrder = function () { this.isLocked = true } // создаю метод, который блокирует заказ
    this.unlockOrder = function () { this.isLocked = false } // создаю метод, который разблокирует заказ
}


// создаю новый заказ
let order = new Elements()

order.lockOrder() // блокирую заказ
order.unlockOrder() // разблокирую заказ

order.addItem('пиво', 100, 4) // добавляю 4 пива по 100
order.addItem('пиво', 100, 3) // добавляю ещё 3 пива по 100
order.addItem('вино', 200, 3) // добавляю 3 вина по 200
order.addItem('коньяк', 1200, 2) // добавляю 2 коньяка по 1200

order.removeItem('джин', 2) // пытаюсь удалить джин (его нет — ничего не происходит)
order.removeItem('пиво', 2) // удаляю 2 пива
order.removeItem('вино', 4) // пытаюсь удалить 4 вина (их всего 3 — ничего не происходит)
order.removeItem('вино', 3) // удалит всё вино

console.log(order.getCheck()); // вывожу чек

console.log(order.items) // вывожу текущий список товаров



