

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

module.exports = {
  Circle,
  Square,
  Triangle
}