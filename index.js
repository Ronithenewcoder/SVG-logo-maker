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
        type: 'list',
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

                const directoryPath = './examples';

                if (!fs.existsSync(directoryPath)) {
                    fs.mkdirSync(directoryPath);
                }

                const fileName = `${data.characters.replace(/\s/g, '_')}_${data.shape}.svg`;
                const filePath = `./examples/${fileName}`;

                fs.writeFile(filePath, logo, (err) => {
                    if (err) {
                        console.error(`Error writing file ${filePath}: ${err}`);
                    } else {
                        console.log('Logo saved successfully!');
                        console.log('File saved at:', filePath);
                    }
                });
            } else {
                console.error('Invalid shape selected');
            }
        })
        .catch((error) => {
            console.error(`Error during inquirer prompt: ${error}`);
        });
}

runApp();
// wrap in a function