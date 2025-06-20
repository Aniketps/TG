let isValidName = true;
let isValidEmail = true;
let isValidPhone = true;
let isValidhHobbies = true;

let firstNameValidation = (str)=>{
    let isValid = true;
    let nameStatus = document.getElementById("firstNameStatus");
    let name = document.getElementById("firstName");
    for(let i = 0; i<str.length; i++){
        if(!((str.toLowerCase().charCodeAt(i) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(i) <= 'z'.charCodeAt(0)))){
            isValid = false;
            break;
        }
    }
    if(isValid){
        isValidName = true;
        name.style.border = "none";
        nameStatus.innerHTML = "";
    }else{
        isValidName = false;
        nameStatus.innerHTML = "Invalid first name";
        nameStatus.style.color = "red";
        name.style.border = "1px solid red";
    }
};
let lastNameValidation = (str)=>{
    let isValid = true;
    let nameStatus = document.getElementById("lastNameStatus");
    let name = document.getElementById("lastName");
    for(let i = 0; i<str.length; i++){
        if(!((str.toLowerCase().charCodeAt(i) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(i) <= 'z'.charCodeAt(0)))){
            isValid = false;
            break;
        }
    }
    if(isValid){
        isValidName = true;
        name.style.border = "none";
        nameStatus.innerHTML = "";
    }else{
        isValidName = false;
        nameStatus.innerHTML = "Invalid last name";
        nameStatus.style.color = "red";
        name.style.border = "1px solid red";
    }
};

let emailValiadation = (str)=>{
    let isValid = true;
    let emailStatus = document.getElementById("emailStatus");
    for(let i = 0; i<str.length; i++){
        if(str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0) || str.charCodeAt(i) == '@'.charCodeAt(0) || (str.charCodeAt(i) >= '0'.charCodeAt(0) && str.charCodeAt(i) <= '9'.charCodeAt(0)) || str.charCodeAt(i) == '.'.charCodeAt(0)){
            if(str.charCodeAt(0) == '@'.charCodeAt(0) || str.charCodeAt(0) == '.'.charCodeAt(0)){
                isValid = false;
                break;
            }else{
                if(str.charCodeAt(0) >= '0'.charCodeAt(0) && str.charCodeAt(0) <= '9'.charCodeAt(0)){
                    isValid = false;
                    break;
                }else{
                    if(str.indexOf('@') == str.lastIndexOf('@')){
                        let strTemp = str.slice(str.indexOf('@')+1, str.length);
                        if(strTemp.slice(strTemp.indexOf('.')+1, strTemp.length).length <= 3 && strTemp.slice(strTemp.indexOf('.')+1, strTemp.length).length >= 2){
                            if(str.charCodeAt(str.length) == '.'.charCodeAt(0)){
                                isValid = false;
                                break;
                            }else{
                                if(str.includes('.') && str.includes('@')){
                                    if((str.indexOf('@')+1 == str.lastIndexOf('.')) || (str.charAt(str.indexOf('@')-1) == '.')){
                                        isValid = false;
                                        break;
                                    }else{

                                    }
                                }else{
                                    isValid = false;
                                    break;
                                }
                            }
                        }else{
                            isValid = false;
                            break;
                        }
                    }else{
                        isValid = false;
                        break;
                    }
                }
            }
        }else{
            isValid = false;
            break;
        }
    }
    if(isValid){
        emailStatus.innerHTML = "";
        isValidEmail = true;
    }else{
        emailStatus.innerHTML = "Invalid email";
        emailStatus.style.color = "red";
        isValidEmail = false;
    }
};

let hobbiesValidation = (str)=>{
    let isValid = true;
    let nameStatus = document.getElementById("hobbiesStatus");
    let name = document.getElementById("hobbies");
    for(let i = 0; i<str.length; i++){
        if(!((str.toLowerCase().charCodeAt(i) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(i) <= 'z'.charCodeAt(0) || str.charCodeAt(i) == ','.charCodeAt(0) || str.charCodeAt(i) == ' '.charCodeAt(0)))){
            isValid = false;
            break;
        }
    }
    if(isValid){
        isValidhHobbies = true;
        name.style.border = "none";
        nameStatus.innerHTML = "";
    }else{
        isValidhHobbies = false;
        nameStatus.innerHTML = "Invalid hobbies";
        nameStatus.style.color = "red";
        name.style.border = "1px solid red";
    }
};

let phoneValidation = (str)=>{
    let isValid = true;
    let phoneStatus = document.getElementById("phoneStatus");
    for(let i = 0; i<str.length; i++){
        //          7         <=  6                &&         7         >=  0                 ||         6           >=  0                &&        6          <=  9            
        if((str.charCodeAt(0) <= '6'.charCodeAt(0) && str.charCodeAt(0) >= '0'.charCodeAt(0)) || !(str.charCodeAt(i) >= '0'.charCodeAt(0) && str.charCodeAt(i) <= '9'.charCodeAt(0))){
            //                false                                                                        false
            isValid = false;
            break;
        }
    }
    if(isValid){
        isValidPhone = true;
        phoneStatus.innerHTML = "";
        if(str.length != 10){
            if(str.length > 10){
                isValidPhone = false;
                phoneStatus.innerHTML = `${str.length - 10} digit Extra added`;
                phoneStatus.style.color = "red";
            }else{
                isValidPhone = false;
                phoneStatus.innerHTML = `${10 - str.length} digit more`;
                phoneStatus.style.color = "red";
            }
        }
    }else{
        isValidPhone = false;
        phoneStatus.innerHTML = "Invalid number";
        phoneStatus.style.color = "red";
    }
    
}

let submitButton = ()=>{
    if(isValidEmail && isValidName && isValidPhone && isValidhHobbies){
        document.getElementById("submitForm").submit();
    }
};