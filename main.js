const axios = require ('axios')

console.log('connected');

const swapiBtn = document.querySelector("#swapi-button");
const sectionText = document.querySelector("#url-text");

const getResidents =() =>axios.get("https://swapi.dev/api").then(swapiBtn).catch(err)


function submitRequest(){
   axios.get("https://swapi.dev/api/planets/?search=alderaan")
   .then((response)=>{

      const residentsArr = response.data.results[0].residents;
      for (let i = 0; i< residentsArr.length; i++){
         console.log(residentsArr[i]);

         axios.get(residentsArr[i])
         .then((response)=>{
           
            console.log(response.data)
         })
      }
   });



  

}
swapiBtn.addEventListener("click",submitRequest);