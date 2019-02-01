"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var _1 = require(".");
react_1.storiesOf("Button", module).add("basic example", function () { return (React.createElement(_1.MyButton, { variant: "primary", onClick: addon_actions_1.action("primary-button-click") }, "New code review")); });
//# sourceMappingURL=Button.story.js.map