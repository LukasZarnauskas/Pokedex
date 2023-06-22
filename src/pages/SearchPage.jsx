import React from "react";
import SearchInput from "../components/search/SearchInput";

function SearchPage() {
  return (
    <div className="ml-4 mb-6">
      <h1 className=" pt-5 pb-3 flex items-center text-2xl font-bold  text-white">
        <img
          className="mr-4 h-6 "
          src="/src/image/Pokeball.png"
          alt="pokeball "
        />{" "}
        Pokédex
      </h1>
      <SearchInput />
    </div>
  );
}

export default SearchPage;
