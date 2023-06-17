import { Component } from "./component.js";

export class Error extends Component {

    constructor() {
        super();
    }

    getView(props) {
        return `
            <p>서버 상의 문제로 인해 오류가 발생했어요</p>
            <p>오래 기다리셨을텐데 죄송해요</p>
            <a class="link" href="/name-generator/">Home</a>
        `
    }

    configureEvent() {
        super.configureEvent();
    }
}