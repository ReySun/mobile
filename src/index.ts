import "normalize.css";
import "./css/reset.css";
import "./css/index.less";

import { $dom } from "./js/util/dom";

const headerElement = $dom("#header");
const openInAppElement = $dom("#open-in-app");
const closeOpenAppElement = $dom(".close-open-app");
const headerEmptyElement = $dom("#header-empty");
const limitHeight = parseInt(openInAppElement.css("height"));
const customInnerWidth = 1080;

document.addEventListener(
  "scroll",
  e => {
    const scrollTop = document.documentElement.scrollTop;
    const isCloseOpenApp = sessionStorage.getItem("isCloseOpenApp");
    if (isCloseOpenApp === "1") {
      toggleHeaderElement(scrollTop, 10);
      return;
    }
    toggleOpenInAppElement(scrollTop, limitHeight);
  },
  false
);

window.onload = function() {
  toggleOpenInAppElement(document.documentElement.scrollTop, limitHeight);
  isShowCloseOpenApp();
};

/**
 * 根据当前滚动高度 决定是否显示 打开京东
 * @param scrollTop
 */
function toggleOpenInAppElement(scrollTop: number, limitHeight: number = 45) {
  if (scrollTop < limitHeight) {
    showOpenInAppElement();
  } else {
    hideOpenInAppElement();
  }
}

/**
 * 显示 打开京东
 */
function showOpenInAppElement() {
  openInAppElement.css({ top: "0", opacity: 1 });
  if (window.innerWidth < customInnerWidth) {
    headerElement.css("top", "45px").css("background", "transparent");
  } else {
    headerElement.css("top", "45px").css("background", "#F63515");
  }
}

/**
 * 隐藏 打开京东
 */
function hideOpenInAppElement() {
  openInAppElement.css({ top: "-45px", opacity: 0 });
  if (parseInt(openInAppElement.css("top")) === -45) {
    headerElement.css("top", "0").css("background", "#F63515");
  } else {
    headerElement.css("top", "0").css("background", "transparent");
  }
}

function toggleHeaderElement(scrollTop: number, limitHeight: number = 10) {
  if (scrollTop < limitHeight && window.innerWidth < customInnerWidth) {
    headerElement.css("background", "transparent");
  } else {
    headerElement.css("background", "#F63515");
  }
}

closeOpenAppElement.addEventListener("click", function() {
  sessionStorage.setItem("isCloseOpenApp", "1");
  isShowCloseOpenApp();
});

function isShowCloseOpenApp() {
  const isCloseOpenApp = sessionStorage.getItem("isCloseOpenApp");
  if (isCloseOpenApp === "1") {
    hideOpenInAppElement();
    headerEmptyElement.css("display", "none");
  }
}
