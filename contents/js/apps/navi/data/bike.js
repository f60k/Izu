"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  window.Bike = function () {
    var Bike = function Bike(id, flgs) {
      var rentalId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999;
      var catalogueUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var name = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

      _classCallCheck(this, Bike);

      this.id = id;
      this.flgs = flgs;
      this.rentalId = rentalId;
      this.catalogueUrl = catalogueUrl;
      this.name = name;
    };

    ;
    Bike.prototype.id = null;
    Bike.prototype.flgs = null;
    Bike.prototype.rentalId = null;
    Bike.prototype.catalogueUrl = null;
    Bike.prototype.name = null;
    return Bike;
  }.call(this);
}).call(void 0);

//# sourceMappingURL=bike.js.map
