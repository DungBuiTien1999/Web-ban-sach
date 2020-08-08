function validateEmail(){
    var email=document.getElementById("email").value;
    console.log(email);
    var re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email);
}

var isValidForm=true;
function handleWarning(id){
    if(validateEmail()){
        window.location.replace("http://localhost:4200");
    }
    else{
        var email=document.getElementById(id)
        email.style.display="block";
        isValidForm=false;
    }
}