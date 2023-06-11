import { historyPush, render } from './router.js';

export function historyPushEvent() {
    const links = document.querySelectorAll('a.link');
    const $app = document.querySelector('#app');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const pathname = e.target.getAttribute('href');
            historyPush(pathname);
            render($app, pathname);
        });
    });
}

export function historyPopEvent() {
    const $app = document.querySelector('#app');

    window.addEventListener('popstate', () => {
        render($app);
    })
}
