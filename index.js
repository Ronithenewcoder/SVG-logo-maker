function init() {}

init();
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require(`./lib/shapes.js`);

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
            const shapeFunction = shapes[data.shape];
            if (shapeFunction) {
                const logo = shapeFunction(data);
                fs.writeFile(`./examples/${data.characters}.svg`, logo, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Go look at your logo!');
                    }
                });
            } else {
                console.error('shape does not exist');
            }
        });
}

runApp();
// wrap in a function