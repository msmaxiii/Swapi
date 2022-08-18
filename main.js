const { default: axios } = require("axios");

console.log('connected');

const resBtn = document.querySelector("#residents-button");
const text = document.querySelector()

function requestSubmit(){
   axios.get("https://swapi.dev/api/planets/?search=alderaan")
   .then((response)=>{

   });
}
// .addEventListener("click",submitRequest);
