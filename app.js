let tg = window.Telegram.WebApp;

tg.expand();

let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");
tg.MainButton.show();
tg.MainButton.setText("FUAAAAAk");

fail_send.addEventListener("click", function () {
    let event = "fail_send";
    tg.sendData(event);
    tg.close();
});
ok_send.addEventListener("click", function () {
    let result = Telegram.WebApp.showConfirm("отправить ок ?");
    if (result === true) {
        let event = "ok_send";
        tg.sendData(event);
        tg.close();
    }


});









