'use strict';
/*
for (let num = 1; num < 101; num++){
    console.log(num);
}
*/

/*
for (let num = 11; num < 34; num++){
    console.log(num);
}
*/

/*
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 1) continue
    console.log(i)
  }
  */

/*
var value = 1;
sum = 0;

for(num = 0;num < 101; num++){
    sum = sum + num;
}

console.log(sum)
 */

/*
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++){
    console.log(i + 1)
}
*/

/*
result = 0
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++){
    result = result + i + 1 ;
}
console.log(result);
*/

/*
var obj = {green: 'зелёный', red: 'красный', blue:'голубой'}
for (var prop in obj) {
    console.log( prop + '=' + obj[prop]);
  }
*/


/*
i = 0;
var obj = {Коля: '200', Вася: '300', Петя:'400'}
for (var i in obj) {
    console.log(i + ' - зарплата ' + obj[i]);
  } 
  */


/*
var arr = [2, 5, 9, 15, 0, 4];
for  (var i = 0; i < arr.length; i++){
    if (arr [i] > 3 && arr[i] < 10){
    console.log(arr[i]);
    }
}
*/


/*
i = 0
result = 0 
var arr = [1, 2, 3, -1, -2, -3];
for  (var i  in arr){
    if (arr [i] > 0){
    result == i + arr[i]; 
    }
    console.log(result);
}
*/

/*
i = 0
var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for  (var i  in arr){
    if (arr [i] == 4){
        console.log("есть");
    }
}
*/


/*
var arr = [10, 20, 30, 50, 235, 3000, 4];
for  (let i = 0 ; i < arr.length; i++){
    if (arr[i] / 10 == 1 || arr[i] / 10 == 2 || arr[i] / 10 == 5){
        console.log(arr[i]);
    }
}
*/
/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0 ; i < arr.length; i++){
    console.log(`-${arr[i]}-`);
}

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((item, index, array) => {
    // console.log(`-${index}-`);
// });
*/

/*
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for  (let i = 0 ; i < arr.length; i++){
    if (arr[i] == 'сб' || arr[i]  == 'вс'){
        alert(arr[i].bold());
    }else {
        alert(arr[i]);
    }
}
*/

/*
let day = 'чт'
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for  (let i = 0 ; i < arr.length; i++){
    if (arr[i] == 'чт'){
        alert(arr[i].italics());
    }else {
        alert(arr[i]);
    }
}
*/


/*
num = 0;
let n = 1000;
do {
    n = n / 2;
    num ++;
} while(n > 50);
console.log(n);
console.log(`Нужно ${num} итераций`);
*/