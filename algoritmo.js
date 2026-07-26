function generaItinerario(giorni, preferenze) {


    let risultati = [];


    // assegna un punteggio a ogni località

    localita.forEach(posto => {


        posto.punteggio = 0;


        preferenze.forEach(preferenza => {


            if(posto.categorie.includes(preferenza)){

                posto.punteggio += 5;

            }


        });


        if(posto.priorita){

            posto.punteggio += posto.priorita;

        }


    });



    // ordina le località dalla più adatta

    let ordinate = [...localita].sort((a,b)=>{

        return b.punteggio - a.punteggio;

    });



    // numero massimo di tappe giornaliere

    let massimoTappe = giorni * 2;



    let selezionate = ordinate.slice(0, massimoTappe);



    // crea i giorni

    let itinerario = [];



    for(let i = 0; i < giorni; i++){


        let giorno = {


            numero: i + 1,

            tappe: []


        };



        giorno.tappe.push(selezionate[i*2]);



        if(selezionate[i*2+1]){

            giorno.tappe.push(selezionate[i*2+1]);

        }



        itinerario.push(giorno);


    }



    return itinerario;


}
