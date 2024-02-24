class Car {
    constructor () {
        this.itens = [];
        this.subtotal = null;
        this.freight = null;
        this.total = null;
    }

    addItem(item) {
        this.itens.push(item);
    }

    addFreight (value) {
        this.freight = value;
    }

    calculateTotalValue() {
        this.subtotal = this.itens.reduce((acum, item) => acum + item.getItemTotalValue(), 0);
        return this.subtotal + this.freight;
    }

    finishPurchase () {
        if (this.itens.length === 0) {
            throw new Error('Carrinho de compras vazio');
        }

        this.total = this.calculateTotalValue();
 
        return {
            subtotal: this.subtotal,
            freight: this.freight,
            total: this.total,
        };
    }
}

export default Car;