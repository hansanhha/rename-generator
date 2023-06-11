export function optionList() {
    return [
        surname(),
        gender(),
        nameType(),
        requiredLetter(),
        nameNumber(),
        preferNameCategory()
    ];
}

function surname() {
    return `
        <label for="surname">원하는 성씨를 알려주세요</label>
        <input type="text" id="surname" required>
        <button>다음</button>
    `;
}

function gender() {
    return `
        <p>어떤 성별의 이름으로 하시겠습니까?</p>
        <div>
            <input type="radio" id=gender_male name="gender" value="male" checked>
            <label for="gender_male>남성</label>
            <input type="radio" id=gender_female name="gender" value="female">
            <label for="gender_female>여성</label>
        </div>
        <button>다음</button>
    `;
}

function nameType() {
    return `
        <p>이름의 종류를 선택해주세요</p>
        <div>
            <input type="radio" id=chinese_name name="name_type" value="chinese_name" checked>
            <label for="chinese_name>한자 이름</label>
            <input type="radio" id=english_name name="name_type" value="english_name">
            <label for="english_name>영어 이름</label>
            <input type="radio" id=christ_name name="name_type" value="christ_name">
            <label for="christ_name>기독교 이름</label>
            <input type="radio" id=korean_name name="name_type" value="korean_name">
            <label for="korean_name>순우리말 이름</label>
        </div>
        <button>다음</button>
    `;
}

function requiredLetter() {
    return `
        <label for="required_letter">혹시 필수로 들어갔으면 하는 글자가 있습니까?</label>
        <input type="text" id="required_letter">
        <button>없음</button>
        <button>다음</button>
    `;
}

function nameNumber() {
    return `
        <label for="name_number">글자수는 어느정도가 적당할까요?</label>
        <input type="text" id="name_number" required>
        <button>다음</button>
    `;
}

function preferNameCategory() {
    return `
        <p>마지막입니다!</p>
        <p>어떠한 이름을 선호하시나요?</p>
        <div>
            <input type="radio" id=normal_name name="prefer_name_category" value="normal_name" checked>
            <label for="normal_name>일반적인 이름</label>
            <input type="radio" id=past_name name="prefer_name_category" value="past_name">
            <label for="past_name>과거에 자주 사용되었던 이름</label>
            <input type="radio" id=unique_name name="prefer_name_category" value="unique_name">
            <label for="unique_name>특이한 이름</label>
        </div>
        <button>다음</button>
    `;
}

export function specification() {

}
