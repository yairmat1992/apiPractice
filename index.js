$(function () {
    $("#searchBtn").on("click", () =>{
const alpha3code = $("#searchInput").val()
getCountryByCode(alpha3code).then(result => { return result })
.then(country => { 
    getAllLanguages(country)})
.catch(err => $("#countriesByLang").html(`<div class="col-12 text-center mb-3" ><h1>country code do not exist</h1></div>`))
    }) 
    
})

function getAllLanguages(country){
    $("#countriesByLang").html("")
   const {languages} = country
   languages.forEach(language => {
    const {iso639_1,name} = language 
       getCountryByLanguage(iso639_1)
       .then(countries =>{ 
        countriesByLanguage = []
        countriesByLanguage.push(countries)
        console.log(countriesByLanguage)
        $("#countriesByLang").append(`<div class="col-12 text-center mb-3" ><h1>${name} </h1></div>`)
               draw(countriesByLanguage)
       })
       .catch(err => $("#countriesByLang").html(`<div class="col-12 text-center mb-3" ><h1> language do not found </h1></div>`))
   });
}


function draw(countries){ 
  countries.forEach(country => country.forEach(c => { 
    let {name,flag,capital,population,region} = c

    $("#countriesByLang").append(`
    <div class="card ml-5 mb-5">  
        <div class="view card" >
                <img src="${flag}" class="card-img-top"
                  alt="photo">
                <a target="_blank" href="https://en.wikipedia.org/wiki/Special:Search?search=${name}">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title text-center">${name}</h4>
                <ul class="list-group list-group-flush" >
                <li class="list-group-item"><i class="fas fa-globe"></i> ${region}</li>
                <li class="list-group-item"><i class="fas fa-city"></i> ${capital}</li>
                <li class="list-group-item"><i class="fas fa-users"></i> ${population}</li>
                </ul>
              </div>
    </div>
  `)
  }))


  
}