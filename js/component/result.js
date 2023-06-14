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
        this.index++;
        if (this.isLastIndex()) {
            return `
                ${this.element(result.generatedNames[index])}
                ${result.ps}
                <a class="link" href="/name-generator/">Home</a>
            `;
        }

        if (index==0) {
            return `
                ${result.message}
                ${this.element(result.generatedNames[index])}
                <button class="link">다음</button>
            `;
        }

        return `
            ${this.element(result.generatedNames[index])}
            <button class="link prev">이전</button>
            <button class="link">다음</button>
        `;
        
    }

    getPreView() {
        this.index--;
        if (this.isLastIndex()) {
            return `
                ${this.element(result.generatedNames[index])}
                ${result.ps}
                <a class="link" href="/">Home</a>
            `;
        }

        if (index==0) {
            return `
                ${result.message}
                ${this.element(result.generatedNames[index])}
                <button class="link">다음</button>
            `;
        }

        return `
            ${this.element(result.generatedNames[index])}
            <button class="link prev">이전</button>
            <button class="link">다음</button>
        `;
    }

    configureEvent() {
        super.configureEvent();
        if (index > 0) {
            super.configurePreEvent();
        }
    }

    isLastIndex() {
        return this.index == result.generatedNames.length-1;
    }
}