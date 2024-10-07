/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const string =
  "Le string sono sequenze di caratteri racchiuse tra virgolette. Vengono utilizzate per rappresentare dati testuali, come ad esempio parole o frasi. Questo tipo di dato è usato per contenere testi, proprio come in questa variabile.";
const number = "I number rappresentano dati numerici. Possono essere interi (ad esempio 5 o 30), decimali (come 12.5 o 3.50) o negativi (come -12 o -13.45).";
const boolean = "È un tipo di dato che può avere solo due valori: true o false. Viene usato per rappresentare verità logiche.";
const typeNull =
  "Il tipo null indica l'assenza intenzionale di un valore. Viene usato quando si vuole esprimere che una variabile esiste, ma non ha attualmente un valore.";
const typeUndefined = "Il tipo undefined indica che una variabile è stata dichiarata ma non le è stato assegnato ancora alcun valore.";

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Edoardo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
/*IN ALTERNATIVA SI PUò ANCHE SOMMARE COSI */
num2 += num1;
console.log(sum);
console.log(num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Tunzi";
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sub = 4 - x;
console.log(sub);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2); /* false perchè non sono strettamente uguali */
console.log(name1.toLowerCase === name2.toLowerCase); /* true perchè modificando tutti i caratteri in minuscolo diventano stringhe uguali*/
