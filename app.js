 
const title = document.getElementById("title");
const description = document.getElementById("description"); 
const popolation = document.getElementById("popolation");  
const capitals = document.getElementById("capitals"); 
var arr = [];


let regionPosition  = 0 ; 

const getCurrentRegion = input => {
     fetch("italy.json")
    .then(res =>  res.json())
    .then(data => { 
        for(let i = 0 ; i< data.length ; i++ ) {
             if(data[i].nome == input) { 
                regionPosition = i ; 
            }
        }
        
        title.innerHTML = data[regionPosition].nome;
        
        description.innerHTML = data[regionPosition].descrizione; 
        popolation.innerHTML =   data[regionPosition].popolazione;


        for( let i = 0 ; i< data[regionPosition].capoluoghi.length ; i++) {
             arr.push(data[regionPosition].capoluoghi[i] + "(" + data[regionPosition].province[i] + ")") ; 
             capitals.innerHTML  = arr.join(", ") ;
        }
        } )
      
           
 }
 
// DA RIFARE LE IMMAGINI  CON 3D . QUELLE DI WIKIPEDIA NON SONO BUONE ! ! ! 







//weather con api esterno 
const fetchWeather = input => { 

}

  