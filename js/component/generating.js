import { loading } from '../element/loading.js';
import { Component } from './component.js';
import { selectOptions, setGeneratedNames } from '../app.js';
import { generateName } from "../request.js";

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
            <a class="link" href="/result">결과보기</a>
        `;
    }

    configureEvent() {
        super.configureEvent();
    }

    getRequestMessage() {
        return `
            내가 이름을 개명하려고 하는데 이름을 추천해줘
            다음과 같은 요구사항을 만족해줘
            1. 5개의 이름을 추천해줘
            2. 다음과 같은 형식으로 답변을 줘
            [[추천이름, 이름에 담긴 뜻, 이름을 사용하고 있는 유명인물(선택사항이야. 만약 있다면 넣어줘)], [...]]
            3. 성씨는 ${selectOptions.surname}이야
            4. 성별은 ${selectOptions.gender}이야
            5. ${selectOptions.nameType}을 만들어줘
            6. '${selectOptions.requiredLetter}' 글자가 꼭 들어갔으면 좋겠어
            7. ${selectOptions.nameNumber} 글자 이름을 만들어줘
            8. ${selectOptions.prefer_name_category}으로 만들어줘
        `
    }
}