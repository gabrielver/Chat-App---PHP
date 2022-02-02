const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");
console.log(usersList);
searchBtn.onclick = ()=>{
  searchBar.classList.toggle("show");
  searchBar.focus();
  searchBtn.classList.toggle("active");
  searchBar.value = "";
}

searchBar.onkeyup = ()=>{
    let searchTerm = searchBar.value;
    if(searchTerm != ""){ //adding an active class when the user start searching so it does not conflict with the "setInterval"
        searchBar.classList.add("active");
    }else{
        searchBar.classList.remove("active");
    }
     //we start Ajax
     let xhr = new XMLHttpRequest(); //creating XML object
     xhr.open("POST", "php/search.php", true);
     xhr.onload = ()=>{
       if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               usersList.innerHTML = data;
              
           }
       }
     }
     //sending user search term to php file with ajax
     xhr.setRequestHeader("Content-type" , "application/x-www-form-urlencoded");
     xhr.send("searchTerm=" + searchTerm);
}

setInterval(()=>{
    //we start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
             if(!searchBar.classList.contains("active")){
                usersList.innerHTML = data;
             }
             
          }
      }
    }
    xhr.send();
}, 500); //this fonction will run frequently after 500ms