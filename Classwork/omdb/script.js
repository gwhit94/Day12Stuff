// ## Actual Project

// You will be taking what you have learned so far this week to build a mobile responsive movie database search engine. Taking the following steps, allow for a user to search for a movie on OMDB to see what movies share that title.

//     Sign up for a personal API key from OMDBAPi X
//     Utilize the information on the page to see what kind of format a request needs to be made in to return correct information. X
//     Create a simple search box that allows for the user to search for a movie. They should be able to enter ANY of the following information but a search field is required for you to send a request to the API:
//         Search Field - Do not allow for an API call without at least 3 characters in this field
//         Type (Make a select box for this)
//         Year - Your choice of input type
//     If an error occurred, let the user know. Otherwise display the data to the page.
//     Since only 10 items are returned, figure out how many items WOULD have been sent and let the user know.

// ## BONUS GOALS

//     Then let the user pick a page out of that many to select to. This will be a lesson in the wonders / frustrations of pagination.
//     Add styling and additional functionality as time permits.



var searchBox = document.querySelector("#searchBox");
var typeSelect = document.querySelector("#typeSelect");
var yearBox = document.querySelector("#yearBox");
var searchButton = document.querySelector("#searchButton");
var resultsP = document.querySelector(".results");

var apiKey = "bc1b5902";

var query;
var jsonResults;

searchButton.addEventListener("click", function(){

    var titleValue = searchBox.value;
    var typeValue = typeSelect.value;
    var yearValue = yearBox.value;

    resultsP.innerText = "";
    if (titleValue.length >= 3 ){
        console.log(`Title: ${titleValue}`, `Type: ${typeValue}`, `Year: ${yearValue}`); 
    }  else {
        console.log("Enter 3 or more characters!");
        return;
    };
    if (typeValue === ""){
        query = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleValue}&y=${yearValue}`;
    } else {
        query = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleValue}&type=${typeValue}&y=${yearValue}`;
    };
    console.log(query);
    fetch(query)
        .then(function(response){
            console.log(response);
            if (!response.ok){
                console.log(response.status);
            }
            return response.json();
        })
        .then(function (res){
            jsonResults = res;
            console.log(res);

            for(i=0; i < jsonResults.Search.length; i++){
                resultsP.createElement("div").add
                resultsP.innerText = jsonResults.Search[0].Title
        }
            
        });
});

// take values and format for API request / parse
// http://www.omdbapi.com/?apikey=bc1b5902&t=For&type=Movie&y=1994

// apikey
// t = title
// type = type
// y = year

// set up request

// stringify and convert back for html