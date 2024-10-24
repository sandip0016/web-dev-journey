let num=13;
if(num%10 ==0 ){
    console.log ("good number")
} else{
    console.log("bad number")
}
let Name= prompt("enter your name !");
let age= prompt("enter your age !");
let msg= Name+ " "+ "is"+" "+ age+" "+ "years"+ " " + "old"+".";
alert(msg);
let month="Quater4";
switch(month){
    case"Quater1":
    console.log("january,February, March")
    break;
    case"Quater2":
    console.log("April, May, June")
    break;
    case"Quater3":
    console.log("July, August, September")
    break;
    case"Quater4":
    console.log("October, November, December")
    break;
}
let firstName="adiya";
if((firstName[0]=="A" || firstName[0]=="a") && (firstName.length > 5)){
    console.log("golden String");
}else{
    console.log(" not a golden string.");
}

let a = 5;
let b = 18;
let c= 23;
if(a>b){
    if(a>c){
        console.log(a,"islargest");
    }else{
        console.log(c,"islargest");
    }
} else{
    if(b>c){
        console.log(b,"islargest");

    }else{
        console.log(c,"islargest");
    }
}
let num1=32;
let num2=47852;
if((num1%10)==(num2%10)){
    console.log ("numbers have the same last digit which is", num1%10 )
}else{
    console.log("numbers dont have the same last digit")
}