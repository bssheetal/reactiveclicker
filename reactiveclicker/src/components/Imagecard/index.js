import React from "react";
import "./style.css";

function Imagecard(props) {
    return (
        
        
            <div className="card">
              <img alt={props.name} src={props.image}/>
            </div>
     
    
    )
}

export default Imagecard;