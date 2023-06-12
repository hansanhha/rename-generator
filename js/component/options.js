import { optionList } from 'https://hansanhha.github.io/name-generator/js/element/options.js';
import { Component } from 'https://hansanhha.github.io/name-generator/js/component/component.js';
import { setSelectOptions } from 'https://hansanhha.github.io/name-generator/js/App.js';

export class Option extends Component{
    
    constructor() {
        super();
        this.index = 0;
        this.elements = optionList();
        this.selectOptions = {};    
    }

    getView() {
        const element = this.elements[this.index];
        this.index++;
        if (this.isLastIndex()) {
            return `
                ${element}
                <a class="link" href="/generating">다음</a>
            `;
        }
        return `
            ${element}
            <button class="option link">다음</button>
        `;
    }

    configureEvent() {
        if (this.isLastIndex()) {
            this.optionSaveAchorEvent();
        } else {
            this.optionSaveBtnEvent();
        }
        super.configureEvent();
        
    }

    optionSaveBtnEvent() {
        const button = document.querySelector('button.option');
        button.addEventListener('click', () => {
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                const subject = input.getAttribute('name');
                const value = input.value;
                if (input.type === 'radio') {
                    if (input.checked) {
                        this.selectOptions[subject] = value;
                    }
                } else {
                    this.selectOptions[subject] = value;
                }
            })
        });
    }

    optionSaveAchorEvent() {
        const anchor = document.querySelector('a.link');
        anchor.addEventListener('click', () => {
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                const subject = input.getAttribute('name');
                const value = input.value;
                if (input.checked) {
                    this.selectOptions[subject] = value;
                }
            });
            setSelectOptions(this.selectOptions);
        });
    }

    isLastIndex() {
        return this.index == this.elements.length;
    }
}