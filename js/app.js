'use strict';

var pike = {
  custMin: 23,
  custMax: 65,
  cookieAvg: 6.3,
  custPerHour: [],
  cookiePerHour: [],

  customerPH: function(custMin,custMax) {
    this.custPerHour.length,this.cookiePerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = (Math.random()*(custMax-custMin)+custMin);
      this.cookiePerHour[i] = Math.ceil(this.cookieAvg*this.custPerHour);
    }
  }
};
pike.customerPH(pike.custMin, pike.custMax);