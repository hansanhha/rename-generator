import { result } from 'https://hansanhha.github.io/name-generator/js/element/result.js';
import { Component } from 'https://hansanhha.github.io/name-generator/js/component/component.js';
import { generatedNames } from 'https://hansanhha.github.io/name-generator/js/data.js';

export class Result extends Component{
    
    constructor() {
        super();
        this.index = 0;
        this.dataList = generatedNames;   
    }

    getView() {
        const element = result(dataList[index]);
        this.index++;
        if (this.isLastIndex()) {
            return `
                ${element}
                <a class="link" href="/">Home</a>
            `;
        }

        if (index==0) {
            return `
                ${element}
                <button class="link">다음</button>
            `;
        }

        return `
            ${element}
            <button class="link prev">이전</button>
            <button class="link">다음</button>
        `;
        
    }

    getPreView() {
        const element = result(dataList[index]);
        this.index--;
        if (this.isLastIndex()) {
            return `
                ${element}
                <a class="link" href="/">Home</a>
            `;
        }

        if (index==0) {
            return `
                ${element}
                <button class="link">다음</button>
            `;
        }

        return `
            ${element}
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
        return this.index == this.dataList.length;
    }
}