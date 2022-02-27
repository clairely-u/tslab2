import { Greeter } from "./greeterclass";

export class HtmlGreeter extends Greeter {
    tagName?: string;
    constructor(greeting: string, tagName?: string) {
        super(greeting);
        this.tagName = tagName;
    }
    greet(name: string): string {
        return `<${this.tagName ?? "h1"}> ${this.greeting}, ${name}!<${this.tagName ?? "h1"}>`
    }
}