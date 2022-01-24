import React from "react";
import "./filterCheckbox.css";

function FilterCheckbox() {
   
    
    return (
        <div className="filterCheckbox">
            <label className="filterCheckbox__label">Короткометражки</label>
            <input
                type="checkbox"
                className="filterCheckbox__checkbox"
                name="FilterCheckbox"
                id="FilterCheckbox"
               
            />
        </div>
    );
}

export default FilterCheckbox;