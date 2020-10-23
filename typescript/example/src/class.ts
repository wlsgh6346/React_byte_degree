// ES 6에서 새롭게 등장
interface User {
    name: string;
}
interface product {
    id: string;
    price: number;
}

class Cart {
    //protected user: User;
    //private store: object;
    constructor(public user: User, private store: object = {}) {
        //this.user = user
    }

    put(id: string, product: product) {
        this.store[id] = product;
    }

    get(id: string) {
        return this.store[id];
    }

}

class PromotionCart extends Cart {
    addPromotion() {
        this,user
    }
}

const cart2 = new PromotionCart({ name:'john' });

const cartJohn = new Cart({ name: 'John' });
const cartJay = new Cart({ name: 'jay' });