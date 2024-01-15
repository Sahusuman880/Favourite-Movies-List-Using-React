import { createContext } from "react";
import { useState } from "react";

export const MovieItemContext = createContext({
  items: [],
  addMovie: () => {},
  removeMovie: () => {},
});

function MovieProvider(props) {
  let [MovieList, addMovieList] = useState([
    {
      imgurl:
        "https://v3img.voot.com/jioimage/12/26/8a0e8f3374c811e688d58522ba040c22_1582111969083_l.jpg",
      cardTitle: "Sanam Teri Kasam",

      imbd: "7.6",
      Actor: "Harshvardhan Rane,Mawra Hocane",
      Director: "Radhika Rao, Vinay Sapru",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBev0mZn0EiweWBmpqsGDjCR5QrKjUVQWGA&usqp=CAU",
      cardTitle: "Sita Ramam",

      imbd: "8.6",
      Actor: "Dulquer Salmaan,Mrunal Thakur,Rashmika Mandanna",
      Director: "	Hanu Raghavapudi",
    },
    {
      imgurl:
        "https://filmfare.wwmindia.com/content/2023/jun/phirherapherifeature41686315116.jpg",
      cardTitle: "Phir Hera Pheri",

      imbd: "7.2",
      Actor: "Akshay Kumar,Suniel Shetty,Paresh Rawal",
      Director: "Neeraj Vora",
    },
  ]);
  function addButtonClick(addName, addCast, addIMBD, addDirectorName, addUrl) {
    let newMovieList = [
      ...MovieList,
      {
        imgurl: addUrl,
        cardTitle: addName,
        imbd: addIMBD,
        Actor: addCast,
        Director: addDirectorName,
      },
    ];
    addMovieList(newMovieList);
    console.log(MovieList);
  }
  function removeButtonClick(index) {
    let newMovieList = [...MovieList];
    newMovieList.splice(index, 1);
    addMovieList(newMovieList);
  }
  return (
    <MovieItemContext.Provider
      value={{
        items: MovieList,
        addMovie: addButtonClick,
        removeMovie: removeButtonClick,
      }}
    >
      {props.children}
    </MovieItemContext.Provider>
  );
}
export default MovieProvider;
