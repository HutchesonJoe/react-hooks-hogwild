import React, {useState} from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";
import hogs from "../porkers_data";
import FilterSortBar from "./FilterSortBar"
import ThisHog from "./ThisHog";

function App() {
	const [thisHogList, setThisHogList] = useState(hogs)

	function greasedOnly(){
		const greasedHogs = thisHogList.filter(hog=>hog.greased===true)
		setThisHogList(greasedHogs)
	}

	function nameSort(){

		const nameSortHogs = thisHogList.sort((hog1, hog2)=>{
			if(hog1.name < hog2.name) { return -1; }
			if(hog1.name > hog2.name) {return 1;}
		
	})
	}

	function weightSort(){
		const weigthSortHogs = thisHogList.sort((hog1, hog2)=>{
			if(hog1.weight < hog2.weight) { return -1; }
			if(hog1.wieght > hog2.wieght) {return 1;}
			return 0
		})

	}

	return (
		<div className="App">
			<Nav />
			<FilterSortBar 
				greasedOnly={greasedOnly} 
				nameSort={nameSort} 
				weightSort={weightSort}/>
			<Hoglist hogs={thisHogList}/>
		</div>
	);
}

export default App;
