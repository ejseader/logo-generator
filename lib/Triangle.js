const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

class Triangle {
  constructor() {
      this.text = "";
  }
  setColor(shapeColor) {
      this.text = `<polygon points="150,25 250,150 50,150" fill="${shapeColor}"/>`;
  }
  render() {
      return this.text;
  }
}

module.exports = Triangle;