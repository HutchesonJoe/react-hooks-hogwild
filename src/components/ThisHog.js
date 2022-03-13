import React from "react";
function ThisHog(props){
  return(
    <div className="ui eight wide column">
      <img src={props.img} alt="Piggy Pic" className="pigTile"/>
      <h1>{props.name}</h1>
      <p>Specialty: {props.specialty}</p>
      <p>Weight: {props.weight} lbs.</p>
      <p>Greased?: {props.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Acheived: {props.medals}</p>
    </div>
  )
}
export default ThisHog