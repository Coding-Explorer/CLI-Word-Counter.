#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright(`\n\n\t WELCOME TO THE CURRENCY CONVERTOR BY RABI KHAN\n\t`));

//Declaring a constant of 'answers' and assigning it to the result of inquirer.prompt function.

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words properly:"
    }
])

const words = answers.Sentence.trim().split(" ")


// Now implementing the step of printing the array of words to the console.
console.log(words);


// Finally printing the word count of the sentence to the console.
console.log(`Your sentence word count is ${words.length}`);
console.log(chalk.red(`\n\t Thank You For Using The Application, Have A Good Day See You Next Time!!`));