/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
   let arr = str.split('');
   arr.forEach(function(elem) {
    console.log(elem)
   })
   
}
module.exports = logEachLetter