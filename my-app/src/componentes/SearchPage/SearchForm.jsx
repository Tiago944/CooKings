import React, { useState } from "react";
import "../../estilos/SearchForm.css";
import { SearchInput } from "../SearchInput";

const SearchForm = () => {
  const [open, setOpen] = useState(false);
  let mediaQuery = window.matchMedia("(max-width: 1030px)");

  const abrir = () => {
    if (open && mediaQuery) {
      document.getElementById("searchform").style.display = "flex";
    }
    if (!open && mediaQuery) {
      document.getElementById("searchform").style.display = "none";
    }
    setOpen(!open);
  };

  return (
    <>
      <button className="openCategorias" onClick={() => abrir(!open)}>
        Filtros
      </button>
      <div className="searchform" id="searchform">
        <div className="searchform-input">
          <SearchInput />
        </div>
        <div>
          <hr />
        </div>
        <div className="item-container">
          <input type="checkbox" name="diner" id="diner" />
          <label for="diner">Diner</label>
        </div>
        <div className="item-container">
          <input type="checkbox" name="dessert" id="dessert" />
          <label for="dessert">Dessert</label>
        </div>
        <div>
          <hr />
        </div>
        <div className="search-ingredients-list">
          <div className="item-container">
            <input type="checkbox" name="ing1" id="ing1" />
            <label for="ing1">Ing1</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
