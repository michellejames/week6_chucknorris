console.log("Hello World from main.js!");


function processGeneralJokes (data) {

	var jokeResults = data.value;
	console.log(jokeResults);

	var jokeStorage = document.querySelector(".joke-storage");

    for (var i = 0; i < jokeResults.length; i++) {
        console.log(jokeResults[i].categories);       

		var joke = document.createElement("p");
		$(joke).html(jokeResults[i].joke);

		jokeStorage.appendChild(joke);
	}
}

function processRandomJokes (data) {

    var jokeResults = data.value;
    console.log(jokeResults.joke);

    var jokeStorage = document.querySelector(".joke-storage");

    var randomJoke = document.createElement("p");
    $(randomJoke).html(jokeResults.joke).addClass("random-joke");

    jokeStorage.appendChild(randomJoke);
}

function processNerdyJokes (data) {

    var jokeResults = data.value;

    for (var i = 0; i < jokeResults.length; i++) {
        console.log(jokeResults[i].categories);       

        var jokeStorage = document.querySelector(".joke-storage");

        if (jokeResults[i].categories == "nerdy") {
            var nerdyJoke = document.createElement("p");
            $(nerdyJoke).html(jokeResults[i].joke).addClass("nerdy-chuck-jokes");
            jokeStorage.appendChild(nerdyJoke);
        } else {
            console.log("Not nerdy enough, Buddy!");
        }
    }
}

function processExplicitJokes (data) {

    var jokeResults = data.value;

    var jokeStorage = document.querySelector(".joke-storage");

    for (var i = 0; i < jokeResults.length; i++) {

        if (jokeResults[i].categories == "explicit") {
            var explicitJoke = document.createElement("p");
            $(explicitJoke).html(jokeResults[i].joke).addClass("explicit-chuck-jokes");
            jokeStorage.appendChild(explicitJoke);
        } else {
            console.log("Not sexy enough!");
        }
    }
}

function deleteNerdyJokes () {

    var $nerdyJokes = $(".nerdy-chuck-jokes");
    var $explicitJokes = $(".explicit-chuck-jokes");


    for (var i = 0; i < $nerdyJokes.length; i++) {

        $nerdyJokes[i].parentNode.removeChild($nerdyJokes[i]);
        
    }
}

function deleteExplicitJokes () {

    var $explicitJokes = $(".explicit-chuck-jokes");

    for (var i = 0; i < $explicitJokes.length; i++) {

        $explicitJokes[i].parentNode.removeChild($explicitJokes[i]);
    }
}

$(document).ready(function () {

    $("#general-jokes").on("click", function (e) {
    	e.preventDefault();			//e.stopPropagation()
        $.ajax({
          url: "http://api.icndb.com/jokes/categories" + $(".input").val()          //or /categories
        }).done(function(data) {
            console.log(data);
            processGeneralJokes(data);
        }).fail(function () {
        	console.log("fuck");               //return false       
        });	
    });

    $(".random-jokes").on("click", function (e) {
        e.preventDefault();         //e.stopPropagation()
        $.ajax({
          url: "http://api.icndb.com/jokes/random" + $(".input").val()     
        }).done(function(data) {
            console.log(data);
            processRandomJokes(data);
        }).fail(function () {
            console.log("fuck");                     
        }); 
    });

    $(".nerdy-jokes").on("click", function (e) {
        e.preventDefault();
        deleteNerdyJokes();
        $.ajax({
          url: "http://api.icndb.com/jokes/categories" + $(".input").val()
        }).done(function(data) {
            console.log(data);
            processNerdyJokes(data);
        }).fail(function () {
            console.log("fuck");                 
        }); 
    })

    $(".explicit-jokes").on("click", function (e) {
        e.preventDefault();
        deleteExplicitJokes();
        $.ajax({
          url: "http://api.icndb.com/jokes/categories" + $(".input").val()
        }).done(function(data) {
            console.log(data);
            processExplicitJokes(data);
        }).fail(function () {
            console.log("fuck");                 
        }); 
    })
});



















