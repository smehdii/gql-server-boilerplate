"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  border: none;\n  text-align: center;\n  font-family: \"Rubik\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n  ", "\n"], ["\n  appearance: none;\n  border: none;\n  text-align: center;\n  font-family: \"Rubik\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n  ", "\n"])), styled_system_1.buttonStyle);
exports.MyButton = function (props) { return (React.createElement(StyledButton, __assign({}, props))); };
var templateObject_1;
//# sourceMappingURL=index.js.map