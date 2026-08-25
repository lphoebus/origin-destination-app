import {
  Color
} from "./chunk-DQN6FOWB.js";
import {
  Theme
} from "./chunk-5KHT33KU.js";

// node_modules/@amcharts/amcharts5/.internal/themes/DarkTheme.js
var DarkTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    this.rule("InterfaceColors").setAll({
      stroke: Color.fromHex(0),
      fill: Color.fromHex(2829099),
      primaryButton: Color.lighten(Color.fromHex(6788316), -0.2),
      primaryButtonHover: Color.lighten(Color.fromHex(6779356), -0.2),
      primaryButtonDown: Color.lighten(Color.fromHex(6872181), -0.2),
      primaryButtonActive: Color.lighten(Color.fromHex(6872182), -0.2),
      primaryButtonText: Color.fromHex(16777215),
      primaryButtonStroke: Color.lighten(Color.fromHex(6788316), -0.2),
      secondaryButton: Color.fromHex(3881787),
      secondaryButtonHover: Color.lighten(Color.fromHex(3881787), 0.1),
      secondaryButtonDown: Color.lighten(Color.fromHex(3881787), 0.15),
      secondaryButtonActive: Color.lighten(Color.fromHex(3881787), 0.2),
      secondaryButtonText: Color.fromHex(12303291),
      secondaryButtonStroke: Color.lighten(Color.fromHex(3881787), -0.2),
      grid: Color.fromHex(12303291),
      background: Color.fromHex(0),
      alternativeBackground: Color.fromHex(16777215),
      text: Color.fromHex(16777215),
      alternativeText: Color.fromHex(0),
      disabled: Color.fromHex(11382189),
      positive: Color.fromHex(5288704),
      negative: Color.fromHex(11730944)
    });
  }
};

// node_modules/@amcharts/amcharts5/themes/Dark.js
var Dark_default = DarkTheme;

export {
  Dark_default
};
//# sourceMappingURL=chunk-6BNA3CJD.js.map
