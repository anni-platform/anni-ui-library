"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var styled=_interopDefault(require("styled-components")),constants=require("shared/constants");function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _templateObject7(){var t=_taggedTemplateLiteral(["\n    grid-column-end: ",";\n    grid-row-end: ",";\n  "]);return _templateObject7=function(){return t},t}function _templateObject6(){var t=_taggedTemplateLiteral(["\n  background: ",";\n  align-items: ",";\n  border: 1px solid ",";\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  ",";\n"]);return _templateObject6=function(){return t},t}function _templateObject5(){var t=_taggedTemplateLiteral(["\n      grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));\n    "]);return _templateObject5=function(){return t},t}function _templateObject4(){var t=_taggedTemplateLiteral(["\n      grid-column-end: span 2;\n      grid-row-end: span 2;\n    "]);return _templateObject4=function(){return t},t}function _templateObject3(){var t=_taggedTemplateLiteral(["\n      grid-row-end: span 2;\n    "]);return _templateObject3=function(){return t},t}function _templateObject2(){var t=_taggedTemplateLiteral(["\n      grid-column-end: span 2;\n    "]);return _templateObject2=function(){return t},t}function _templateObject(){var t=_taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 24px;\n  grid-auto-flow: row dense;\n  grid-auto-rows: ",";\n  grid-auto-rows: ",";\n  grid-template-columns: ",";\n  width: 100%;\n  .draggable {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    position: relative;\n    width: 100%;\n  }\n  .long {\n    ",";\n  }\n  .tall {\n    ",";\n  }\n  .full {\n    ",";\n  }\n  &.storyboards {\n    grid-auto-rows: 400px;\n    ",";\n  }\n"]);return _templateObject=function(){return t},t}var Grid=styled.div(_templateObject(),function(t){return t.small?"200px":"320px"},function(t){return t.noRow&&"min-content"},function(t){return t.small?"repeat(auto-fit, minmax(200px, 1fr))":"repeat(auto-fit, minmax(280px, 1fr))"},constants.Above.md(_templateObject2()),constants.Above.md(_templateObject3()),constants.Above.md(_templateObject4()),constants.Above.md(_templateObject5())),GridItem=styled.div(_templateObject6(),function(t){return t.solid&&"".concat(t.theme.bgD)},function(t){return t.center&&"center"},function(t){return t.theme.bgB},function(t){return t.stacked&&"column"},function(t){return t.center&&"center"},constants.Above.md(_templateObject7(),function(t){return t.long||t.full?"span 2":"auto"},function(t){return t.tall||t.full?"span 2":"auto"}));exports.Grid=Grid,exports.GridItem=GridItem;