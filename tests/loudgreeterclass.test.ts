import {LoudGreeter} from "../src/loudgreeterclass"

describe("LoudGreeter", () => {
    test("Hey you!", () => {
        let greeting: LoudGreeter = new LoudGreeter("Hey");
        expect(greeting.greet("you")).toEqual("Hey, you!!");
    });
    test("Cool to see ya, bro!", () => {
        let greeting: LoudGreeter = new LoudGreeter("Cool to see ya");
        greeting.addVolume();
        greeting.addVolume();
        expect(greeting.greet("bro")).toEqual("Cool to see ya, bro!!!!");
    });
    test("HOLY CRAP, I CAN'T BELIEVE IT, BONGUS IS HERE", () => {
        let greeting: LoudGreeter = new LoudGreeter("HOLY CRAP, I CAN'T BELIEVE IT");
        greeting.addVolume();
        greeting.addVolume();
        greeting.addVolume();
        greeting.addVolume();
        expect(greeting.greet("BONGUS IS HERE")).toEqual("HOLY CRAP, I CAN'T BELIEVE IT, BONGUS IS HERE!!!!!!");
    });
})