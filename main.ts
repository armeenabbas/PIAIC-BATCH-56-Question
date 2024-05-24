//#1 Question 
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
function greetPerson(name: string): void {
    const message: string = `Hello ${name}, would you like to learn some Python today?`;
    console.log(message);
}
const personname: string = "Eric";
greetPerson(personname);

//#2 Question 
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
class NameFormatter {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public toLowerCase(): string {
        return this.name.toLowerCase();
    }

    public toUpperCase(): string {
        return this.name.toUpperCase();
    }

    public toTitleCase(): string {
        return this.name.replace(/\w\S*/g, (txt: string) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    public printAllCases(): void {
        console.log(`Lowercase: ${this.toLowerCase()}`);
        console.log(`Uppercase: ${this.toUpperCase()}`);
        console.log(`Titlecase: ${this.toTitleCase()}`);
    }
}
const personName: string = "Eric Johnson";
const formatter = new NameFormatter(personName);
formatter.printAllCases();

//#3 Question 
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, “${quote}”`);

//#4 Question 
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote: string = "A person who never made a mistake never tried anything new.";
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “${quote}”`;
console.log(message);

//#5 Question 
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let nameWithWhitespace: string = "\t\n  Eric Johnson  \n\t";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
let strippedName: string = nameWithWhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(strippedName);


//#6 Question 
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition
let additionResult: number = 5 + 3;
console.log(`5 + 3 = ${additionResult}`);

// Subtraction
let subtractionResult: number = 16 - 8;
console.log(`16 - 8 = ${subtractionResult}`);

// Multiplication
let multiplicationResult: number = 4 * 2;
console.log(`4 * 2 = ${multiplicationResult}`);

// Division
let divisionResult: number = 64 / 8;
console.log(`64 / 8 = ${divisionResult}`);


//#7 Question
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let namewhitespace: string = "\t\n  Eric Johnson  \n\t";

console.log("Name with whitespace:");
console.log(namewhitespace);
let strippedname: string = namewhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(strippedname);


//#8 Question 
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(16 - 8);
console.log(4 * 2);
console.log(64 / 8);

//#9 Question 
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber: number = 7;
let message2: string = `My favorite number is ${favoriteNumber}.`;
console.log(message2);


//#10 Question 
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// This program stores a favorite number in a variable and prints a message revealing the favorite number.
let favoritenumber: number = 7;
let Message: string = `My favorite number is ${favoritenumber}.`;
console.log(Message);


//#11 Question
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ["Ali", "Bobby", "Tom", "Diana"];
names.forEach(name => {
    console.log(name);
});


//#12 Question
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names: string[] = ["Alice", "Bob", "Charlie", "Diana"];
Names.forEach(name => {
    console.log(`Hello, ${name}! Hope you have a great day!`);
});


//#13 Question
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ["Tesla Model S", "Harley-Davidson motorcycle", "Yamaha YZF-R3", "Boeing 747", "Canoe"];
transportation.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});


//#14 Question
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];


guest.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.`);
});


//#15 Question
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guests: string[] = ["Alice", "Bob", "Charlie", "Diana"];


guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

let guestWhoCantMakeIt: string = guests[2]; // Charlie can't make it
console.log(`/nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner./n`);
guests[2] = "Eve"; // Replacing Charlie with Eve
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

//#16 Question
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let Guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
Guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.`);
});
console.log("/nGreat news! I found a bigger dinner table, so I can invite more guests!/n");
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Nikola Tesla");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.`);
});


//#17 Question
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guests2: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Nikola Tesla", "Ada Lovelace"];

// Print the initial invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.`);
});


console.log("Unfortunately, my new dinner table won’t arrive in time, and I can invite only two people for dinner.");


while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Dear ${removedGuest}, I’m sorry but I can’t invite you to dinner this time.`);
    }
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner at my place. I look forward to your presence.`);
});
guests.pop();
guests.pop();
console.log("Final guest list:", guests);




