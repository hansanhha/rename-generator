import { resultElement } from './../element/result.js';
import { Component } from './component.js';
import { result } from './../data.js';

export class Result extends Component{
    
    constructor() {
        super();
        this.index = 0;   
        this.element = resultElement;
    }

    getView() {
        if (this.isLastIndex()) {
            return `
                ${this.element(result.generatedNames[this.index])}
                ${result.ps}
                <a class="link" href="/name-generator/">Home</a>
            `;
        }

        if (this.index==0) {
            return `
                ${result.message}
                ${this.element(result.generatedNames[this.index++])}
                <button class="link">다음</button>
            `;
        }

        return `
            ${this.element(result.generatedNames[this.index++])}
            <button class="link prev">이전</button>
            <button class="link">다음</button>
        `;
        
    }

    getPreView() {

        if (this.index==0) {
            return `
                ${result.message}
                ${this.element(result.generatedNames[this.index])}
                <button class="link">다음</button>
            `;
        }

        return `
            ${this.element(result.generatedNames[this.index--])}
            <button class="link prev">이전</button>
            <button class="link">다음</button>
        `;
    }

    configureEvent() {
        super.configureEvent();
        if (this.index > 0) {
            super.configurePreEvent();
        }
    }

    isLastIndex() {
        return this.index == result.generatedNames.length-1;
    }
}