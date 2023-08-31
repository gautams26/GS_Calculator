const age=document.querySelector('#age');
const height=document.querySelector("#height");
const weight=document.querySelector("#weight");

 const btn = document.querySelector('#calculate');        
 const radioButtons = document.querySelectorAll('input[name="gender"]');
 let selectedSize;
        btn.addEventListener("click", () => {
            
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            // show the output:
          //  console.log(selectedSize);
          //  console.log(age+" "+height.value+" "+weight.value);
            var bmi;
            var meter=height.value/100
            bmi=(weight.value/(meter*meter));
          // var ageValue=age.value;
          // var genderValue=selectedSize;
          // var heightValue=height.value;
          // var weightValue=weight.value;
          // console.log(typeof(bmi)+" "+bmi);
          
          if(bmi<18.5){
              document.getElementById("result").style.color="gray";
              document.getElementById("result").innerHTML="Under Weight";
          }
          else if(bmi>=18.5&&bmi<=24.9){
              document.getElementById("result").style.color="green";
              document.getElementById("result").innerHTML="Healthy Weight";
          }
          else if(bmi>=25&&bmi<=29.9){
              document.getElementById("result").style.color="orange";
              document.getElementById("result").innerHTML="Over Weight";
          }
          else if(bmi>=30){
              document.getElementById("result").style.color="red";
              document.getElementById("result").innerHTML="Obesity";
          }
        });
const clear = document.querySelector('#clear');  
clear.addEventListener("click", () => {
            
    age.value="";
    height.value="";
    weight.value="";
    document.getElementById("result").innerHTML="";
    for (const radioButton of radioButtons) {
                radioButton.checked=false;        
            }
            
        });
        