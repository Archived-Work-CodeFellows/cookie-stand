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
  customerPH: function() {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function() {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
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
    this.customerPH();
    this.cookiePH();
    this.cookieSum();

    var heading = document.createElement('p');
    heading.setAttribute('class', 'tableHead');
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
    bottom.setAttribute('class','tableBottom');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};
var seaTac = {
  custMin: 3,
  custMax: 24,
  cookieAvg: 1.2,
  custPerHour: [],
  cookiePerHour: [],
  totalCookies: 0,
  customerPH: function() {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function() {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
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
    this.customerPH();
    this.cookiePH();
    this.cookieSum();

    var heading = document.createElement('p');
    heading.setAttribute('class', 'tableHead');
    var headContent = document.createTextNode('SeaTac Airport');
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
    bottom.setAttribute('class','tableBottom');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};

var seaCenter = {
  custMin: 11,
  custMax: 38,
  cookieAvg: 3.7,
  custPerHour: [],
  cookiePerHour: [],
  totalCookies: 0,
  customerPH: function() {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function() {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
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
    this.customerPH();
    this.cookiePH();
    this.cookieSum();

    var heading = document.createElement('p');
    heading.setAttribute('class', 'tableHead');
    var headContent = document.createTextNode('Seattle Center');
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
    bottom.setAttribute('class','tableBottom');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};

var capHill = {
  custMin: 20,
  custMax: 38,
  cookieAvg: 2.3,
  custPerHour: [],
  cookiePerHour: [],
  totalCookies: 0,
  customerPH: function() {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function() {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
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
    this.customerPH();
    this.cookiePH();
    this.cookieSum();

    var heading = document.createElement('p');
    heading.setAttribute('class', 'tableHead');
    var headContent = document.createTextNode('Capitol Hill');
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
    bottom.setAttribute('class','tableBottom');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};

var alki = {
  custMin: 2,
  custMax: 16,
  cookieAvg: 4.6,
  custPerHour: [],
  cookiePerHour: [],
  totalCookies: 0,
  customerPH: function() {
    this.custPerHour.length = 14;
    for(var i = 0; i < this.custPerHour.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
    }
    return this.custPerHour;
  },
  cookiePH: function() {
    this.cookiePerHour.length = 14;
    for(var i = 0; i < this.cookiePerHour.length; i++){
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
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
    this.customerPH();
    this.cookiePH();
    this.cookieSum();

    var heading = document.createElement('p');
    heading.setAttribute('class', 'tableHead');
    var headContent = document.createTextNode('Alki');
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
    bottom.setAttribute('class','tableBottom');
    container.appendChild(bottom);
    var bottomContent = document.createTextNode('Total: ' + this.totalCookies);
    bottom.appendChild(bottomContent);
  }
};

pike.writeToDOM();
seaTac.writeToDOM();
seaCenter.writeToDOM();
capHill.writeToDOM();
alki.writeToDOM();