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
  window.ListView = function () {
    var ListView = /*#__PURE__*/function (_View) {
      _inherits(ListView, _View);

      var _super = _createSuper(ListView);

      function ListView(tag) {
        var _this;

        _classCallCheck(this, ListView);

        _this = _super.call(this, tag);
        _this.listItemViewList = [];
        _this.currentListItemCount = 0;
        tag.find('li').each(function (index, elem) {
          var view;
          view = new ListItemView($(elem), index);
          return _this.listItemViewList.push(view);
        });
        $(window).resize(function () {
          return _this.onResize();
        });
        return _this;
      }

      _createClass(ListView, [{
        key: "onResize",
        value: function onResize() {
          var height, marginBottom, pcItemHeight, pcWrapCount, spItemHeight, spWrapCount, switchWidth;
          switchWidth = ListItemView.SwitchWidth;
          pcItemHeight = ListItemView.PcItemHeight;
          pcWrapCount = ListItemView.PcWrapCount;
          spItemHeight = ListItemView.SpItemHeight;
          spWrapCount = ListItemView.SpWrapCount;

          if (document.body.clientWidth >= switchWidth) {
            marginBottom = ListView.pcMarginBottom;
            height = pcItemHeight * Math.ceil(this.currentListItemCount / pcWrapCount) + marginBottom + 'vw';

            if (document.body.clientWidth >= 1920) {
              height = 592 * Math.ceil(this.currentListItemCount / pcWrapCount) + marginBottom;
            }
          } else {
            marginBottom = ListView.spMarginBottom;
            height = spItemHeight * Math.ceil(this.currentListItemCount / spWrapCount) + marginBottom + 'vw';
          }

          return this.tag.css({
            height: height
          });
        }
      }, {
        key: "init",
        value: function init(bikes) {
          var i, index, len, ref, view;
          ref = this.listItemViewList;

          for (index = i = 0, len = ref.length; i < len; index = ++i) {
            view = ref[index];
            view.init(bikes[index]);
          }

          this.currentListItemCount = bikes.length;
          return this.onResize();
        }
      }, {
        key: "update",
        value: function update(data) {
          var firstList, i, lastList, len, newIndex, ref, view;

          if (data instanceof ListViewData) {
            if (data.firstList.length < 1 && data.lastList.length < 1) {
              return;
            }

            if (data.actionType === ListViewActionType.Init) {
              return;
            } else if (data.actionType === ListViewActionType.Change) {
              lastList = data.lastList;
              firstList = data.firstList;
              ref = this.listItemViewList;

              for (i = 0, len = ref.length; i < len; i++) {
                view = ref[i];

                if (firstList.indexOf(view.bike) !== -1 && lastList.indexOf(view.bike) === -1) {
                  view.remove();
                } else if (firstList.indexOf(view.bike) === -1 && lastList.indexOf(view.bike) !== -1) {
                  view.add();
                  newIndex = data.lastList.indexOf(view.bike);
                  view.moveTo(newIndex);
                } else if (firstList.indexOf(view.bike) !== -1 && lastList.indexOf(view.bike) !== -1) {
                  newIndex = data.lastList.indexOf(view.bike);
                  view.moveTo(newIndex);
                }
              }
            }
          } // else if data.actionType == ListViewActionType.Remove
          // 	for view in @listItemViewList
          // 		if data.diff.indexOf(view.bike) != -1
          // 			view.remove()
          // 		newIndex = data.lastList.indexOf(view.bike)
          // 		# console.log newIndex
          // 		if newIndex != -1
          // 			targetViewPos = @listItemViewList[newIndex].firstPos
          // 			view.moveTo(newIndex)
          // 			# console.log targetViewPos
          // else if data.actionType == ListViewActionType.Add
          // 	for view in @listItemViewList
          // 		if data.diff.indexOf(view.bike) != -1
          // 			view.add()
          // 		newIndex = data.lastList.indexOf(view.bike)
          // 		# console.log newIndex
          // 		if newIndex != -1
          // 			targetViewPos = @listItemViewList[newIndex].firstPos
          // 			view.moveTo(newIndex)
          // 			# console.log targetViewPos


          this.currentListItemCount = data.lastList.length;
          return this.onResize();
        }
      }]);

      return ListView;
    }(View);

    ;
    ListView.pcMarginBottom = 0;
    ListView.spMarginBottom = 0;
    ListView.prototype.listItemViewList = null;
    ListView.prototype.currentListItemCount = null;
    return ListView;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=list_view.js.map
