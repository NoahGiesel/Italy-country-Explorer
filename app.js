var currentFetching = 0 ;
const listaElementi = document.getElementById("listaElementi");


const RegionClicked = x => {
    currentFetching = x ; 
    fetchAllData();
}

const fetchAllData = async() =>{ 
    await fetch("./italy.json") 
    .then((res) => res.json() )
    .then((data) => { 
        for( let i = 0 ; i< data.length; i++ ) { 
            var node = document.createElement("LI");
            var textnode = document.createTextNode(data[i].nome);
            node.appendChild(textnode);
            listaElementi.appendChild(node);
        }
    })
     
}
 
  