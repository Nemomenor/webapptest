let tg = window.Telegram.WebApp;

tg.expand();
tg.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
let fail = document.getElementById("failButton");
let ok = document.getElementById("okButton");


fail.addEventListener("click", function(){
	let event = "fail";
	tg.sendData(event)
	tg.close;
});
ok.addEventListener("click", function(){
	let event = "ok";
	tg.sendData(event)
	tg.close;
});
let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.id}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








