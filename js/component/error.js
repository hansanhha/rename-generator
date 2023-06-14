import { Component } from "./component.js";
import { error } from './../element/error.js';

export class Error extends Component {

    constructor() {
        super();
        this.element = error();
    }

    getView() {
        return `
            ${this.element}
            <a class="link" href="/">결과보기</a>
        `
    }

    configureEvent() {
        super.configureEvent();
    }
}