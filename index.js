var dataList = require('./functions');

dataList.storeNum(5);
dataList.storeNum(51);
dataList.storeNum(50);
dataList.storeNum(3);
dataList.storeNum(1);
var sortedList = dataList.sortList();
console.log(sortedList);