import styled, { css } from 'styled-components';

var utils = {
  margin: function margin() {
    return css(["margin-top:", ";margin-right:", ";margin-bottom:", ";margin-left:", ";"], function (_ref) {
      var mt = _ref.mt;
      return mt ? "".concat(mt, "px") : '0';
    }, function (_ref2) {
      var mr = _ref2.mr;
      return mr ? "".concat(mr, "px") : '0';
    }, function (_ref3) {
      var mb = _ref3.mb;
      return mb ? "".concat(mb, "px") : '0';
    }, function (_ref4) {
      var ml = _ref4.ml;
      return ml ? "".concat(ml, "px") : '0';
    });
  },
  padding: function padding() {
    return css(["padding-top:", ";padding-right:", ";padding-bottom:", ";padding-left:", ";"], function (_ref5) {
      var pt = _ref5.pt;
      return pt ? "".concat(pt, "px") : '0';
    }, function (_ref6) {
      var pr = _ref6.pr;
      return pr ? "".concat(pr, "px") : '0';
    }, function (_ref7) {
      var pb = _ref7.pb;
      return pb ? "".concat(pb, "px") : '0';
    }, function (_ref8) {
      var pl = _ref8.pl;
      return pl ? "".concat(pl, "px") : '0';
    });
  }
};

var ButtonGroup = styled.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "ej72l-0"
})(["", ";display:flex;justify-content:", ";button{margin:0 8px 8px 0;}"], utils.margin, function (props) {
  return props.center ? 'center' : 'flex-start';
});

export { ButtonGroup };
