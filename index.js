
let flag = 0;
var a = document.querySelector(".ham-elements");
if(flag === 0){
    a.style.display = "none";
    // a.style.position = "abosulte";
    flag = 1;
}

function hamburger(){

    // var b = document.querySelector(".nav-visible");
    // b.style.display = "none";

    // flag = 1;
    if(flag === 1){
        a.style.display = "block";
        // a.style.position = "abosulte";
        flag = 0;
    }
    
    else{
        a.style.display = "none";
        flag = 1;
    }
    
}