"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  window.CheckboxView = /*#__PURE__*/function (_View) {
    _inherits(CheckboxView, _View);

    var _super = _createSuper(CheckboxView);

    function CheckboxView(tag) {
      var _this;

      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, CheckboxView);

      _this = _super.call(this, tag);
      tag.click(function (e) {
        console.log('1', e.target);
        console.log('2', _this.tag);

        if (e.target.closest('label') || e.target.closest('span')) {
          return;
        }

        return radio(HKPEvent.CheckboxViewClickEvent).broadcast(_assertThisInitialized(_this));
      });
      return _this;
    }

    _createClass(CheckboxView, [{
      key: "isChecked",
      value: function isChecked() {
        return this.tag.find('input.checkbox').prop('checked');
      }
    }, {
      key: "update",
      value: function update(data) {
        var count;

        if (data instanceof CheckboxViewData) {
          count = data.count;
          this.updateCountDisplay(count);
          return this.setEnabled(count > 0);
        }
      }
    }, {
      key: "hasFilterPrefix",
      value: function hasFilterPrefix(filterPrefix) {
        return this.tag.find('input.checkbox').attr('data-filter-prefix') === filterPrefix;
      }
    }, {
      key: "getFilterPrefix",
      value: function getFilterPrefix() {
        return this.tag.find('input.checkbox').attr('data-filter-prefix');
      } // console.log cb

    }, {
      key: "setEnabled",
      value: function setEnabled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (state) {
          return this.tag.find('label').removeClass('disabled');
        } else {
          return this.tag.find('label').addClass('disabled');
        }
      }
    }, {
      key: "updateCountDisplay",
      value: function updateCountDisplay() {
        var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 999;
      }
    }]);

    return CheckboxView;
  }(View); // @tag.find('span.count_display').html('('+count+')')

}).call(void 0);

//# sourceMappingURL=checkbox_view.js.map
