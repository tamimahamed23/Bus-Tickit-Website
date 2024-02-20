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
