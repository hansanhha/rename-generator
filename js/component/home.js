import { home } from 'https://hansanhha.github.io/name-generator/js/element/home.js';
import { Component } from 'https://hansanhha.github.io/name-generator/js/component/component.js';

export class Home extends Component{

    constructor() {
        super();
        this.element = home();    
    }

    getView() {
        return `
                ${this.element}
                <a class="link" href="/option">다음</a>
            `;
    }

    configureEvent() {
        super.configureEvent();
    }
    
}