'use strict';

//define div container
var container = document.createElement('div');
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
}
populateLocations();

function createTable(){
  var table = document.createElement('table');
  table.setAttribute('id', 'cookie-data');
  container.appendChild(table);

  //Set table headings and begin table row array
  var tHeadings = [];
  var tHeadingsName = [];
  var tData = [];
  var tRows = [];
  for(var i = -1; i <= locations.length; i++)tRows.push(document.createElement('tr'));
  for(i = -1; i <= hours.length; i++) {
    tHeadings[i] = document.createElement('th');
    tHeadings[i].textContent = hours[i];
    tRows[0].appendChild(tHeadings[i]);
  }
  console.log(tHeadings);
  table.appendChild(tRows[0]);
  console.log(tRows);
  //set tableHeadings for stores
  for(var k = 0; k < locations.length; k++){
    tHeadingsName[k] = document.createElement('th');
    tHeadingsName[k].setAttribute('scope','row');
    tHeadingsName[k].textContent = locations[k].name;
    tRows[k+1].appendChild(tHeadingsName[k]);
    table.appendChild(tRows[k+1]);
  }
  for(i = 0; i <= hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = locations[0].cookiePerHour[i];
    tRows[1].appendChild(tData[i]);
  }
  tData[15].textContent = locations[0].totalCookies;
  tRows[1].appendChild(tData[15]);
  for(i = 0; i <= hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = locations[1].cookiePerHour[i];
    tRows[2].appendChild(tData[i]);
  }
  tData[15].textContent = locations[1].totalCookies;
  tRows[2].appendChild(tData[15]);
  for(i = 0; i <= hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = locations[2].cookiePerHour[i];
    tRows[3].appendChild(tData[i]);
  }
  tData[15].textContent = locations[2].totalCookies;
  tRows[3].appendChild(tData[15]);
  for(i = 0; i <= hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = locations[3].cookiePerHour[i];
    tRows[4].appendChild(tData[i]);
  }
  tData[15].textContent = locations[3].totalCookies;
  tRows[4].appendChild(tData[15]);
  for(i = 0; i <= hours.length; i++){
    tData[i] = document.createElement('td');
    tData[i].textContent = locations[4].cookiePerHour[i];
    tRows[5].appendChild(tData[i]);
  }
  tData[15].textContent = locations[4].totalCookies;
  tRows[5].appendChild(tData[15]);
}
//createTable();

// var pike = {
//   custMin: 23,
//   custMax: 65,
//   cookieAvg: 6.3,
//   custPerHour: [],
//   cookiePerHour: [],
//   totalCookies: 0,
//   customerPH: function() {
//     this.custPerHour.length = hours.length;
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
//     }
//     return this.custPerHour;
//   },
//   cookiePH: function() {
//     this.cookiePerHour.length = hours.length;
//     for(var i = 0; i < this.cookiePerHour.length; i++){
//       this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
//     }
//     return this.cookiePerHour;
//   },
//   cookieSum: function() {
//     for(var i = 0; i < this.cookiePerHour.length; i++) {
//       this.totalCookies += this.cookiePerHour[i];
//     }
//     return this.totalCookies;
//   },
//   writeToDOM: function() {
//     this.customerPH();
//     this.cookiePH();
//     this.cookieSum();

//     var heading = document.createElement('span');
//     heading.setAttribute('class', 'tableHead');
//     var headContent = document.createTextNode('1st and Pike ');
//     heading.appendChild(headContent);
//     tableHeadContainer.appendChild(heading);

//     var uList = document.createElement('ul');
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       var list = document.createElement('li');
//       var listArr = document.createTextNode(this.cookiePerHour[i]);
//       list.appendChild(listArr);
//       uList.appendChild(list)[i];
//     }
//     tableBodyContainer.appendChild(uList);
//     var bottom = document.createElement('span');
//     bottom.setAttribute('class','tableBottom');
//     tableBottomContainer.appendChild(bottom);
//     var bottomContent = document.createTextNode('Total: ' + this.totalCookies + ' ');
//     bottom.appendChild(bottomContent);
//   }
// };
// var seaTac = {
//   custMin: 3,
//   custMax: 24,
//   cookieAvg: 1.2,
//   custPerHour: [],
//   cookiePerHour: [],
//   totalCookies: 0,
//   customerPH: function() {
//     this.custPerHour.length = hours.length;
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
//     }
//     return this.custPerHour;
//   },
//   cookiePH: function() {
//     this.cookiePerHour.length = hours.length;
//     for(var i = 0; i < this.cookiePerHour.length; i++){
//       this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
//     }
//     return this.cookiePerHour;
//   },
//   cookieSum: function() {
//     for(var i = 0; i < this.cookiePerHour.length; i++) {
//       this.totalCookies += this.cookiePerHour[i];
//     }
//     return this.totalCookies;
//   },
//   writeToDOM: function() {
//     this.customerPH();
//     this.cookiePH();
//     this.cookieSum();

//     var heading = document.createElement('span');
//     heading.setAttribute('class', 'tableHead');
//     var headContent = document.createTextNode('SeaTac Airport ');
//     heading.appendChild(headContent);
//     tableHeadContainer.appendChild(heading);

//     var uList = document.createElement('ul');
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       var list = document.createElement('li');
//       var listArr = document.createTextNode(this.cookiePerHour[i]);
//       list.appendChild(listArr);
//       uList.appendChild(list)[i];
//     }
//     tableBodyContainer.appendChild(uList);
//     var bottom = document.createElement('span');
//     bottom.setAttribute('class','tableBottom');
//     tableBottomContainer.appendChild(bottom);
//     var bottomContent = document.createTextNode('Total: ' + this.totalCookies + ' ');
//     bottom.appendChild(bottomContent);
//   }
// };

// var seaCenter = {
//   custMin: 11,
//   custMax: 38,
//   cookieAvg: 3.7,
//   custPerHour: [],
//   cookiePerHour: [],
//   totalCookies: 0,
//   customerPH: function() {
//     this.custPerHour.length = hours.length;
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
//     }
//     return this.custPerHour;
//   },
//   cookiePH: function() {
//     this.cookiePerHour.length = hours.length;
//     for(var i = 0; i < this.cookiePerHour.length; i++){
//       this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
//     }
//     return this.cookiePerHour;
//   },
//   cookieSum: function() {
//     for(var i = 0; i < this.cookiePerHour.length; i++) {
//       this.totalCookies += this.cookiePerHour[i];
//     }
//     return this.totalCookies;
//   },
//   writeToDOM: function() {
//     this.customerPH();
//     this.cookiePH();
//     this.cookieSum();

//     var heading = document.createElement('span');
//     heading.setAttribute('class', 'tableHead');
//     var headContent = document.createTextNode('Seattle Center ');
//     heading.appendChild(headContent);
//     tableHeadContainer.appendChild(heading);

//     var uList = document.createElement('ul');
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       var list = document.createElement('li');
//       var listArr = document.createTextNode(this.cookiePerHour[i]);
//       list.appendChild(listArr);
//       uList.appendChild(list)[i];
//     }
//     tableBodyContainer.appendChild(uList);
//     var bottom = document.createElement('span');
//     bottom.setAttribute('class','tableBottom');
//     tableBottomContainer.appendChild(bottom);
//     var bottomContent = document.createTextNode('Total: ' + this.totalCookies + ' ');
//     bottom.appendChild(bottomContent);
//   }
// };

// var capHill = {
//   custMin: 20,
//   custMax: 38,
//   cookieAvg: 2.3,
//   custPerHour: [],
//   cookiePerHour: [],
//   totalCookies: 0,
//   customerPH: function() {
//     this.custPerHour.length = hours.length;
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
//     }
//     return this.custPerHour;
//   },
//   cookiePH: function() {
//     this.cookiePerHour.length = hours.length;
//     for(var i = 0; i < this.cookiePerHour.length; i++){
//       this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
//     }
//     return this.cookiePerHour;
//   },
//   cookieSum: function() {
//     for(var i = 0; i < this.cookiePerHour.length; i++) {
//       this.totalCookies += this.cookiePerHour[i];
//     }
//     return this.totalCookies;
//   },
//   writeToDOM: function() {
//     this.customerPH();
//     this.cookiePH();
//     this.cookieSum();

//     var heading = document.createElement('span');
//     heading.setAttribute('class', 'tableHead');
//     var headContent = document.createTextNode('Capitol Hill ');
//     heading.appendChild(headContent);
//     tableHeadContainer.appendChild(heading);

//     var uList = document.createElement('ul');
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       var list = document.createElement('li');
//       var listArr = document.createTextNode(this.cookiePerHour[i]);
//       list.appendChild(listArr);
//       uList.appendChild(list)[i];
//     }
//     tableBodyContainer.appendChild(uList);
//     var bottom = document.createElement('span');
//     bottom.setAttribute('class','tableBottom');
//     tableBottomContainer.appendChild(bottom);
//     var bottomContent = document.createTextNode('Total: ' + this.totalCookies + ' ');
//     bottom.appendChild(bottomContent);
//   }
// };

// var alki = {
//   custMin: 2,
//   custMax: 16,
//   cookieAvg: 4.6,
//   custPerHour: [],
//   cookiePerHour: [],
//   totalCookies: 0,
//   customerPH: function() {
//     this.custPerHour.length = hours.length;
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       this.custPerHour[i] = Math.ceil(Math.random()*(this.custMax-this.custMin)+this.custMin);
//     }
//     return this.custPerHour;
//   },
//   cookiePH: function() {
//     this.cookiePerHour.length = hours.length;
//     for(var i = 0; i < this.cookiePerHour.length; i++){
//       this.cookiePerHour[i] = Math.ceil(this.custPerHour[i]*this.cookieAvg);
//     }
//     return this.cookiePerHour;
//   },
//   cookieSum: function() {
//     for(var i = 0; i < this.cookiePerHour.length; i++) {
//       this.totalCookies += this.cookiePerHour[i];
//     }
//     return this.totalCookies;
//   },
//   writeToDOM: function() {
//     this.customerPH();
//     this.cookiePH();
//     this.cookieSum();

//     var heading = document.createElement('span');
//     heading.setAttribute('class', 'tableHead');
//     var headContent = document.createTextNode('Alki ');
//     heading.appendChild(headContent);
//     tableHeadContainer.appendChild(heading);

//     var uList = document.createElement('ul');
//     for(var i = 0; i < this.custPerHour.length; i++) {
//       var list = document.createElement('li');
//       var listArr = document.createTextNode(this.cookiePerHour[i]);
//       list.appendChild(listArr);
//       uList.appendChild(list)[i];
//     }
//     tableBodyContainer.appendChild(uList);
//     var bottom = document.createElement('span');
//     bottom.setAttribute('class','tableBottom');
//     tableBottomContainer.appendChild(bottom);
//     var bottomContent = document.createTextNode('Total: ' + this.totalCookies + ' ');
//     bottom.appendChild(bottomContent);
//   }
// };

// pike.writeToDOM();
// seaTac.writeToDOM();
// seaCenter.writeToDOM();
// capHill.writeToDOM();
// alki.writeToDOM();

