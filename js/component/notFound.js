import { notFound } from 'https://hansanhha.github.io/name-generator/js/element/notFound.js';
import { Component } from 'https://hansanhha.github.io/name-generator/js/component/component.js';

export class NotFound extends Component{

    constructor() {
        super();
        this.element = notFound();
    }

    getView() {
        return `
            ${this.element}
            <a class="link" href="/">Home</a>
        `;
    }

    configureEvent() {
        super.configureEvent();
    }
}