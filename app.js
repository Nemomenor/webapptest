let tg = window.Telegram.WebApp;

tg.expand();

let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");
let custom_send = document.getElementById("custom_send");
let ticker = document.getElementById("tickers").value();
let textarea = document.getElementById("textarea").value();

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'CLOSE',
    is_visible: true
});
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.close();
    //при клике на основную кнопку отправляем данные в строковом виде
});
fail_send.addEventListener("click", function () {
    let result = confirm("отправить FAIL");
    if (result){
        let event = "fail_send";
        tg.sendData(event);
        tg.close();
    }
});
ok_send.addEventListener("click", function () {
    let result = Telegram.WebApp.showConfirm("отправить ок ?");
    if (result) {
        let event = "ok_send";
        tg.sendData(event);
        tg.close();
    }
});
custom_send.addEventListener("click", function () {
    let event = "ok_send";
        tg.sendData(event+" $ "+ticker+" $ "+ textarea.get);
        tg.close();

});









