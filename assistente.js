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


let testo=domanda.toLowerCase();



// SPIAGGE

if(
testo.includes("spiaggia") ||
testo.includes("mare")
){


return `
Le spiagge più belle del Salento sono:

• Pescoluse
• Punta Prosciutto
• Torre Lapillo
• Torre dell'Orso
• Porto Cesareo

Se vuoi posso consigliarti la spiaggia migliore in base al tipo di vacanza.
`;

}




// CULTURA

if(
testo.includes("visitare") ||
testo.includes("cosa vedere") ||
testo.includes("cultura")
){


return `

Ti consiglio:

• Lecce per il barocco
• Otranto per il centro storico sul mare
• Gallipoli per il borgo antico
• Galatina per le tradizioni salentine
• Acaya per il borgo fortificato

`;

}




// ITINERARIO

if(
testo.includes("itinerario")
){


return `

Ecco un esempio di itinerario:

Giorno 1:
Lecce + Acaya

Giorno 2:
Otranto + Castro

Giorno 3:
Gallipoli + spiagge dello Ionio

Posso creare un percorso personalizzato.

`;

}




// TAXI

if(
testo.includes("taxi") ||
testo.includes("trasferimento")
){


return `

Cooperativa Taxi Lecce offre trasferimenti verso:

• Aeroporto Brindisi
• Aeroporto Bari
• Spiagge
• Località turistiche
• Stazioni

Puoi prenotare direttamente dall'app.

`;

}





return `

Non ho trovato una risposta precisa.

Puoi chiedermi:

• Quali sono le spiagge più belle?
• Cosa posso visitare?
• Crea un itinerario
• Come prenoto un taxi?

`;

}
