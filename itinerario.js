let giorni = "";

let preferenze = {
    mare:false,
    borghi:false,
    panorami:false,
    tradizioni:false
};



document.querySelectorAll(".choice").forEach(button => {


    button.addEventListener("click", function(){


        let tipo = this.dataset.type;


        let gruppo = document.querySelectorAll(
            `[data-type="${tipo}"]`
        );


        gruppo.forEach(btn => {

            btn.classList.remove("selected");

        });


        this.classList.add("selected");



        if(this.innerText === "Si"){

            preferenze[tipo] = true;

        } else {

            preferenze[tipo] = false;

        }


    });


});





document.querySelectorAll(".choice").forEach(button => {


    if(
        ["1 giorno","2 giorni","3 giorni","4-5 giorni","7 giorni"]
        .includes(button.innerText)
    ){


        button.addEventListener("click", function(){


            document.querySelectorAll(".choice")
            .forEach(btn=>{

                if(
                ["1 giorno","2 giorni","3 giorni","4-5 giorni","7 giorni"]
                .includes(btn.innerText)
                ){

                    btn.classList.remove("selected");

                }

            });


            this.classList.add("selected");


            giorni = this.innerText;


        });


    }


});





document.querySelector(".main-button")
.addEventListener("click", function(){


    creaItinerario();


});






function creaItinerario(){


let tappe=[];



if(preferenze.mare){

    tappe.push("Pescoluse");
    tappe.push("Torre Lapillo");

}



if(preferenze.borghi){

    tappe.push("Lecce");
    tappe.push("Otranto");

}



if(preferenze.panorami){

    tappe.push("Santa Maria di Leuca");
    tappe.push("Castro");

}



if(preferenze.tradizioni){

    tappe.push("Galatina");
    tappe.push("Grecìa Salentina");

}



if(tappe.length===0){

    tappe=[
        "Lecce",
        "Otranto",
        "Gallipoli"
    ];

}




let risultato=document.createElement("section");

risultato.className="booking-card";


risultato.innerHTML=`

<h2>
Il tuo itinerario consigliato
</h2>


<p>
Durata: ${giorni || "3 giorni"}
</p>


${tappe.map((posto,index)=>`

<div class="itinerary-place">

<h3>
Giorno ${index+1}
</h3>

<p>
${posto}
</p>


<a href="prenota.html?destinazione=${encodeURIComponent(posto)}">

Prenota Taxi

</a>


</div>


`).join("")}

`;



document.body.appendChild(risultato);


}
