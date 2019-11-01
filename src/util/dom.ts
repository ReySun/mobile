import { isType } from "./util";

class $DOM {
  private listeners: any = new Map();
  constructor() {}
  css(object: object): $DOM;
  css(property: string): string;
  css(property: string, value: string): $DOM;
  css(arg1: string | object | any, arg2?: string): $DOM | string {
    const elements = Array.prototype.slice.call(this);
    if (!elements.length) {
      return this;
    }
    switch (arguments.length) {
      case 1:
        if (isType(arg1, "String")) {
          // 获取css属性
          return this.getStyle(elements[0], arg1);
        } else if (isType(arg1, "Object")) {
          // 是单个对象 则设置css属性
          for (var key in arg1) {
            elements.forEach(element => {
              element.style[key] = arg1[key];
            });
          }
        }
        break;
      case 2:
        elements.forEach(element => {
          element.style[arg1] = arg2;
        });
        break;
      default:
        break;
    }
    return this;
  }

  /**
   * 内部使用
   * @param selector 
   */
  _init(selector: string) {
    if (!selector) {
      return this;
    }
    try {
      let firtChar = selector.charAt(0);
      let lastChars = selector.substr(1);
      if (firtChar === "#") {
        //id选择器
        let obj = document.getElementById(lastChars);
        if (obj === null) {
          return this;
        }
        Array.prototype.push.call(this, obj);
      } else {
        if (firtChar === ".") {
          //类选择器
          let objs1: any = document.getElementsByClassName(lastChars);
          Array.prototype.push.apply(this, objs1);
        } else {
          //标签选择器
          let objs2: any = document.getElementsByTagName(selector);
          Array.prototype.push.apply(this, objs2);
        }
      }
    } catch {
      return this;
    }
    // Array.prototype.push.call(this, document.querySelector(selector));
    return this;
  }

  private getStyle(dom: any, style: any) {
    //判断浏览器是否支持主流浏览器获取样式的api
    if (window.getComputedStyle) {
      return window.getComputedStyle(dom)[style];
    } else {
      //IE8浏览器兼容处理
      return dom.currentStyle[style];
    }
  }

  /**
   * 原生 addEventListener
   * todo：兼容attachEvent
   * @param eventName 事件名称
   * @param listener 回调函数
   */
  addEventListener(
    eventName: string,
    listener: Function,
    options: boolean = false
  ) {
    const elements = Array.prototype.slice.call(this);
    // debugger
    elements.forEach(element => {
      element.addEventListener(eventName, listener, options);
      if (!this.listeners.has(element)) {
        this.listeners.set(element, []);
      }
      this.listeners.get(element).push({ eventName, listener, options });
    });
    return this;
  }

  removeEventListener(eventName?: string) {
    const elements = Array.prototype.slice.call(this);
    const args = arguments;
    const _this = this;
    elements.forEach(element => {
      const events = _this.listeners.get(element);
      if (!events) {
        return;
      }
      if (args.length === 0) {
        //全部解绑
        events.forEach((event: any) => {
          element.removeEventListener(
            event.eventName,
            event.listener,
            event.options
          );
          _this.listeners.delete(element);
        });
      } else {
        events.forEach((event: any, i: number) => {
          // 解绑单个
          if (eventName === event.eventName) {
            element.removeEventListener(
              event.eventName,
              event.listener,
              event.options
            );
            delete events[i]
            // Reflect.deleteProperty(events, events[i])
          }
        });
        
      }
    });
  }
}

function $dom(selector: string) {
  return new $DOM()._init(selector);
}

export { $dom };
