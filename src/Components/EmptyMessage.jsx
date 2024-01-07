import { useContext } from "react";
import styles from "./EmptyMessage.module.css";
import { MovieItemContext } from "../store/Movie-item-store";
function EmptyMessage() {
  const { items } = useContext(MovieItemContext);
  return items.length === 0 ? (
    <p className={styles.emptyMessage}>Enter Your Favourite Movie</p>
  ) : null;
}
export default EmptyMessage;
