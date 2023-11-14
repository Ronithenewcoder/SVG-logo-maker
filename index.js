const inquirer = require('inquirer');
const fs = require('fs');

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
            } else {console.log('success!go look at your logo!')
        }
        })}

    )}

runApp()  