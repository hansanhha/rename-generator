import { loading } from './../element/loading.js';
import { Component } from './component.js';
import { selectOptions } from './../data.js';
import { generateName } from "./../request.js";

export class Generate extends Component{
    
    constructor() {
        super();
        this.element = loading(selectOptions);
    }

    getView() {
        const message = this.getRequestMessage();
        generateName(message);

        return `
            ${this.element}
        `;
    }

    configureEvent() {
        super.configureEvent();
    }

    getRequestMessage() {
        let message = `
            이제 이름을 만들어줘.
            요구사항은 다음과 같아.
            1. '${selectOptions.surname}'씨 성과 어울리는 이름을 추천해줘
            2. ${selectOptions.gender}에 어울리는 이름을 추천해줘
            3. ${selectOptions.name_type}으로 추천해줘
            4. ${selectOptions.nameNumber} 글자 이름을 이름을 추천해줘
            5. ${selectOptions.prefer_name_category}으로 추천해줘
            6. 결과는 문장은 제외하고 json으로만 해줘
        `;
        if (selectOptions.requiredLetter !== '') {
            message += `
                7. '${selectOptions.requiredLetter}'이라는 글자가 이름에 꼭 들어갔으면 좋겠어
            `
        }
        return message;
    }
}