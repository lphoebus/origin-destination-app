import {
  dateFromISO
} from "./chunk-C76A5OAP.js";
import {
  getSupportedLocale
} from "./chunk-7UKXSV6L.js";
import {
  getAssetPath
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/chunks/utils3.js
var translationCache = {};
var requestCache = {};
async function getLocaleData(lang) {
  const locale = getSupportedLocale(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch(getAssetPath(`./assets/date-picker/nls/${locale}.json`)).then((resp) => resp.json()).catch(() => {
      console.error(`Native Language Support data for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}
function getValueAsDateRange(value) {
  return value.map((v, index) => dateFromISO(v, index === 1));
}

export {
  getLocaleData,
  getValueAsDateRange
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/utils3.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-TY6WOLKH.js.map
