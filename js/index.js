import { initRender } from './router.js';
import { nextView, previousView } from './event.js';
import { $root } from './data.js';

initRender($root);
nextView();
previousView();

// router.js: path마다 render 담당
// event.js: button, a 이벤트, historyAPI 등록
// data.js: 애플리케이션 전역 변수 선언

// element/: 순수 html 요소 반환 (template literal 사용) 
// component/: element + 추가 요소(기능) 반환 (path별 실제 render되는 HTML 내용 및 이벤트)

// 전체 흐름 
// render: button/a 클릭 -> router -> component -> element -> render
// gpt 요청: generating component -> request.js
// 답변 내용 render: request.js (데이터 가공) -> result component








