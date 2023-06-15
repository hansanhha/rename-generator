export function resultElement(props) {
    return `
        <p>추천 이름 : ${props.name}</p>
        <p>이름의 의미 : ${props.value}</p>
        <p>gpt의 생각 : ${props.reason}</p>
    `
}