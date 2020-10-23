interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    add(v: T): void {
    }

    get(): T {
        return undefined;
    }

}

interface JSONSerialier {
    serialize(): string;
}

class localDB<T extends JSONSerialier> {
    constructor(private localStroageKey: string) {
    }
    add(v: T) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }

}

interface Veigtable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat;
}

const cart1: Cart2<Veigtable> = {
    getItem() {
        return {
            v:''
        }
    }
}

cart1.getItem();