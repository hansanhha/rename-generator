import { home } from "./views/home.js";
import { optionList, specification } from "./views/options.js";
import { result } from "./views/result.js";
import { notFound } from "./views/notFound.js";

const routes = [
    { path: '/', view: home },
    { path: '/option', view: optionList },
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

function historyPush(pathname) {
    window.history.pushState(null, null, window.location.origin + pathname);
}

function initRender(el) {
    render(el, '/');
}


export { render, historyPush, initRender };






