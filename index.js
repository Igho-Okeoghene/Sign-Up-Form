const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const file = document.getElementById('file');
const button = document.getElementById('claimButton');


button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const firstValue = firstName.value.trim(); 
    const lastValue = lastName.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    

    if(firstValue === ""){
        //show error
        //add error class
        setError(firstName,"First Name cannot be empty");
        
    } else {
        //add success class
        setSuccess(firstName, "")   
    };
    if(lastValue === ""){
        //show error
        //add error class
        setError(lastName,"Last Name cannot be empty");
        
    } else {
        //add success class
        setSuccess(lastName, "")   
    };
    if(emailValue === ""){
        //show error
        //add error class
       setError(email,"Email cannot be empty");
        
    }else if(!isEmail(emailValue)){
        setError(email,"Looks like this is not an email");   
    }else {
        //add success class
       setSuccess(email, "")   
    };

    if(passwordValue === ""){
        //show error
        //add error class
        setError(password,"Password cannot be empty");
        
    } else {
        //add success class
        setSuccess(password, "")   
    };
}
    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        //add error message
        small.innerText = message;
        //add error class
        formControl.className = "formControl error";
        
    }
    function setSuccess(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        
        small.innerText = message;
        
        formControl.className = "formControl success";
    }
    function isEmail(email){
      return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
    }
    
