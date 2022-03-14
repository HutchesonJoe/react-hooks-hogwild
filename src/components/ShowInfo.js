import React from "react";

function ShowInfo(props){
  if (props.dropDown===true){
    return (
      <div className="hogInfo">
        <p>Specialty: {props.specialty}</p>
        <p>Weight: {props.weight} lbs.</p>
        <p>Greased?: {props.greased ? "Yes" : "No"}</p>
        <p>Highest Medal Acheived: {props.medals}</p>
      </div>
    )
  } else {return (
    <div></div>
  )}
} 

export default ShowInfo