//axios import buraya gelecek
import axios from "axios";
var benimIP="31.223.84.106";


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

const getData=async function () {
	await ipAdresimiAl();
	axios.get("https://apis.ergineer.com/ipgeoapi/"+benimIP)
	.then (function(response){
		return (response.data);
	})
	.then (function(ipDatasi){
		document.querySelector("div.cards").appendChild(cardOlustur(ipDatasi));
	})
}
getData();
/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
function cardOlustur(veri){
	const _div=document.createElement("div");
	_div.classList.add("card");

	const imgCard=document.createElement("img");
	const cardInfo=document.createElement("div");
	const h3Ip=document.createElement("h3");
	const pUlke=document.createElement("p");
	const pEnlem=document.createElement("p");
	const pSehir=document.createElement("p");
	const pSaat=document.createElement("p");
	const pPara=document.createElement("p");
	const pISP=document.createElement("p");
	
	imgCard.src=veri["ülkebayrağı"];
	cardInfo.classList.add("card-info")
	h3Ip.classList.add("ip");
	h3Ip.textContent=veri["sorgu"];
	pUlke.classList.add("ülke");
	pUlke.textContent=veri["ülke"]+" "+ "(" +veri["ülkeKodu"]+")";
	pEnlem.textContent="Enlem: " + veri["enlem"] +" "+ "Boylam: "+veri["boylam"];
	pSehir.textContent="Şehir: "+veri["şehir"];
	pSaat.textContent="Saat: "+veri["saatdilimi"];
	pPara.textContent="Para birimi: "+veri["parabirimi"];
	pISP.textContent="ISP: "+veri["isp"];

	_div.appendChild(imgCard);
	cardInfo.appendChild(h3Ip);
	cardInfo.appendChild(pUlke);
	cardInfo.appendChild(pEnlem);
	cardInfo.appendChild(pSehir);
	cardInfo.appendChild(pSaat);
	cardInfo.appendChild(pPara);
	cardInfo.appendChild(pISP);

	_div.appendChild(cardInfo);
	
	return _div;
}
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/


/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek