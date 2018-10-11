//greeting.test.js

const greeting = require('./greeting');

test("Returns greeting with a custom name", () =>{
	expect(greeting("Mei")).toBe("Hello, Mei!");
});
