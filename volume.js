var input3=document.getElementById("input3");
var result3=document.getElementById("result3");
var inputType3=document.getElementById("inputType_volume");
var resultType3=document.getElementById("resultType_volume");
var inputTypeValue3,resultTypeValue3;
input3.addEventListener('key',myResult3);
inputType3.addEventListener('change',myResult3);
resultType3.addEventListener('change',myResult3);

inputTypeValue3=inputType3.value;
resultTypeValue3=resultType3.value;

function myResult3(){
inputTypeValue3=inputType3.value;
resultTypeValue3=resultType3.value;

if(inputTypeValue3=="liter" && resultTypeValue3=="liter"){
    result3.value=Number(input3.value);
}else if(inputTypeValue3=="milliliter" && resultTypeValue3=="liter"){
    result3.value=(Number(input3.value)/Math.pow(10,3));
}
else if(inputTypeValue3=="cubicmeter" && resultTypeValue3=="liter"){
    result3.value=Number(input3.value)*Math.pow(10,3);
}


if(inputTypeValue3=="liter" && resultTypeValue3=="milliliter"){
    result3.value=Number(input3.value)*Math.pow(10,3);
}else if(inputTypeValue3=="milliliter" && resultTypeValue3=="milliliter"){
    result3.value=Number(input3.value);
}
else if(inputTypeValue3=="cubicmeter" && resultTypeValue3=="milliliter"){
    result3.value=Number(input3.value)*Math.pow(10,6);
}

if(inputTypeValue3=="liter" && resultTypeValue3=="cubicmeter"){
    result3.value=Number(input3.value)/Math.pow(10,3);
}else if(inputTypeValue3=="milliliter" && resultTypeValue3=="cubicmeter"){
    result3.value=Number(input3.value)/Math.pow(10,6);
}
else if(inputTypeValue3=="cubicmeter" && resultTypeValue3=="cubicmeter"){
    result3.value=Number(input3.value);
}

}