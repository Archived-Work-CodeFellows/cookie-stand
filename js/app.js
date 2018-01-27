'use strict';

//define div container
var container = document.createElement('div');
container.setAttribute('class','table-wrap');
document.body.appendChild(container);
var table = document.createElement('table');
table.setAttribute('id','cookie-data');
container.appendChild(table);

var locations = [];
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var netTotal = 0;

function MakeStore(name,custMinPerH,custMaxPerH,cookieAvg) {

  this.name = name;
  this.custMinPerH = custMinPerH;
  this.custMaxPerH = custMaxPerH;
  this.cookieAvg = cookieAvg;
  this.custPerHour = [];
  this.cookiePerHour = [];
  this.totalCookies = 0;
  locations.push(this);

  this.customerAndCookiePH = function(){
    this.custPerHour.length, this.cookiePerHour.length = hours.length;
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour[i] = Math.ceil(Math.random()*(this.custMaxPerH-this.custMinPerH)+this.custMinPerH);
      this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
      this.totalCookies += this.cookiePerHour[i];
    }
    return this.custPerHour, this.cookiePerHour, this.totalCookies;
  };
  this.customerAndCookiePH();
}
MakeStore.prototype.render = function() {

  var tRow = document.createElement('tr');
  table.appendChild(tRow);
  var thEl = document.createElement('th');
  thEl.setAttribute('scope', 'row');
  thEl.textContent = this.name;
  tRow.appendChild(thEl);
  var tData = [];
  for(var i = 0; i < hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = this.cookiePerHour[i];
    tRow.appendChild(tData[i]);
  }
  var totalEl = document.createElement('td');
  totalEl.textContent = this.totalCookies;
  tRow.appendChild(totalEl);
};
function headerGenerator() {
  var tRow = document.createElement('tr');
  table.appendChild(tRow);
  var thEmpty = document.createElement('th');
  tRow.appendChild(thEmpty);
  var thEl = [];
  for (var i = 0; i < hours.length; i++){
    thEl[i] = document.createElement('th');
    thEl[i].textContent = hours[i];
    tRow.appendChild(thEl[i]);
  }
  var thEnd = document.createElement('th');
  thEnd.textContent = 'Total Cookies';
  tRow.appendChild(thEnd);
}
function footerGenerator() {
  var tData = [];
  var tRow = document.createElement('tr');
  table.appendChild(tRow);
  var thBegin = document.createElement('th');
  thBegin.textContent = 'Totals';
  tRow.appendChild(thBegin);
  var total = 0;
  for(var i = 0; i < hours.length; i++) {
    tData[i] = document.createElement('td');
    for(var j = 0; j < locations.length; j++) {
      total += locations[j].cookiePerHour[i];
    }
    tData[i].textContent = total;
    netTotal += total;
    total = 0;
    tRow.appendChild(tData[i]);
  }
  var totalData = document.createElement('td');
  totalData.textContent = netTotal;
  tRow.appendChild(totalData);
}
function populateLocations() {
  new MakeStore('First and Pike',23,65,6.3);
  new MakeStore('SeaTac Airport',3,24,1.2);
  new MakeStore('Seattle Center',11,38,3.7);
  new MakeStore('Capitol Hill',20,38,2.3);
  new MakeStore('Alki',2,16,4.6);
  headerGenerator();
  for(var k = 0; k < locations.length; k++){
    locations[k].render();
  }
  footerGenerator();
}
populateLocations();