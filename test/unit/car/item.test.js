import Item from '../../../car/item.js';

describe('Item tests', () => {
    it('Should create Item', () => {
        const item = new Item('Apple', 1, 3);

        expect(item.name).toBe('Apple');
        expect(item.price).toBe(1);
        expect(item.quantity).toBe(3);
    });

    it('Should get Item total value', () => {
        const item = new Item('Banana', 0.1, 3);

        const total = item.getItemTotalValue();

        expect(total).toBeCloseTo(0.3);
    });
});