let tg = window.Telegram.WebApp;

tg.expand();

let fail_send = document.getElementById("fail_send");
let ok_send = document.getElementById("ok_send");
let textarea = document.getElementById("textarea");

tg.MainButton.setParams({
	text: 'CLOSE WEBVIEW',
	is_visible: true
}).onclick(tg.close())
fail_send.addEventListener("click", function(){
	result = Telegram.WebApp.showConfirm("Отправить ❌ FAIL?",false);
	textarea.setText(result)
	if (result){
		let event = "fail_send";
		tg.sendData(event)
		tg.close;
	}

});
ok_send.addEventListener("click", function(){
	result = Telegram.WebApp.showConfirm("Отправить ✅ OK?",false);
	textarea.setText(result)
	if (result){
		let event = "ok_send";
		tg.sendData(event)
		tg.close;
	}

});









