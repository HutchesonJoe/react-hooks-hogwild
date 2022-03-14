import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState} from "react";

function FilterSortBar({greasedOnly, sortHogs, sortBy}){
  return (
    <div className="filterSortBar">
       <button id="sortGreased" onClick={greasedOnly} className="filterButton">Show Greased Only</button>
       <button id="sortByName" onClick={sortHogs} className="filterButton">Sort by {sortBy}</button>
    
    </div>
   
  )
  
}

export default FilterSortBar