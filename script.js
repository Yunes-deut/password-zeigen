var passverstecken=document.querySelector('.input1');
var passVerstecken=document.querySelector('.input2');
var passinput1=document.querySelector('.passinput1');
var passinput2=document.querySelector('.passinput2');
let email=document.querySelector('.email');
let i=1;
passverstecken.addEventListener('click',()=>{
    i++; 
    if(i%2==0){
        passinput1.type="text";
    }else {
        passinput1.type="password";
    } 
})
let j=1;
passVerstecken.addEventListener('click',()=>{
    j++; 
    if(j%2==0){
        passinput2.type="text";
    }else {
        passinput2.type="password";
    } 
})
