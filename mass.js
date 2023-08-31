var input2=document.getElementById("input2");
var result2=document.getElementById("result2");
var inputType2=document.getElementById("inputType_mass");
var resultType2=document.getElementById("resultType_mass");
var inputTypeValue2,resultTypeValue2;
input2.addEventListener('key',myResult2);
inputType2.addEventListener('change',myResult2);
resultType2.addEventListener('change',myResult2);

inputTypeValue2=inputType2.value;
resultTypeValue2=resultType2.value;
function myResult2(){
inputTypeValue2=inputType2.value;
resultTypeValue2=resultType2.value;

if(inputTypeValue2=="kilogram" && resultTypeValue2=="kilogram"){
    result2.value=Number(input2.value);
}else if(inputTypeValue2=="gram" && resultTypeValue2=="kilogram"){
    result2.value=Number(input2.value)/Math.pow(10,3);
}
else if(inputTypeValue2=="milligram" && resultTypeValue2=="kilogram"){
    result2.value=Number(input2.value)/Math.pow(10,6);
}
else if(inputTypeValue2=="metricton" && resultTypeValue2=="kilogram"){
    result2.value=Number(input2.value)*1000;
}
else if(inputTypeValue2=="pound" && resultTypeValue2=="kilogram"){
    result2.value=Number(input2.value)*0.453592;
}


if(inputTypeValue2=="kilogram" && resultTypeValue2=="gram"){
    result2.value=Number(input2.value)*Math.pow(10,3);
}else if(inputTypeValue2=="gram" && resultTypeValue2=="gram"){
    result2.value=Number(input2.value);
}
else if(inputTypeValue2=="milligram" && resultTypeValue2=="gram"){
    result2.value=Number(input2.value)/Math.pow(10,3);
}
else if(inputTypeValue2=="metricton" && resultTypeValue2=="gram"){
    result2.value=Number(input2.value)/Math.pow(10,6);
}
else if(inputTypeValue2=="pound" && resultTypeValue2=="gram"){
    result2.value=Number(input2.value)*453.592;
}

if(inputTypeValue2=="kilogram" && resultTypeValue2=="milligram"){
    result2.value=Number(input2.value)*Math.pow(10,6);
}else if(inputTypeValue2=="gram" && resultTypeValue2=="milligram"){
    result2.value=Number(input2.value)*Math.pow(10,3);
}
else if(inputTypeValue2=="milligram" && resultTypeValue2=="milligram"){
    result2.value=Number(input2.value);
}
else if(inputTypeValue2=="metricton" && resultTypeValue2=="milligram"){
    result2.value=Number(input2.value)*Math.pow(10,9);
}
else if(inputTypeValue2=="pound" && resultTypeValue2=="milligram"){
    result2.value=Number(input2.value)*453592;
}

if(inputTypeValue2=="kilogram" && resultTypeValue2=="metricton"){
    result2.value=Number(input2.value)/Math.pow(10,3);
}else if(inputTypeValue2=="gram" && resultTypeValue2=="metricton"){
    result2.value=Number(input2.value)/Math.pow(10,6);
}
else if(inputTypeValue2=="milligram" && resultTypeValue2=="metricton"){
    result2.value=Number(input2.value)*(9.999999999/Math.pow(10,10));
}
else if(inputTypeValue2=="metricton" && resultTypeValue2=="metricton"){
    result2.value=Number(input2.value);
}
else if(inputTypeValue2=="pound" && resultTypeValue2=="metricton"){
    result2.value=Number(input2.value)*0.000453592;
}

if(inputTypeValue2=="kilogram" && resultTypeValue2=="pound"){
    result2.value=Number(input2.value)*2.2046244202;
}else if(inputTypeValue2=="gram" && resultTypeValue2=="pound"){
    result2.value=Number(input2.value)*0.0022046244;
}
else if(inputTypeValue2=="milligram" && resultTypeValue2=="pound"){
    result2.value=Number(input2.value)*0.0000022046;
}
else if(inputTypeValue2=="metricton" && resultTypeValue2=="pound"){
    result2.value=Number(input2.value)*2204.6244202;
}
else if(inputTypeValue2=="pound" && resultTypeValue2=="pound"){
    result2.value=Number(input2.value);
}

}