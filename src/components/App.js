import React, {useState} from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";
import hogs from "../porkers_data";
import FilterSortBar from "./FilterSortBar"

function App() {

	const [thisHogList, setThisHogList] = useState(hogs)
	const [sortBy, setSortBy] = useState("name")

	function greasedOnly(){
		const greasedHogs = hogs.filter(hog=>hog.greased===true)
		setThisHogList(greasedHogs)
	}
	
	function sortHogs(){
	sortBy==="name" ? setSortBy("weight") : setSortBy("name")
	const sortedHogs = hogs
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });
	}

	return (
		<div className="App">
			<Nav />
			<FilterSortBar 
				greasedOnly={greasedOnly} 
				sortHogs={sortHogs}
				sortBy={sortBy}
				/>
			<Hoglist sortBy={sortBy} hogs={thisHogList}/>
		</div>
	);
}

export default App;
