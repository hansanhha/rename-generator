import { setGeneratedNames } from './app.js'

export async function generateName(param) {

    const url = `https://estsotf-openapi-api.jejucodingcamp.workers.dev/`;

    const data = {
        role: 'user',
        content: param,
    };

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            setGeneratedNames(data);
        })
}