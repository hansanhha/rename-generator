import { Component } from './component.js';

export class NotFound extends Component{

    constructor() {
        super();
    }

    getView(props) {
        return `
            <p>404 Not Found</p>
            <a class="link" href="/name-generator/">Home</a>
        `;
    }

    configureEvent() {
        super.configureEvent();
    }
}