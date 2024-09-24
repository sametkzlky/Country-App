$(function(){
    $("#search-btn").click(function(){
        let countryName = $("#country-inp").val();
        let result = $("#result");
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((resp) => resp.json())
        .then((data) => {
            result.html(`
                 <img src= "${data[0].flags.svg}"
                class= "flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital: </h4>
                    <span>${data[0].capital[0]}</span>
                </div>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent: </h4>
                    <span>${data[0].continents[0]}</span>
                </div>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population: </h4>
                    <span>${data[0].population}</span>
                </div>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency: </h4>
                    <span>${
                    data[0].currencies[Object.keys(data[0].currencies)].name
                    } </span>
                </div>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common languages: </h4>
                    <span>${Object.values(data[0].languages)
                    .toString()
                    .split(",")
                    .join(", ")}</span>
                </div>
                </div>
            `);            
        })
        .catch(() => {
            if (countryName.length == 0) {
              result.html(`<h3>The input field cannot be empty</h3>`);
            } else {
              result.html(`<h3>Please enter a valid country name</h3>`);
            }
          });
    });
    $("#country-inp").keyup(function(event) {
        if (event.key === "Enter") {
            $("#search-btn").click();
        }
    });
});