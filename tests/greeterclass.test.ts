import {Greeter} from "../src/greeterclass"

describe("Greeter", () => {
    test("Yo, Baxter!", () => {
        let greeting1: Greeter = new Greeter("Yo");
        expect(greeting1.greet("Baxter")).toEqual("Yo, Baxter!");
    });  
    test("Hey there, Bongus!", () => {
        let greeting2: Greeter = new Greeter("Hey there");
        expect(greeting2.greet("Bongus")).toEqual("Hey there, Bongus!");
    })
})