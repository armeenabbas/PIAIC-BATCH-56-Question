//#1 Question 
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// function greetPerson(name: string): void {
//     const message: string = `Hello ${name}, would you like to learn some Python today?`;
//     console.log(message);
// }
// const personName: string = "Eric";
// greetPerson(personName);
//#2 Question 
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var NameFormatter = /** @class */ (function () {
    function NameFormatter(name) {
        this.name = name;
    }
    NameFormatter.prototype.toLowerCase = function () {
        return this.name.toLowerCase();
    };
    NameFormatter.prototype.toUpperCase = function () {
        return this.name.toUpperCase();
    };
    NameFormatter.prototype.toTitleCase = function () {
        return this.name.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    NameFormatter.prototype.printAllCases = function () {
        console.log("Lowercase: ".concat(this.toLowerCase()));
        console.log("Uppercase: ".concat(this.toUpperCase()));
        console.log("Titlecase: ".concat(this.toTitleCase()));
    };
    return NameFormatter;
}());
var personName = "Eric Johnson";
var formatter = new NameFormatter(personName);
formatter.printAllCases();
//#3 Question 
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, “${quote}”`);
//#4 Question 
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var quote = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \u201C").concat(quote, "\u201D");
console.log(message);
//#5 Question 
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var nameWithWhitespace = "\t\n  Eric Johnson  \n\t";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
var strippedName = nameWithWhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(strippedName);
//#5 Question 
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition
var additionResult = 5 + 3;
console.log("5 + 3 = ".concat(additionResult));
// Subtraction
var subtractionResult = 16 - 8;
console.log("16 - 8 = ".concat(subtractionResult));
// Multiplication
var multiplicationResult = 4 * 2;
console.log("4 * 2 = ".concat(multiplicationResult));
// Division
var divisionResult = 64 / 8;
console.log("64 / 8 = ".concat(divisionResult));
//#6 Question 
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(16 - 8);
console.log(4 * 2);
console.log(64 / 8);
//#7 Question 
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// Store your favorite number in a variable
var favoriteNumber = 7;
// Create a message that reveals your favorite number
var message2 = "My favorite number is ".concat(favoriteNumber, ".");
// Print the message
console.log(message2);
