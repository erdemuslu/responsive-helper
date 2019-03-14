// create class
const className = `f-responsive-helper-${String(Math.floor(Math.random() * 1000))}`;

// define props
const indexArr = [];
const elements = document.querySelectorAll('body *');

// create zIndex arr
elements.forEach(item => {
  if (window.getComputedStyle(item).getPropertyValue('z-index') !== 'undefined') {
    if (!isNaN(Number(window.getComputedStyle(item).getPropertyValue('z-index')))) {
      indexArr.push(Number(window.getComputedStyle(item).getPropertyValue('z-index')));
    }
  }
});

// helper fuction: append div
const appendElement = ({ el, target }) => {
  // append
  document.querySelector(target).appendChild(el);
}

// helper fuction: create div
const createElement = (type) => {
  // create div el
  const el = document.createElement(type);
  
  // set style
  el.setAttribute(
    'style',
    `font-family: monospace !important; position: fixed; z-index: ${indexArr.length > 0 ?Number(indexArr.sort().pop()) + 1000 : 2}; top: 4px; right: 0px; background-color: lightgray; font-size: 12px; padding: 4px; color: black;`
  );
  
  // set class
  el.setAttribute(
    'class',
    className
  );

  return el;
}

// run create element helper
const el = createElement('div');

// catch resize action
window.addEventListener('resize', () => {
  // append el
  appendElement({ el, target: 'html' });

  // get window size
  const { innerWidth, innerHeight } = window;

  // render size
  el.innerHTML = `
    ${innerWidth}px
    <span style="margin: 0 4px; font-size: 10px;">x</span>
    ${innerHeight}px
  `

  // clear dom
  setTimeout(() => {
    document.querySelector(`.${className}`).remove();
  }, 2000);
});
