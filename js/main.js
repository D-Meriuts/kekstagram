const getRandomItnegralNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min +1)) + min;
};

getRandomItnegralNumber(1, 10)
// console.log(getRandomItnegralNumber(1, 10))


// имя_функции(проверяемая_строка, максимальная длина);
// Результат: true, если строка проходит по длине, и false — если не проходит
const stringCount = (string , maxLength) => {

  return string.length <= maxLength;

}

stringCount('Два слова', 140);
console.log(stringCount('имя_функции(проверяемая_строка, максимальная длина)', 140));

