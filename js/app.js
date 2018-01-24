'use strict';

//define div container
var container = document.createElement('div');
document.body.appendChild(container);

var pike = {
  custMin: 23,
  custMax: 65,
  cookieAvg: 6.3,
  custPerHour: [],
  cookiePerHour: [],
  totalCookies: 0,
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
  },
  cookieSum: function() {
    for(var i = 0; i < this.cookiePerHour.length; i++) {
      this.totalCookies += this.cookiePerHour[i];
    }
    return this.totalCookies;
  },
  writeToDOM: function() {
    var heading = document.createElement('p');
    var headContent = document.createTextNode('1st and Pike');
    heading.appendChild(headContent);
    container.appendChild(heading);

    var uList = document.createElement('ul');
    for(var i = 0; i < this.custPerHour.length; i++) {
      var list = document.createElement('li');
      var listArr = document.createTextNode(this.cookiePerHour[i]);
      list.appendChild(listArr);
      uList.appendChild(list)[i];
    }
    container.appendChild(uList);
    var bottom = document.createElement('p');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};
pike.customerPH(pike.custMin,pike.custMax);
pike.cookiePH(pike.cookieAvg);
pike.cookieSum();
pike.writeToDOM();
