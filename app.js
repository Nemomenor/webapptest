let tg = window.Telegram.WebApp;

tg.expand();

let fail = document.getElementById("failButton");
let ok = document.getElementById("okButton");


fail.addEventListener("click", function(){
	let event = "fail";
	tg.sendData(event)
	//tg.close;
});
ok.addEventListener("click", function(){
	let event = "ok";
	tg.sendData(event)
	//tg.close;
});
tg.initDataUnsafe








