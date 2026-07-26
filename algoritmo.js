function generaItinerario(giorni, preferenze) {


    let localitaScelte = localita.map(posto => {


        let punteggio = 0;


        preferenze.forEach(pref => {


            if(posto.categorie.includes(pref)){

                punteggio += 5;

            }


        });



        punteggio += posto.priorita;



        return {

            ...posto,

            punteggio:punteggio

        };


    });



    // ordina per compatibilità

    localitaScelte.sort((a,b)=>{

        return b.punteggio - a.punteggio;

    });



    let itinerario = [];

    let usate = [];



    for(let giorno = 1; giorno <= giorni; giorno++){


        let tappeGiorno = [];



        // prende una zona dominante

        let prima = localitaScelte.find(p =>

            !usate.includes(p.nome)

        );



        if(!prima) break;



        let zona = prima.zona;



        let nellaZona = localitaScelte.filter(p =>

            p.zona === zona &&

            !usate.includes(p.nome)

        );



        tappeGiorno.push(nellaZona[0]);

        usate.push(nellaZona[0].nome);



        if(nellaZona[1]){


            tappeGiorno.push(nellaZona[1]);

            usate.push(nellaZona[1].nome);


        }



        itinerario.push({

            giorno:giorno,

            zona:zona,

            tappe:tappeGiorno

        });


    }



    return itinerario;


}
