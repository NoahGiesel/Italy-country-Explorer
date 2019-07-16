 
const title = document.getElementById("title");
const description = document.getElementById("description");

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
       } )
     
 }
 

//weather con api esterno 
const fetchWeather = input => { 

}

  