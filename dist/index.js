"use strict";
function getAverage(arr) {
    let average = 0;
    arr.forEach(Element => {
        average = average + Element;
    });
    average = average / arr.length;
    return average;
}
console.log(getAverage([0, 8, 9, 3]));
function getAmountOfPositive(arr) {
    let count = 0;
    arr.forEach(Element => {
        if (Element > 0)
            count++;
    });
    return count;
}
console.log(getAmountOfPositive([0, 8, 9, 3, -2, -9]));
function sortList(arr) {
    let a = arr.sort();
    return a;
}
