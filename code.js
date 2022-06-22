var txtInput = document.querySelector("#input-text")
var btnTranslate = document.querySelector("#btn-translate")
var txtOutput = document.querySelector("#output-box")
var url =   "https://api.funtranslations.com/translate/dolan.json"



function readUrl(text){
    var text = txtInput.value
    return url + "?" + "text=" + text;
}


function errorHandler(error){
    console.log("error occured" , error)
    alert("Please try again later.")
}

function readEventHandler(){
    fetch(readUrl(txtInput))
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated;
        txtOutput.innerText=translated;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", readEventHandler)
