var list = []; // not exported

function storeNum(number) { // exported
    list.push(number);
}

function sortList(){ // exported
    sorter(list);
    return list;
}

function sorter(list) { // not exported
    list.sort(function(a, b){
        return a - b;
    });
}

module.exports = {
    'storeNum' : storeNum,
    'sortList' : sortList
}