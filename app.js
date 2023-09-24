let tg = window.Telegram.WebApp;

tg.expand();

let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");
let custom_send = document.getElementById("custom_send");


fail_send.addEventListener("click", function () {
    let result = confirm("отправить FAIL");
    if (result){
        let event = "fail_send";
        tg.sendData(event);
        tg.close();
    }
});
ok_send.addEventListener("click", function () {
    let result = confirm("отправить OK");
    if (result){
        let event = "ok_send";
        tg.sendData(event);
        tg.close();
    }
});
custom_send.addEventListener("click", function () {
    let result = confirm("отправить CUSTOM");
    let textarea = document.getElementById("textarea").value;
    let tickers = document.getElementById("tickers");
    let ticker = tickers.options[tickers.selectedIndex].text;
    if (result) {
        let event = "custom_send";
        tg.sendData(event + "-split-" + ticker + "-split-" + textarea);
        tg.close();
    }

});









