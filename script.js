document.getElementById("prenotazione")?.addEventListener("submit", function(e){

    e.preventDefault();


    let nome = document.getElementById("nome").value;

    let telefono = document.getElementById("telefono").value;

    let partenza = document.getElementById("partenza").value;

    let destinazione = document.getElementById("destinazione").value;

    let data = document.getElementById("data").value;

    let ora = document.getElementById("ora").value;

    let passeggeri = document.getElementById("passeggeri").value;

    let bagagli = document.getElementById("bagagli").value;



    let messaggio = 
`Nuova richiesta taxi

Nome e Cognome: ${nome}

Telefono: ${telefono}

Partenza: ${partenza}

Destinazione: ${destinazione}

Data: ${data}

Ora: ${ora}

Passeggeri: ${passeggeri}

Bagagli: ${bagagli}`;



    let numero = "393XXXXXXXXX"; 
    // sostituire con il numero WhatsApp della cooperativa


    let url = 
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(messaggio);



    window.open(url, "_blank");


});
