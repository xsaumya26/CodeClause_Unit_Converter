function convertLength(){
  var inputValueLength = (document.getElementById("inputValueLength").value);
  var fromUnitLength = (document.getElementById("fromUnitLength").value);
  var toUnitLength= (document.getElementById("toUnitLength").value);
 
  
  
  if (fromUnitLength === "meter" && toUnitLength === "feet") {
      result = Number(inputValueLength) * 3.28084;
    } else if (fromUnitLength === "feet" && toUnitLength === "meter") {
      result = Number(inputValueLength) * 0.3048;
    } else if (fromUnitLength === "kilometer" && toUnitLength === "meter") {
      result = Number(inputValueLength) * 1000;
    } else if (fromUnitLength === "meter" && toUnitLength === "kilometer") {
      result = Number(inputValueLength) / 1000;
    } else {
      result = inputValueLength;
    } 

    document.getElementById("outputValueLength").value= result;
}
function convertTemp()
{
  var fromUnittemp = (document.getElementById("fromUnitTemp").value); 
  var toUnittemp = (document.getElementById("toUnitTemp").value);
  var inputValueTemp = (document.getElementById("inputValueTemp").value);


  if (fromUnittemp === "farenheit" && toUnittemp === "celsius") {
    result = ((Number(inputValueTemp) - (32)) * (5/9));
  } else if (fromUnittemp === "celsius" && toUnittemp === "farenheit") {
    result = ((Number(inputValueTemp) * (1.8)) + (32));
  } else if (fromUnittemp === "celsius" && toUnittemp === "kelvin") {
    result = (Number(inputValueTemp )+ (273.15));
  } else if (fromUnittemp === "kelvin" && toUnittemp === "celsius") {
    result = (Number(inputValueTemp) - (273.15));
  } else if (fromUnittemp === "farenheit" && toUnittemp === "kelvin") {
    result = (((Number(inputValueTemp) - (32)) * (5/9)) + (273.15));
  } else if (fromUnittemp === "kelvin" && toUnittemp === "farenheit") {
    result = (((Number(inputValueTemp) - (273.15)) * (1.8)) + (32));
  }  else {
    result = inputValueTemp;
  }

  document.getElementById("outputValueTemp").value= result;
}
function convertWeight(){
  var fromUnitWeight = (document.getElementById("fromUnitWeight").value); 
  var toUnitWeight = (document.getElementById("toUnitWeight").value);
  var inputValueWeight = (document.getElementById("inputValueWeight").value);

  if (fromUnitWeight === "kilogram" && toUnitWeight === "gram") {
    result =Number(inputValueWeight) * 1000;
  } else if (fromUnitWeight === "gram" && toUnitWeight === "kilogram") {
    result = Number(inputValueWeight) / 1000;
  } else if (fromUnitWeight === "gram" && toUnitWeight === "milligram") {
    result = Number(inputValueWeight) * 1000;
  } else if (fromUnitWeight === "milligram" && toUnitWeight === "gram") {
    result = Number(inputValueWeight) / 1000;
  } else if (fromUnitWeight === "milligram" && toUnitWeight === "kilogram") {
    result = Number(inputValueWeight)/ 1000000;
  } else if (fromUnitWeight === "kilogram" && toUnitWeight === "milligram"){
    result = Number(inputValueWeight)* 1000000;
  } else{
    result = inputValueWeight
  }

 



  document.getElementById("outputValueWeight").value= result;
}