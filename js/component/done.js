import { Component } from "./component.js";

export class Done extends Component {

    constructor() {
        super();
    }

    getView(props) {
        return `
            <p>드디어 완성되었습니다!</p>

            <p>결과보기를 눌러주세요</p>
            <a class="link" href="/name-generator/result">결과보기</a>
        `
    }

    configureEvent() {
        super.configureEvent();
    }
}