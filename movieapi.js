$(document).ready(function () {
    var apikey = "b5023637"
    $("#movieForm").submit(function (event) {
        event.preventDefault()
        var movie = $("#movie").val()
        var url = "http://www.omdbapi.com/?apikey=" + apikey
        $.ajax({
            method: 'GET',
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data)
                result = `
                <img  src="${data.Poster}"/>
                
               <h3>Title: ${ data.Title}</h3>
                <h3> Released Date:  ${data.Released}</h3>
                <h3> Runtime: ${data.Runtime}</h2>
                <h3> Language: ${data.Language}</h3>
                <h3> Genre: ${data.Genre}</h3>
                <h3>Director: ${data.Director}</h3>
                <h3>Actors: ${data.Actors}</h3> `;



                $("#result").html(result);

            }
        })

    })
})

