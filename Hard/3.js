/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
   let wrongElem = str.indexOf('_');
   let upperElem = wrongElem +1;
   let newStr = str.slice(0, wrongElem) + str.charAt(upperElem).toUpperCase() + str.slice(upperElem+1, str.length)
return newStr    
}
console.log(camelCase('hello_world'))
module.exports = camelCase