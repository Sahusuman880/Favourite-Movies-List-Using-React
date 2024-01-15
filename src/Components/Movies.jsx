import { useContext } from "react";
import styles from "./Movies.module.css";
import { MovieItemContext } from "../store/Movie-item-store";
function Movies() {
  const { items, removeMovie } = useContext(MovieItemContext);
  return (
    <>
      <div className="cardContainer">
        {items.map((element, index) => {
          return (
            <div className={`${styles.card} card`}>
              <img
                src={element.imgurl}
                className={`${styles.image} card-img-top `}
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{element.cardTitle}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span>IMBD:</span>
                  {element.imbd}
                </li>
                <li className="list-group-item">
                  <span>Actor:</span>
                  {element.Actor}
                </li>
                <li className="list-group-item">
                  <span>Director:</span>
                  {element.Director}
                </li>
              </ul>
              <button
                type="button"
                className={`${styles.sbtn} btn btn-warning `}
              >
                Watch Now
              </button>
              <button
                type="button"
                className={`${styles.sbtn} btn btn-danger `}
                onClick={() => removeMovie(index)}
              >
                Delete Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Movies;
