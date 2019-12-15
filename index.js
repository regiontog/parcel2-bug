class Item {
    constructor() { }

    get() {
        return new Item();
    }
}

const item = new Item(); // This is fine
item.get(); // But this causes a ReferenceError