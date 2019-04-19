"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var PropTypes=_interopDefault(require("prop-types")),globalStyles=require("shared/globalStyles"),defaultTheme=_interopDefault(require("themes/default")),darkTheme=_interopDefault(require("themes/dark")),constants=require("shared/constants"),React=_interopDefault(require("react")),utils=_interopDefault(require("shared/utils")),styled=require("styled-components"),styled__default=_interopDefault(styled),AnniUILibraryProvider=function(e){var t=e.theme,n=e.children;return React.createElement(styled.ThemeProvider,{theme:t},React.createElement("div",null,React.createElement(globalStyles.GlobalStyles,null),n))};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  display: flex;\n  flex-direction: column;\n\n  span {\n    margin: 4px 0 0 0;\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  align-items: center;\n  backface-visibility: hidden;\n  background: ",";\n  border: ",";\n  border: ",";\n  border-radius: 80px;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: ",";\n  font-family: 'Apercu Bold', sans-serif;\n  font-size: ",";\n  justify-content: center;\n  letter-spacing: 1px;\n  line-height: 1;\n  outline: none;\n  padding: ",";\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 400ms ",";\n  z-index: 2;\n  ",";\n\n  &:active {\n    transform: scale(0.998);\n  }\n\n  &:focus,\n  &:hover {\n    transform: scale(1.02);\n\n    &:disabled,\n    &[disabled] {\n      cursor: default;\n      transform: scale(1);\n    }\n  }\n"]);return _templateObject=function(){return e},e}AnniUILibraryProvider.propTypes={children:PropTypes.node.isRequired,theme:PropTypes.oneOf([defaultTheme,darkTheme])},AnniUILibraryProvider.defaultProps={theme:defaultTheme};var Button=styled__default.button(_templateObject(),function(e){return!e.primary||e.link?"none":"".concat(e.theme.colorPrimary)},function(e){return e.noBorder||e.link?"none":"2px solid ".concat(e.theme.colorPrimary)},function(e){return e.stacked&&"none"},function(e){return e.theme.textPrimary},function(e){return e.stacked&&"column"},function(e){return e.stacked?"12px":"13px"},function(e){return e.full?"0":"12px 24px"},constants.EASE_OUT_EXPO,utils.margin),NakedButton=styled__default(Button)(_templateObject2());function _templateObject4(){var e=_taggedTemplateLiteral(["\n  &:hover {\n    .disableDnD {\n      opacity: 1;\n      transform: scale(1);\n    }\n    > div {\n      box-shadow: ",";\n      transform: scale(",");\n      "," {\n        height: auto;\n        padding: 8px 24px 24px 24px;\n      }\n    }\n  }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  background: ",";\n  box-shadow: 0 2px 24px 0 ",";\n  cursor: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: 320ms ",";\n  overflow: visible;\n  padding: ",";\n  position: relative;\n  ",";\n  &:hover {\n    box-shadow: ",";\n    transform: ",";\n    "," {\n      height: auto;\n      padding: 8px 24px 24px 24px;\n    }\n  }\n"]);return _templateObject3=function(){return e},e}function _templateObject2$1(){var e=_taggedTemplateLiteral(["\n  color: ",";\n  height: auto;\n  padding: 16px 24px;\n"]);return _templateObject2$1=function(){return e},e}function _templateObject$1(){var e=_taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  height: 0;\n  justify-content: space-between;\n  padding: 0 24px;\n  transition: 240ms ",";\n  overflow: hidden;\n"]);return _templateObject$1=function(){return e},e}var CardControls=styled__default.div(_templateObject$1(),constants.EASE_OUT_BACK),CardDetails=styled__default.div(_templateObject2$1(),function(e){return e.theme.textPrimary}),Card=styled__default.div(_templateObject3(),function(e){return e.theme.bgA},function(e){return e.theme.shadow},function(e){return e.active?"pointer":"default"},constants.EASE_OUT_BACK,function(e){return e.padded&&"48px"},utils.margin,function(e){return e.active&&"4px 12px 24px 0 ".concat(function(e){return e.theme.shadow})},function(e){return e.active&&"scale(1.016)"},CardControls),DraggableCard=styled__default.div(_templateObject4(),function(e){return e.active?"4px 12px 24px 0 ".concat(function(e){return e.theme.shadow},";"):"none"},function(e){return e.active?1.016:1},CardControls);function _templateObject7(){var e=_taggedTemplateLiteral(["\n    grid-column-end: ",";\n    grid-row-end: ",";\n  "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n  background: ",";\n  align-items: ",";\n  border: 1px solid ",";\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  ",";\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n      grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));\n    "]);return _templateObject5=function(){return e},e}function _templateObject4$1(){var e=_taggedTemplateLiteral(["\n      grid-column-end: span 2;\n      grid-row-end: span 2;\n    "]);return _templateObject4$1=function(){return e},e}function _templateObject3$1(){var e=_taggedTemplateLiteral(["\n      grid-row-end: span 2;\n    "]);return _templateObject3$1=function(){return e},e}function _templateObject2$2(){var e=_taggedTemplateLiteral(["\n      grid-column-end: span 2;\n    "]);return _templateObject2$2=function(){return e},e}function _templateObject$2(){var e=_taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 24px;\n  grid-auto-flow: row dense;\n  grid-auto-rows: ",";\n  grid-auto-rows: ",";\n  grid-template-columns: ",";\n  width: 100%;\n  .draggable {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    position: relative;\n    width: 100%;\n  }\n  .long {\n    ",";\n  }\n  .tall {\n    ",";\n  }\n  .full {\n    ",";\n  }\n  &.storyboards {\n    grid-auto-rows: 400px;\n    ",";\n  }\n"]);return _templateObject$2=function(){return e},e}var Grid=styled__default.div(_templateObject$2(),function(e){return e.small?"200px":"320px"},function(e){return e.noRow&&"min-content"},function(e){return e.small?"repeat(auto-fit, minmax(200px, 1fr))":"repeat(auto-fit, minmax(280px, 1fr))"},constants.Above.md(_templateObject2$2()),constants.Above.md(_templateObject3$1()),constants.Above.md(_templateObject4$1()),constants.Above.md(_templateObject5())),GridItem=styled__default.div(_templateObject6(),function(e){return e.solid&&"".concat(e.theme.bgD)},function(e){return e.center&&"center"},function(e){return e.theme.bgB},function(e){return e.stacked&&"column"},function(e){return e.center&&"center"},constants.Above.md(_templateObject7(),function(e){return e.long||e.full?"span 2":"auto"},function(e){return e.tall||e.full?"span 2":"auto"}));function _templateObject$3(){var e=_taggedTemplateLiteral(["\n  ",";\n  display: flex;\n  justify-content: ",";\n  button {\n    margin: 0 8px 8px 0;\n  }\n"]);return _templateObject$3=function(){return e},e}var Group=styled__default.div(_templateObject$3(),utils.margin,function(e){return e.center?"center":"flex-start"}),Icons=function(e){var t,n,r=e.name,a=e.size;switch(r){case"add":t=["M24.5 8L24.5 40M8 24.5L40 24.5"];break;case"arrow-back":t=["M22 8 8 24 22 40","M8,24 L40,24"];break;case"audio":t=["M24,4 C21.2710636,4 19.0588235,6.31548236 19.0588235,9.17177459 L19.0588235,22.9631735 C19.0588235,25.8194657 21.2710636,28.1349481 24,28.1349481 C26.7289364,28.1349481 28.9411765,25.8194657 28.9411765,22.9631735 L28.9411765,9.17177459 C28.9411765,6.31548236 26.7289364,4 24,4 L24,4 Z","M36 19.2249135L36 22.6727632C35.9999999 29.337445 30.6274169 34.7402371 24 34.7402371 17.3725831 34.7402371 12.0000001 29.337445 12 22.6727632L12 19.2249135M24 35.83391L24 41.5531389M16.4470588 42.5294118L31.0689076 42.5294118"];break;case"cancel":t=["M9 9L39.7461162 39.7461162M39.7461162 9L9 39.7461162"];break;case"confirm":n=["44 12 17.286 36 4 21.818"];break;case"delete":t=["M8,12.8 L11.5555556,12.8 L40,12.8 L8,12.8 Z M36.4444444,12.8 L36.5,40 L11.5,40 L11.5555556,12.8 L36.4444444,12.8 Z M16.5,12.8 L16.5,8 L30.7222222,8 L30.7222222,12.8 L16.5,12.8 Z"];break;case"logo":t=["M4.84502033,26.511738 C4.62705793,26.511738 4.45,26.3231855 4.45,26.091073 L4.45,19.020665 C4.45,18.7885525 4.62705793,18.6 4.84502033,18.6 L6.35497967,18.6 C6.57294207,18.6 6.75,18.7885525 6.75,19.020665 L6.75,26.091073 C6.75,26.3231855 6.57294207,26.511738 6.35497967,26.511738 L4.84502033,26.511738 Z M43.1549797,26.511738 L41.6450203,26.511738 C41.4270579,26.511738 41.25,26.3238078 41.25,26.091073 L41.25,19.020665 C41.25,18.7885525 41.4270579,18.6 41.6450203,18.6 L43.1549797,18.6 C43.3729421,18.6 43.55,18.7885525 43.55,19.020665 L43.55,26.091073 C43.55,26.3238078 43.3729421,26.511738 43.1549797,26.511738 Z","M23.9997506,34.125 C14.506386,34.125 6.75,29.5566204 6.75,28.8869346 L6.75,15.2137232 C6.75,14.5433796 7.30888821,14 7.99919984,14 L40.0008002,14 C40.6911118,14 41.25,14.5433796 41.25,15.2137232 L41.25,28.8869346 C41.25,29.5566204 33.4931152,34.125 23.9997506,34.125 Z","M12.7875,23.775 C12.3111544,23.775 11.925,23.3888456 11.925,22.9125 C11.925,22.4361544 12.3111544,22.05 12.7875,22.05 C13.2638456,22.05 13.65,22.4361544 13.65,22.9125 C13.65,23.3888456 13.2638456,23.775 12.7875,23.775 Z M35.2125,23.775 C34.7361544,23.775 34.35,23.3888456 34.35,22.9125 C34.35,22.4361544 34.7361544,22.05 35.2125,22.05 C35.6888456,22.05 36.075,22.4361544 36.075,22.9125 C36.075,23.3888456 35.6888456,23.775 35.2125,23.775 Z","M4.45,21.292 L5.3,22.142 C5.3,22.611442 4.91944204,22.992 4.45,22.992 L1,22.992 C0.530557963,22.992 0.15,22.611442 0.15,22.142 C0.15,21.672558 0.530557963,21.292 1,21.292 L4.45,21.292 Z M43.55,22.992 L42.7,22.142 C42.7,21.672558 43.080558,21.292 43.55,21.292 L47,21.292 C47.469442,21.292 47.85,21.672558 47.85,22.142 C47.85,22.611442 47.469442,22.992 47,22.992 L43.55,22.992 Z"];break;case"more":t=["M24,46 C36.1502645,46 46,36.1502645 46,24 C46,16.8626984 42.6012345,10.519221 37.3338966,6.49976102 C33.6343235,3.67664873 29.0129629,2 24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 Z","M16 24 21 24 29 24 32 24","M24 16 24 20 24 27 24 32"];break;case"notification":t=["M15.0509936,27.4087798 C14.8920962,27.6524173 15.1306021,27.9590316 15.4077933,27.8671109 L21.0206746,26.7481595 C21.2617382,26.6680072 21.4912921,26.8960596 21.4113638,27.1361984 L16.8864659,43.5941348 C16.7732875,43.9338278 17.2362319,44.1590176 17.4363722,43.8616271 L32.9466086,19.5404969 C33.1087031,19.2990858 32.8756323,18.9892909 32.5971623,19.0764406 L27.4596942,19.3922788 C27.2295009,19.4641614 27.0088989,19.2577374 27.0674064,19.024596 L31.0666962,4.38344483 C31.1511005,4.04661439 30.6974277,3.85036851 30.5078379,4.14171571 L15.0509936,27.4087798 Z"];break;case"popout":n=["29.333 8 40 8 40 18.667","18.667 40 8 40 8 29.33"],t=["M40 8L27.5555556 20.4444444M8 40L20.4444444 27.5555556"];break;case"resize":t=["M17.333 10 30.667 10 30.667 27 30.667 38 17.333 38z","M30.667 10 39.5 10 44 10 44 38 30.667 38z","M4 10 17.333 10 17.333 38 4 38 4 20z"];break;case"chevron-down":t=["M42.6606448,14.4776432 C43.4003502,13.6615634 43.1084602,13 42.0027084,13 L5.99729162,13 C4.89421792,13 4.60032334,13.6584163 5.34726871,14.4776432 L22.7116416,33.5223568 C23.4557175,34.3384366 24.6557075,34.3415837 25.3982655,33.5223568 L42.6606448,14.4776432 Z"];break;case"share":t=["M27.1099686,38.2704941 C27.0992877,35.7746359 27.0779258,30.7829195 27.0779258,30.7829195 C16.6675172,30.7145825 5.63493776,37.4563169 4.71283499,37.863406 C3.79073221,38.270495 4.02716881,37.0001076 4.02716881,37.0001076 C4.02716881,37.0001076 12.7253557,19.3003088 27.1194508,16.4325496 C27.1194508,16.4325496 27.1194508,12.0625138 27.1194508,9.87749592 C27.1194508,9.11036941 28.2923193,8.69891055 28.8787535,9.26030763 C33.0313325,13.2355969 40.8850931,20.6552529 43.6303,23.2832563 C44.288071,23.9129445 43.9262099,24.4396997 43.6303,24.7220868 C41.1380509,27.1004429 35.9569757,32.0259277 35.9569757,32.0259277 L29.0254683,38.6615751 C28.3901291,39.2697959 27.1131293,39.0090752 27.1099686,38.2704941 Z"];break;case"video":t=["M37.423 19.018 31 23.571 43.091 32.143 43.091 15z","M5 12 19 12 30.909 12 30.909 36 5 36z"];break;case"view":t=["M24,31.3705357 C27.8839246,31.3705357 31.0324675,28.2944921 31.0324675,24.5 C31.0324675,22.6427777 30.2781919,20.9576694 29.0525953,19.7211144 C27.7741748,18.4312631 25.9829294,17.6294643 24,17.6294643 C20.1160754,17.6294643 16.9675325,20.7055079 16.9675325,24.5 C16.9675325,28.2944921 20.1160754,31.3705357 24,31.3705357 Z","M5,24.5 C5,24.5 11.9090909,11 24,11 C28.9864091,11 33.091485,13.2961046 36.1940712,15.9944418 C40.6145515,19.8389593 43,24.5 43,24.5 C43,24.5 36.0909091,38 24,38 C11.9090909,38 5,24.5 5,24.5 Z"];break;case"play":t=["M11.5407576,6.99048702 L36.6915001,23.1588215 C37.1560702,23.4574737 37.2905732,24.0761875 36.991921,24.5407576 C36.914455,24.6612602 36.8120028,24.7637125 36.6915001,24.8411785 L11.5407576,41.009513 C11.0761875,41.3081651 10.4574737,41.1736621 10.1588215,40.7090921 C10.0551304,40.5477948 10,40.3600861 10,40.1683345 L10,7.8316655 C10,7.27938075 10.4477153,6.8316655 11,6.8316655 C11.1917516,6.8316655 11.3794603,6.88679588 11.5407576,6.99048702 Z"];break;case"prev-frame":t=["M31 7.8316655L31 40.1683345C31 40.7206193 30.5522847 41.1683345 30 41.1683345 29.8082484 41.1683345 29.6205397 41.1132041 29.4592424 41.009513L4.30849985 24.8411785C3.84392981 24.5425263 3.7094268 23.9238125 4.00807897 23.4592424 4.08554496 23.3387398 4.1879972 23.2362875 4.30849985 23.1588215L29.4592424 6.99048702C29.9238125 6.69183485 30.5425263 6.82633786 30.8411785 7.29090791 30.9448696 7.45220524 31 7.63991388 31 7.8316655zM37 7L43 7C43.5522847 7 44 7.44771525 44 8L44 40C44 40.5522847 43.5522847 41 43 41L37 41C36.4477153 41 36 40.5522847 36 40L36 19.75 36 8C36 7.44771525 36.4477153 7 37 7z"];break;case"next-frame":t=["M18.5570822 6.17223705L44.5618397 23.6165857C45.0204887 23.9242538 45.1428829 24.5454764 44.8352149 25.0041253 44.7582216 25.1189012 44.6582724 25.2164713 44.5416753 25.2906777L18.5369178 41.8409901C18.0709912 42.1375216 17.4528969 42.0001997 17.1563654 41.5342732 17.0542431 41.373813 17 41.1875565 17 40.9973555L17 7.0026944C17 6.45040965 17.4477153 6.0026944 18 6.0026944 18.1984012 6.0026944 18.3923185 6.06171126 18.5570822 6.17223705zM4 6L10 6C10.5522847 6 11 6.44771525 11 7L11 41C11 41.5522847 10.5522847 42 10 42L4 42C3.44771525 42 3 41.5522847 3 41L3 19.5 3 7C3 6.44771525 3.44771525 6 4 6z"];break;case"pause":t=["M14 7L20 7C20.5522847 7 21 7.44771525 21 8L21 40C21 40.5522847 20.5522847 41 20 41L14 41C13.4477153 41 13 40.5522847 13 40L13 19.75 13 8C13 7.44771525 13.4477153 7 14 7zM28 7L34 7C34.5522847 7 35 7.44771525 35 8L35 40C35 40.5522847 34.5522847 41 34 41L28 41C27.4477153 41 27 40.5522847 27 40L27 19.75 27 8C27 7.44771525 27.4477153 7 28 7z"];break;case"sound":t=["M1,19 L9.5,19 L24.4631245,9.47801168 C24.9290659,9.18150353 25.5471533,9.3188563 25.8436615,9.78479767 C25.9457666,9.94524861 26,10.1314891 26,10.3216732 L26,39.1744918 C26,39.7267765 25.5522847,40.1744918 25,40.1744918 C24.8092128,40.1744918 24.6224072,40.1199141 24.4616293,40.0171999 L9.5,30.4588465 L1,30.4588465 C0.44771525,30.4588465 7.61715194e-15,30.0111312 7.54951657e-15,29.4588465 L0,20 C-6.76353751e-17,19.4477153 0.44771525,19 1,19 Z","M31.3043478,38.5454545 L31.3043478,33.6969697 C37.3554677,33.6969697 42.2608696,29.1384144 42.2608696,23.5151515 C42.2608696,17.8918886 37.3554677,13.3333333 31.3043478,13.3333333 L31.3043478,8.48484848 C40.2369533,8.48484848 47.4782609,15.2141444 47.4782609,23.5151515 C47.4782609,31.8161587 40.2369533,38.5454545 31.3043478,38.5454545 Z","M31.3043478,28.3636364 C34.1858335,28.3636364 36.5217391,26.4099698 36.5217391,24 C36.5217391,21.5900302 34.1858335,19.6363636 31.3043478,19.6363636"]}var o=t&&t.map(function(e){return React.createElement("path",{d:e,key:"".concat(e.length),transform:void 0})}),i=n&&n.map(function(e){return React.createElement("polyline",{points:e,key:e.length})}),c="".concat(r.replace(/-/g," ")," icon");return React.createElement("svg",_extends({viewBox:"0 0 48 48",id:r,className:r,width:a,height:a},e),React.createElement("title",null,c),o,i)};function _templateObject2$3(){var e=_taggedTemplateLiteral(["\n  fill: none;\n  stroke: ",";\n  stroke-width: ",";\n\n  &#logo {\n    stroke: ",";\n    height: 50px;\n    stroke-width: 1;\n    width: 50px;\n\n    > :nth-child(4) {\n      fill: ",";\n      stroke: none;\n    }\n\n    > :nth-child(5) {\n      fill: ",";\n      stroke: none;\n    }\n  }\n\n  &#more {\n    > :nth-child(2) {\n      stroke: ",";\n      stroke-width: 3;\n    }\n\n    > :nth-child(3),\n    > :nth-child(4) {\n      stroke: ",";\n      stroke-width: 3;\n    }\n  }\n\n  &#view {\n    > :nth-child(2) {\n      fill: ",";\n    }\n  }\n"]);return _templateObject2$3=function(){return e},e}function _templateObject$4(){var e=_taggedTemplateLiteral(["\n  fill: ",";\n  stroke: transparent;\n"]);return _templateObject$4=function(){return e},e}Icons.defaultProps={name:"",size:48};var SolidIcon=styled__default(Icons)(_templateObject$4(),function(e){return e.color?"".concat(e.theme.colorPrimary):"".concat(e.theme.iconPrimary)}),OutlineIcon=styled__default(Icons)(_templateObject2$3(),function(e){return e.color?"".concat(e.theme.colorPrimary):"".concat(e.theme.iconPrimary)},function(e){return e.strokeWidth?"".concat(e.strokeWidth,"px"):"2px"},function(e){return e.theme.colorPrimary},function(e){return e.theme.colorPrimary},function(e){return e.theme.colorPrimary},function(e){return e.color?"".concat(e.theme.colorPrimary):"".concat(e.theme.iconPrimary)},function(e){return e.theme.iconPrimary},function(e){return e.theme.iconPrimary});function _templateObject$5(){var e=_taggedTemplateLiteral(["\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  ",";\n  margin: ",";\n  width: ",";\n"]);return _templateObject$5=function(){return e},e}var Image=styled__default.img(_templateObject$5(),utils.margin,function(e){return e.center&&"0 auto"},function(e){return e.width?"".concat(e.width,"px"):"100%"});function _templateObject$6(){var e=_taggedTemplateLiteral(["\n  background: ",";\n  max-width: 100vw;\n"]);return _templateObject$6=function(){return e},e}var Wrapper=styled__default.div(_templateObject$6(),function(e){return e.theme.bgB});exports.AnniUILibraryProvider=AnniUILibraryProvider,exports.Button=Button,exports.NakedButton=NakedButton,exports.CardControls=CardControls,exports.CardDetails=CardDetails,exports.Card=Card,exports.DraggableCard=DraggableCard,exports.Grid=Grid,exports.GridItem=GridItem,exports.Group=Group,exports.SolidIcon=SolidIcon,exports.OutlineIcon=OutlineIcon,exports.Image=Image,exports.Wrapper=Wrapper;
