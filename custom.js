function showItems(){
    const getItems = document.getElementById("nav-item");
    
    getItems.classList.remove("hidden");
     
    getItems.style.color ="bladkyblue";
   getItems.style.padding ="10px";
   getItems.style.margin ="10px";
   
   getItems.style.cursor ="pointer";
   getItems.style.transition ="0.5s";
  
   getItems.style.textAlign ="center";
    const btnShow = document.getElementById("btn-show");
     btnShow.classList.add("hidden")
    
 
    const getShowBtn = document.getElementById("show-btn");
    const getCloseBtn = document.getElementById("btn-close");
    getCloseBtn.classList.remove("hidden");

   
}


function closeItem(){
    const getItems = document.getElementById("nav-item");
    getItems.classList.add("hidden");
    const getCloseBtn = document.getElementById("btn-close");
    getCloseBtn.classList.add("hidden");

    const btnShow = document.getElementById("btn-show");
    btnShow.classList.remove("hidden")
    
   


}



const getSeatBtn =document.getElementsByClassName("add-sit");
const seats = getSeatBtn;

for (const seat of seats){
    seat .addEventListener("click", function (e) {
        e.target.classList.add("btn");
        e.target.style.backgroundColor ="orange";
        e.target.style.color ="white";
        e.target.disabled = true;
      
         const getName = document.getElementById("seat-name");
         const seatName = e.target.innerText;
         const nam = document.createElement("h2");
         nam.innerText = seatName;
         getName.appendChild(nam);
        
         const getPrice = document.getElementById("select-price");
         const setPrice =getIdSetInnerText("fix-price");
         const price = document.createElement("h2");
         price.innerText = setPrice;
         getPrice.appendChild(price);

         const totalPrice = getIdSetInnerText("total");
         const setTotalPrice = totalPrice + parseInt(setPrice);
         document.getElementById("total").innerText = setTotalPrice;

         const getGranTotal = getIdSetInnerText("grand-total");
         const setGranTotalPrice = getGranTotal + parseInt(setPrice);
         document.getElementById("grand-total").innerText = setGranTotalPrice;

         

         
       
      


        
        const getInnetText = getIdSetInnerText("sell-seat");
        const add = getInnetText + parseInt(1);

        if(add <= 6){
            document.getElementById("sell-seat").innerText = add;
        }else{
            alert("You Cnt add more Then 6 Site");
        };

        const getRemaining =  getIdSetInnerText("seat-left");
        const remaining = getRemaining - parseInt(1);
        if (remaining >= 0 ){
            document.getElementById("seat-left").innerText = remaining;
        }else{
            alert("You Must Be Select 40 Seat");
        }

        
        
        
        
        
        
        
     


        
        
     
        
    })
}






function getIdSetInnerText(id){
    const innerText = document.getElementById(id).innerText;
    const parsIntInnerText = parseInt(innerText);
    return parsIntInnerText
    
}





