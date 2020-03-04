function printCompany() {
    document.getElementById("outputCompany").innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById("outputMessage").innerHTML = inputMessage.value;
}

function changeBg() {
    document.getElementById("card").style.backgroundColor = inputBg.value;
}

function changeText() {
    document.getElementById("card").style.color = inputText.value;
}

function textAlign(selected_id){
    document.getElementById("card").className = selected_id;
}

function printName() {
    document.getElementById("outputName").innerHTML= inputName.value;
}

function printJob() {
    document.getElementById("outputJob").innerHTML= inputJob.value;
}

function printEmail() {
    document.getElementById("outputEmail").innerHTML = "Email: " + inputEmail.value;
}

function printTelephone() {
    document.getElementById("outputTelephone").innerHTML= "Tel: " + inputTelephone.value;
}

function formSubmit() {
    if (!inputName.value || !inputMessage.value || !inputCompany.value || !inputJob.value || !inputEmail.value || !inputTelephone.value) {
        alert("Please complete all sections!");
    }
    else{
        alert("Business Card Created!");
    }
}


function formReset(){
    window.location.reload();
}