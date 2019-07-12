
const pTag = document.getElementById("paragraf");

    function Toscana() { 
        console.log("clicked")
        fetch("italy.json")
        .then(res => res.json())
        .then(data => { 
             for(var i = 0; i < data.length; i++) {
                 if(data[i].nome == "Toscana") { 
                     console.log("trovato in posizione" + i)
                 }
         }

        }); 
        
    }
 
  