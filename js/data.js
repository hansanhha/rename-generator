/**
 * 애플리케이션 전역 변수
 * $app: 컴포넌트를 render할 DOM
 * selectOptions: 사용자가 입력한 값을 저장하는 역할
 * Result: Name 객체를 생성하고 관리하는 역할, Name 객체 배열과 기타 메시지를 보유
 * Name: gpt가 답변한 내용을 나타내는 역할
 */

export const $root = document.querySelector('#root');

export let selectOptions;

class Result {

    /**
     * generatedNames: Name 객체 배열
     * message: gpt 메시지
     * ps: gpt 추가 메시지
     */
    generatedNames = [];
    message = '';
    ps = '';

    /**
     * 
     * @param {JSON} nameDict: gpt 답변 객체 (name, value, reason)
     */
    // Name 객체 생성 후 멤버 변수 배열에 삽입
    push(_name) {
        const name = new Name(_name.name, _name.value, _name.reason);
        this.generatedNames.push(name);
    }

    setMessage(message) {
        this.message = message;
    }

    setPS(ps) {
        this.ps = ps;
    }
}

class Name {

    constructor(name, value, reason) {
        this.name = name;
        this.value = value;
        this.reason = reason;
    }
}

export const result = new Result();

export function setSelectOptions(options) {
    selectOptions = options;
    console.log(selectOptions);
}