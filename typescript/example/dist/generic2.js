class D {
    add(v) {
    }
    get() {
        return undefined;
    }
}
class localDB {
    constructor(localStroageKey) {
        this.localStroageKey = localStroageKey;
    }
    add(v) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return {
            v: ''
        };
    }
};
cart1.getItem();
//# sourceMappingURL=generic2.js.map