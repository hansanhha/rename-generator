import { Component } from "./component.js";
import { done } from './../element/done.js';

export class Done extends Component {

    constructor() {
        super();
        this.element = done();
    }

    getView() {
        return `
            ${this.element};
            <a class="link" href="/name-generator/result">결과보기</a>
        `
    }

    configureEvent() {
        super.configureEvent();
    }
}