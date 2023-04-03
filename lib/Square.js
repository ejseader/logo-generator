const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

class Square {
  constructor() {
      this.text = "";
  }
  setColor(shapeColor) {
      this.text = `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />`;
  }
  render() {
      return this.text;
  }
}

module.exports = Square;