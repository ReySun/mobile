import "normalize.css";
import "./css/reset.css";
import "./css/index.less";

import { $dom } from "./js/util/dom";

const headerElement = $dom("#header");
const openInAppElement = $dom("#open-in-app");
const closeOpenApp = $dom(".close-open-app");

document.addEventListener(
  "scroll",
  e => {
    const scrollTop = document.documentElement.scrollTop;
    const isCloseOpenApp = sessionStorage.getItem('isCloseOpenApp');
    console.log(scrollTop);
    if (isCloseOpenApp === '1') {
      return;
    }
    toggleHeader(scrollTop);
  },
  false
);

window.onload = function()  {
  toggleHeader(document.documentElement.scrollTop);
  isShowCloseOpenApp();
};

/**
 * 根据当前滚动高度 决定是否显示 打开京东
 * @param scrollTop 
 */
function toggleHeader(scrollTop: number) {
  if (scrollTop < 45) {
    showOpenInAppElement()
  } else {
    hideOpenInAppElement()
  }
}

/**
 * 隐藏 打开京东
 */
function hideOpenInAppElement() {
  openInAppElement.css({top: '-45px', opacity: 0});
  headerElement.css('top', '0').css('background', '#F63515');
}

/**
 * 显示 打开京东
 */
function showOpenInAppElement() {
  openInAppElement.css({top: '0', opacity: 1});
  headerElement.css('top', '45px').css('background', 'transparent');
}

closeOpenApp.addEventListener('click', function() {
  sessionStorage.setItem('isCloseOpenApp', '1');
  isShowCloseOpenApp();
})

function isShowCloseOpenApp() {
  const isCloseOpenApp = sessionStorage.getItem('isCloseOpenApp');
  if (isCloseOpenApp === '1') {
    hideOpenInAppElement()
  }
}


