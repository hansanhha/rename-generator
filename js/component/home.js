import { home } from './../element/home.js';
import { Component } from './component.js';

export class Home extends Component{

    constructor() {
        super();
        this.element = home();    
    }

    getView() {
        return `
                ${this.element}
                <a class="link" href="/name-generator/option">다음</a>
            `;
    }

    configureEvent() {
        super.configureEvent();
    }
    
}