import { Home } from "./component/home.js";
import { Option } from "./component/options.js";
import { Generate } from "./component/generating.js";
import { Result } from "./component/result.js";
import { NotFound } from "./component/notFound.js";
import { setSelectOptions } from "./app.js";

let currentComponent;

const routes = [
    { path: '/', component: Home },
    { path: '/option', component: Option },
    { path: '/generating', component: Generate },
    { path: '/result', component: Result },
]

function findComponent(_pathname) {
    const pathname = _pathname ?? window.location.pathname;
    
    return routes.find(route => route.path == pathname)?.component || NotFound;
}

export function render(app, pathname) {
    const component = findComponent(pathname);
    currentComponent = new component();

    app.innerHTML = currentComponent.getView();
    currentComponent.configureEvent();
}

export function elementRender(app) {
    app.innerHTML = currentComponent.getView();

    currentComponent.configureEvent();
}

export function prevElementRender(app) {
    app.innerHTML = currentComponent.getPreView();

    currentComponent.configureEvent();
}

export function initRender(app) {
    render(app, '/');
}







