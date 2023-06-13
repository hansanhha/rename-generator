import { prevElement, nextElement, nextView } from "./../event.js"

export class Component {

    constructor() {

    }

    // element 응답
    getView() {

    }

    // element의 다음 버튼 이벤트 등록
    configureEvent() {
        nextView();
        nextElement();
    }

    // element의 이전 버튼 이벤트 등록
    configurePreEvent() {
        prevElement();
    }
}