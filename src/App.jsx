import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import AddMovie from "./Components/AddMovie";
import Movies from "./Components/Movies";
import EmptyMessage from "./Components/EmptyMessage";

// import { MovieItemContext } from "./store/Movie-item-store";
import MovieProvider from "./store/Movie-item-store";
import { Outlet } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function App() {
  // const cards = [
  //   {
  //     imgurl:
  //       "https://v3img.voot.com/jioimage/12/26/8a0e8f3374c811e688d58522ba040c22_1582111969083_l.jpg",
  //     cardTitle: "Sanam Teri Kasam",

  //     imbd: "7.6",
  //     Actor: "Harshvardhan Rane,Mawra Hocane",
  //     Director: "Radhika Rao, Vinay Sapru",
  //   },
  //   {
  //     imgurl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBev0mZn0EiweWBmpqsGDjCR5QrKjUVQWGA&usqp=CAU",
  //     cardTitle: "Sita Ramam",

  //     imbd: "8.6",
  //     Actor: "Dulquer Salmaan,Mrunal Thakur,Rashmika Mandanna",
  //     Director: "	Hanu Raghavapudi",
  //   },
  //   {
  //     imgurl:
  //       "https://filmfare.wwmindia.com/content/2023/jun/phirherapherifeature41686315116.jpg",
  //     cardTitle: "Phir Hera Pheri",

  //     imbd: "7.2",
  //     Actor: "Akshay Kumar,Suniel Shetty,Paresh Rawal",
  //     Director: "Neeraj Vora",
  //   },
  //   {
  //     imgurl:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00336852-tyyhafgqql-landscape.jpg",
  //     cardTitle: "DAMaN",

  //     imbd: "8.9",
  //     Actor: "Babushan Mohanty",
  //     Director: "Vishal Mourya, Lenka Debiprasad",
  //   },
  //   {
  //     imgurl:
  //       "https://images.thedirect.com/media/article_full/every-marvel-character-who-appears-in-doctor-strange-2-multiverse-of-madnes_HnnfuDP.jpg",
  //     cardTitle: "Doctor Strange",

  //     imbd: "7.5",
  //     Actor: "Benedict Cumberbatch",
  //     Director: "Scott Derrickson",
  //   },
  //   {
  //     imgurl:
  //       "https://images.thedirect.com/media/article_full/every-marvel-character-who-appears-in-doctor-strange-2-multiverse-of-madnes_HnnfuDP.jpg",
  //     cardTitle: "Doctor Strange",

  //     imbd: "7.5",
  //     Actor: "Benedict Cumberbatch",
  //     Director: "Scott Derrickson",
  //   },
  //   {
  //     imgurl:
  //       "https://images.thedirect.com/media/article_full/every-marvel-character-who-appears-in-doctor-strange-2-multiverse-of-madnes_HnnfuDP.jpg",
  //     cardTitle: "Doctor Strange",

  //     imbd: "7.5",
  //     Actor: "Benedict Cumberbatch",
  //     Director: "Scott Derrickson",
  //   },
  // ];

  return (
    <>
      <MovieProvider>
        <Header />
        <Heading />

        <EmptyMessage />

        <Outlet />
      </MovieProvider>
    </>
  );
}

export default App;
