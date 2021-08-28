function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

function convertToC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(celsius);
  return celsius;
}

convertToF(0); //32
convertToF(1); //33.8

convertToC(0);
convertToC(1);
