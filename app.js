let tg = window.Telegram.WebApp;

tg.expand();

let mailing = document.getElementById("mailing");
let fisk = document.getElementById("fisk");


mailing.addEventListener("click", function(){
	let event = "mailing";
	tg.sendData(event)
	tg.close;
});
fisk.addEventListener("click", function(){
	let event = "fisk";
	tg.sendData(event)
	tg.close;
});
let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.id}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








