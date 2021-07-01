
var movieType = prompt(" What kind of movies do you like?  ( Horror - type H or h ) or ( Crime - type c or C - ) ")

while (movieType != "horror" && movieType != "h" && movieType != "H" && movieType != "crime" && movieType != "c" && movieType != "C") {

  movieType = prompt(" Wrong answer !! " + " What kind of movies do you like?  ( Horror - type H or h ) or ( Crime - type c or C - ) ")

}

if (movieType == "horror" || movieType == "h" || movieType == "H") {
  t = prompt(" how many  time do you want to  watch  ")
  for (var x = 0; x < t; x++) {



    HorrorMovie(x+1)

  }
}

else if (movieType == "crime" || movieType == "c" || movieType == "C") {

  t = prompt(" how many  time do you want to  watch  ")
  for (var x = 0; x < t; x++) {

    CrimMovie()
  }

}


function HorrorMovie(num) {
  document.write(
    " <style> body{ background-color: darkslategray ; color : white ; }  </style> ")
document.write(  " Movie Number "  + num)
  document.write("    <h4>   A Christmas Carol   </h4>   " +
    " <img src='https://www.movs4u.in/wp-content/uploads/2019/12/ezucVK2MpmkUZTyoB9VrVbXbpsf-185x278.jpg' alt='A Christmas Carol' /> "
    +
    "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate " +
    "quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquam" +
    "ex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequuntur" +
    "debitis repellendus nisi</p>" + "<br> <br> <br>"

  )
}


function CrimMovie() {

  // document.write(" <style> body  </style> ")
  document.body.classList.add("crime")
  document.write("    <h2>   Knives Out   </h2>  <br> " +
    " <img class='poster' src='https://images-na.ssl-images-amazon.com/images/I/81bCcdEhfCL._AC_SY741_.jpg' alt='Babysitter Must Die' /> "
    +
    "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate " +
    "quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquam" +
    "ex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequuntur" +
    "debitis repellendus ostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum nisi</p>")
}




