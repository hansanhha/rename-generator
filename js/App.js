import { initRender } from './router.js';
import { nextView, previousView } from './event.js';

const $app = document.querySelector('#app');

initRender($app);
nextView();
previousView();

// 전체 흐름 router -> component -> element
// gpt 사용 : generating component -> request.js -> result component








