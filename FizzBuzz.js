function fizzBuzz() {

    for (let i = 1; i <= 100; i++) { // Набираем числа от 1 до 100
      if (i % 3 === 0 && i % 5 === 0) { // Проверяем деление на 3 и 5
        console.log("FizzBuzz");
      } else if (i % 3 === 0) { // Проверяем деление на 3
        console.log("Fizz");
      } else if (i % 5 === 0 ) { // Проверяем деление на 5
        console.log("Buzz");
      } else {
        console.log(i); // Выводим число, если оно не делится на 3 или 5
      }
    };

};

console.log(fizzBuzz());