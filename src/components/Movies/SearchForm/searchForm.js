import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./searchForm.css";
import searchIcon from "../../../images/search.svg";

function SearchForm() {

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form"  required>
                    <div className="search__container-input-box">
                  

                    <input
                        className="search__input"
                        name="keyword"
                        type="text"
                        placeholder="Фильм"
                        minLength="1"
                        maxLength="200"
                        required
                        autoComplete="off"
                       
                    />
                    </div>
                    
                    <button
                        className="search__button"
                    ><img src={searchIcon} alt="иконка-поиска" className="search__icon"></img></button>
                </form>
             

                <FilterCheckbox  />
            </div>
        </section>
    );
}

export default SearchForm;