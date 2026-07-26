let giorni = "";
let preferenze = {
    mare: false,
    borghi: false,
    panorami: false,
    tradizioni: false
};



document.querySelectorAll(".choice").forEach(button => {

    button.addEventListener("click", function(){

        let testo = this.innerText;


        if(["1 giorno","2 giorni","3 giorni","4-5 giorni","7 giorni"].includes(testo)){

            giorni = testo;

        }


        if(testo === "Si"){

            this.classList.add("selected");

        }


    });

});





document.querySelector(".main-button").addEventListener("click", function(){


    let scelte = document.querySelectorAll(".selected");


    preferenze = {

        mare:false,

        borghi:false,

        panorami:false,

        tradizioni:false

    };



    let domande = document.querySelectorAll("h2");



    scelte.forEach(scelta => {


        let domanda = scelta.parentElement.previousElementSibling.innerText;



        if(domanda.includes("mare")){

            preferenze.mare = true;

        }


        if(domanda.includes("borghi")){

            preferenze.borghi = true;

        }


        if(domanda.includes("Panorami") || domanda.includes("panorami")){

            preferenze.panorami = true;

        }


        if(domanda.includes("cucina")){

            preferenze.tradizioni = true;

        }


    });



    creaItinerario();


});





function creaItinerario(){


    let tappe = [];



    if(preferenze.mare){

        tappe.push("Pescoluse");

        tappe.push("Torre Lapillo");

        tappe.push("Porto Cesareo");

    }



    if(preferenze.borghi){

        tappe.push("Lecce");

        tappe.push("Otranto");

        tappe.push("Galatina");

    }



    if(preferenze.panorami){

        tappe.push("Santa Maria di Leuca");

        tappe.push("Castro");

    }



    if(preferenze.tradizioni){

        tappe.push("Grecìa Salentina");

    }



    if(tappe.length === 0){

        tappe.push("Lecce");

        tappe.push("Otranto");

        tappe.push("Gallipoli");

    }



    let risultato = document.createElement("section");

    risultato.className = "booking-card";



    risultato.innerHTML = `

    <h2>
    Il tuo itinerario consigliato
    </h2>


    <p>
    Durata viaggio: ${giorni}
    </p>


    ${tappe.map((tappa,index)=>`

    <div class="itinerary-place">

    <h3>
    Giorno ${index + 1}
    </h3>


    <p>
    ${tappa}
    </p>


    <a href="prenota.html?destinazione=${encodeURIComponent(tappa)}">
    Prenota Taxi
    </a>


    </div>

    `).join("")}

    `;



    document.body.appendChild(risultato);


}
