//array of products
let products = [
    {   name: "Wipes",
        category: "Hygiene",
        price: 5.99,
        inventory: 100
    },
    {   name: "Trashcan",
        category: "Household",
        price: 8.99,
        inventory: 50
    },
    {   name: "Backpack",
        category: "Accessories",
        price: 29.99,
        inventory: 75
    },
    {   name: "Socks",
        category: "Clothing",
        price: 9.99,
        inventory: 200
    },
    {   name: "Notebook",
        category: "Stationery",
        price: 2.99,
        inventory: 150
    }
]

//discount based on category
//using for..of loop
for (let product of products)
{ 
    if (product.category == "Hygiene")
    {
        product.price *= 0.85; //15% discount
    }
}