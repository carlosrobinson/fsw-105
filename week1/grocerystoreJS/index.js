 var shopper = {
    items: "Apple",
    price: .99,
    isAlive : true,
    groceryCart: ["Meat", "Dairy", "Fruit"],
    showCart: function() {
        return this.items + " ," + this.price + " ," + this.isAlive + " ," + this.groceryCart[2];
}
};
console.log(shopper.items + " ," + shopper.price + " ," + shopper.isAlive + " ,"  + shopper.groceryCart[2])