let giorni = 3;


let preferenze = [];



document.querySelectorAll(".choice").forEach(button => {


    button.addEventListener("click", function(){


        let tipo = this.dataset.type;


        if(tipo){

            let gruppo = document.querySelectorAll(
                `[data-type="${tipo}"]`
            );


            gruppo.forEach(btn=>{

                btn.classList.remove("selected");

            });



            this.classList.add("selected");



            if(this.innerText === "Si"){


                if(!preferenze.includes(tipo)){

                    preferenze.push(tipo);

                }


            } else {


                preferenze = preferenze.filter(p=>p !== tipo);


            }

        }



        if(
            [
            "1 giorno",
            "2 giorni",
            "3 giorni",
            "4-5 giorni",
            "7 giorni"
            ]
            .includes(this.innerText)
        ){


            document.querySelectorAll(".choice")
            .forEach(btn=>{


                if(
                [
                "1 giorno",
                "2 giorni",
                "3 giorni",
                "4-5 giorni",
                "7 giorni"
                ]
                .includes(btn.innerText)
                ){

                    btn.classList.remove("selected");

                }


            });


            this.classList.add("selected");



            giorni = parseInt(this.innerText);



        }



    });


});





document.querySelector(".main-button")
.addEventListener("click", function(){


    mostraItinerario();



});





function mostraItinerario(){



    let risultato = generaItinerario(
        giorni,
        preferenze
    );



    let contenitore = document.createElement("section");


    contenitore.className="booking-card";



    contenitore.innerHTML = `

    <h2>
    Il tuo itinerario consigliato
    </h2>


    <p>
    Durata: ${giorni} giorni
    </p>


    ${
    risultato.map(giorno=>{


        return `

        <div class="itinerary-place">


        <h3>
        Giorno ${giorno.giorno}
        </h3>


        <p>
        Zona: ${giorno.zona}
        </p>



        ${
        giorno.tappe.map(posto=>{


            return `

            <div>


            <strong>
            ${posto.nome}
            </strong>


            <br>


            <a href="prenota.html?destinazione=${encodeURIComponent(posto.nome)}">

            Prenota Taxi

            </a>


            </div>


            `


        }).join("")
        }


        </div>


        `


    }).join("")
    }


    `;



    document.body.appendChild(contenitore);



}
