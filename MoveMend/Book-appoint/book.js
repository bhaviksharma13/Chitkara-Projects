
let c=0;
for(let i=0;i<document.querySelectorAll(".d11").length;i++){
    document.querySelectorAll(".d11")[i].addEventListener("click",()=>{
        if(c%2==0){
            document.querySelectorAll(".hidden")[i].style.display="inline";
            document.querySelectorAll(".d111")[i].style.border="1px dashed white";
            c=1;
        }
        else{
            document.querySelectorAll(".hidden")[i].style.display="none";
            document.querySelectorAll(".d111")[i].style.border="none";
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



document.querySelector(".group").addEventListener("click",()=>{
    document.querySelector(".d1").style.display="none";
    document.querySelector(".d2").style.display="inline";
    document.querySelector(".d2").style.borderTop="1px solid red"; 
    document.querySelector(".group").style.backgroundColor="rgba(128, 128, 128, 0.705)"
    document.querySelector(".appo").style.backgroundColor="rgba(128, 128, 128, 0.196)"
})



document.querySelector(".appo").addEventListener("click",()=>{
    document.querySelector(".d1").style.display="inline";
    document.querySelector(".d2").style.display="none";
    document.querySelector(".appo").style.backgroundColor="rgba(128, 128, 128, 0.705)"
    document.querySelector(".group").style.backgroundColor="rgba(128, 128, 128, 0.196)"
})