"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function () {
  window.NaviApp = function () {
    var NaviApp = /*#__PURE__*/function () {
      function NaviApp() {
        var _this = this;

        _classCallCheck(this, NaviApp);

        var checkboxes, i, len, val, view; // SETUP DB

        this.db = new DB();
        this.db.setup();
        this.currentBikeList = []; // SETUP CHECKBOXES FOR FILTERING

        this.checkboxViewList = [];
        checkboxes = $('nav.filter-set li.list__item');

        for (i = 0, len = checkboxes.length; i < len; i++) {
          val = checkboxes[i];
          view = new ButtonView($(val)); // filterClassName = view.getFilterPrefix()

          this.checkboxViewList.push(view);
        }

        radio(HKPEvent.CheckboxViewClickEvent).subscribe(function (sender) {
          var j, len1, ref;
          ref = _this.checkboxViewList; // console.log 'radio.update'

          for (j = 0, len1 = ref.length; j < len1; j++) {
            view = ref[j];
            view.setChecked(false);
          }

          sender.setChecked(true);
          return _this.update();
        });
        radio(HKPEvent.ListItemViewClickEvent).subscribe(function (sender) {
          var bike;
          return bike = sender.bike;
        }); // console.log bike
        // @createPopup(bike.name, bike.catalogueUrl, bike.rentalId)
        // SETUP LISTVIEW FOR RESULT

        this.listView = new ListView($('.list_view'));
        this.listView.init(this.db.bikes); // @popupView = new PopupView($('.global_popup_view'))

        this.update();
      }

      _createClass(NaviApp, [{
        key: "update",
        value: function update() {
          var actionType, currentBikeList, diff, firstList;
          firstList = this.currentBikeList;
          this.currentBikeList = currentBikeList = this.getAllFilterResult(this.db.bikes, this.getCheckboxView('A').isChecked(), this.getCheckboxView('L').isChecked(), this.getCheckboxView('C').isChecked(), this.getCheckboxView('E').isChecked(), this.getCheckboxView('S').isChecked());
          console.log('A', this.getCheckboxView('A').isChecked());
          console.log('L', this.getCheckboxView('L').isChecked());
          console.log('C', this.getCheckboxView('C').isChecked());
          console.log('E', this.getCheckboxView('E').isChecked());
          console.log('S', this.getCheckboxView('S').isChecked()); // for checkboxView in @checkboxViewList
          // 	# filterClassName = checkboxView.getFilterPrefix() + 'Filter'
          // 	# count = @getSingleFilterResult(@currentBikeList, filterClassName, true).length
          // 	count = 999
          // 	checkboxView.update(new CheckboxViewData(count))
          // console.log 'app.update'

          console.log(this.currentBikeList);
          actionType = null; // if firstList.length < 1
          // 	actionType = ListViewActionType.Init
          // 	diff = @currentBikeList
          // else
          // if currentBikeList.length < firstList.length
          // 	actionType = ListViewActionType.Remove
          // 	diff = firstList.filter (item) -> currentBikeList.indexOf(item) == -1
          // else
          // 	actionType = ListViewActionType.Add
          // 	diff = currentBikeList.filter (item) -> firstList.indexOf(item) == -1
          // 	console.log 'diff' + diff

          actionType = ListViewActionType.Change;
          diff = null;
          return this.listView.update(new ListViewData(actionType, firstList, currentBikeList, diff));
        } // createPopup : (name, catalogueUrl, rentalId) ->
        // 	rentalUrl = 'https://hondago-bikerental.jp/vehicle/detail/' + rentalId
        // 	if rentalId == 99999
        // 		rentalUrl = "https://hondago-bikerental.jp/vehicle/list"
        // 	@popupView.show(name, catalogueUrl, rentalUrl)

      }, {
        key: "getCheckboxView",
        value: function getCheckboxView(filterPrefix) {
          var i, len, ref, view;
          ref = this.checkboxViewList;

          for (i = 0, len = ref.length; i < len; i++) {
            view = ref[i];

            if (view.hasFilterPrefix(filterPrefix)) {
              return view;
            }
          }

          return null;
        }
      }, {
        key: "getAllFilterResult",
        value: function getAllFilterResult(bikes) {
          var utrFlg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var aclFlg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var mtrFlg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var cmbFlg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var absFlg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          var filter;
          filter = new BikeFilter(bikes); // filter = new ESPFilter(filter, espFlg)
          // filter = new HEVFilter(filter, hevFlg)
          // filter = new ISSFilter(filter, issFlg)

          filter = new AFilter(filter, utrFlg);
          filter = new LFilter(filter, aclFlg);
          filter = new CFilter(filter, mtrFlg);
          filter = new EFilter(filter, cmbFlg);
          filter = new SFilter(filter, absFlg); // filter = new SHKFilter(filter, shkFlg)
          // filter = new HSKFilter(filter, hskFlg)
          // filter = new LBXFilter(filter, lbxFlg)
          // filter = new FSSFilter(filter, fssFlg)
          // filter = new ASCFilter(filter, ascFlg)

          return filter.getResult();
        }
      }, {
        key: "getSingleFilterResult",
        value: function getSingleFilterResult(bikes, FilterClass) {
          var flg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var filter;
          filter = new BikeFilter(bikes);
          filter = new window[FilterClass](filter, flg);
          return filter.getResult();
        }
      }]);

      return NaviApp;
    }();

    ;
    NaviApp.isPopupOpen = false;
    NaviApp.prototype.db = null;
    NaviApp.prototype.currentBikeList = null;
    NaviApp.prototype.checkboxViewList = null;
    NaviApp.prototype.listView = null;
    NaviApp.prototype.popupView = null;
    return NaviApp;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=navi.js.map
