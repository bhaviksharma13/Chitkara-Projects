let c=0;
for(let i=0;i<document.querySelectorAll(".moreinfo").length;i++){
    document.querySelectorAll(".moreinfo")[i].addEventListener("click",()=>{
        if(c%2==0){
            document.querySelectorAll(".hid")[i].style.display="inline";
            document.querySelectorAll(".pracname")[i].style.borderBottom="none";
            document.querySelectorAll(".hid")[i].style.borderBottom="1px solid  rgba(66, 66, 66, 0.721)";
            c=1;
        }
        else{
            document.querySelectorAll(".hid")[i].style.display="none";
            document.querySelectorAll(".pracname")[i].style.borderBottom="1px solid  rgba(66, 66, 66, 0.721)";
            c=0;
        }
        

    })
}


let boolvalue={
    namee:true,
    emai:true,
    phone:true,
    mess:true
};
for(let i=0;i<document.querySelectorAll("input").length;i++){
    document.querySelectorAll("input")[i].addEventListener("blur",()=>{
        if(document.querySelectorAll("input")[i].value==""){
            document.querySelectorAll(".reqd")[i].style.display="inline";
            document.querySelectorAll(".inp")[i].style.border="1px solid red";

            let classn=document.querySelectorAll(".reqd")[i].parentNode.className
            boolvalue[classn]=false;
        }
        
    })
}

for(let i=0;i<document.querySelectorAll("input").length;i++){
    document.querySelectorAll("input")[i].addEventListener("input",()=>{
        
            document.querySelectorAll(".reqd")[i].style.display="none";
            document.querySelectorAll(".inp")[i].style.border="1px solid black"
    })
}

let btn = document.querySelector(".bsub")

btn.addEventListener("click",()=>{
    
  if(boolvalue["namee"] && boolvalue["phone"] && boolvalue["emai"] && boolvalue["mess"] ){
    document.querySelector(".psub").style.display="none";
    
  }
  else{
    document.querySelector(".psub").style.display="inline";
    document.querySelector(".psub").style.color="red";
  }
})