export function loading(props) {
    
    if (props.requiredLetter != '') {
        return `
            <p>${props.name_type}으로 지어진 최대 ${props.nameNumber}글자 이름이고 '${props.requiredLetter}' 이(가) 포함되며, ${props.prefer_name_category} 중에서 ${props.gender}에게 어울릴만한 이름을 생각해볼게요</p>

            <p>요구사항에 충족한 이름을 생각하느라 조금 시간이 걸릴 수 있어요 !</p>
        `;
    }
    return `
        <p>${props.name_type}으로 지어진 최대 ${props.nameNumber}글자 이름이고 ${props.prefer_name_category} 중에서 ${props.gender}에게 어울릴만한 이름을 생각해볼게요</p>

        <p>요구사항에 충족한 이름을 생각하느라 조금 시간이 걸릴 수 있어요 !</p>
        
    `;
}