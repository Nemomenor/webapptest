let tg = window.Telegram.WebApp;

tg.expand();
tg.ready();
let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'CLOSE fuack',
    is_visible: true
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
    if (result === true) {
        let event = "ok_send";
        tg.sendData(event);
        tg.close();
    }


});









