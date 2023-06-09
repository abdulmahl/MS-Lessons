const print = console.log

let iceCreamFlavors = [ "Chocolate", "Strawberry", "Vanilla", "Pistacio", "Neapolitan", "Mint Chip" ];

for (let i = 0; i < iceCreamFlavors.length; i++) {
    const pie = iceCreamFlavors[i];
    print(pie)
} // This iterates through the pieFlavors array.

// While this iterates through the indexes of that array.
let i = 0;
while (i < iceCreamFlavors.length) {
    print(i)
    i++;
}

iceCreamFlavors.forEach(icecream => print(icecream)) // This loop like the for loop
// iterates throug the array of pieFlavors and returns each element contained
// therein.

iceCreamFlavors.forEach((icecream, index) => print(`Ice Cream: ${icecream}, Index: ${index}`));

iceCreamFlavors.find(flavor => flavor === "Mint Chip"); //returns 'Mint Chip'.

let iceCreamFlavorsObject = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "Fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
    ];

iceCreamFlavorsObject.map(flavor => {
    flavor.price = "$1.00";
    return price;
})
    
iceCreamFlavorsObject.filter(flavor => flavor.type === "Chocolate") 
// returns all the flavors with 'Chcolate'.
// [{ name: "Chocolate", type: "Chocolate" }, 
// { name: "Neapolitan", type: "Chocolate"}, 
// { name: "Mint Chip", type: "Chocolate"}]

iceCreamFlavorsObject.filter(flavor => flavor.type === "Nuts")
// returns all the flavors with 'Nuts'.
//[{Name: "Pistachio", type: "Nuts"}] (true)

iceCreamFlavorsObject.filter(flavor => flavor.type !== "Nuts");
// returns everything except for 'Pistachio'.

let sales = 
    [{
        date: "2023-05-01",
        amount: 2
    },
    {
        date: "2023-05-01",
        amount: 4
    },
    {
        date: "2023-05-01",
        amount: 6
    }];

let sum = 0;
for (let i = 0; i < sales.length; i++) {
    sum += sales[i].amount;    
}

sales.reduce((acc, curr) => acc + curr.amount, 0);
