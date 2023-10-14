var btn = document.querySelector(".Newform");
var writingform = document.querySelector(".writingform");
var newbtn = document.querySelector(".donebtn");
var cards = document.querySelector(".card");
var card_title = document.querySelector(".card-title");
var cards_desc = document.querySelector(".card-text");
var container = document.querySelector(".container");
writingform.style.display = "none"
// Button to add diary
btn.addEventListener("click", () => {
  writingform.style.display = "block";
  container.style.display = "none";

})
var arr = [] ;
var arr1 = [];
if(localStorage.getItem("Mydiary")==null){

  localStorage.setItem("Mydiary","[]");
}
newbtn.addEventListener("click", () => {
 
  var date = document.querySelector("#datetxt").value;
  // console.log(date);

  var titletxt = document.getElementById("title").value;
  
  var txtarea = document.querySelector("#txtarea").value;
  

 var  obj = {
    date: `${date}`,
    tit: `${titletxt}`,
    txt: `${txtarea}`
  };

  arr = JSON.parse(localStorage.getItem("Mydiary")) ;
  arr.push(obj)
  localStorage.setItem("Mydiary",JSON.stringify(arr))
// console.log(arr);
  


 
   
    cards.innerHTML = ` 
    <div class="card" style="width: 18rem;">
        <div class="card-body">
    <h5 class="card-title ">Date:${date}</h5>
    <p class="card-text"  style="font-weight:bolder">Title:${titletxt}</p>
    <p class="card-text">${txtarea}</p>
    

    </div>
    </div>`
  cards.style.display = "block";
  card_title.style.display = "block";




});


var oldarr = localStorage.getItem("Mydiary");
var parsedarr = JSON.parse(oldarr);

function reloadoldentries(){
 
if(localStorage.getItem("Mydiary")!=null){

  for(var i = 0;i < parsedarr.length;i++){
  cards.innerHTML +=  `
  <div class="card" >
  
    <div class="card-body">
      <h5 class="card-title">${parsedarr[i].date}</h5>
      <h5 class="card-title">${parsedarr[i].tit}</h5>
      <p class="card-text">${parsedarr[i].txt}</p>

    

    </div>
  </div>`
  
}

}


    container.style.display = "block"


  console.log("Event fired");

}




document.body.onload = reloadoldentries();