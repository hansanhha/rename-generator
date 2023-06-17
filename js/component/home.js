import { home } from './../element/home.js';

export class Home extends Component{

    constructor() {
        super();
    }

    getView(props) {
        return `
            <p>어서오세요! 이것은 당신을 위한 이름을 추천해주는 생성기입니다</p>
            <p>만족하실 이름을 생성하기 위해 GPT에게 몇 가지 정보를 알려줘야 합니다</p>
            <a class="link" href="/name-generator/option">다음</a>
        `;
    }

    configureEvent() {
        super.configureEvent();
    }
    
}