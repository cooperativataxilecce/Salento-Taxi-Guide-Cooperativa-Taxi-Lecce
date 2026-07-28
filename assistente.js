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
    // DOMANDE DI SPOSTAMENTO

if(
testo.includes("arrivare") ||
testo.includes("raggiungere") ||
testo.includes("come andare") ||
testo.includes("distanza") ||
testo.includes("quanto dista") ||
testo.includes("come arrivare") ||
testo.includes("trasporto") ||
testo.includes("treno") ||
testo.includes("autobus") ||
testo.includes("taxi")
){

let destinazione = "";

for(let localita in informazioniSalento){

    if(testo.includes(localita.toLowerCase())){

        destinazione = localita;
        break;

    }

}


if(destinazione){

return `

Per raggiungere ${destinazione} da Lecce puoi scegliere:

Taxi:
È la soluzione più comoda e diretta. 
Puoi prenotare un trasferimento privato con Cooperativa Taxi Lecce.

Auto:
Puoi raggiungere la località comodamente seguendo la strada principale.

Trasporti pubblici:
Sono disponibili collegamenti ferroviari o autobus (in base alla destinazione).

Se vuoi posso indicarti anche distanza, tempi e costo stimato del taxi.

`;

}

}
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
// PIATTI TIPICI

if(
testo.includes("mangiare") ||
testo.includes("piatti tipici") ||
testo.includes("cucina") ||
testo.includes("specialità") ||
testo.includes("specialita") ||
testo.includes("cibo")
){

return `

In Salento ti consiglio di provare:

• Pasticciotto leccese
• Rustico leccese
• Puccia salentina
• Frisella salentina
• Ciceri e Tria
• Fave e cicorie
• Pittule
• Pesce fresco
• Polpo alla pignata
• Scapece gallipolina

`;

}



// MOVIDA

if(
testo.includes("discoteca") ||
testo.includes("movida") ||
testo.includes("sera") ||
testo.includes("nightlife") ||
testo.includes("locali")
){

return `

Per la vita serale ti consiglio:

• Gallipoli → discoteche e locali estivi
• Baia Verde → movida e beach club
• Lecce → pub, wine bar e centro storico
• Otranto → locali sul lungomare
• Santa Maria di Leuca → cocktail bar vista mare

`;

}



// FAMIGLIE

if(
testo.includes("bambini") ||
testo.includes("famiglia") ||
testo.includes("figli")
){

return `

Le località migliori per famiglie sono:

• Porto Cesareo
• Torre Lapillo
• Pescoluse
• Torre dell'Orso
• San Foca

Sono tutte caratterizzate da spiagge sabbiose e mare generalmente basso.

`;

}



// COPPIE

if(
testo.includes("coppia") ||
testo.includes("romantico") ||
testo.includes("fidanzata") ||
testo.includes("fidanzato")
){

return `

Per una vacanza romantica consiglio:

• Otranto
• Castro
• Santa Maria di Leuca
• Porto Badisco
• Lecce la sera

Ideali per tramonti, panorami e passeggiate.

`;

}



// TRAMONTO

if(
testo.includes("tramonto") ||
testo.includes("sunset")
){

return `

I tramonti più belli del Salento si possono vedere a:

• Gallipoli
• Santa Maria di Leuca
• Porto Cesareo
• Punta Prosciutto
• Torre San Giovanni

`;

}



// ESCURSIONI

if(
testo.includes("barca") ||
testo.includes("grotte") ||
testo.includes("escursione")
){

return `

Le migliori escursioni in barca partono da:

• Castro
• Santa Maria di Leuca
• Otranto
• Porto Cesareo

Potrai visitare grotte marine e tratti di costa raggiungibili solo via mare.

`;

}



// PIOGGIA

if(
testo.includes("piove") ||
testo.includes("pioggia") ||
testo.includes("maltempo")
){

return `

Se piove puoi visitare:

• Lecce
• Galatina
• Acaya
• Martano
• Musei
• Castelli
• Chiese barocche
• Ristoranti tipici

`;

}



// SHOPPING

if(
testo.includes("shopping") ||
testo.includes("negozi") ||
testo.includes("comprare")
){

return `

Per lo shopping consiglio:

• Lecce
• Gallipoli centro storico
• Otranto centro storico

Troverai negozi di artigianato, ceramiche, prodotti tipici e souvenir.

`;

}



// PARCHEGGIO

if(
testo.includes("parcheggio") ||
testo.includes("parcheggiare")
){

return `

Durante l'estate molti parcheggi nelle località balneari sono a pagamento.

Se preferisci evitare lo stress del parcheggio puoi utilizzare i taxi di Cooperativa Taxi Lecce.

`;

}



// SPIAGGE LIBERE

if(
testo.includes("spiaggia libera") ||
testo.includes("spiagge libere")
){

return `

Tra le spiagge libere più belle trovi:

• Punta Prosciutto
• Pescoluse
• Torre dell'Orso
• Torre Lapillo
• Porto Badisco

`;

}



// CANI

if(
testo.includes("cane") ||
testo.includes("cani")
){

return `

Nel Salento esistono diverse spiagge pet-friendly.

Prima della visita ti consiglio comunque di verificare le regole aggiornate della località scelta.

`;

}



// AEROPORTI

if(
testo.includes("aeroporto") ||
testo.includes("brindisi") ||
testo.includes("bari aeroporto")
){

return `

Gli aeroporti principali sono:

• Aeroporto di Brindisi
• Aeroporto di Bari

Cooperativa Taxi Lecce effettua trasferimenti privati da e per entrambi gli aeroporti.

`;

}



// STAZIONI

if(
testo.includes("stazione") ||
testo.includes("treno")
){

return `

Puoi raggiungere facilmente:

• Stazione di Lecce
• Stazione di Gallipoli
• Stazione di Otranto

Con i taxi della Cooperativa Taxi Lecce puoi prenotare il trasferimento direttamente dalla stazione.

`;

}



// PERIODO MIGLIORE

if(
testo.includes("quando venire") ||
testo.includes("periodo migliore") ||
testo.includes("quando visitare")
){

return `

Il periodo migliore è:

• Aprile e Maggio → cultura e borghi
• Giugno → mare e tranquillità
• Luglio e Agosto → spiagge e movida
• Settembre → mare caldo e meno affollamento

`;

}



// NOLEGGIO

if(
testo.includes("noleggio") ||
testo.includes("auto") ||
testo.includes("macchina")
){

return `

Puoi visitare il Salento in auto oppure utilizzare Cooperativa Taxi Lecce per raggiungere comodamente spiagge, città, aeroporti e località turistiche senza preoccuparti del parcheggio.

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
