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

function findView(_pathname) {
    const pathname = _pathname ?? window.location.pathname;
    
    return routes.find(route => route.path == pathname)?.view || notFound;
}

function render(el, pathname) {
    const view = findView(pathname);
    el.innerHTML = view();
}

function initRoute(el) {
    render(el, '/');
}

function historyPush(pathname) {
    window.history.pushState(null, null, window.location.origin + pathname);
}

function hisotryPop(el) {
    render(el);
}

export { initRoute, historyPush, hisotryPop };






