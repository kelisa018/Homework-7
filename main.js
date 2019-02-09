// Написать функцию throughOnce, которая ограничивает вызов функции, переданной как аргумент, через раз.
//
// Пример:

function throughOnce(func) {
  if(throughOnce.call === 1){
    this.call = 0;
    return func;
  } else {
    throughOnce.call = 1;
    return function a() {
      return;
    };
  }
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

throughOnce.call = 1;

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
