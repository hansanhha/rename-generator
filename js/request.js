import { setGeneratedNames } from 'https://hansanhha.github.io/name-generator/js/data.js'

export function generateName(param) {

    const url = `https://estsotf-openai-api.jejucodingcamp.workers.dev/`;

    const data = [{
        role: 'user',
        content: param,
    }];

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
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