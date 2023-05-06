class validator{
    constructor(form){
        this.form=form;
        this.inputs=Array.from(form.elements).filter((el)=>el.tagName==="input")
        this.errors={}
    }
    validate(){
        this.error={};
        this.inputs.forEach((input)=>{
            const name=input.getAttribute("name");
            const method=`validate ${name.charAt(0).toUpperCase()}${name.slice(1)}`;
            const error=this[method](input);
            if(error!==true){
                this.errors[name]=error;
            }
        });
        return Object.keys(this.errors).length===0;
    }


    // method for validating username
    validateUsername(input) {
        const value = input.value.trim();
        if (value === "") {
          return "Username is required";
        }else if (value.length < 3) {
          return "Username must be at least 3 characters long";
        } else {
          return true;
        }
      }
// method for validating email
      validateEmail(input) {
        const value = input.value.trim();
        if (value === "") {
          return "Email is required";
        } else if (!value.includes("@")) {
          return "Email is invalid";
        } else {
          return true;
        }
      }
      //method for validating required
      validateRequired(input){
        const value=input.value.trim();
        if(value===""){
            return "this field is required";
        }else{
            return true;
        }
      }

      // method for min length
      validateMinlength(input){
        const value=input.value.trim();
        const minlength=input.getAttribute("minlength");
        if(value.length<minlength){
            return `this field must be at least ${minlength} char`
        }else{
            return true;
        }
      }

}