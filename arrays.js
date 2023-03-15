const print = console.log

let iceCreamFlavors = [ "Chocolate", "Strawberry", "Vanilla", "Pistacio", "Neapolitan", "Mint Chip" ];
let iceCreamFlavorsObjects = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
    ];


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