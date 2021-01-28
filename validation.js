function formValidation(event) {
    event.preventDefault();
    let myform = document.getElementById ('myform');
    let myalert = document.getElementById ('alert');
    let card = document.getElementById ('inputCard');
    let cvc = document.getElementById ('inputCVC');
    let amount = document.getElementById ('inputAmount');
    let name = document.getElementById ('inputName');
    let lastname = document.getElementById ('inputLastName');
    let city = document.getElementById ('inputCity');
    let state = document.getElementById ('inputState');
    let postalcode = document.getElementById ('inputZip');
    let cardtype = document.getElementsByName ('inlineRadioOptions');
    let checkInput = document.getElementById ('checkInput');
    let message = document.getElementById ('floatingMessage');
    let submitForm = true;


    //validación digitos tarjeta
    if (!(card.value.length == 16)){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        card.style.backgroundColor = 'rgb(236, 205, 208)';
        submitForm = false;
    }else{
        card.style.backgroundColor = 'white';
    }
    //validación digitos cvc
    if (cvc.value.length != 3){
        myalert.style.display = "block";
        myalert.textContent = "El espacio 'cvc' debe contener 3 digitos";
        cvc.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        cvc.style.backgroundColor = 'white'
    }

    //validación digitos amount
    if (amount.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "El espacio 'amount' debe ser completado"
        amount.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        amount.style.backgroundColor = 'white'
    }

    //validación de name
    if (name.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "El espacio 'name' debe ser completado"
        name.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        name.style.backgroundColor = 'white'
    }


    //validación de LastName
    if (lastname.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        lastname.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        lastname.style.backgroundColor = 'white'
    }


    //validación de city
    if (city.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        city.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        city.style.backgroundColor = 'white'
    }


     //validación de state
    if (state.value == "Pick a State"){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        state.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        state.style.backgroundColor = 'white'
    }


     //validación de Postal Code
    if (postalcode.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        postalcode.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        postalcode.style.backgroundColor = 'white'
    }


    //validación de cardtype
    let checkOption = false;
    for (let i = 0; i < cardtype.length; i++) {
        if (cardtype[i].checked) {
            checkOption = true;
        }
    }
    if (checkOption == false) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        checkInput.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    } else {
        checkInput.style.backgroundColor = 'white'
    }


      //validación de Mensaje
    if (message.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing"
        message.style.backgroundColor = 'rgb(236, 205, 208)'
        submitForm = false;
    }else{
        message.style.backgroundColor = 'white'
    }

    if(submitForm == true){
        myform.submit();
    }
}