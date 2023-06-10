import { home } from "./views/home.js";
import { surname, gender, nameType, requiredLetter, nameNumber, namePrefer, specification } from "./views/options.js";
import { result } from "./views/result.js";
import { notFound } from "./views/notFound.js";

const routes = [
    { path: '/', view: home },
    { path: '/surname', view: surname },
    { path: '/gender', view: gender },
    { path: '/type', view: nameType },
    { path: '/required-letter', view: requiredLetter },
    { path: '/number', view: nameNumber },
    { path: '/prefer', view: namePrefer },
    { path: '/specification', view: specification },
    { path: '/result', view: result },
]



