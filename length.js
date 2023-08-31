var inpu=document.getElementById("in");
var resul=document.getElementById("res");
var inputTyp=document.getElementById("inputType");
var resultTyp=document.getElementById("resultType");
var inputTypeValu,resultTypeValue;
inpu.addEventListener('key',myResul);
inputTyp.addEventListener('change',myResul);
resultTyp.addEventListener('change',myResul);

inputTypeValu=inputTyp.value;
resultTypeValu=resultTyp.value;
function myResul(){
inputTypeValu=inputTyp.value;
resultTypeValu=resultTyp.value;

if(inputTypeValu=="meter" && resultTypeValu=="kilometer"){
    resul.value=Number(inpu.value)*0.001;
}else if(inputTypeValu=="meter" && resultTypeValu=="centimeter"){
    resul.value=Number(inpu.value)*100;
}
else if(inputTypeValu=="meter" && resultTypeValu=="meter"){
    resul.value=inpu.value;
}

if(inputTypeValu=="kilometer" && resultTypeValu=="kilometer"){
    resul.value=inpu.value;
}else if(inputTypeValu=="kilometer" && resultTypeValu=="centimeter"){
    resul.value=Number(inpu.value)*100000;
}
else if(inputTypeValu=="kilometer" && resultTypeValu=="meter"){
    resul.value=Number(inpu.value)*1000;
}

if(inputTypeValu=="centimeter" && resultTypeValu=="kilometer"){
    resul.value=Number(inpu.value)*0.00001;
}else if(inputTypeValu=="centimeter" && resultTypeValu=="centimeter"){
    resul.value=inpu.value;
}
else if(inputTypeValu=="centimeter" && resultTypeValu=="meter"){
    resul.value=Number(inpu.value)*0.01;
}


}