import React, { useState } from "react";
import ShowInfo from "./ShowInfo"



function ThisHog(props){
  const [dropDown, setDropDown] = useState(false)

  function handleClick(){
    setDropDown(!dropDown)
  }

  return(
    <div className="ui eight wide column">
      <img src={props.img} alt="Piggy Pic" className="pigTile"/>
      <h1 onClick={handleClick}>{props.name}</h1>
      <ShowInfo dropDown = {dropDown} setDropDown = {setDropDown} specialty={props.specialty} weight={props.weight} greased={props.greased} medals={props.medals} />
     
    </div>
  )
}

export default ThisHog