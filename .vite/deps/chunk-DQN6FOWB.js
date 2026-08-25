import {
  Percent
} from "./chunk-ADBD2CA7.js";
import {
  Disposer,
  DisposerClass,
  each,
  each2,
  indexOf,
  isNumber,
  isString
} from "./chunk-5KHT33KU.js";
import {
  __awaiter
} from "./chunk-A44PNKPT.js";
import {
  __export
} from "./chunk-3F74YA3Z.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  StyleRule: () => StyleRule,
  StyleSheet: () => StyleSheet,
  addClass: () => addClass,
  addEventListener: () => addEventListener,
  addSpacing: () => addSpacing,
  alternativeColor: () => alternativeColor,
  blur: () => blur,
  brighten: () => brighten,
  capitalizeFirst: () => capitalizeFirst,
  cleanFormat: () => cleanFormat,
  contains: () => contains,
  decimalPlaces: () => decimalPlaces,
  escapeForRgex: () => escapeForRgex,
  focus: () => focus,
  get12Hours: () => get12Hours,
  getBrightnessStep: () => getBrightnessStep,
  getDayFromWeek: () => getDayFromWeek,
  getEventKey: () => getEventKey,
  getEventTarget: () => getEventTarget,
  getFormat: () => getFormat,
  getLightnessStep: () => getLightnessStep,
  getMonthWeek: () => getMonthWeek,
  getPointerId: () => getPointerId,
  getRendererEvent: () => getRendererEvent,
  getSafeResolution: () => getSafeResolution,
  getShadowRoot: () => getShadowRoot,
  getStyle: () => getStyle,
  getTimeZone: () => getTimeZone,
  getTimezoneOffset: () => getTimezoneOffset,
  getWeek: () => getWeek,
  getWeekYear: () => getWeekYear,
  getYearDay: () => getYearDay,
  hslToHsv: () => hslToHsv,
  hslToRgb: () => hslToRgb,
  hsvToHsl: () => hsvToHsl,
  iOS: () => iOS,
  isLight: () => isLight,
  isLocalEvent: () => isLocalEvent,
  isTouchEvent: () => isTouchEvent,
  lighten: () => lighten,
  mergeTags: () => mergeTags,
  onZoom: () => onZoom,
  padString: () => padString,
  plainText: () => plainText,
  ready: () => ready,
  relativeToValue: () => relativeToValue,
  removeClass: () => removeClass,
  removeElement: () => removeElement,
  rgbToHsl: () => rgbToHsl,
  sameBounds: () => sameBounds,
  saturate: () => saturate,
  setInteractive: () => setInteractive,
  setStyle: () => setStyle,
  splitString: () => splitString,
  stripTags: () => stripTags,
  supports: () => supports,
  trim: () => trim,
  trimLeft: () => trimLeft,
  trimRight: () => trimRight,
  truncateTextWithEllipsis: () => truncateTextWithEllipsis
});
function ready(f) {
  if (document.readyState !== "loading") {
    f();
  } else {
    const listener = () => {
      if (document.readyState !== "loading") {
        document.removeEventListener("readystatechange", listener);
        f();
      }
    };
    document.addEventListener("readystatechange", listener);
  }
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function addEventListener(dom, type, listener, options) {
  dom.addEventListener(type, listener, options || false);
  return new Disposer(() => {
    dom.removeEventListener(type, listener, options || false);
  });
}
function onZoom(listener) {
  return addEventListener(window, "resize", (_ev) => {
    listener();
  });
}
function supports(cap) {
  switch (cap) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return false;
}
function getPointerId(event) {
  let id = event.pointerId || 0;
  return id;
}
function blur() {
  if (document.activeElement && document.activeElement != document.body) {
    if (document.activeElement.blur) {
      document.activeElement.blur();
    } else {
      let input = document.createElement("button");
      input.style.position = "fixed";
      input.style.top = "0px";
      input.style.left = "-10000px";
      document.body.appendChild(input);
      input.focus();
      input.blur();
      document.body.removeChild(input);
    }
  }
}
function focus(el) {
  if (el) {
    el.focus();
  }
}
function getRendererEvent(key) {
  if (supports("pointerevents")) {
    return key;
  } else if (supports("touchevents")) {
    switch (key) {
      case "pointerover":
        return "touchstart";
      case "pointerout":
        return "touchend";
      case "pointerleave":
        return "touchend";
      case "pointerdown":
        return "touchstart";
      case "pointermove":
        return "touchmove";
      case "pointerup":
        return "touchend";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  } else if (supports("mouseevents")) {
    switch (key) {
      case "pointerover":
        return "mouseover";
      case "pointerout":
        return "mouseout";
      case "pointerleave":
        return "mouseleave";
      case "pointerdown":
        return "mousedown";
      case "pointermove":
        return "mousemove";
      case "pointerup":
        return "mouseup";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  }
  return key;
}
function isTouchEvent(ev) {
  if (typeof Touch !== "undefined" && ev instanceof Touch) {
    return true;
  } else if (typeof PointerEvent !== "undefined" && ev instanceof PointerEvent && ev.pointerType != null) {
    switch (ev.pointerType) {
      case "touch":
      case "pen":
      case 2:
        return true;
      case "mouse":
      case 4:
        return false;
      default:
        return !(ev instanceof MouseEvent);
    }
  } else if (ev.type != null) {
    if (ev.type.match(/^mouse/)) {
      return false;
    }
  }
  return true;
}
function setStyle(dom, property, value) {
  dom.style[property] = value;
}
function getStyle(dom, property) {
  return dom.style[property];
}
function getEventTarget(event) {
  if (event.composedPath) {
    const path = event.composedPath();
    if (path.length === 0) {
      return null;
    } else {
      return path[0];
    }
  } else {
    return event.target;
  }
}
function contains(a, b) {
  let cursor = b;
  while (true) {
    if (a === cursor) {
      return true;
    } else if (cursor.parentNode === null) {
      if (cursor.host == null) {
        return false;
      } else {
        cursor = cursor.host;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
function isLocalEvent(event, target) {
  return event.target && contains(target.root.dom, event.target);
}
function setInteractive(target, interactive) {
  if (interactive) {
    target.style.pointerEvents = "auto";
  } else {
    target.style.pointerEvents = "none";
  }
}
function getEventKey(event) {
  if (event.key !== void 0) {
    return event.key;
  }
  switch (event.keyCode) {
    case 9:
      return "Tab";
    case 13:
      return "Enter";
    case 16:
      return "Shift";
    case 17:
      return "Control";
    case 27:
      return "Escape";
    case 32:
      return " ";
    case 37:
      return "ArrowLeft";
    case 38:
      return "ArrowUp";
    case 39:
      return "ArrowRight";
    case 40:
      return "ArrowDown";
    case 46:
      return "Delete";
  }
  return "" + event.keyCode;
}
function getShadowRoot(a) {
  let cursor = a;
  while (true) {
    if (cursor.parentNode === null) {
      if (cursor.host != null) {
        return cursor;
      } else {
        return null;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
var rootStylesheet;
function createStylesheet(element, text, nonce = "") {
  const e = document.createElement("style");
  e.type = "text/css";
  if (nonce != "") {
    e.setAttribute("nonce", nonce);
  }
  e.textContent = text;
  if (element === null) {
    document.head.appendChild(e);
  } else {
    element.appendChild(e);
  }
  return e;
}
function getStylesheet(element, nonce = "") {
  if (element === null) {
    if (rootStylesheet == null) {
      const e = document.createElement("style");
      e.type = "text/css";
      if (nonce != "") {
        e.setAttribute("nonce", nonce);
      }
      document.head.appendChild(e);
      rootStylesheet = e.sheet;
    }
    return rootStylesheet;
  } else {
    const e = document.createElement("style");
    e.type = "text/css";
    if (nonce != "") {
      e.setAttribute("nonce", nonce);
    }
    element.appendChild(e);
    return e.sheet;
  }
}
function appendStylesheet(root, selector) {
  const index = root.cssRules.length;
  root.insertRule(selector + "{}", index);
  return root.cssRules[index];
}
var StyleRule = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param selector  CSS selector
   * @param styles    An object of style attribute - value pairs
   */
  constructor(element, selector, styles, nonce = "") {
    super();
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rule", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._root = getStylesheet(element, nonce);
    try {
      this._rule = appendStylesheet(this._root, selector);
    } catch (err) {
      this._rule = appendStylesheet(this._root, ":not(*)");
    }
    each2(styles, (key, value) => {
      this.setStyle(key, value);
    });
  }
  /**
   * A CSS selector text.
   *
   * E.g.: `.myClass p`
   *
   * @param selector  CSS selector
   */
  set selector(selector) {
    this._rule.selectorText = selector;
  }
  /**
   * @return CSS selector
   */
  get selector() {
    return this._rule.selectorText;
  }
  // TODO test this
  _dispose() {
    const index = indexOf(this._root.cssRules, this._rule);
    if (index === -1) {
      throw new Error("Could not dispose StyleRule");
    } else {
      this._root.deleteRule(index);
    }
  }
  /**
   * Sets the same style properties with browser-specific prefixes.
   *
   * @param name   Attribute name
   * @param value  Attribute value
   */
  _setVendorPrefixName(name, value) {
    const style = this._rule.style;
    style.setProperty("-webkit-" + name, value, "");
    style.setProperty("-moz-" + name, value, "");
    style.setProperty("-ms-" + name, value, "");
    style.setProperty("-o-" + name, value, "");
    style.setProperty(name, value, "");
  }
  /**
   * Sets a value for specific style attribute.
   *
   * @param name   Attribute
   * @param value  Value
   */
  setStyle(name, value) {
    if (name === "transition") {
      this._setVendorPrefixName(name, value);
    } else {
      this._rule.style.setProperty(name, value, "");
    }
  }
};
var StyleSheet = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param text  CSS stylesheet
   */
  constructor(element, text, nonce = "") {
    super();
    Object.defineProperty(this, "_element", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._element = createStylesheet(element, text, nonce);
  }
  _dispose() {
    if (this._element.parentNode) {
      this._element.parentNode.removeChild(this._element);
    }
  }
};
function addClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    const classes = className.split(" ");
    each(classes, (name) => {
      element.classList.add(name);
    });
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" ") + " " + className);
    } else {
      element.setAttribute("class", className);
    }
  }
}
function removeClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    element.classList.remove(className);
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" "));
    }
  }
}
function iOS() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function getSafeResolution() {
  return iOS() ? 1 : void 0;
}
function relativeToValue(percent, full) {
  if (isNumber(percent)) {
    return percent;
  } else if (percent != null && isNumber(percent.value) && isNumber(full)) {
    return full * percent.value;
  } else {
    return 0;
  }
}
function decimalPlaces(number) {
  let match = ("" + number).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}
function padString(value, len = 0, char = "0") {
  if (typeof value !== "string") {
    value = value.toString();
  }
  return len > value.length ? Array(len - value.length + 1).join(char) + value : value;
}
function trimLeft(text) {
  return text.replace(/^[\s]*/, "");
}
function trimRight(text) {
  return text.replace(/[\s]*$/, "");
}
function trim(text) {
  return trimLeft(trimRight(text));
}
function truncateTextWithEllipsis(text, maxLength, breakWords = false, ellipsis = "...") {
  if (text.length > maxLength) {
    let lastNonAlphanumericIndex = maxLength - 1;
    while (lastNonAlphanumericIndex >= 0 && text.charAt(lastNonAlphanumericIndex).match(/\w/)) {
      lastNonAlphanumericIndex--;
    }
    if (lastNonAlphanumericIndex >= 0 && breakWords == false) {
      return text.substring(0, lastNonAlphanumericIndex + 1) + "...";
    } else {
      return text.substring(0, maxLength) + ellipsis;
    }
  } else {
    return text;
  }
}
function getFormat(format) {
  if (typeof format === "undefined") {
    return "string";
  }
  format = format.toLowerCase().replace(/^\[[^\]]*\]/, "");
  format = format.replace(/\[[^\]]+\]/, "");
  format = format.trim();
  let hints = format.match(/\/(date|number|duration)$/);
  if (hints) {
    return hints[1];
  }
  if (format === "number") {
    return "number";
  }
  if (format === "date") {
    return "date";
  }
  if (format === "duration") {
    return "duration";
  }
  if (format.match(/[#0]/)) {
    return "number";
  }
  if (format.match(/[ymwdhnsqaxkzgtei]/)) {
    return "date";
  }
  return "string";
}
function cleanFormat(format) {
  return format.replace(/\/(date|number|duration)$/i, "");
}
function stripTags(text) {
  return text ? text.replace(/<[^>]*>/g, "") : text;
}
function plainText(text) {
  return text ? stripTags(("" + text).replace(/[\n\r]+/g, ". ")) : text;
}
function escapeForRgex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function addSpacing(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char.toUpperCase() == char && i != 0) {
      result += " ";
    }
    result += char;
  }
  return result;
}
function splitString(source) {
  const rtlChar = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const splitPattern = /([^اأدذرزو]*[اأدذرزو])/gi;
  let segments = source.split(/(\s+)/);
  let result = [];
  segments.forEach((segment) => {
    if (segment.match(/^\s+$/)) {
      if (segment = " ") {
        segment = "  ";
      }
      result.push(segment);
    } else if (rtlChar.test(segment)) {
      let parts = segment.split(splitPattern).filter((part) => part !== "");
      result = result.concat(parts);
    } else {
      result = result.concat([...segment]);
    }
  });
  return result;
}
function getYearDay(date, utc = false) {
  utc;
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1e3;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
function getWeek(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - firstDay.getTime()) / 864e5 + 1) / 7);
}
function getWeekYear(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return firstDay.getFullYear();
}
function getMonthWeek(date, utc = false) {
  const firstWeek = getWeek(new Date(date.getFullYear(), date.getMonth(), 1), utc);
  let currentWeek = getWeek(date, utc);
  if (currentWeek == 1) {
    currentWeek = 53;
  }
  return currentWeek - firstWeek + 1;
}
function getDayFromWeek(week, year, weekday = 1, utc = false) {
  let date = new Date(year, 0, 4, 0, 0, 0, 0);
  if (utc) {
    date.setUTCFullYear(year);
  }
  let day = week * 7 + weekday - ((date.getDay() || 7) + 3);
  return day;
}
function get12Hours(hours, base) {
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return base != null ? hours + (base - 1) : hours;
}
function getTimeZone(date, long = false, savings = false, utc = false, timezone) {
  if (utc) {
    return long ? "Coordinated Universal Time" : "UTC";
  } else if (timezone) {
    const d1 = date.toLocaleString("en-US", { timeZone: timezone });
    const d2 = date.toLocaleString("en-US", { timeZone: timezone, timeZoneName: long ? "long" : "short" });
    return trim(d2.substr(d1.length));
  }
  let wotz = date.toLocaleString("UTC");
  let wtz = date.toLocaleString("UTC", { timeZoneName: long ? "long" : "short" }).substr(wotz.length);
  if (savings === false) {
    wtz = wtz.replace(/ (standard|daylight|summer|winter) /i, " ");
  }
  return trim(wtz);
}
function getTimezoneOffset(timezone, targetDate) {
  const date = targetDate || new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0));
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
  return (tzDate.getTime() - utcDate.getTime()) / 6e4 * -1;
}
function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function hslToRgb(color2) {
  let r, g, b;
  let h = color2.h;
  let s = color2.s;
  let l = color2.l;
  if (s == 0) {
    r = g = b = l;
  } else {
    let hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p2 + (q2 - p2) * 6 * t;
      }
      if (t < 1 / 2) {
        return q2;
      }
      if (t < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      }
      return p2;
    };
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function rgbToHsl(color2) {
  let r = color2.r / 255;
  let g = color2.g / 255;
  let b = color2.b / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l
  };
}
function hsvToHsl(hsv) {
  const l = hsv.v * (1 - hsv.s / 2);
  const s = l === 0 || l === 1 ? 0 : (hsv.v - l) / Math.min(l, 1 - l);
  return {
    h: hsv.h,
    s,
    l,
    a: hsv.a
  };
}
function hslToHsv(hsl) {
  const v = hsl.l + hsl.s * Math.min(hsl.l, 1 - hsl.l);
  const s = v === 0 ? 0 : 2 * (1 - hsl.l / v);
  return {
    h: hsl.h,
    s,
    v,
    a: hsl.a
  };
}
function lighten(rgb, percent) {
  if (rgb) {
    return {
      r: Math.max(0, Math.min(255, rgb.r + getLightnessStep(rgb.r, percent))),
      g: Math.max(0, Math.min(255, rgb.g + getLightnessStep(rgb.g, percent))),
      b: Math.max(0, Math.min(255, rgb.b + getLightnessStep(rgb.b, percent))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getLightnessStep(value, percent) {
  let base = percent > 0 ? 255 - value : value;
  return Math.round(base * percent);
}
function brighten(rgb, percent) {
  if (rgb) {
    let base = Math.min(Math.max(rgb.r, rgb.g, rgb.b), 230);
    let step = getLightnessStep(base, percent);
    return {
      r: Math.max(0, Math.min(255, Math.round(rgb.r + step))),
      g: Math.max(0, Math.min(255, Math.round(rgb.g + step))),
      b: Math.max(0, Math.min(255, Math.round(rgb.b + step))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getBrightnessStep(_value, percent) {
  let base = 255;
  return Math.round(base * percent);
}
function isLight(color2) {
  return (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1e3 >= 128;
}
function saturate(rgb, saturation) {
  if (rgb === void 0 || saturation == 1) {
    return rgb;
  }
  let hsl = rgbToHsl(rgb);
  hsl.s = saturation;
  return hslToRgb(hsl);
}
function alternativeColor(color2, lightAlternative = { r: 255, g: 255, b: 255 }, darkAlternative = { r: 255, g: 255, b: 255 }) {
  let light = lightAlternative;
  let dark = darkAlternative;
  if (isLight(darkAlternative)) {
    light = darkAlternative;
    dark = lightAlternative;
  }
  return isLight(color2) ? dark : light;
}
function mergeTags(tags1, tags2) {
  if (!tags1) {
    tags1 = [];
  }
  return [...tags1, ...tags2].filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
function sameBounds(a, b) {
  if (!b) {
    return false;
  }
  if (a.left != b.left) {
    return false;
  }
  if (a.right != b.right) {
    return false;
  }
  if (a.top != b.top) {
    return false;
  }
  if (a.bottom != b.bottom) {
    return false;
  }
  return true;
}

// node_modules/@amcharts/amcharts5/.internal/core/util/Animation.js
function waitForAnimations(animations) {
  return __awaiter(this, void 0, void 0, function* () {
    if (animations !== void 0) {
      const promises = [];
      each2(animations, (_, animation) => {
        promises.push(animation.waitForStop());
      });
      yield Promise.all(promises);
    }
  });
}
function range(diff, from, to) {
  return from + diff * (to - from);
}
function defaultInterpolate(diff, from, to) {
  if (diff >= 1) {
    return to;
  } else {
    return from;
  }
}
function percentInterpolate(diff, from, to) {
  return new Percent(range(diff, from.percent, to.percent));
}
function colorInterpolate(diff, from, to) {
  return Color.interpolate(diff, from, to);
}
function getInterpolate(from, to) {
  if (typeof from === "number" && typeof to === "number") {
    return range;
  }
  if (from instanceof Percent && to instanceof Percent) {
    return percentInterpolate;
  }
  if (from instanceof Color && to instanceof Color) {
    return colorInterpolate;
  }
  return defaultInterpolate;
}
var AnimationState;
(function(AnimationState2) {
  AnimationState2[AnimationState2["Stopped"] = 0] = "Stopped";
  AnimationState2[AnimationState2["Playing"] = 1] = "Playing";
  AnimationState2[AnimationState2["Paused"] = 2] = "Paused";
})(AnimationState || (AnimationState = {}));

// node_modules/@amcharts/amcharts5/.internal/core/util/Color.js
function string2hex(string) {
  if (string[0] === "#") {
    string = string.substr(1);
  }
  if (string.length == 3) {
    string = string[0].repeat(2) + string[1].repeat(2) + string[2].repeat(2);
  }
  return parseInt(string, 16);
}
function rgba2hex(color2) {
  color2 = color2.replace(/[ ]/g, "");
  let matches = color2.match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (matches) {
    matches.push("1");
  } else {
    matches = color2.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i);
    if (!matches) {
      return 0;
    }
  }
  let hex = "";
  for (let i = 1; i <= 3; i++) {
    let val = parseInt(matches[i]).toString(16);
    if (val.length == 1) {
      val = "0" + val;
    }
    hex += val;
  }
  return string2hex(hex);
}
function color(input) {
  return Color.fromAny(input);
}
var Color = class _Color {
  constructor(hex) {
    Object.defineProperty(this, "_hex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._hex = hex | 0;
  }
  /**
   * Color numeric value.
   */
  get hex() {
    return this._hex;
  }
  /**
   * Value of color's R channel.
   * @return R value
   */
  get r() {
    return this._hex >>> 16;
  }
  /**
   * Value of color's G channel.
   * @return G value
   */
  get g() {
    return this._hex >> 8 & 255;
  }
  /**
   * Value of color's B channel.
   * @return B value
   */
  get b() {
    return this._hex & 255;
  }
  /**
   * Returns color CSS representation in form of `rgba(r, g, b, a)` string.
   *
   * @param   alpha  Opacity
   * @return         CSS string
   */
  toCSS(alpha = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + alpha + ")";
  }
  /**
   * Returns color CSS representation in form of `#rgb` string.
   *
   * @return         CSS string
   */
  toCSSHex() {
    return "#" + padString(this.r.toString(16), 2) + padString(this.g.toString(16), 2) + padString(this.b.toString(16), 2);
  }
  /**
   * Returns color's HSL info.
   * @param   alpha Opacity
   * @return        HSL info
   */
  toHSL(alpha = 1) {
    return rgbToHsl({
      r: this.r,
      g: this.g,
      b: this.b,
      a: alpha
    });
  }
  /**
   * Converts HSL values into a new [[Color]] object.
   *
   * @param   h H value
   * @param   s S value
   * @param   l L value
   * @return    Color object
   */
  static fromHSL(h, s, l) {
    const rgb = hslToRgb({
      h,
      s,
      l
    });
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  toString() {
    return this.toCSSHex();
  }
  /**
   * Converts hex number into a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromHex(0xff0000) // red
   * ```
   * ```JavaScript
   * Color.fromHex(0xff0000) // red
   * ```
   *
   * @param   hex  Hex color
   * @return       Color
   */
  static fromHex(hex) {
    return new _Color(hex);
  }
  /**
   * Converts RGB values to a new [[Color]] object.
   *
   * @param   r  R value
   * @param   g  G value
   * @param   b  B value
   * @return     Color
   */
  static fromRGB(r, g, b) {
    return new _Color((b | 0) + (g << 8) + (r << 16));
  }
  /**
   * Converts RGB string to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromString("#ff0000") // red
   * ```
   * ```JavaScript
   * Color.fromString("#ff0000") // red
   * ```
   *
   * @param   s  RGB string
   * @return     Color
   */
  static fromString(s) {
    return new _Color(string2hex(s));
  }
  /**
   * Converts CSS rgba() syntax to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   * ```JavaScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   *
   * @param  {string} s [description]
   * @return {Color}    [description]
   */
  static fromCSS(s) {
    return new _Color(rgba2hex(s));
  }
  /**
   * Convert to color from virtually anything.
   *
   * Will throw an exception if unable to resolve the color.
   *
   * @param   s  Source
   * @return     Color
   */
  static fromAny(s) {
    if (isString(s)) {
      if (s[0] == "#") {
        return _Color.fromString(s);
      } else if (s.substr(0, 3) == "rgb") {
        return _Color.fromCSS(s);
      }
    } else if (isNumber(s)) {
      return _Color.fromHex(s);
    } else if (s instanceof _Color) {
      return _Color.fromHex(s.hex);
    }
    throw new Error("Unknown color syntax: " + s);
  }
  /**
   * Returns a new [[Color]] object based on either `lightAlternative` or
   * `darkAlternative` depending on which one is more contrasting with
   * the `color`.
   *
   * @param   color             Reference color
   * @param   lightAlternative  Light color
   * @param   darkAlternative   Dark color
   * @return                    Alternative color
   */
  static alternative(color2, lightAlternative, darkAlternative) {
    const rgb = alternativeColor({ r: color2.r, g: color2.g, b: color2.b }, lightAlternative ? { r: lightAlternative.r, g: lightAlternative.g, b: lightAlternative.b } : void 0, darkAlternative ? { r: darkAlternative.r, g: darkAlternative.g, b: darkAlternative.b } : void 0);
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns an intermediate Color between two reference colors depending on
   * the progress (`diff`) between the two.
   *
   * @param   diff  Progress
   * @param   from  Source color
   * @param   to    Target color
   * @param   mode  Interpolation mode
   * @return        Color
   */
  static interpolate(diff, from, to, mode = "rgb") {
    if (mode == "hsl") {
      const fromHSL = from.toHSL();
      const toHSL = to.toHSL();
      return _Color.fromHSL(range(diff, fromHSL.h, toHSL.h), range(diff, fromHSL.s, toHSL.s), range(diff, fromHSL.l, toHSL.l));
    } else {
      return _Color.fromRGB(range(diff, from.r, to.r), range(diff, from.g, to.g), range(diff, from.b, to.b));
    }
  }
  /**
   * Returns a new [[Color]] lightened by `percent` value.
   *
   * Use negative value to darken the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static lighten(color2, percent) {
    const rgb = lighten({ r: color2.r, g: color2.g, b: color2.b }, percent);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] brightened by `percent` value.
   *
   * Use negative value to dim the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static brighten(color2, percent) {
    const rgb = brighten({ r: color2.r, g: color2.g, b: color2.b }, percent);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] saturated by `percent` value.
   *
   * Value range is between `0` (fully desaturated), to `1` (full color).
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static saturate(color2, percent) {
    const rgb = saturate({ r: color2.r, g: color2.g, b: color2.b }, percent);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
};

export {
  ready,
  removeElement,
  addEventListener,
  onZoom,
  supports,
  getPointerId,
  blur,
  focus,
  getRendererEvent,
  isTouchEvent,
  setStyle,
  getStyle,
  getEventTarget,
  isLocalEvent,
  setInteractive,
  getEventKey,
  getShadowRoot,
  StyleRule,
  getSafeResolution,
  relativeToValue,
  decimalPlaces,
  padString,
  trim,
  truncateTextWithEllipsis,
  getFormat,
  cleanFormat,
  stripTags,
  escapeForRgex,
  splitString,
  getYearDay,
  getWeek,
  getWeekYear,
  getMonthWeek,
  getDayFromWeek,
  get12Hours,
  getTimeZone,
  getTimezoneOffset,
  capitalizeFirst,
  mergeTags,
  sameBounds,
  Utils_exports,
  color,
  Color,
  waitForAnimations,
  percentInterpolate,
  getInterpolate,
  AnimationState
};
//# sourceMappingURL=chunk-DQN6FOWB.js.map
