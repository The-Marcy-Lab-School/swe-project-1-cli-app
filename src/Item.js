const Menu = require("./menu")

class Item {
    constructor(name, quantity, pricePerItem, shoppingListName) {
        this.name = name
        this.quantity = quantity
        this.pricePerItem = pricePerItem
        this.shoppingListName = shoppingListName
    }

    addItem() {
        // create item obj and push to itemList
        // console.log(`Added ${newItem.quantity} ${newItem.name} at $${newItem.price} each to your shopping list!`)
    }

    removeItem() {
        // splice item out of itemList
        // console.log(`Removed ${itemNumR} ${itemNameR} from your shopping list!`)
    }
}

module.exports = Item




