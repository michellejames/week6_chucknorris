console.log("Hello World from main.js!");


function processJokes (data) {

	var jokeResults = data.value;
	console.log(jokeResults);
	// console.log(jokeResults.value[0].categories);

	for (var i = 0; i < jokeResults.length; i++) {
		// console.log(jokeResults[i].categories);

		var jokeStorage = document.querySelector(".joke-storage");
		var joke = document.createElement("p");
		$(joke).html(jokeResults[i].joke);

		jokeStorage.appendChild(joke);

	}
}










$(document).ready(function () {

    $("#general-jokes").on('click', function (e) {
    	e.preventDefault();			//e.stopPropagation()
        $.ajax({
          url: "http://api.icndb.com/jokes/categories" + $(".input").val()
        }).done(function(data) {
            console.log(data);
            processJokes(data);
        }).fail(function () {
        	console.log("fuck");
        });

       		// return false
    });

    $("#name-jokes").on('submit', function (e) {
    	e.preventDefault();	
        $.ajax({
          url: "http://api.icndb.com/jokes/random?firstName=" + $(".input").val()
        }).done(function(data) {
            console.log(data);
        }).fail(function () {
        	console.log("fuck");
        });
    });
});