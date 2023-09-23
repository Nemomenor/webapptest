let tg = window.Telegram.WebApp;

tg.expand();

let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");
Telegram.WebApp.ready();
tg.MainButton.show();
tg.MainButton.setParams({
	text: 'CLOSE WEBVIEW',
	is_visible: true
}).onClick(tg.close);

fail_send.addEventListener("click", function(){
	let result = Telegram.WebApp.showConfirm("Отправить ❌ FAIL?");
	if (result){
		let event = "fail_send";
		tg.sendData(event)
		tg.close;
	}
});
ok_send.addEventListener("click", function(){
	//let result = Telegram.WebApp.showConfirm("Отправить ✅ OK?");

		let event = "ok_send";
		tg.sendData(event)
		tg.close;


});









