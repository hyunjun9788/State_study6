import React from "react";

function Result(props){
    return(
        <div className='result' style={props.style}>{props.children}</div>
    )
}

export default Result