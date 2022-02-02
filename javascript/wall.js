const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box")

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
}

inputField.focus();
inputField.onkeyup = ()=>{
    if(inputField.value != ""){
        sendBtn.classList.add("active");
    }else{
        sendBtn.classList.remove("active");
    }
}

sendBtn.onclick = ()=>{
     //we start Ajax
     let xhr = new XMLHttpRequest(); //creating XML object
     xhr.open("POST", "php/insert_post.php", true);
     xhr.onload = ()=>{
       if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
                
              
              inputField.value = ""; //once message inserted into database, then leave blank in the input field
           } 
       }
     }
     //we have to send the form data trough ajax to php
     let formData = new FormData(form); // creating new form data Object
     xhr.send(formData); //sending the form data to php
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active"); //quand la soouris bouge, chatBox est active
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active"); 
}



setInterval(()=>{
    //we start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/get_post.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            let data = xhr.response;
            if(!chatBox.classList.contains("active")){ //si chatbox active, pas de scroll. si pas active, scroll to bottom
                chatBox.innerHTML = data;
                likeBtn = document.querySelector(".details button");
                console.log(likeBtn);
            }
          }
      }
    }
    //we have to send the form data trough ajax to php
    let formData = new FormData(form); // creating new form data Object
    xhr.send(formData); //sending the form data to php
}, 500); //this fonction will run frequently after 500ms




// likeBtn.onclick = ()=>{
//     //we start Ajax
//     let xhr = new XMLHttpRequest(); //creating XML object
//     xhr.open("POST", "php/like-dislike.php", true);
//     xhr.onload = ()=>{
//       if(xhr.readyState === XMLHttpRequest.DONE){
//           if(xhr.status === 200){
// console.log(`c'est good`)
//           } 
//       }
//     }
//     //we have to send the form data trough ajax to php
//     let formData = new FormData(form); // creating new form data Object
//     xhr.send(formData); //sending the form data to php
// }
