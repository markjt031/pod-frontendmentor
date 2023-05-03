let submitButton=document.getElementById('submit-button');
let email=document.getElementById('email');
let error=document.getElementById('error');

handleInvalid=(e)=>{
    e.preventDefault();
    error.hidden=false;
}
handleSubmit=(e)=>{
    e.preventDefault();
    error.hidden=false;
}
email.oninvalid=handleInvalid;
submitButton.onsubmit=handleSubmit;