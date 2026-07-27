window.addEventListener("DOMContentLoaded", function(){

    let parametri = new URLSearchParams(window.location.search);

    let destinazione = parametri.get("destinazione");


    if(destinazione){

        let campo = document.getElementById("destinazione");

        if(campo){

            campo.value = destinazione;

        }

    }

});

// Compilazione automatica destinazione

window.addEventListener("DOMContentLoaded", function(){

    let parametri = new URLSearchParams(window.location.search);

    let destinazione = parametri.get("destinazione");


    if(destinazione){

        document.getElementById("destinazione").value = destinazione;

    }

});




// Invio prenotazione WhatsApp
document.getElementById("prenotazione")
.addEventListener("submit", function(e){


    e.preventDefault();



    let nome = document.getElementById("nome").value;

    let telefono = document.getElementById("telefono").value;

    let partenza = document.getElementById("partenza").value;

    let destinazione = document.getElementById("destinazione").value;

    let data = document.getElementById("data").value;

    let ora = document.getElementById("ora").value;

    let passeggeri = document.getElementById("passeggeri").value;

    let note = document.getElementById("note").value;



    let messaggio = 
`Salve, vorrei richiedere un taxi.

Nome e Cognome:
${nome}

Numero di telefono:
${telefono}

Indirizzo di partenza:
${partenza}

Indirizzo di arrivo:
${destinazione}

Data:
${data}

Orario:
${ora}

Numero passeggeri:
${passeggeri}

Note extra:
${note || "Nessuna"}

Privacy:
Accettata`;



    let numero = "393286714428";



    let url = 
    "https://wa.me/" + numero +
    "?text=" + encodeURIComponent(messaggio);



    window.open(url, "_blank");


});

window.addEventListener("DOMContentLoaded", function(){


    const parametri = new URLSearchParams(window.location.search);


    const destinazione = parametri.get("destinazione");


    if(destinazione){


        document.getElementById("destinazione").value = destinazione;


    }


});


if ("serviceWorker" in navigator) {

    window.addEventListener("load", function(){

        navigator.serviceWorker.register("service-worker.js")
        .then(function(){

            console.log("Service Worker registrato");

        })
        .catch(function(error){

            console.log("Errore Service Worker:", error);

        });

    });

}
