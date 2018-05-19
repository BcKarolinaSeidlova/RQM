
let quotes = [
	{quoteEN:"You can never quit. Winners never quit, and quitters never win.",
	 quoteCS: "Nemůžeš nikdy skončit. Vítězové nikdy nekončí a ti, kteří skončí nikdy nevyhrají.",
	authorEN:"@_100DaysOfCode",
	authorCS:"@_100DaysOfCode"},

	{quoteEN:"It's better to burn out than fade away.",
	quoteCS:"Je lepší shořet než vyhasnout.",
	authorEN:"Kurt Cobain",
	authorCS:"Kurt Cobain"},

	{quoteEN:"Two possibilities exist: Either we are alone in the Universe or we are not. Both are equally terrifying.",
	quoteCS:"Existují dvě možnosti. Buď jsme ve vesmíru sami, nebo nejsme. Obě jsou stejně děsivé.",
	authorEN:"Arthur C. Clarke",
	authorCS:"Arthur C. Clarke "},

	{quoteEN:"That there’s some good in the world, Mr. Frodo, and it’s worth fighting for.",
	quoteCS:"V tomhle světě ještě je dobro, pane Frodo. Stojí za to o něj bojovat.",
	authorEN:"J.R.R.Tolkien (Sam)",
	authorCS:"J.R.R.Tolkien (Sam)"},

	{quoteEN:"I met God, she's black.",
	quoteCS:"Potkal jsem Boha, je to černoška.",
	authorEN:"unknown author",
	authorCS:"neznámý autor"},


{quoteEN: "Future belongs to aluminium.",
quoteCS: "Budoucnost patří aluminiu.",
authorEN: "Jara Cimrman",
authorCS: "Jára Cimrman"}
	];


let tweet = document.getElementById('tweet');
document.getElementById('showMe').addEventListener('click', giveQuote);

function giveQuote () {
	let post = "";
	let number = Math.floor(Math.random()*(quotes.length));
	if (document.getElementById('quote-en') == null) {
		console.log("čeština");
		document.getElementById('quote-cs').innerHTML = quotes[number].quoteCS;
		document.getElementById('author-cs').innerHTML = quotes[number].authorCS;
	post += quotes[number].quoteCS+" - " + quotes[number].authorCS;} 


	if (document.getElementById('quote-cs') == null)
		{console.log("eng");
		document.getElementById('quote-en').innerHTML = quotes[number].quoteEN;
		document.getElementById('author-en').innerHTML = quotes[number].authorEN;
		post += quotes[number].quoteEN +" - "+ quotes[number].authorEN;}
	
//tweeting button
	tweet.addEventListener('click', function () {
	window.location = 'https://twitter.com/intent/tweet?text='+post;
		} );


}


