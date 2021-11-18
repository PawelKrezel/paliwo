var ciasteczka = document.cookie;
var index_koniec = ciasteczka.length;

if (index_koniec > 9){
	var zapisane_spalanie = ciasteczka.slice(9, index_koniec);
	document.getElementById("spalanie").setAttribute("value", zapisane_spalanie.toString());
}


function oblicz(){
	var dystans = document.getElementById('dystans').value;
	var spalanie = document.getElementById('spalanie').value;
	document.cookie = "spalanie="+spalanie.toString();
	var cena = document.getElementById('cena').value;
	
	var litry = (dystans/100)*spalanie;
	litry = litry.toPrecision(3);

	document.getElementById('litry').innerHTML = "zużyto <b>"+litry+"L</b> paliwa";

	if(cena!=NaN && cena!="" && cena!=" " && cena!=0){
		var koszt = cena*litry;
		koszt = koszt.toPrecision(3);

		document.getElementById('koszt').innerHTML = "koszt to <b>"+koszt+"zł</b>";
	}

}

