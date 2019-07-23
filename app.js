 const title = document.getElementById("title");
 const description = document.getElementById("description");
 const popolation = document.getElementById("popolation");
 const capitals = document.getElementById("capitals");
  let forModel = document.getElementById("forModel");
 var arr = [];

 var body = document.getElementsByTagName("BODY")[0];
 const information__section = document.getElementById("information__section");


 let modelSrcValue;

 let regionPosition = 0;

 const getCurrentRegion = input => {
      fetch("italy.json")
           .then(res => res.json())
           .then(data => {
                for (let i = 0; i < data.length; i++) {
                     if (data[i].nome == input) {
                          regionPosition = i;
                     }
                }
 
 
                title.innerHTML = data[regionPosition].nome;

               description.innerHTML = data[regionPosition].descrizione;
               popolation.innerHTML = data[regionPosition].popolazione;


                if (!data[regionPosition].nome != "Valle d\'Aosta") {
                     console.log("sopra: " + data[regionPosition].nome)
                     forModel.innerHTML = `<x-model id='model' src='./obj/${data[regionPosition].nome}.obj' class='model'></x-model>`
                } else {
                     console.log("sotto:" + data[regionPosition].nome)
                     forModel.innerHTML = `<x-model id='model' src='./obj/${"Valle d\'Aosta"}.obj' class='model'></x-model>`
                }




                for (let i = 0; i < data[regionPosition].capoluoghi.length; i++) {
                     arr.push(data[regionPosition].capoluoghi[i] + "(" + data[regionPosition].province[i] + ")");
                     capitals.innerHTML = arr.join(", ");
                }


                information__section.style.display = "block";
                title.scrollIntoView({ behavior: "smooth"});


           })


 }

 
 //weather con api esterno 
 const fetchWeather = input => {

 }