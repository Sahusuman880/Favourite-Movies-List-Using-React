import { createContext } from "react";

export const MovieItemContext = createContext({
  items: [],
  addMovie: () => {},
  removeMovie: () => {},
});
