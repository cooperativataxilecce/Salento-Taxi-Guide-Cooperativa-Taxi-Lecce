console.log("itinerario caricato");

let giorni = 3;


let preferenze = [];
let tipoViaggio = [];


document.querySelectorAll(".choice").forEach(button => {


    button.addEventListener("click", function(){


        let tipo = this.dataset.type;


if(tipo){


    let interessi = [
        "mare",
        "cultura",
        "borghi",
        "panorami",
        "natura",
        "relax",
        "enogastronomia",
        "movida"
    ];


    let viaggiatori = [
        "famiglia",
        "coppia",
        "amici",
        "solo"
    ];



    if(interessi.includes(tipo)){


        this.classList.toggle("selected");


        if(preferenze.includes(tipo)){


            preferenze = preferenze.filter(p=>p !== tipo);


        } else {


            preferenze.push(tipo);


        }


    }



    if(viaggiatori.includes(tipo)){


        document.querySelectorAll(
            '[data-type="famiglia"], [data-type="coppia"], [data-type="amici"], [data-type="solo"]'
        )
        .forEach(btn=>{

            btn.classList.remove("selected");

        });



        this.classList.add("selected");


        tipoViaggio = [tipo];


    }


}



        if(
            [
            "1 giorno",
            "2 giorni",
            "3 giorni",
            "4 giorni",
            "5 giorni",
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
                "4 giorni",
                "5 giorni",
                "7 giorni"
                ]
                .includes(btn.innerText)
                ){

                    btn.classList.remove("selected");

                }


            });


            if(this.classList.contains("selected")){

    this.classList.remove("selected");

    giorni = 3;

} else {


    document.querySelectorAll(".choice")
    .forEach(btn=>{

        if(
        [
        "1 giorno",
        "2 giorni",
        "3 giorni",
        "4 giorni",
        "5 giorni",
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



        }



    });


});





document.querySelector(".main-button")
.addEventListener("click", function(){


    mostraItinerario();



});





function mostraItinerario(){
let vecchioItinerario = document.querySelector(".booking-container .risultato-itinerario");

if(vecchioItinerario){

    vecchioItinerario.remove();

}

let risultato = generaItinerario(
    giorni,
    preferenze,
    tipoViaggio
);



    let contenitore = document.createElement("section");


    contenitore.className="booking-card risultato-itinerario";



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


<p>
${posto.descrizione}
</p>


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



   document.querySelector(".booking-container").appendChild(contenitore);



}
