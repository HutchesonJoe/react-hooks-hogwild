import React from "react";
import ThisHog from "./ThisHog"

function HogList({hogs}){
  const fullHogList = hogs.map(hog=>{
    return <ThisHog 
    name={hog.name} 
    key = {hog.name} 
    specialty={hog.specialty} 
    weight={hog.weight} img={hog.image} 
    greased={hog.greased} 
    medals={hog["highest medal achieved"]}/>
  })
  return(
    <div className="ui grid container">
      {fullHogList}
    </div>
  )
  
}

export default HogList