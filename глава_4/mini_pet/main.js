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

function Elements() {
    this.items = {};
    this.isLocked = false;

    this.addItem = function (name, price, count = 1) {
        if (this.isLocked) {
            alert('Изменения заблокированы!');
            return;
        }

        if (!this.items[name]) {
            this.items[name] = {
                price,
                amount: count,
                total: price * count
            };
        } else {
            const item = this.items[name];
            item.amount += count;
            item.total = item.price * item.amount;
        }
    };

    this.removeItem = function (name, count = 1) {
        if (this.isLocked) {
            alert('Изменения заблокированы!');
            return;
        }

        const item = this.items[name];
        if (!item || count > item.amount) return;

        item.amount -= count;
        item.total = item.amount * item.price;

        if (item.amount <= 0) {
            delete this.items[name];
        }
    };

    this.getCheck = function () {
        let result = 'Чек:\n';
        let total = 0;

        for (const name in this.items) {
            const { amount, price, total: sum } = this.items[name];
            result += `${name}: ${amount} шт. * ${price}₽ = ${sum}₽\n`;
            total += sum;
        }

        result += `Итого: ${total}₽`;
        return result;
    };

    this.lockOrder = () => { this.isLocked = true; };
    this.unlockOrder = () => { this.isLocked = false; };
}


// как работает
const order = new Elements();

order.lockOrder();
order.unlockOrder();

order.addItem('пиво', 100, 4);
order.addItem('пиво', 100, 3);
order.addItem('вино', 200, 3);
order.addItem('коньяк', 1200, 2);

order.removeItem('джин', 2);
order.removeItem('пиво', 2);
order.removeItem('вино', 4);
order.removeItem('вино', 3);

console.log(order.getCheck());
console.log(order.items);
