const title = document.getElementById("title");
const description = document.getElementById("description");
const popolation = document.getElementById("popolation");
const capitals = document.getElementById("capitals");
let forModel = document.getElementById("forModel");
let iconWeather = document.getElementById("iconWeather");
let weatherCity = document.getElementById("weatherCity");
let temperature = document.getElementById("temperature");
let day = document.getElementById("day");
let year = document.getElementById("year");
var arr = [];



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



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

               weatherFetcher( data[regionPosition].latitude ,data[regionPosition].longitude)
               weatherCity.innerHTML = data[regionPosition].weatherCity; 


                if (!data[regionPosition].nome != "Valle d\'Aosta") {
                      forModel.innerHTML = `<x-model id='model' src='./obj/${data[regionPosition].nome}.obj' class='model'></x-model>`
                } else {
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

 



 const weatherFetcher = async (lat , long) => { 
      await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c6d8ab2c5b0ef4df9c8d9373dd31f7bb/${lat},${long}?exclude=minutely,hourly,daily,flags`)
     .then(response => {return response.json();}) 
     .then(data => { 
           setIcons(data.currently.icon, iconWeather)
           temperature.innerHTML = parseFloat((data.currently.temperature -32 ) * 5/9).toFixed(1) + "°c";
           var today = new Date();
           day.innerHTML = String(today.getDate()).padStart(2, '0') + " " + String( monthNames[today.getMonth()]).padStart(2, '0') + ",";
           year.innerHTML = new Date().getFullYear();
           
     })
     .catch(err => console.log(err))
 }


 function setIcons(icon, iconID) {
      const skycons = new Skycons({color: "black"});
      const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon])
 }