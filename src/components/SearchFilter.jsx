import { useState } from "react";

function SearchFilter({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    setSearch(value);
    onSearch(value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search products..."
    />
  );
}

export default SearchFilter;