
function checksendMail(){
   const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
   const message = document.querySelector("#message").value;
//if(name != "" && email != "" && message != "" && subject!="" && !/^[A-Za-z]+([-' ][A-Za-z]+)*$/.test(input.value.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
if(checkEmail() && checkMsg() && checkName() && checkSubject())
{
    sendMail();
}

}


function sendMail(){
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    title: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

 emailjs.send("service_pbw5lmo","template_ol9k8zz",templateParams)
 .then(function(response) { 
    alert("Email sent successfully! ");
    console.log("SUCCESS!",response.status,response.text);
     }, function(error) {
      alert("Failed to send email. please try again.");
    console.error("FAILED...",error);
     });
    };
function checkName(){
const input = document.getElementById("name");
const error = document.getElementById("error-name");


  if (input.value.trim() === "") {
    error.textContent = "Field is empty!!";

  } 
  else if (!/^[A-Za-z]+([-' ][A-Za-z]+)*$/.test(input.value.trim())) {
    error.textContent = "Name should contain only letters!!";

   
  }
  else
{
    error.textContent = ""; error.style.backgroundColor = "";
return true;

}
}


function checkMsg(){
const input = document.getElementById("message");
const error = document.getElementById("error-msg");


  if (input.value.trim() === "") {
 error.textContent = "Field is empty!!";
  
  } 
  else
{
    error.textContent = "";
     error.style.backgroundColor = "";
     return 1;
}
}

function checkEmail(){
const input = document.getElementById("email");
const error = document.getElementById("error-email");


  if (input.value.trim() === "") {
    error.textContent = "Field is empty!!";
     
  } 
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())){
     error.textContent = "This is not a valid email iddd!!";
  }
  else
{
    error.textContent = ""; error.style.backgroundColor = "";return 1;
}
}

function checkSubject(){
const input = document.getElementById("subject");
const error = document.getElementById("error-subject");


  if (input.value.trim() === "") {
     error.textContent = "Field is empty!!";
  } 
  else
{
    error.textContent = ""; error.style.backgroundColor = "";return 1;
}
}
let myname = document.getElementById("myName");
myname.classList.add("d-none");