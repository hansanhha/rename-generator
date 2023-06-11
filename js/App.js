import { initRender } from './router.js';
import { historyPushEvent, historyPopEvent } from './historyEvent.js';

const $app = document.querySelector('#app');

initRender($app);
historyPushEvent($app);
historyPopEvent($app);








