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
//and switch statement to apply discounts
for (let product of products)
{ 
    switch (product.category)
    { 
    case "Hygiene":
        product.price *= 0.85;
        break;
    case "Household":
        product.price *= 0.90;
        break;
    case "Accessories":
        product.price *= 0.95;
        break;
    case "Clothing":
        product.price *= 0.80;
        break;
    case "Stationery":
        break;
    }
}


//customer types
//using if else statements to apply discounts

let customerType = ["Regular", "Student", "VIP"]
for (let type of customerType)
{
    if (type == "Regular")
    {
        products.price *= 0.95; // 5% additional discount
    }
    else if (type == "Student")
    {
        products.price *= 0.90; // 7% additional discount
    }
    else if (type == "VIP")
    {
        products.price *= 0.85; // 11% additional discount
    }
}


//customers and their purchases
let customerPurchase = [
    {
        name: "Alan E",
        type: "Regular",
        number: "1",
        purchase: ["Wipes", "Notebook"]
    },
    {
        name: "Shell Ceeus",
        type: "Student",
        number: "2",
        purchase: ["Backpack", "Socks"]
    },
    {
        name: "Rhed Bhul",
        type: "VIP",
        number: "3",
        purchase: ["Trashcan", "Wipes", "Notebook"]
    }
]

//simulating checkout process
//using for loop to calculate discounted total
//reduce product inv count
//display customer number and total cost
for (let customer of customerPurchase)
{
    let totalCost = 0;

    for (let item of customer.purchase)
    {
        let product = products.find(p => p.name === item);
    }
