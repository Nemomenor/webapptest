let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

let start = document.getElementById("start");
let fail = document.getElementById("failButton");
let ok = document.getElementById("okButton");

start.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы нажали старт");
		item = "1";
		tg.MainButton.show();
	}
});
fail.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("FAIL SEND");
		item = "1";
		tg.MainButton.show();
	}
});
ok.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("OK SEND");
		item = "1";
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.id}`;

usercard.appendChild(p);








