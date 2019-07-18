 
const title = document.getElementById("title");
const description = document.getElementById("description"); 
const popolation = document.getElementById("popolation");  
const capitals = document.getElementById("capitals");
const provinces = document.getElementById("provinces");


let regionPosition = 0 ; 

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

        

        popolation.innerHTML =  "Popolation: " + data[regionPosition].popolazione;
        provinces.innerHTML = "Provinces: " + data[regionPosition].province ; 
        capitals.innerHTML = "Capitals : " + data[regionPosition].capoluoghi ; 
       } )
     
 }
 
// DA RIFARE LE IMMAGINI  CON 3D . QUELLE DI WIKIPEDIA NON SONO BUONE ! ! ! 







//weather con api esterno 
const fetchWeather = input => { 

}

  