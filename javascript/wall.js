

//POUR LES COMMENTS

// const form2 = document.querySelector(".typing-comment"),
// inputComment = form2.querySelector(".input-field"),
// sendcomment = form2.querySelector("button");
// sendBtn.onclick = ()=>{
//     //we start Ajax
//     let xhr = new XMLHttpRequest(); //creating XML object
//     xhr.open("POST", "php/get-comment.php", true);
//     xhr.onload = ()=>{
//       if(xhr.readyState === XMLHttpRequest.DONE){
//           if(xhr.status === 200){
//              inputField.value = ""; //once message inserted into database, then leave blank in the input field
//           } 
//       }
//     }
//     //we have to send the form data trough ajax to php
//     let formData = new FormData(form); // creating new form data Object
//     xhr.send(formData); //sending the form data to php
// }


// setInterval(()=>{
//     //we start Ajax
//     let xhr = new XMLHttpRequest(); //creating XML object
//     xhr.open("POST", "php/get_comment.php", true);
//     xhr.onload = ()=>{
//       if(xhr.readyState === XMLHttpRequest.DONE){
//           if(xhr.status === 200){
//             let data = xhr.response;
//               commentBox.innerHTML = data;
//           }
//       }
//     }
//     //we have to send the form data trough ajax to php
//     let formData = new FormData(form); // creating new form data Object
//     xhr.send(formData);//sending the form data to php
//     likeBtn = document.querySelector(".details button");
//     likeBtn.onclick = ()=>{
//          update();
//      }
// }, 500); //this fonction will run frequently after 500ms



const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");



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
               
            }
          }
      }
    }
    //we have to send the form data trough ajax to php
    let formData = new FormData(form); // creating new form data Object
    xhr.send(formData);//sending the form data to php
    likeBtn = document.querySelector(".details button");
    likeBtn.onclick = ()=>{
         update();
     }
}, 500); //this fonction will run frequently after 500ms



function update (){
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/like.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              console.log("sent");
          } 
      }
    }
    //we have to send the form data trough ajax to php
    let formData = new FormData(form); // creating new form data Object
    xhr.send(formData); //sending the form data to php
};

