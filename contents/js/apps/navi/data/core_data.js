"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  window.ListViewActionType = function () {
    var ListViewActionType = /*#__PURE__*/_createClass(function ListViewActionType() {
      _classCallCheck(this, ListViewActionType);
    });

    ;
    ListViewActionType.Add = "ListViewActionTypeAdd";
    ListViewActionType.Remove = "ListViewActionTypeRemove";
    ListViewActionType.Init = "ListViewActionTypeInit";
    ListViewActionType.Change = "ListViewActionTypeChange";
    return ListViewActionType;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=core_data.js.map
