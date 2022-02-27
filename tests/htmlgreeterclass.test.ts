import { HtmlGreeter } from "../src/htmlgreeterclass";

describe("HtmlGreeter", () => {
    test("hihihi, Kibby", () => {
        let greeting: HtmlGreeter = new HtmlGreeter("hihihi");
        expect(greeting.greet("Kibby")).toEqual("<h1> hihihi, Kibby!<h1>");
    });
    test("wattap homie", () => {
        let greeting: HtmlGreeter = new HtmlGreeter("wattap", "p");
        expect(greeting.greet("homie")).toEqual("<p> wattap, homie!<p>");
    });
    test("Konban wa, Sakura", () => {
        let greeting: HtmlGreeter = new HtmlGreeter("Konban wa", "h3");
        expect(greeting.greet("Sakura")).toEqual("<h3> Konban wa, Sakura!<h3>");
    });
})