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
        infoMess += "Логiн не повинен мати кирилицi i символiв окрiм чисел, та не повинен бути пустим.";
    };
    // if (RegExp('[a-zA-Z0-9]+@gmail/.com').exec(inputValue[1].value)){

    // }else {
    //     infoMess += "\nАдреса введена не вiрно. Приймаеться тiльки формат @gmail.com .";
    // };
    if (isNotKyr(inputValue[1].value)){
        infoPlayer.push(inputValue[1].value)
    }else{
        infoMess += "\nПароль не повинен мати кирилицi i символiв окрiм чисел, та не повинен бути пустим.";
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
        localStorage.setItem('playerInfo', infoPlayer);
        document.location.href = '../game/ThreeLaborsOfHermes.html';
        };
    // };
});