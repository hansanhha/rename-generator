import { render, elementRender, prevElementRender } from './router.js';

const $app = document.querySelector('#app');

// 다음 버튼 클릭시 다음 component render 및 history push(pushState) 
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

// 다음 버튼 클릭시 해당 component의 다음 element render
export function nextElement() {
    const links = document.querySelectorAll('button.link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            elementRender($app);
        });
    });
}

// 이전 버튼 클릭시 해당 component의 이전 element render
export function prevElement() {
    const links = document.querySelectorAll('button.prev');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            prevElementRender($app);
        });
    });
}

function historyPush(pathname) {
    window.history.pushState(null, null, window.location.origin + pathname);
}

export function previousView() {

    window.addEventListener('popstate', () => {
        render($app);
    })
}
