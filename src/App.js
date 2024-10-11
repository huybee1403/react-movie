import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Global/Header/Header";
import Home from "./component/Page/Home/Home";
import Footer from "./component/Global/Footer/Footer";
import Movies from "./component/Page/Movies/Movies";
import DetailsMovie from "./component/Page/DetailsMovie/DetailsMovie";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/search/:slug" element={<Movies />}></Route>
        <Route path="/details/:slug" element={<DetailsMovie />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
