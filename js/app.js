'use strict';

var pike = {
  custMin: 23,
  custMax: 65,
  cookieAvg: 6.3,
  custPerHour: [],
  cookiePerHour: [],
  customerPH: function(custMin,custMax) {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(custMax-custMin)+custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function(cookieAvg) {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*cookieAvg);
    }
    return this.cookiePerHour;
  }
};
pike.customerPH(pike.custMin,pike.custMax);
pike.cookiePH(pike.cookieAvg);
