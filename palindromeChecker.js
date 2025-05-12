const input=document.getElementById("text-input");
const check=document.getElementById("check-btn");
const display=document.getElementById("result");
check.addEventListener("click",palindrome);
function palindrome(){
    if(input.value==""){
        alert("Please enter  the text");
    }
    const processedStr=input.value.replace(/[\W_]/g,"").toLowerCase();
    let ispalindrome=true;
    for(let i=0;i<Math.floor(processedStr.length/2);i++){
        if(processedStr[i] !== processedStr[processedStr.length-1-i]){
            ispalindrome=false;
            break;
        }
    }
    if(ispalindrome){
        display.innerHTML="It is a palindrome";
    }else{
        display.innerHTML="It is not a palindrome";
    }
}
