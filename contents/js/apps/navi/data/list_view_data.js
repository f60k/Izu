"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  window.ListViewData = function () {
    var ListViewData = /*#__PURE__*/_createClass(function ListViewData(actionType, firstList, lastList, diff) {
      _classCallCheck(this, ListViewData);

      this.actionType = actionType;
      this.firstList = firstList;
      this.lastList = lastList;
      this.diff = diff;
    });

    ;
    ListViewData.prototype.actionType = null;
    ListViewData.prototype.firstList = null;
    ListViewData.prototype.lastList = null;
    ListViewData.prototype.diff = null;
    return ListViewData;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=list_view_data.js.map
