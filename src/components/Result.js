import React from "react";

function Result(props){
    return(
        <div className={props.className} style={props.style}>{props.children}</div>
    )
}

export default Result