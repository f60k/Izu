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
  window.ListItemView = function () {
    var ListItemView = /*#__PURE__*/function (_View) {
      _inherits(ListItemView, _View);

      var _super = _createSuper(ListItemView);

      function ListItemView(tag, index) {
        var _this;

        _classCallCheck(this, ListItemView);

        _this = _super.call(this, tag);
        _this.index = index;
        _this.bike = null;
        tag.mouseover(function (e) {
          if (NaviApp.isPopupOpen) {
            return;
          }

          return _this.tag.addClass('zoom');
        }); // @tag.find('.marquee_text').addClass('start_anim')

        tag.mouseout(function (e) {
          if (NaviApp.isPopupOpen) {
            return;
          }

          return _this.tag.removeClass('zoom');
        }); // @tag.find('.marquee_text').removeClass('start_anim')

        tag.click(function (e) {
          if (NaviApp.isPopupOpen) {
            return;
          }

          _this.tag.removeClass('zoom'); // @tag.find('.marquee_text').removeClass('start_anim')


          radio(HKPEvent.ListItemViewClickEvent).broadcast(_assertThisInitialized(_this));
          return NaviApp.isPopupOpen = true;
        });
        $(window).resize(function () {
          return _this.onResize();
        });

        _this.onResize();

        return _this;
      }

      _createClass(ListItemView, [{
        key: "onResize",
        value: function onResize() {
          return this.culcPos();
        }
      }, {
        key: "init",
        value: function init(bike) {
          var imagePath;
          imagePath = 'images/navi/' + bike.id + '.png'; // @tag.html('<div class="img-wrap"><img src="' + imagePath + '"></div><div class="marquee_wrap"><p class="marquee_text">' + bike.name + '</p></div>')

          return this.bike = bike;
        }
      }, {
        key: "culcPos",
        value: function culcPos() {
          var pcItemHeight, pcItemWidth, pcWrapCount, spItemHeight, spItemWidth, spWrapCount, switchWidth, x, y;
          switchWidth = ListItemView.SwitchWidth;
          pcItemWidth = ListItemView.PcItemWidth;
          pcItemHeight = ListItemView.PcItemHeight;
          pcWrapCount = ListItemView.PcWrapCount;
          spItemWidth = ListItemView.SpItemWidth;
          spItemHeight = ListItemView.SpItemHeight;
          spWrapCount = ListItemView.SpWrapCount;

          if (document.body.clientWidth >= switchWidth) {
            x = this.index % pcWrapCount * pcItemWidth + 'vw';
            y = Math.floor(this.index / pcWrapCount) * pcItemHeight + 'vw';

            if (document.body.clientWidth >= 1920) {
              x = this.index % pcWrapCount * 440;
              y = Math.floor(this.index / pcWrapCount) * 592;
            }
          } else {
            x = this.index % spWrapCount * spItemWidth + 'vw';
            y = Math.floor(this.index / spWrapCount) * spItemHeight + 'vw';
          }

          this.tag.css({
            left: x,
            top: y
          });
          return this.firstPos = {
            x: x,
            y: y
          };
        }
      }, {
        key: "remove",
        value: function remove() {
          // console.log 'removed'
          return this.tag.addClass('remove');
        }
      }, {
        key: "moveTo",
        value: function moveTo(index) {
          this.index = index;
          return this.culcPos();
        }
      }, {
        key: "add",
        value: function add() {
          // console.log 'added'
          return this.tag.removeClass('remove');
        }
      }]);

      return ListItemView;
    }(View);

    ;
    ListItemView.SwitchWidth = 968;
    ListItemView.PcItemWidth = 23;
    ListItemView.PcItemHeight = 30;
    ListItemView.PcWrapCount = 3;
    ListItemView.SpItemWidth = 90;
    ListItemView.SpItemHeight = 135;
    ListItemView.SpWrapCount = 1;
    ListItemView.prototype.firstPos = null;
    ListItemView.prototype.index = null;
    ListItemView.prototype.bike = null;
    return ListItemView;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=list_item_view.js.map
