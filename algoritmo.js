function generaItinerario(giorni, preferenze, tipoViaggio) {


    let lista = localita.map(posto => {


        let punteggio = 0;



preferenze.forEach(pref => {


    if(posto.categorie.includes(pref)){

        punteggio += 5;

    }


});



tipoViaggio.forEach(tipo => {


    if(posto.idealePer.includes(tipo)){

        punteggio += 4;

    }


});



        punteggio += posto.priorita;



        return {

            ...posto,

            punteggio

        };


    });



    // ordina per compatibilità

    lista.sort((a,b)=>{

        return b.punteggio - a.punteggio;

    });



    let itinerario = [];

    let usate = [];



    // massimo 2 tappe al giorno

    let massimo = giorni * 2;



    let selezionate = lista
    .filter(p=>{

        return !usate.includes(p.nome);

    })
    .slice(0,massimo);



    for(let giorno = 1; giorno <= giorni; giorno++){


        let disponibili = selezionate.filter(p=>{

            return !usate.includes(p.nome);

        });



        if(disponibili.length === 0){

            break;

        }



        let prima = disponibili[0];

        usate.push(prima.nome);



        let tappe = [
            prima
        ];



        // cerca una località vicina

        let seconda = disponibili.find(p=>{


            return prima.vicine.includes(p.nome);


        });



        if(seconda){


            tappe.push(seconda);

            usate.push(seconda.nome);


        }



        itinerario.push({

            giorno: giorno,

            zona: prima.zona,

            tappe:tappe

        });


    }



    return itinerario;


}
