    
var movieType = prompt(" What kind of movies do you like?  ( Horror - type H or h ) or ( Crime - type c or C - ) ")

while (movieType != "horror" && movieType != "h" && movieType != "H" && movieType != "crime" && movieType != "c" && movieType != "C" ){

  movieType = prompt(" Wrong answer !! " +" What kind of movies do you like?  ( Horror - type H or h ) or ( Crime - type c or C - ) ")
}
  
  if (movieType == "horror" || movieType == "h" || movieType == "H" ) {
          document.write(
        " <style> body{ background-color: darkslategray ; color : white ; }  </style> ")

    document.write("    <h4>   A Christmas Carol   </h4>   " +
     " <img src='https://www.movs4u.in/wp-content/uploads/2019/12/ezucVK2MpmkUZTyoB9VrVbXbpsf-185x278.jpg' alt='A Christmas Carol' /> " 
     +
     "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate "+
      "quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquam"+
       "ex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequuntur"+
        "debitis repellendus nisi</p>"
     )   



    }
    
     else if (movieType == "crime" || movieType == "c" || movieType == "C") {
        document.write(
            " <style> body{ background-color: #660C23 ; color : white ; }  </style> ")
       document.write("    <h4>   Babysitter Must Die   </h4>   " +
     " <img src='https://www.movs4u.in/wp-content/uploads/2021/06/Al6j2dL1ZJdDHS8x0QD2qNNZ9Y6-185x278.jpg' alt='Babysitter Must Die' /> " 
     +
     "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate "+
      "quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquam"+
       "ex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequuntur"+
        "debitis repellendus nisi</p>" )
     }

    
