import { prevElement, nextElement, nextView } from "https://hansanhha.github.io/name-generator/js/event.js"

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