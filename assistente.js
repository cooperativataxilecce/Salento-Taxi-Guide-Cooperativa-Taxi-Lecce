function mandaDomanda(testo){

document.getElementById("domanda").value = testo;

inviaMessaggio();

}



function inviaMessaggio(){


let input = document.getElementById("domanda");

let domanda = input.value;


if(domanda.trim()=="") return;



aggiungiMessaggio(
domanda,
"utente"
);


let risposta = rispostaAssistente(domanda);


setTimeout(()=>{


aggiungiMessaggio(
risposta,
"bot"
);


},400);



input.value="";


}





function aggiungiMessaggio(testo,tipo){


let chat=document.getElementById("chat");


let div=document.createElement("div");


div.className = tipo+"-message";


div.innerHTML=testo;


chat.appendChild(div);


chat.scrollTop=chat.scrollHeight;


}





function rispostaAssistente(domanda){


let testo = domanda.toLowerCase();
// RICERCA LOCALITÀ

for(let localita in informazioniSalento){


    if(testo.includes(localita.toLowerCase())){


        let posto = informazioniSalento[localita];


        if(
            testo.includes("fare") ||
            testo.includes("cosa posso fare") ||
            testo.includes("attività") ||
            testo.includes("attivita")
        ){


            return `
            A ${localita} puoi fare:

            • ${posto.fare.join("<br>• ")}

            `;


        }



        if(
            testo.includes("vedere") ||
            testo.includes("attrazioni") ||
            testo.includes("visitare") ||
            testo.includes("cosa vedere")
        ){


            return `
            A ${localita} puoi visitare:

            • ${posto.vedere.join("<br>• ")}

            `;


        }



        return `

        ${posto.descrizione}

        Ti consiglio:

        • ${posto.fare.join("<br>• ")}

        `;


    }

}


// SALUTO

if(
testo.includes("ciao") ||
testo.includes("salve") ||
testo.includes("buongiorno")
){

return `
Ciao! Sono l'assistente Salento.

Posso aiutarti con:

• Spiagge
• Borghi
• Itinerari
• Località migliori
• Trasferimenti taxi

Cosa vuoi scoprire?
`;

}



// SPIAGGE PIU BELLE

if(
testo.includes("spiaggia") ||
testo.includes("mare") ||
testo.includes("spiagge")
){

return `
Le spiagge più belle del Salento:

• Pescoluse - sabbia chiara e mare cristallino
• Punta Prosciutto - dune e acqua trasparente
• Torre Lapillo - ideale per famiglie
• Torre dell'Orso - panorami e mare pulito
• Porto Cesareo - spiagge e natura

Posso consigliarti la migliore in base alla tua vacanza.
`;

}



// BAMBINI

if(
testo.includes("bambini") ||
testo.includes("famiglia") ||
testo.includes("figli")
){

return `
Per una vacanza in famiglia consiglio:

• Torre Lapillo
• Porto Cesareo
• Pescoluse
• Torre dell'Orso

Sono località con spiagge comode e mare adatto anche ai più piccoli.
`;

}



// COPPIA

if(
testo.includes("coppia") ||
testo.includes("romantico") ||
testo.includes("romantica")
){

return `
Per una coppia consiglio:

• Otranto al tramonto
• Castro e le sue scogliere
• Santa Maria di Leuca
• Lecce di sera

Sono posti perfetti per passeggiate e momenti romantici.
`;

}



// MOVIMENTO SERALE

if(
testo.includes("sera") ||
testo.includes("movida") ||
testo.includes("discoteca") ||
testo.includes("divertimento")
){

return `
Per la vita serale:

• Gallipoli
• Baia Verde
• Torre San Giovanni

In estate sono le zone più animate.
`;

}



// CULTURA

if(
testo.includes("cultura") ||
testo.includes("storia") ||
testo.includes("borghi") ||
testo.includes("visitare")
){

return `
Per storia e cultura ti consiglio:

• Lecce - il barocco
• Otranto - centro storico e Cattedrale
• Gallipoli - borgo sul mare
• Galatina - tradizioni salentine
• Acaya - borgo fortificato
• Martano - Grecìa Salentina

`;

}



// ITINERARIO

if(
testo.includes("itinerario") ||
testo.includes("giorni")
){


if(testo.includes("3")){

return `
Itinerario consigliato 3 giorni:

Giorno 1:
Lecce + Acaya

Giorno 2:
Otranto + Castro

Giorno 3:
Gallipoli + Baia Verde

Puoi prenotare un taxi per ogni spostamento.
`;

}


return `
Posso creare un itinerario personalizzato.

Dimmi:
• quanti giorni hai
• se viaggi in coppia, famiglia o amici
• cosa ti piace vedere

`;

}



// LOCALITA SPECIFICHE


if(testo.includes("lecce")){

return `
Lecce è la capitale del barocco salentino.

Da vedere:
• Piazza Duomo
• Basilica di Santa Croce
• Anfiteatro Romano
• Centro storico

`;

}



if(testo.includes("otranto")){

return `
Otranto è una delle città più belle del Salento.

Da vedere:
• Castello Aragonese
• Cattedrale
• Lungomare
• Baia dei Turchi

`;

}



if(testo.includes("gallipoli")){

return `
Gallipoli è famosa per:

• Centro storico sull'isola
• Spiagge vicine
• Vita serale estiva

`;

}



if(testo.includes("leuca")){

return `
Santa Maria di Leuca è il punto più a sud del Salento.

Da vedere:
• Santuario
• Lungomare
• Grotte marine
• Punto d'incontro dei due mari

`;

}



// TAXI

if(
testo.includes("taxi") ||
testo.includes("prenotare") ||
testo.includes("trasferimento")
){

return `
Cooperativa Taxi Lecce offre trasferimenti verso:

• Aeroporto di Brindisi
• Aeroporto di Bari
• Spiagge
• Località turistiche
• Stazioni

Puoi prenotare direttamente dall'app.
`;

}



// AEROPORTI

if(
testo.includes("aeroporto") ||
testo.includes("brindisi") ||
testo.includes("bari")
){

return `
Offriamo trasferimenti aeroportuali:

• Lecce - Aeroporto Brindisi
• Lecce - Aeroporto Bari

Servizio privato e prenotabile.
`;

}



// RISPOSTA GENERICA


return `
Non ho trovato una risposta precisa.

Puoi chiedermi:

• Quali sono le spiagge più belle?
• Dove andare con bambini?
• Cosa vedere in Salento?
• Crea un itinerario
• Dove andare la sera?
• Informazioni su una località specifica

`;

}
