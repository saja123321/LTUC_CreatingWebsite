    var movieType = prompt(" What kind of movies do you like?Horror or Crime")

    if (movieType == "horror" || movieType == "h") {
        document.write(
            " <style> body{ background-color: darkslategray ; color : white ; }  </style> ")
    } else if (movieType == "crime" || movieType == "c") {
        document.write(
            " <style> body{ background-color: #660C23 ; color : white ; }  </style> ")
    }
    else if (movieType == null) {
        alert(" you aren't Like movies ?!")
    }
    else {
        alert("so you Like " + movieType)

    }