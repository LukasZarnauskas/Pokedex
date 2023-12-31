import { useFormik } from "formik";

function SearchInput({ findPokemon }) {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      findPokemon(values.search);
    },
  });
  return (
    <form
      className="bg-white w-280 pt-1 pb-1 rounded-2xl flex"
      onSubmit={formik.handleSubmit}
      onChange={formik.handleSubmit}
    >
      <button className="ml-3 mr-2" type="submit">
        <img src="/image/search.png" alt="search" />
      </button>
      <input
        className="border-none w-56  focus:outline-none"
        id="search"
        name="search"
        type="text"
        placeholder="Search"
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
      ></input>
    </form>
  );
}

export default SearchInput;
