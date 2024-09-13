class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addItem(inventory, name, quantity, price) {
    const id = inventory.length + 1;  
    const item = new Item(id, name, quantity, price);
    inventory.push(item);
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
    return prompt(message);
}

let inventory = [];

const initialItemCount = parseInt(getUserInput("How many items do you want to add initially?"));

for (let i = 0; i < initialItemCount; i++) {
    const newItemName = getUserInput(`Enter item name for item ${i + 1}:`);
    const newItemQuantity = parseInt(getUserInput(`Enter item quantity for item ${i + 1}:`));
    const newItemPrice = parseFloat(getUserInput(`Enter item price for item ${i + 1}:`));

    addItem(inventory, newItemName, newItemQuantity, newItemPrice);
}

console.log("Initial Inventory:");
printInventory(inventory);

const updateItemId = parseInt(getUserInput("Enter the ID of the item to update:"));
const newQuantity = parseInt(getUserInput("Enter new quantity for the item:"));

updateItem(inventory, updateItemId, { quantity: newQuantity });

const deleteItemId = parseInt(getUserInput("Enter the ID of the item to delete:"));
deleteItem(inventory, deleteItemId);
