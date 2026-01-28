



const memberlist = JSON.parse(localStorage.getItem("memberlist")) || [];
const contryofeach = JSON.parse(localStorage.getItem("contryofeach")) || [];

let x = memberlist.length;
function updateStorage() {
    localStorage.setItem("memberlist", JSON.stringify(memberlist));
    localStorage.setItem("contryofeach", JSON.stringify(contryofeach));
}

addmember.addEventListener("click",function(){
    const name=document.getElementById("members").value;
      const membername = name.trim();
   if(membername !== "" && !memberlist.includes(membername)){  
     memberlist.push(membername);
     contryofeach.push(0);
      updateStorage();
    console.log(memberlist);
    x++;
    const listitem = document.createElement("input");
    listitem.className="checkclass";
    listitem.type ="checkbox";
    listitem.id="Id"+x;

    document.body.append(listitem);
    const label=document.createElement("label");
    label.className="checkclass";
    label.id ="dI"+x;
    
    label.textContent = membername;
     document.body.append(label);

     const p=document.getElementById("Id"+x);
    if(!p.id.checked){
        console.log(p.textContent);
    }
    document.getElementById("members").value = " ";

   }
   
   else{
   console.log("push failed membername is empty or already exists in memberlist")
 
}


 
})

const buttons = document.querySelectorAll(".deletemember");







const titlearray=[];

let b=0;
addexpense.addEventListener("click",function(){
    b++;
     let array=[];
     array.length=0;
     
     const moneypayer=document.getElementById("paidby").value;
      console.log(moneypayer);

    
 
 
 const expensetitle=document.getElementById("title").value;
   
    console.log(expensetitle);


    




    for(let i=1;i<=x;i++){
        let p=document.getElementById("Id"+i);
        let q=document.getElementById("dI"+i);
        if(p.checked  ){
            array.push(q.textContent);
              
           
        }
    
    } 

    const c =array.length;
    const A=Number(document.getElementById("amount").value);
    const S= A/c ;
    const T=A*(c-1)/c;

     for(let i=1;i<=x;i++){
        let p=document.getElementById("Id"+i);
        let q=document.getElementById("dI"+i);
        
        if(p.checked && q.textContent===memberlist[i-1]){
           
            if(q.textContent===moneypayer){
                 contryofeach[i-1]+=T;
            } 
            else if(q.textContent!==moneypayer){
                 contryofeach[i-1]+=-S;
            }

        }else if(!p.checked && q.textContent===memberlist[i-1] && q.textContent===moneypayer){
            contryofeach[i-1]+=A;
        }
     }
     console.log(contryofeach);

     for(let i=1;i<=x;i++){
 document.getElementById("Id"+i).checked = false;
     }

     const billdiv = document.createElement("div");
     billdiv.id="billid";
     billdiv.className="billclass";
     billdiv.innerHTML=`
          
        <div class ="divclass" id ="divid">
        <h1>Expense No.${b}</h1>
            <div   id="id1">Expense Title : ${expensetitle}
            </div>
            <div   id ="id2"> $${A} was paid by ${moneypayer}
            </div>
            <div  id ="id3">Members involved in this expense are ${array}
            </div>
        </div>
     `;
      updateStorage();
     
     document.body.append(billdiv);
     document.getElementById("members").value ="";
     document.getElementById("title").value ="";
     document.getElementById("amount").value ="";
     document.getElementById("paidby").value ="";

   
     
})


calculate.addEventListener("click",function(){
     let array=[];
     array.length=0;
     
     const moneypayer=document.getElementById("paidby").value;
      console.log(moneypayer);

    
 
 
 const expensetitle=document.getElementById("title").value;
    titlearray.push(expensetitle);
    console.log(titlearray);

    




    for(let i=1;i<=x;i++){
        let p=document.getElementById("Id"+i);
        let q=document.getElementById("dI"+i);
        if(p.checked  ){
            array.push(q.textContent);
              
           
        }
    
    } 

    const c =array.length;
    const A=Number(document.getElementById("amount").value);
    const S= A/c ;
    const T=A*(c-1)/c;

     for(let i=1;i<=x;i++){
        let p=document.getElementById("Id"+i);
        let q=document.getElementById("dI"+i);
        
       if(p.checked && q.textContent===memberlist[i-1]){
           
            if(q.textContent===moneypayer){
                 contryofeach[i-1]+=T;
            } 
            else if(q.textContent!==moneypayer){
                 contryofeach[i-1]+=-S;
            }

        }else if(!p.checked && q.textContent===memberlist[i-1] && q.textContent===moneypayer){
            contryofeach[i-1]+=A;
        }
     }

     document.getElementById("divs").style.display ="none";
     
    

     console.log(contryofeach);
 
      const billdiv = document.createElement("div");
     billdiv.id="billid";
     billdiv.className="billclass";
     billdiv.innerHTML=`
          
        <div class ="divclass" id ="divid">
        <h1>Expense No.${b+1}</h1>
            <div   id="id1">Expense Title : ${expensetitle}
            </div>
            <div   id ="id2"> $${A} was paid by ${moneypayer}
            </div>
            <div  id ="id3">Members involved in this expense are ${array}
            </div>
        </div>

        <h2>Fair & Square</h2>
     `;
     document.body.append(billdiv);
  


     for(let i=0;i<x;i++){
        const calcdiv=document.createElement("div");
        calcdiv.className="calclass";
        calcdiv.id="calid";
        
        
           
             if(contryofeach[i]<0){
                calcdiv.innerHTML=`<div  id ="outputid" >
                <div>
                  ${memberlist[i]} owes $${contryofeach[i]}
                  
                  </div>
                  </div>
                  `

             }else{
                calcdiv.innerHTML=`<div id ="outputid">
                <div>
                 ${memberlist[i]} owed $${contryofeach[i]}
                 </div>
                 </div>
                  `
             }
             document.body.append(calcdiv);
          }

         
           function updateStorage() {
              localStorage.setItem("memberlist", JSON.stringify(memberlist));
              localStorage.setItem("contryofeach", JSON.stringify(contryofeach));
}  

            const checkbox = document.getElementsByClassName("checkclass");
             for(let i=0;i<checkbox.length;i++){
             checkbox[i].style.display="none";
            }
            updateStorage();
    
})

document.addEventListener("DOMContentLoaded", function() {
    
    if (memberlist.length > 0) {
        memberlist.forEach((membername, index) => {
            const currentID = index + 1;
            
            const listitem = document.createElement("input");
            listitem.className = "checkclass";
            listitem.type = "checkbox";
            listitem.id = "Id" + currentID;
            document.body.append(listitem);

            const label = document.createElement("label");
            label.className = "checkclass";
            label.id = "dI" + currentID;
            label.textContent = membername;
            document.body.append(label);
        });
    }
});