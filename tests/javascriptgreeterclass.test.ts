import {JSGreeter} from "../src/javascriptgreeterclass"

describe("JSGreeter", () => {
    test("aloha good sir", () => {
        let jsgreet: JSGreeter = new JSGreeter("aloha");
        expect(jsgreet.greet("good sir")).toEqual(`console.log("aloha, good sir!")`);
    });
    test("How's it hangin, dude!", () => {
        let jsgreet: JSGreeter = new JSGreeter("How's it hangin");
        expect(jsgreet.greet("dude")).toEqual(`console.log("How's it hangin, dude!")`);
    });
})