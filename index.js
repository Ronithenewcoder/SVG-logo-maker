function init() {}

init();
const myModule = require('./index');
const inquirer = require('inquirer');
const fs = require('fs');
const circle = require(`./lib/shapes.js`);

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'type in 3 characters you want on your logo',
    },
    {
        type:'input',
        name: 'textColor',
        message: 'type in the color for the text color',
    },
    {
        type: 'choice',
        name: 'shape',
        message: 'triangle, circle, square',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'type in the color you want for the shape color',
    },


];
function runApp() {
    return inquirer.prompt(questions)
        .then((data) => {
        const logo = circle(data)
        fs.writeFile(`./examples/${data.characters}.svg`, logo, function(err){
            if (err) {
                console.log(err)
            } else {console.log('go look at your logo!')
        }
        })}

    )}

runApp()  

// wrap in a function