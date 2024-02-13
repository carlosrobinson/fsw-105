
// Object 1 - with primative and complex types
var shopper = {
    items: "Apple",
    price: .99,
    isAlive : true,
    groceryCart: ["Meat", "Dairy", "Fruit"],
    showCart: function() {
        return this.items + " " + this.price + " " + this.isAlive + " " + this.groceryCart[2];
}
};
console.log(shopper.items + " ," + shopper.price + " ," + shopper.isAlive + " ,"  + shopper.groceryCart[2])


// Object 2 - with primative and complex types
var shopper = {
    name: "Steve Johonson",
    info: {
        id: 1,
        email: "steve.johnson@email.com",
        password: "passwor123"
    },
    cart: [
    {
        item: "milk",
        price: 2.33
    },
    {
        item: "pork chops",
        price: 5.97
    },
    {
        item: "macaroni",
        price: 2.29
    },
    {
        item: "Dawn",
        price: 3.45
    }
    ],
    isCartEmpty: false,
    checkOut: function(){
        var total = 0;
        for(var i = 0; i < shopper.cart.length; i++){
            total += shopper.cart[i].price;
        }
        console.log(`Your total is $${total.toFixed(2)}.\nDo you wish to purchase now.`);
    }
}
shopper.checkOut();



