/*
-------------------------------------------------------
Esercizio di oggi: Vue Hello
nome repo: vue-hello
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un tes
-------------------------------------------------------
*/

const { createApp }  = Vue;

createApp({

 data(){

  return{

  nome: 'Luigi',
  cognome: 'Mario',
  color:'red',
  saluto:'',
  classe:'',
  //-------------
  pic:'img/scoiattolo.jpeg',
  pic2:'img/cane.jpeg',
  // ---------------
  src:'img/',
  soggetto:'',
  jpeg:'.jpeg',
  // ---------------
  mostraImg:true,
  mostraPar:false
  }

 },
 methods:{
  mostraNascondi(){

   this.mostraImg = !this.mostraImg
   this.mostraPar = !this.mostraPar

  }
 }

}).mount('#app');
