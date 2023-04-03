const Circle = require("./Circle.js");
const Square = require("./Square.js");
const Triangle = require("./Triangle.js");

describe("circle" , () => {
    it("should return code that generates a circle", () => {
        const obj = new Circle();
        obj.setColor("red");
        const result = obj.render();
        expect(result).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
    })
});

describe("square" , () => {
    it("should return code that generates a square", () => {
        const obj = new Square();
        obj.setColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<rect x="50" y="0" width="200" height="200" fill="blue" />`);
    })
});

describe("triangle" , () => {
    it("should return code that generates a triangle", () => {
        const obj = new Triangle();
        obj.setColor("green");
        const result = obj.render();
        expect(result).toEqual(`<polygon points="150,25 250,150 50,150" fill="green"/>`);
    })
});