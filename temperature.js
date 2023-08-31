var input=document.getElementById("input");
var result=document.getElementById("result");
var inputType=document.getElementById("inputType_temp");
var resultType=document.getElementById("resultType_temp");
var inputTypeValue,resultTypeValue;
input.addEventListener('key',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function myResult(){
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

if(inputTypeValue=="celsius" && resultTypeValue=="kelvin"){
    result.value=Number(input.value)+273.15;
}else if(inputTypeValue=="celsius" && resultTypeValue=="farenheit"){
    result.value=((Number(input.value)*(9/5))+32);
}
else if(inputTypeValue=="celsius" && resultTypeValue=="celsius"){
    result.value=input.value;
}

if(inputTypeValue=="kelvin" && resultTypeValue=="kelvin"){
    result.value=input.value;
}else if(inputTypeValue=="kelvin" && resultTypeValue=="celsius"){
    result.value=Number(input.value)-273.15;
}
else if(inputTypeValue=="kelvin" && resultTypeValue=="farenheit"){
    result.value=(((9/5)*(Number(input.value)-273.15))+32);
}

if(inputTypeValue=="farenheit" && resultTypeValue=="kelvin"){
    result.value=(((Number(input.value)-32)*(5/9))+273.15);
}else if(inputTypeValue=="farenheit" && resultTypeValue=="farenheit"){
    result.value=input.value;
}
else if(inputTypeValue=="farenheit" && resultTypeValue=="celsius"){
    result.value=((Number(input.value)-32)*(5/9));
}


}