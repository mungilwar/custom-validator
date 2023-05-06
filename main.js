const id = (id) => document.getElementById(id);

const classes = (classes) => document.getElementsByClassName(classes);

const username = id("username"),
  email = id("email"),
  password = id("password"),
  mobile = id("mobile"),
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Form submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  validateForm();
});

// Form validation function
function validateForm() {
  const usernameValue = username.value.trim();
  const emailValue=email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordValue=password.value.trim();
  const mobileNoValue=mobile.value.trim()
  const mobileNoPattern=/^\d{10}$/;
  

  
  // Username validation
  if (usernameValue === "") {
    setError(username, "Username cannot be blank");
  } else if (usernameValue.length < 3) {
    setError(username, "Username should be min 3char ");
  } else {
    setSuccess(username);
  }

  // email validation 
  if(emailValue===""){
    setError(email,'email cannot be blank');
  }else if(!emailPattern.test(emailValue)){
    setError(email,"email is not valid")
  }else{
    setSuccess(email);
  }

  //password validation
if(passwordValue===""){
    setError(password,"password cannot be blank");
}else if(!isValidPassword(passwordValue)){
    setError(password, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
}else{
    setSuccess(password)
}

// mobile no validation
if(mobileNoValue===""){
    setError(mobile,"mobile no can not be blank");
}else if(!mobileNoValue.match(mobileNoPattern)){
    setError(mobile,"phone no must be 10 digit");
}else{
    setSuccess(mobile)
}


}

const isValidPassword=(password)=>{
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return passwordPattern.test(password);
}

// Function to set error state for a field
function setError(input, errorMessage) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  const successIcon = parent.querySelector(".success-icon");
  const failureIcon = parent.querySelector(".failure-icon");

  // Set error message
  error.innerText = errorMessage;

  // Show failure icon and hide success icon
  failureIcon.style.opacity = 1;
  successIcon.style.opacity = 0;

  // Add error class to parent element
  parent.classList.add("error");
}




// Function to set success state for a field
function setSuccess(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  const successIcon = parent.querySelector(".success-icon");
  const failureIcon = parent.querySelector(".failure-icon");

  // Hide error message
  error.innerText = "";

  // Show success icon and hide failure icon
  successIcon.style.opacity = 1;
  failureIcon.style.opacity = 0;

  // Remove error class from parent element
  parent.classList.remove("error");
    // Add success class to parent element
  parent.classList.add("success");

  // Change input border color to green
  input.style.borderColor = "#4CAF50";
}
