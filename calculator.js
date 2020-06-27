function number(num){
   var input= document.getElementById('input');
   if(num==1){
    input.value+='1';
   }
   else if(num==2){
    input.value+='2';
}
else if(num==3){
    input.value+='3';
}
else if(num==4){
    input.value+='4';
}
else if(num==5){
    input.value+='5';
}
else if(num==6){
    input.value+='6';
}
else if(num==7){
    input.value+='7';
}
else if(num==8){
    input.value+='8';
}
else if(num==9){
    input.value+='9';
}
else if(num==0){
    input.value+='0';
}
else if(num==")"){
    input.value+=')';
}
else if(num=="("){
    input.value+='(';
}
else if(num=="%"){
    input.value+='%';
}
else if(num=="."){
    input.value+='.';
}


}
//clear screen function

// function clear(){
//     var result=document.getElementById("input");
// result.value = ""
// }
//operands
function operation(op){
    var input=document.getElementById('input');
    if(op=="+"){
        input.value+='+'
    }

    else if(op=="-"){
        input.value+='-'
    }
    else if(op=="*"){
        input.value+='*'
    }
    else if(op=="/"){
        input.value+='/'
    }
}
//compute answer
function compute(){
    var input=document.getElementById('input');
    input.value=eval(input.value);
  
}
