import { home } from "./component/home.js";
import { optionList } from "./component/options.js";
import { result } from "./component/result.js";
import { notFound } from "./component/notFound.js";

const routes = [
    { path: '/', component: home },
    { path: '/option', component: optionList },
    { path: '/result', component: result },
]

function findComponent(_pathname) {
    const pathname = _pathname ?? window.location.pathname;
    
    return routes.find(route => route.path == pathname)?.component || notFound;
}

function render(app, pathname, props) {
    const component = findComponent(pathname);
    app.innerHTML = component(props);
}

function historyPush(pathname) {
    window.history.pushState(null, null, window.location.origin + pathname);
}

function initRender(app) {
    render(app, '/');
}


export { render, historyPush, initRender };






