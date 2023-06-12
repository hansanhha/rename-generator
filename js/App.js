import { initRender } from './router.js';
import { nextView } from './event.js';

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









