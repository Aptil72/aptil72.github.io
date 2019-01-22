function farToCelToKel(valNum) {
  valNum = parseFloat(valNum);
  var celsius=(valNum-32)/1.8;
  console.log(celsius);
  document.getElementById("inputCelsius").value=celsius;
  var kelvin=(valNum-32)/1.8+273.15;
  document.getElementById("inputKelvin").value=kelvin;
}
function celToFarToKel(valNum) {
  valNum = parseFloat(valNum);
  var celToFar=(valNum*1.8)+32;
  document.getElementById("inputFahrenheit").value=celToFar;
  var celToKel=valNum+273.15;
  document.getElementById("inputKelvin").value=celToKel;

}

function kelToFarToCel(valNum) {
  valNum = parseFloat(valNum);
  var kelToFar=(valNum-273.15)*1.8+32;
  document.getElementById("inputFahrenheit").value=kelToFar;
  var kelToCel=valNum-273.15;
  document.getElementById("inputCelsius").value=kelToCel;
}
function clearVal()
{
  document.getElementById("inputFahrenheit").value='';
    document.getElementById("inputCelsius").value='';
  document.getElementById("inputKelvin").value='';

  }
