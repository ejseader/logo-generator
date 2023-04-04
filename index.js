const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');
const Triangle = require('./lib/Triangle.js');


function generateLogo({characters, textColor, shape, shapeColor} , shapeContent) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shapeContent}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
  </svg>`;

}

inquirer.prompt([
  {
      name:'characters',
      message: 'Please enter up to three characters for your logo',
      validate: function(input) {
        if (input.length <= 3) {
          return true;
       } else {
       return 'Please enter no more than three (3) characters for your logo';
      }
    } 
  },
  {
      name: 'textColor',
      message: 'Please choose a text color, either by keyword or hexcode.'
  },
  {
      name:'shape',
      type: 'list',
      message: 'What shape would you like your logo to be?',
      choices: ['circle', 'square', 'triangle'],
  },
  {
      name:'shapeColor',
      message: 'Please choose a shape color, either by keyword or hexcode.'
  }
]).then((answers) => {
  var shapeContent = '';
  if(answers.shape == 'circle') {
    const circleObj = new Circle();
    circleObj.setColor(answers.shapeColor);
    shapeContent = circleObj.render();
  } else if(answers.shape == 'square') {
    const squareObj = new Square();
    squareObj.setColor(answers.shapeColor);
    shapeContent = squareObj.render();
  } else if(answers.shape == 'triangle') {
    const triangleObj = new Triangle();
    triangleObj.setColor(answers.shapeColor);
    shapeContent = triangleObj.render();
  } else {
    console.log('Error: No shape selected');
  }
  const content = generateLogo(answers, shapeContent);
  fs.writeFile('./examples/logo.svg', content, (err) => {
    if (err) { return console.log(err); }
    
console.log('Generated logo.svg');
  });
})