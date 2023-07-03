import {useState} from "react";
import './ColorfulBox.css'
function ColorfulBox({color,onClick}) {
    const [currentColor, setCurrentColor] = useState(color)


    const colorChangeHandler = () => {
        setCurrentColor(prevColor => (prevColor === 'blue' ? 'white' : 'blue'))
    }

    return (
        <div
            className='colorful-box'
            style={{ backgroundColor: currentColor }}
            onClick={() => {
                colorChangeHandler()
                onClick()
            }}
        ></div>
    )
}



export default ColorfulBox