const Menu = require("./menu")
const prompt = require('prompt-sync')({ sigint: true });

const startApp = () => {
    const shoppingListName = prompt("Please input your name: ")
    const shoppingList = new Menu(shoppingListName)
    console.clear();
    console.log(`Welcome to ${shoppingListName}'s Shopping List!\n`);
    shoppingList.showMenu();
    console.log("Goodbye!");
}

startApp();