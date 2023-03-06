/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let sum = 0;
    if (end > start && start > 0 && end > 0) {
  for(let i = start; i <= end; i++){
    sum += i;
  }
  return sum
 
} else {
    for(let i = end; i <= start; i++){
        sum += i;
      }
    } 
          return sum;
}
console.log(sumOfIntegers(7, 6))

module.exports = sumOfIntegers
