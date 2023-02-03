"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Filter;

  Filter = function () {
    var Filter = /*#__PURE__*/_createClass(function Filter(filter) {
      _classCallCheck(this, Filter);

      this.filter = filter;
    });

    ;
    Filter.prototype.filter = null;
    return Filter;
  }.call(this);

  window.BikeFilter = function () {
    var BikeFilter = /*#__PURE__*/function (_Filter) {
      _inherits(BikeFilter, _Filter);

      var _super = _createSuper(BikeFilter);

      function BikeFilter(bikes) {
        var _this;

        _classCallCheck(this, BikeFilter);

        _this = _super.call(this, null);
        _this.bikes = bikes;
        return _this;
      }

      _createClass(BikeFilter, [{
        key: "getResult",
        value: function getResult() {
          return this.bikes;
        }
      }]);

      return BikeFilter;
    }(Filter);

    ;
    BikeFilter.prototype.bikes = null;
    return BikeFilter;
  }.call(this);

  window.AFilter = function () {
    var AFilter = /*#__PURE__*/function (_Filter2) {
      _inherits(AFilter, _Filter2);

      var _super2 = _createSuper(AFilter);

      function AFilter(filter, condition) {
        var _this2;

        _classCallCheck(this, AFilter);

        _this2 = _super2.call(this, filter);
        _this2.condition = Number(condition);
        return _this2;
      }

      _createClass(AFilter, [{
        key: "getResult",
        value: function getResult() {
          var bike, i, len, result, results;
          result = this.filter.getResult();

          if (this.condition === 0) {
            return result;
          }

          results = [];

          for (i = 0, len = result.length; i < len; i++) {
            bike = result[i];

            if ((bike.flgs & 1) !== 0) {
              results.push(bike);
            }
          }

          return results;
        }
      }]);

      return AFilter;
    }(Filter);

    ;
    AFilter.prototype.condition = null;
    return AFilter;
  }.call(this);

  window.LFilter = function () {
    var LFilter = /*#__PURE__*/function (_Filter3) {
      _inherits(LFilter, _Filter3);

      var _super3 = _createSuper(LFilter);

      function LFilter(filter, condition) {
        var _this3;

        _classCallCheck(this, LFilter);

        _this3 = _super3.call(this, filter);
        _this3.condition = Number(condition);
        return _this3;
      }

      _createClass(LFilter, [{
        key: "getResult",
        value: function getResult() {
          var bike, i, len, result, results;
          result = this.filter.getResult();

          if (this.condition === 0) {
            return result;
          }

          results = [];

          for (i = 0, len = result.length; i < len; i++) {
            bike = result[i];

            if ((bike.flgs & 2) !== 0) {
              results.push(bike);
            }
          }

          return results;
        }
      }]);

      return LFilter;
    }(Filter);

    ;
    LFilter.prototype.condition = null;
    return LFilter;
  }.call(this);

  window.CFilter = function () {
    var CFilter = /*#__PURE__*/function (_Filter4) {
      _inherits(CFilter, _Filter4);

      var _super4 = _createSuper(CFilter);

      function CFilter(filter, condition) {
        var _this4;

        _classCallCheck(this, CFilter);

        _this4 = _super4.call(this, filter);
        _this4.condition = Number(condition);
        return _this4;
      }

      _createClass(CFilter, [{
        key: "getResult",
        value: function getResult() {
          var bike, i, len, result, results;
          result = this.filter.getResult();

          if (this.condition === 0) {
            return result;
          }

          results = [];

          for (i = 0, len = result.length; i < len; i++) {
            bike = result[i];

            if ((bike.flgs & 2 << 1) !== 0) {
              results.push(bike);
            }
          }

          return results;
        }
      }]);

      return CFilter;
    }(Filter);

    ;
    CFilter.prototype.condition = null;
    return CFilter;
  }.call(this);

  window.EFilter = function () {
    var EFilter = /*#__PURE__*/function (_Filter5) {
      _inherits(EFilter, _Filter5);

      var _super5 = _createSuper(EFilter);

      function EFilter(filter, condition) {
        var _this5;

        _classCallCheck(this, EFilter);

        _this5 = _super5.call(this, filter);
        _this5.condition = Number(condition);
        return _this5;
      }

      _createClass(EFilter, [{
        key: "getResult",
        value: function getResult() {
          var bike, i, len, result, results;
          result = this.filter.getResult();

          if (this.condition === 0) {
            return result;
          }

          results = [];

          for (i = 0, len = result.length; i < len; i++) {
            bike = result[i];

            if ((bike.flgs & 2 << 2) !== 0) {
              results.push(bike);
            }
          }

          return results;
        }
      }]);

      return EFilter;
    }(Filter);

    ;
    EFilter.prototype.condition = null;
    return EFilter;
  }.call(this);

  window.SFilter = function () {
    var SFilter = /*#__PURE__*/function (_Filter6) {
      _inherits(SFilter, _Filter6);

      var _super6 = _createSuper(SFilter);

      function SFilter(filter, condition) {
        var _this6;

        _classCallCheck(this, SFilter);

        _this6 = _super6.call(this, filter);
        _this6.condition = Number(condition);
        return _this6;
      }

      _createClass(SFilter, [{
        key: "getResult",
        value: function getResult() {
          var bike, i, len, result, results;
          result = this.filter.getResult();

          if (this.condition === 0) {
            return result;
          }

          results = [];

          for (i = 0, len = result.length; i < len; i++) {
            bike = result[i];

            if ((bike.flgs & 2 << 3) !== 0) {
              results.push(bike);
            }
          }

          return results;
        }
      }]);

      return SFilter;
    }(Filter);

    ;
    SFilter.prototype.condition = null;
    return SFilter;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=filter.js.map
