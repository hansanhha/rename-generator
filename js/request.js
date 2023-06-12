import { setGeneratedNames } from 'https://hansanhha.github.io/name-generator/js/App.js'

export async function generateName(param) {

    const url = `https://estsotf-openai-api.jejucodingcamp.workers.dev/`;

    const data = [{
        role: 'user',
        content: param,
    }];

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            // setGeneratedNames(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err); 
        });
}