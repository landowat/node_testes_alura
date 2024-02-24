import Car from '../../../car/car.js';
import Item from '../../../car/item.js';

describe('Car tests', () => {
    it('Should add Item to Car and Simulate a purchase', () => {
        const car = new Car();

        car.addItem(new Item('Apple', 3, 3));
        car.addItem(new Item('Banana', 6, 2));
        car.addItem(new Item('Grape', 0.5, 4));

        car.addFreight(22);

        car.finishPurchase();

        expect(car.itens).toBeDefined();
        expect(car.subtotal).toBe(23);
        expect(car.total).toBe(45);
        expect(car.finishPurchase()).toStrictEqual({
            subtotal: 23,
            freight: 22,
            total: 45
        });
    });

    it('Should throw error when finish purchase without itens', () => {
        const car = new Car();

        car.addFreight(22);

        try {
            car.finishPurchase();
        } catch (err) {
            expect(err).toBeDefined();
        }
    });

    it('Should throw error when finish purchase without itens version 2', () => {
        const car = new Car();

        function findError() {
            car.addFreight(22);
            car.finishPurchase();
        }

        expect(findError).toThrow('Carrinho de compras vazio');
    });
});