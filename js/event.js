import { render, elementRender, prevElementRender } from 'https://hansanhha.github.io/name-generator/js/router.js';

const $app = document.querySelector('#app');

export function nextView() {
    const links = document.querySelectorAll('a.link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const pathname = e.target.getAttribute('href');
            historyPush(pathname);
            render($app, pathname);
        });
    });
}

function historyPush(pathname) {
    window.history.pushState(null, null, window.location.origin + pathname);
}

export function nextElement() {
    const links = document.querySelectorAll('button.link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            elementRender($app);
        });
    });
}

export function prevElement() {
    const links = document.querySelectorAll('button.prev');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            prevElementRender($app);
        });
    });
}

export function previousView() {

    window.addEventListener('popstate', () => {
        render($app);
    })
}
