import { initRender } from 'https://hansanhha.github.io/name-generator/js/router.js';
import { nextView } from 'https://hansanhha.github.io/name-generator/js/event.js';

const $app = document.querySelector('#app');
export let selectOptions;
export let generatedNames;

export function setSelectOptions(options) {
    selectOptions = options;
    console.log(selectOptions);
}

export function setGeneratedNames(names) {
    generatedNames = names;
    console.log(generatedNames);
} 

initRender($app);
nextView();









