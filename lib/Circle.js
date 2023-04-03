const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

class Circle {
  constructor() {
    this.text = '';
  }
  setColor(shapeColor) {
    this.text = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
  }
  render() {
    return this.text;
  }
}

module.exports = Circle;