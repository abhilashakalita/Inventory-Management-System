class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addItem(inventory, item) {
    inventory.push(item);
    console.log("Adding item:");
    printInventory(inventory);
}

function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log("Updating item:");
        printInventory(inventory);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log("Deleting item:");
        printInventory(inventory);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        return item;
    } else {
        console.log(`Item with ID ${id} not found.`);
        return null;
    }
}

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, new Item(3, 'Orange', 15, 0.7));

updateItem(inventory, 2, { quantity: 30 });

deleteItem(inventory, 2);
