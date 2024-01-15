import { useContext, useRef, useState } from "react";
import styles from "./AddMovie.module.css";
import { MovieItemContext } from "../store/Movie-item-store";
import { useNavigate } from "react-router-dom";
function AddMovie() {
  const navigate = useNavigate();
  //using state
  // let [addName, setAddName] = useState();
  // let [addCast, setAddCast] = useState();
  // let [addIMBD, setAddImbd] = useState();
  // let [addDirectorName, setAddDirector] = useState();
  // let [addUrl, setUrl] = useState();

  // function addMovieName(event) {
  //   let movie = event.target.value;
  //   setAddName(movie);
  // }
  // function addCastName(event) {
  //   let cast = event.target.value;
  //   setAddCast(cast);
  // }
  // function addImbd(event) {
  //   let IMBD = event.target.value;
  //   setAddImbd(IMBD);
  // }
  // function addDirector(event) {
  //   let director = event.target.value;
  //   setAddDirector(director);
  // }
  // function addURL(event) {
  //   let url = event.target.value;
  //   setUrl(url);
  // }
  const addItem = useContext(MovieItemContext);
  const addButtonClick = addItem.addMovie;
  let Name = useRef();
  let cast = useRef();
  let IMBD = useRef();
  let Director = useRef();
  let url = useRef();

  function onButtonClick(event) {
    event.preventDefault();
    let addName = Name.current.value;
    let addCast = cast.current.value;
    let addIMBD = IMBD.current.value;
    let addDirectorName = Director.current.value;
    let addUrl = url.current.value;
    Name.current.value = "";
    cast.current.value = "";
    IMBD.current.value = "";
    Director.current.value = "";
    url.current.value = "";
    console.log(addName, addCast, addIMBD, addDirectorName, addUrl);

    addButtonClick(addName, addCast, addIMBD, addDirectorName, addUrl);
    navigate("/");
    // setAddName("");
    // setAddCast("");
    // setAddImbd("");
    // setAddDirector("");
    // setUrl("");
  }

  return (
    <>
      <form action="" onSubmit={onButtonClick}>
        <div className={`container text-center ${styles.mycontainer}`}>
          <div className={`${styles.myrow} row`}>
            <div className="col-8">
              {" "}
              <input
                type="text"
                placeholder="Enter Movie Name"
                ref={Name}
                // onChange={addMovieName}
              ></input>{" "}
            </div>

            <div className="col-8">
              <input
                type="text"
                placeholder="Enter Cast Name"
                ref={cast}
                // onChange={addCastName}
              ></input>
            </div>
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter IMBD Rating"
                ref={IMBD}
                // onChange={addImbd}
              ></input>
            </div>
          </div>
          <div className={`${styles.myrow} row`}>
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter Director Name"
                ref={Director}
                // onChange={addDirector}
              ></input>
            </div>
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter Movie url"
                ref={url}
                // onChange={addURL}
              />
            </div>
            <div className="col-6">
              <button
                type="submit"
                className={`btn btn-success ${styles.mybtn}`}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AddMovie;
