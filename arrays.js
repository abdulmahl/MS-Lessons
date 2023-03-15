let pieFlavors = 
                ["Steak and Kidney", "Pepper Steak",
                "Mutton Curry", "Chicken Mushroom"];

for (let i = 0; i < pieFlavors.length; i++) {
    const pie = pieFlavors[i];
    console.log(pie)
} // This iterates through the pieFlavors array.

// While this iterates through the indexes of that array.
let i = 0;
while (i < pieFlavors.length) {
    console.log(i)
    i++;
}

pieFlavors.forEach(pie => console.log(pie)) // This loop like the for loop
// iterates throug the array of pieFlavors and returns each element contained
// therein.

pieFlavors.forEach((pie, index) => console.log(`Pie Flavor: ${pie}, Index: ${index}`)); 