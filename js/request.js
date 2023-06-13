import { setGeneratedNames, Name } from './data.js';

let url = `https://estsotf-openai-api.jejucodingcamp.workers.dev/`;

// api 사용 후 데이터 가공
export function generateName(param) {

    const url = `https://estsotf-openai-api.jejucodingcamp.workers.dev/`;

    const data = [{
        role: 'user',
        content: param,
    }];

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        redirect: 'follow',
        credentials: 'include',
        referrerPolicy: 'same-origin',
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            result = extractData(data);
            // setGeneratedNames(result);
        })
        .catch(err => {
            console.log(err); 
        });
}

function extractData(data) {

}