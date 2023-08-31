var input1=document.getElementById("input1");
var result1=document.getElementById("result1");
var inputType1=document.getElementById("inputType_time");
var resultType1=document.getElementById("resultType_time");
var inputTypeValue1,resultTypeValue1;
input1.addEventListener('key',myResult1);
inputType1.addEventListener('change',myResult1);
resultType1.addEventListener('change',myResult1);

inputTypeValue1=inputType1.value;
resultTypeValue1=resultType1.value;

function myResult1(){
inputTypeValue1=inputType1.value;
resultTypeValue1=resultType1.value;

if(inputTypeValue1=="millisecond" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value);
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)/Math.pow(10,3);
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)/Math.pow(10,6);
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)/Math.pow(10,9);
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(6*Math.pow(10,4));
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(36*Math.pow(10,5));
}
else if(inputTypeValue1=="day" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(864*Math.pow(10,5));
}
else if(inputTypeValue1=="week" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(6048*Math.pow(10,5));
}
else if(inputTypeValue1=="month" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(26298*Math.pow(10,5));
}
else if(inputTypeValue1=="year" && resultTypeValue1=="millisecond"){
    result1.value=Number(input1.value)*(315576*Math.pow(10,5));
}


if(inputTypeValue1=="millisecond" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*Math.pow(10,3);
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)/Math.pow(10,3);
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)/Math.pow(10,6);
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(6*Math.pow(10,7));
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(36*Math.pow(10,8));
}
else if(inputTypeValue1=="day" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(864*Math.pow(10,8));
}
else if(inputTypeValue1=="week" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(6048*Math.pow(10,8));
}
else if(inputTypeValue1=="month" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(26298*Math.pow(10,8));
}
else if(inputTypeValue1=="year" && resultTypeValue1=="microsecond"){
    result1.value=Number(input1.value)*(315576*Math.pow(10,8));
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*Math.pow(10,6);
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*Math.pow(10,3);
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)/Math.pow(10,3);
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(6*Math.pow(10,10));
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(36*Math.pow(10,11));
}
else if(inputTypeValue1=="day" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(864*Math.pow(10,11));
}
else if(inputTypeValue1=="week" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(6048*Math.pow(10,11));
}
else if(inputTypeValue1=="month" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(26298*Math.pow(10,11));
}
else if(inputTypeValue1=="year" && resultTypeValue1=="nanosecond"){
    result1.value=Number(input1.value)*(315576*Math.pow(10,11));
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*Math.pow(10,9);
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*Math.pow(10,6);
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*Math.pow(10,3);
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(6*Math.pow(10,13));
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(36*Math.pow(10,14));
}
else if(inputTypeValue1=="day" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(864*Math.pow(10,14));
}
else if(inputTypeValue1=="week" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(6048*Math.pow(10,14));
}
else if(inputTypeValue1=="month" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(26298*Math.pow(10,14));
}
else if(inputTypeValue1=="year" && resultTypeValue1=="picosecond"){
    result1.value=Number(input1.value)*(315576*Math.pow(10,14));
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*(0.0000166667);
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*(1.666666666/Math.pow(10,8));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*(1.667/Math.pow(10,11));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*(1.667/Math.pow(10,14));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*60;
}
else if(inputTypeValue1=="day" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*1440;
}
else if(inputTypeValue1=="week" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*10080;
}
else if(inputTypeValue1=="month" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*43830;
}
else if(inputTypeValue1=="year" && resultTypeValue1=="minute"){
    result1.value=Number(input1.value)*525960;
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*(2.778/Math.pow(10,7));
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*(2.778/Math.pow(10,10));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*(2.778/Math.pow(10,13));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*(2.778/Math.pow(10,16));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*0.0166666667;
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="day" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*24;
}
else if(inputTypeValue1=="week" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*168;
}
else if(inputTypeValue1=="month" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*730.5;
}
else if(inputTypeValue1=="year" && resultTypeValue1=="hour"){
    result1.value=Number(input1.value)*8766;
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*(1.157407407/Math.pow(10,8));
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*(1.157407407/Math.pow(10,11));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*(1.157407407/Math.pow(10,14));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*(1.157407407/Math.pow(10,17));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*0.0006944444;
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*0.0416666667;
}
else if(inputTypeValue1=="day" && resultTypeValue1=="day"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="week" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*7;
}
else if(inputTypeValue1=="month" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*30.4375;
}
else if(inputTypeValue1=="year" && resultTypeValue1=="day"){
    result1.value=Number(input1.value)*365.25;
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*(1.653439153/Math.pow(10,9));
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*(1.653439153/Math.pow(10,12));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*(1.653439153/Math.pow(10,15));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*(1.653439153/Math.pow(10,18));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*0.0000992063;
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*0.005952381;
}
else if(inputTypeValue1=="day" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*0.1428571429;
}
else if(inputTypeValue1=="week" && resultTypeValue1=="week"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="month" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*4.3482142857;
}
else if(inputTypeValue1=="year" && resultTypeValue1=="week"){
    result1.value=Number(input1.value)*52.178571429;
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*(3.802570537/Math.pow(10,10));
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*(3.802570537/Math.pow(10,13));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*(3.802570537/Math.pow(10,16));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*(3.802570537/Math.pow(10,19));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*0.0000228154;
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*0.0013689254;
}
else if(inputTypeValue1=="day" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*0.0328542094;
}
else if(inputTypeValue1=="week" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*0.2299794661;
}
else if(inputTypeValue1=="month" && resultTypeValue1=="month"){
    result1.value=Number(input1.value);
}
else if(inputTypeValue1=="year" && resultTypeValue1=="month"){
    result1.value=Number(input1.value)*12;
}

if(inputTypeValue1=="millisecond" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*(3.168808781/Math.pow(10,11));
}else if(inputTypeValue1=="microsecond" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*(3.168808781/Math.pow(10,14));
}
else if(inputTypeValue1=="nanosecond" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*(3.168808781/Math.pow(10,17));
}
else if(inputTypeValue1=="picosecond" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*(3.168808781/Math.pow(10,20));
}
else if(inputTypeValue1=="minute" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*0.0000019013;
}
else if(inputTypeValue1=="hour" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*0.0001140771;
}
else if(inputTypeValue1=="day" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*0.0027378508;
}
else if(inputTypeValue1=="week" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*0.0191649555;
}
else if(inputTypeValue1=="month" && resultTypeValue1=="year"){
    result1.value=Number(input1.value)*0.0833333333;
}
else if(inputTypeValue1=="year" && resultTypeValue1=="year"){
    result1.value=Number(input1.value);
}



}