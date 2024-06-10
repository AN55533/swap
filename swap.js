function swap(){
    let x= document.getElementById("text").value;
    let y= document.getElementById("text1").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    x=x+y;
    y=x-y;
    x=x-y;
    document.getElementById("dem1").innerHTML=x;
    document.getElementById("dem2").innerHTML=y;
   
}