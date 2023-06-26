import { Route, Routes, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./assets/App.css";
import PokemonPage from "./pages/PokemonPage";
function App() {
  return (
    <div className="w-360 mx-auto  font-poppins">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
