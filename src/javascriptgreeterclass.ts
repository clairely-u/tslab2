import {Greeter} from "../src/greeterclass"

export class JSGreeter extends Greeter {
    greet(name: string): string {
        return `console.log("${this.greeting}, ${name}!")`
    }
}