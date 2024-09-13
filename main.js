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

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

function getUserInput(message) {
    const input = prompt(message);
    return input;
}

let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

const newItemId = parseInt(getUserInput("Enter new item ID:"));
const newItemName = getUserInput("Enter new item name:");
const newItemQuantity = parseInt(getUserInput("Enter new item quantity:"));
const newItemPrice = parseFloat(getUserInput("Enter new item price:"));

addItem(inventory, new Item(newItemId, newItemName, newItemQuantity, newItemPrice));

const updateItemId = parseInt(getUserInput("Enter the ID of the item to update:"));
const newQuantity = parseInt(getUserInput("Enter new quantity for the item:"));

updateItem(inventory, updateItemId, { quantity: newQuantity });

const deleteItemId = parseInt(getUserInput("Enter the ID of the item to delete:"));
deleteItem(inventory, deleteItemId);
