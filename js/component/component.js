import { prevElement, nextElement, nextView } from "../event.js"

export class Component {

    constructor() {

    }

    getView() {

    }

    configureEvent() {
        nextView();
        nextElement();
    }

    configurePreEvent() {
        prevElement();
    }
}