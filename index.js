var btnTranslate =document.querySelector("#button");
var txtInput = document.querySelector("#textInput");
var outputDiv = document.querySelector("#output");

//console.log(btnTranslate);
//var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something is wrong");
}


function clickHandler(){

    var inputText = txtInput.value;

    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outputDiv.innerText=translatedText  //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)
