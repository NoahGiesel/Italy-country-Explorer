
const pTag = document.getElementById("paragraf");

    function Toscana() { 
        console.log("clicked")
        fetch("italy.json")
        .then(res => res.json())
        .then(data => { 
             for(var i = 0; i < data.length; i++) {
                console.log(data[i].nome);
         }

        }); 
        
    }
 
  