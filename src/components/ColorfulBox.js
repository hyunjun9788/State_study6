import {useState} from "react";
import './ColorfulBox.css'
function ColorfulBox() {
        const [clicked,setClicked] = useState(false)
        const clickHandler =() =>{
            setClicked(!clicked)
        }

    return (
        <div className={`box ${clicked ? 'active' :''}`} onClick={clickHandler}>

        </div>
    )
}



export default ColorfulBox