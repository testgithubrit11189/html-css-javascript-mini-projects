const form=document.getElementById("form");

const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("confirm-password");
const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateinputs();
});

const validateinputs = ()=>{
    
    const usernamevalue= username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const cpasswordvalue=cpassword.value.trim();

    if(usernamevalue === ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }

    if (emailvalue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailvalue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordvalue === '') {
        setError(password, 'Password is required');
    } else if (passwordvalue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (cpasswordvalue === '') {
        setError(cpassword, 'Please confirm your password');
    } else if (cpasswordvalue !== passwordvalue) {
        setError(cpassword, "Passwords don't match");
    } else {
        setSuccess(cpassword);
    }
};

const setError=(element,message)=>{
    const inputcontrol= element.parentElement;
    const displayerror=inputcontrol.querySelector('.error');
    displayerror.innerText=message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess= element =>{
  const inputcontrol= element.parentElement;
  const displayerror=inputcontrol.querySelector('.error');
  displayerror.innerText='';

  inputcontrol.classList.add('success');
  inputcontrol.classList.remove('error');

};

function isValidEmail(e) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
};

