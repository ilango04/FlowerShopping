var flag=0;
function CardValidation() {
    var value=document.getElementById("txtCard").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(value.length==0)                                                            //validation for empty textbox
    {
        document.getElementById("errorCard").innerHTML="Enter a card number";
    }
    else if(!value.match(regex))                                                   
    {
        document.getElementById("errorCard").innerHTML="Invalid card number"; 
    }                                       
    else                                                                           //valid card number 
    {
        flag++;
    }
}
function ValidateSecurityCode() {
    var value = document.getElementById("txtCode").value;
    var regex = /[0-9]{3}/;
    if(value.length==0)                                                            //validation for empty textbox       
    {
        document.getElementById("errorCode").innerHTML="Enter a SecurityCode";
    }
    else if (!value.match(regex))                                                   
    {
        document.getElementById("errorCode").innerHTML="Invalid SecurityCode";     
    }
    else                                                                           //valid security code 
    {
        flag++;
    }
}
function ValidateExpiryDate() {
    var Month = document.getElementById("txtMonth").value;
    var Year = document.getElementById("txtYear").value;
    if ((Month.length == 0&&Year.length==0)||(Month.length==0)||(Year.length==0))  //validation for empty textbox
    {       
    document.getElementById("errorDate").innerHTML="Choose a Date";
    }
    else {                                                                         //valid date  
        flag++;
    }
}
function ValidateName() {
    var value = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(value.length==0){                                                           //validation for empty textbox 
    document.getElementById("errorName").innerHTML="Enter a Name";
    }
    else if (!value.match(regex)){                                                 
    document.getElementById("errorName").innerHTML="Invalid Name";    
    }
    else                                                                           //valid name  
    {
        flag++;
    }
}

function ValidateAddress() {
    var value = document.getElementById("txtValidAddress").value;
    var regex = /^[a-zA-Z0-9\s,.'-]*$/;
    if (value.length==0) {                                                         //validation for empty textbox 
        document.getElementById("errorAddress").innerHTML="Enter an Address";    
    }
    else if (!value.match(regex)){                                                  
    document.getElementById("errorAddress").innerHTML="Invalid Address";    
    }    
    else                                                                           //valid address
    {
        flag++;
    }
}
function ValidateCity() {         
    var value = document.getElementById("txtTown").value;
    var regex = /^[a-zA-Z\s,'-]*$/;
    if(value.length==0){                                                           //validation for empty textbox 
    document.getElementById("errorTown").innerHTML="Enter a city";    
    }
    else if (!value.match(regex)){                                                    
    document.getElementById("errorTown").innerHTML="Invalid City";   
    }
    else                                                                           //valid city 
    {
        flag++;
    }
}

function ValidatePhoneNo() {                                        
    var value = document.getElementById("txtPhone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(value.length!=0){                                                           //validation for non-empty textbox
    if (!value.match(regex)){                                                      
    document.getElementById("errorPhone").innerHTML="Invalid PhoneNumber"; 
    }
}
}


function ValidateFax() {
    var value = document.getElementById("txtFax").value;                      
    var regex = /^\+?[0-9]{6,}$/;
    if(value.length!=0)                                                           //validation for non-empty textbox 
    {
    if (!value.match(regex)){
    document.getElementById("errorFax").innerHTML="Invalid Faxnumber";    
    }
    else
    {
        result = true;
    }
}
}

function ValidateEmail() {
    var value = document.getElementById("txtEmail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.length==0){                                                          //validation for empty textbox
    document.getElementById("errorEmail").innerHTML="Enter an Email";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorEmail").innerHTML="Invalid Email"; 
    }
    else
    {
        flag++;
        result = true;
    }
}
function ValidatePincode() {
    var value = document.getElementById("txtPincode").value;
    var regex = /^\d{6}$/;
    if(value.length==0){                                                         //validation for empty textbox
    document.getElementById("errorPincode").innerHTML="Enter a Pincode";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorPincode").innerHTML="Invalid Pincode";    
    }
    else
    {
        flag++;
        result = true;
    }
}
function CancelOperation() {
    alert("Payment Cancelled");
}
function SubmitOperation()
{
    CardValidation();
    ValidateSecurityCode();
    ValidateExpiryDate();
    ValidateName();
    ValidateAddress();
    ValidateCity();
    ValidatePincode();
    ValidateFax();
    ValidateEmail();
    if(flag==8)
        alert('Payment successfull');
}
