const status1 = 200;

if (status1 === 200) console.log("OK!");

else if (status1 === 400) console.log("Error!");

else console.log("Status Unknown");
// This code is similar to the
// one below it just uses less lines of code.

// JavaScript allows us to skip the { } if the code is single lined,
// similarly to Java and C#.

const status2 = 400;

if (status2 === 200) {
    console.log("OK!");
}

else if (status2 === 400) {
    console.log("Error!");
}

else {
    console.log("Status Unknown");
}

// And the there is a Ternary, in this case we don't need to check the 
// the condtion with an else statement.
const status3 = 200;
const message = (status3 === 204) ? "Ok!" : "Error!";
console.log(message);