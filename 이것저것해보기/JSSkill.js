//debounce

let timer = null;

function debounce(execFunction, delay = 200) {
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => execFunction(...args), delay);
  };
}

//throttle
function throttle(execFunction, delay = 200) {
  return (...args) => {
    if (!timer) {
      execFunction(...args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}
