var btnAccept = document.querySelector("#submitButton");
var inputValue = document.querySelectorAll(".inpt");
var infoGame = {Name: inputValue[0].value, emeil: inputValue[1].value};
var isNotKyr = function (str) {
    return /^[A-Za-z0-9]+$/i.test(str);
};


btnAccept.addEventListener("click", function() {
    var infoMess = "";
    var infoPlayer = [];
    //Ниже перечислены ошибки ввода
    if (isNotKyr(inputValue[0].value)){
        infoPlayer.push(inputValue[0].value)
    }else{
        infoMess += "Login must not contain Cyrillic characters and must also not be empty.";
    };
    // if (RegExp('[a-zA-Z0-9]+@gmail/.com').exec(inputValue[1].value)){

    // }else {
    //     infoMess += "\nАдреса введена не вiрно. Приймаеться тiльки формат @gmail.com .";
    // };
    if (isNotKyr(inputValue[1].value)){
        infoPlayer.push(inputValue[1].value)
    }else{
        infoMess += "\nPassword must not contain Cyrillic characters and must also not be empty.";
    };
    //Далее проверяется чуществуют ли акаунты с такими же почтами или логинами
    if (infoMess != "") {
        alert(infoMess);
    }else{
        // if (inputValue[0] in userDir){
        //     infoMess = "Акаунт з таким логiном вже iснує. Спробуйте iншi варiанти.";
        // }else if(inputValue[1] in userDir){
        //     infoMess = "Акаунт з такою адресою вже iснує. Спробуйте увiйти в акаунт.";
        // }else{
        var jsonData = JSON.stringify(infoPlayer);
        var encodedJsonData = encodeURIComponent(jsonData);
        document.location.href = '../game/ThreeLaborsOfHermes.html?json=' + encodedJsonData;
        };
    // };
});