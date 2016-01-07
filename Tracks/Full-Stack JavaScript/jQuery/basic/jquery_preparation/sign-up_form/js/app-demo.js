//Problem: Hints are shown even if form is valid
//Solution: Hide/show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var symbolArr = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",
                 ";","<","=",">","?","@","[","]","^","\\","_","`","~","{","}"];
var passwordLength = function () {
    return $password.val().length > 8;
};
var passwordMatch = function () {
    return $password.val() === $confirmPassword.val();
};
var passwordNumIdx = function () {
    for(var i = 0; i < $password.val().length; i++) {
        if(!isNaN($password.val().charAt(i))) {
            return true;
        }
    }
    return false;
};
var passwordUpperIdx = function () {
    // for(var i = 0; i < $password.val().length; i++) {
    //     if(isUpperCase($password.val().charAt(i))) {
    //         return true;
    //     }
    // }
    // return false;
    return true;
};
var passwordLowerIdx = function () {
    // for(var i = 0; i < $password.val().length; i++) {
    //     if(isLowerCase($password.val().charAt(i))) {
    //         return true;
    //     }
    // }
    // return false;
    return true;
};
var passwordSymbolIdx = function () {
    for(var i = 0; i < symbolArr.length; i++){
        if($password.index(symbolArr[i]) >= 0) {
            return true;
        }
    }
    return false;
};
var passwordValid = function () {
    return passwordLength() && passwordUpperIdx
    && passwordLowerIdx && passwordSymbolIdx;
}
//Hide hints
$(".hint").hide();
//When event happens on password input
var passwordEvent = function () {
    //If valid password (>8 char)
    if(passwordLength()) {
        //    Hide if valid
        console.log("Password is of length");
        $(".hint").hide();
    } else {
        //    Else show hint
        console.log("Password is not of length");
        $(".hint").show();
    }
    //If valid password (uses alpha-numeric
        //and specified symbols,
        //at least 1 uppercase,
        //1 lowercase,
        //1 number,
        //1 letter)
            //  Hide hint
            // Else change text on hint
                //Show hint
//When event happens on confirmation
        //Find out if confirmation and password match
        //Hide hint if match
        //Else show hint
};
$password.focus(passwordEvent).keyup(passwordEvent);
