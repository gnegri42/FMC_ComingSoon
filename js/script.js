const emailError = document.getElementById("email-error");
const submitButton = document.querySelector(".content__button");
const inputValue = document.getElementById("email-input");
const errorImage = document.querySelector(".content__error__img");

submitButton.addEventListener("click", checkData);
inputValue.addEventListener('invalid', function(event){
    event.preventDefault();
});

function checkData() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    // To do something when input value is invalid
    // inputValue.oninvalid= (e) => {
    //     e.preventDefault;
    // }
    console.log("Test")

    if (reg.test(inputValue.value) == false) 
    {
        inputValue.style.border="1px solid hsl(0, 93%, 68%)";
        errorImage.classList.remove("error");
        emailError.textContent="Please provide a valid email";
        
        return false;
    }
    errorImage.classList.add("error");
    emailError.textContent="";
    inputValue.style.border="solid 1px hsl(0, 36%, 70%)";
    alert("email sent");
    return true;
}