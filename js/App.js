import { initRender } from './router.js';
import { nextView, previousView } from './event.js';
import { $app } from './data.js';

initRender($app);
nextView();
previousView();

// router: path마다 render 담당
// element[props]: 순수 html 요소 반환 (template literal) 
// component: element + 추가 요소(기능) 반환

// 전체 흐름 button -> router(component,element) -> render 
// gpt 사용: generating component -> request.js -> result component








