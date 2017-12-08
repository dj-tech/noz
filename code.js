/*
  NoZ
  by DjTech
*/

//image("logo", "https://code.org/images/logo.png");
playSound("assets/sotto.mp3", true);
image("id", "assets/man.png");
image("id2", "assets/farm.png");
image("id3", "assets/boss.png");
var soldi = 100;
/*a = confirm("Prima volta su HubFIX?")
if (a == true):
	$.ajax({
  		method: "POST",
  		url: "some.php",
  		data: { name: prompt("username"), private_point: [terreno,prodotti,soldi] }
	})
  	.done(function( msg ) {
    		alert( "Data Saved: " + msg );
	});
	*/
function notifyMeone() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("É ora di coltivare!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("É ora di coltivare!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}
function notifyMetwo() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("DEEP MAGIC é pronto per la battaglia!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("DEEP MAGIC è pronto per la battaglia!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}

for (i = 0; i < 10; i++) {
	notifyMeone()
	var terreno = promptNum("TERRENO IN mq (metri quadrati)");
	if (terreno < 0) {
	    soldi = soldi + terreno;
	} else {
	    soldi = soldi - terreno;
	}
	var prodotti = terreno;
	if (soldi < 0) {
			alert("GAME OVER! banca rotta!!!");
				soldi = 0;
				terreno = 0;
		prodotti = 0;
	}
	alert("terreno");
	alert(terreno);
	alert("prodotti");
	alert(prodotti);
	alert("soldi");
	alert(soldi);

	//scambio merce per aumento variabile 

	var question_1 = promptNum("SCAMBI: nessuno [0], TprodottiCsoldi[1], TsoldiCprodotti [2]. scegli [0/1/2]");
	if (question_1 == 2) {
		prodotti = soldi;
		soldi = prodotti;
	}
	if (question_1 == 1) {
		soldi = prodotti;
		prodotti = soldi;
	}

	 notifyMetwo()
	 function rombe() {
	   for (var i = 0; i < 12; i++) {
	   	alert('Deep magic in: '+i);
	   	playSound("sound://category_animals/cat.mp3", false);
	   }
	 }
	 rombe();


	   function attack() {
	     alert("Deep magic FORCE ATTACK");
    	prodotti = prodotti - 10;
    	soldi = soldi - 10;
    	terreno = terreno - 5;
	   }
	   function defise() {
	    	alert("Deep magic FORCE SIMPLE");
	    	prodotti = prodotti - 2;
	    	soldi = soldi - 2;
	    	terreno = terreno - 1;
	   }
	   if (soldi > 60) {
	    	defise();
	  	} else {
	    	attack();
	   }
}
alert("END with this value:");
alert("terreno");
alert(terreno);
alert("prodotti");
alert(prodotti);
alert("soldi");
alert(soldi);
/*
if (a == false) {
$.ajax({
  	method: "POST",
  	url: "some.php",
  	data: { name: prompt("username"), private_point: [terreno,prodotti,soldi] }
	})
  	.done(function( msg ) {
    		alert( "Data Saved: " + msg );
	});
}
*/
image("id", "https://code.org/images/logo.png");
