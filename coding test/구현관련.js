// 바닐라 js로 SPA를 구현
// history.pushState/history.replaceState 를 사용하여 url 을 변경
// popstate 이벤트(이전 페이지로 이동하는 이벤트)에도 대응해주어야 함

/*
기본 형태 - history.pushState(state, title, url);
State : 브라우저 이동 시 넘겨줄 데이터 (popstate 에서 받아서 원하는 처리를 해줄 수 있음)
Title : 변경할 브라우저 제목 (변경 원치 않으면 null)
Url : 변경할 주소
정보는 history.state로 접근할 수 있음
*/

let { pathname } = location;

const order = () => {
  pathname = "/web/cart";
  history.pushState(null, null, pathname);
};

window.onload = function () {
  order();
};

window.onpopstate = function (event) {
  order();
};
