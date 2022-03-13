import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

function FilterSortBar({greasedOnly, nameSort, weightSort}){
  return (
    <div className="filterSortBar">
       <button id="sortGreased" onClick={greasedOnly} className="filterButton">Show Greased Only</button>
       <button id="sortByName" onClick={nameSort} className="filterButton">Sort by Name</button>
       <button id="sortByWeight" onClick={weightSort} className="filterButton">Sort by Weight</button>
    </div>
   
  )
  
}

export default FilterSortBar