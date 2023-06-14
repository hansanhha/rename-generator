/**
 * 애플리케이션 전역 변수
 * selectOptions: 사용자가 입력한 값을 가진 객체
 * generatedNames: Name 객체 배열
 * Name: api 요청으로 받은 데이터를 토대로 만든 이름 객체
 */

export const $app = document.querySelector('#app');

export let selectOptions;

class Result {

    generatedNames = [];
    message = '';
    ps = '';

    /**
     * 
     * @param {JSON} nameDict: gpt 답변 객체 (name, value, other)
     */
    // Name 객체 생성 후 멤버 변수 배열에 삽입
    push(nameDict) {
        const name = new Name(nameDict.name, nameDict.value);

        // gpt가 동명이인 유명인물(other)을 소개를 안해주는 경우도 있음
        if (nameDict.other !== '') {
            name.setOther(nameDict.other);
        }
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

    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
        this.other = '';
    }

    setOther(other) {
        this.other = other;
    }
}

export const result = new Result();

export function setSelectOptions(options) {
    selectOptions = options;
    console.log(selectOptions);
}

export function setGeneratedNames(names) {
    generatedNames.push(names);
}