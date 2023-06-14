import { notFound } from './../element/notFound.js';
import { Component } from './component.js';

export class NotFound extends Component{

    constructor() {
        super();
        this.element = notFound();
    }

    getView() {
        return `
            ${this.element}
            <a class="link" href="/name-generator/">Home</a>
        `;
    }

    configureEvent() {
        super.configureEvent();
    }
}