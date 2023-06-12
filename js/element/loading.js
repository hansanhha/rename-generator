export function loading(props) {
    if (props.requiredLetter != '') {
        return `
            <p>${props.name_type}으로 지어진 최대 ${props.nameNumber}글자 이름이고 '${props.requiredLetter}' 이(가) 포함되며, ${props.prefer_name_category} 중에서 ${props.gender}에게 어울릴만한 이름을 생각해볼게요</p>

            <p>제가 추천한 이름이 마음에 드셨으면 좋겠어요 !</p>
        `;
    }
}