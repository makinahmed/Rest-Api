const loadCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(countries => disPlayCountryName(countries))
}


loadCountries()
// console.log(`https://restcountries.eu/rest/v2/name/${country.name}`);
let section = document.getElementById('section')
function disPlayCountryName(countries) {

    countries.map(country => {
        let div = document.createElement('div')
        div.innerHTML = `
        <h2> Name:${country.name}</h2> 
        <p> Capital :${country.capital}</p>
        <button onclick="showDetails('${country.name}')">Details</button>
        `
        section.appendChild(div)

    })
}



function showDetails(name) {
    let url = `https://restcountries.eu/rest/v2/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(countries => showFlag(countries))




}

let countryDiv = document.getElementById('countryDiv')

function showFlag(countries) {
    countries.map(country => {
       
        countryDiv.innerHTML = `
       <h1>${country.name}</h1>
       <p>Population : ${country.population}</p>
       <img width="200px" src="${country.flag}">`
      
       countryDiv.style.display = 'block'
    })
}