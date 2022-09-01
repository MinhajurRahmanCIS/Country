const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountry(data));
}

const displayCountry = countries => {
    
    const countriesContainer = document.getElementById("countries-container");
    // for(const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        console.log(country)
        const countriesContainer = document.getElementById("countries-container");
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country")

        countryDiv.innerHTML = `
        <h1> Name: ${country.name.common}</h1> 
        <p>Capital: ${country.capital ? country.capital[0] : "No capital"}</p> 

        <button class = "btn" onclick= "loadCountryDetails('${country.cca2}')">Display Details  </button>
        `
        countriesContainer.appendChild(countryDiv)
    });


}

loadCountries();

const loadCountryDetails = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    
    // console.log("Country code", code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetaill(data[0]));
}

const displayCountryDetaill = country => {
    console.log(country)
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}