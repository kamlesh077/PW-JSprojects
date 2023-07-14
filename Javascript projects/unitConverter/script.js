function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
var celsiusTemperature = prompt("Enter Temperature in celsius:");
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitTemperature);
document.getElementById('result').innerHTML = "Temp Celsius to fahrenheit is:- " + fahrenheitTemperature;

