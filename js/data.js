/**
 * 애플리케이션 전역 변수
 * selectOptions: 사용자가 입력한 값을 가진 객체
 * generatedNames: 이름 객체 배열
 * Name: api 요청으로 받은 데이터를 토대로 만든 이름 객체
 */

export let selectOptions;
export let generatedNames = [];

export class Name {

    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }

    setPerson(person) {
        this.person = person;
    }
}


export function setSelectOptions(options) {
    selectOptions = options;
    console.log(selectOptions);
}

export function setGeneratedNames(names) {
    generatedNames = names;
    console.log(generatedNames);
}