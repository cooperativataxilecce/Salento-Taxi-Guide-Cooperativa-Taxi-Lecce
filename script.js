// Compilazione automatica destinazione

window.addEventListener("DOMContentLoaded", function(){

    let parametri = new URLSearchParams(window.location.search);

    let destinazione = parametri.get("destinazione");


    if(destinazione){

        document.getElementById("destinazione").value = destinazione;

    }

});




// Invio prenotazione WhatsApp

document.getElementById("prenotazione")?.addEventListener("submit", function(e){

    e.preventDefault();



    let nome = document.getElementById("nome").value;

    let telefono = document.getElementById("telefono").value;

    let partenza = document.getElementById("partenza").value;

    let destinazione = document.getElementById("destinazione").value;

    let data = document.getElementById("data").value;

    let ora = document.getElementById("ora").value;

    let passeggeri = document.getElementById("passeggeri").value;

    let note = document.getElementById("note").value;



    if(note.trim() === ""){

        note = "Nessuna";

    }



    let messaggio = 
`NUOVA RICHIESTA TAXI

Nome e Cognome:
${nome}

Numero di telefono:
${telefono}

Indirizzo di partenza:
${partenza}

Indirizzo di arrivo:
${destinazione}

Data servizio:
${data}

Orario:
${ora}

Numero passeggeri:
${passeggeri}

Note extra:
${note}`;



    let numeroWhatsApp = "393286714428";


    let link = 
    "https://wa.me/" + numeroWhatsApp + 
    "?text=" + encodeURIComponent(messaggio);



    window.open(link, "_blank");


});
