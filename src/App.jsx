import SearchPage from "./pages/SearchPage";
import "./assets/App.css";
import PokemonsList from "./components/PokemonsList";
function App() {
  return (
    <div className="w-360 pb-1 bg-primaryColor font-poppins">
      <SearchPage />
      <PokemonsList />
    </div>
  );
}

export default App;
