
//VARIABLE DECLARATIONS//

var lowCaseList = "abcdefghijklmnopqrstuvwxyz";
var capCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


//console.log("This is special list", specialList)



//REQUIREMENT CONFIRMATION CHECK//

//console.log(confirmLowCase);
//console.log(confirmCapCase);
//console.log(confirmNum);
//console.log(confirmSpecial);


var retVal = "";

var retValCombo = "";



// GENERATOR //

function generatePassword(event){

    //REQUIREMENT PROMPTS//

    var passlength = prompt("enter length of password (8-128)");
    var passlengthInt = parseInt(passlength);

    var confirmLowCase = confirm("Would you like to include a lower case letter in your password?")
    var confirmCapCase = confirm("Would you like to include a capital case letter in your password?")
    var confirmNum = confirm("Would you like to include a number in your password?")
    var confirmSpecial = confirm("Would you like to include a special character in your password?")



    for (var i = 0; i < passlengthInt; ++i) {
        retVal += lowCaseList.charAt(Math.floor(Math.random() * lowCaseList.length));
        console.log("retVal lowcase", retVal)

    }

    for (var i = 0; i < passlengthInt; ++i) {
        retVal += capCaseList.charAt(Math.floor(Math.random() * capCaseList.length));
        console.log("retVal cap case", retVal)

    }

    for (var i = 0; i < passlengthInt; ++i) {
        retVal += numList.charAt(Math.floor(Math.random() * numList.length));
        console.log("retVal num", retVal)

    }

    for (var i = 0; i < passlengthInt; ++i) {
        retVal += specialList.charAt(Math.floor(Math.random() * specialList.length));
        console.log("retVal spec list", retVal)

    }

    // FINAL SELECTION OF CHARACTERS RANDOMIZES PREVIOUS SELECTIONS TO FIT USER-PROMPTED STRING //

    for (var i = 0; i < passlengthInt; ++i) {
        retValCombo += retVal.charAt(Math.floor(Math.random() * retVal.length));
        console.log("this is retval combo", retValCombo)

    }

    //PRINT PASSWORD//

    document.getElementById("passwordDisplay").value = retValCombo;
}


//GENERATE PASSWORD //

document.getElementById("generate").addEventListener("click", generatePassword);

//COPY VALUE//

document.getElementById("copy").addEventListener("click", copyPassword);

function copyPassword(event) {
  document.getElementById("passwordDisplay").select();
  document.execCommand("Copy");
  alert("Copied password to clipboard!");
};