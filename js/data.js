export let selectOptions;
export let generatedNames = [];

export function setSelectOptions(options) {
    selectOptions = options;
    console.log(selectOptions);
}

export function setGeneratedNames(names) {
    generatedNames = names;
    console.log(generatedNames);
}