
import './App.css';
import {useState} from "react";

function App() {

    const [text, setText] = useState('')

    const resultInputHandler = (e) => {
        if (e.target.value.includes('@')) {
            setText('이메일을 올바르게 작성하셨습니다.')

        } else if (e.target.value.length === 0) {
            setText('')
        } else {
            setText('올바르지 않은 형식의 이메일입니다.')

        }
    }

    let resultStyle={}
    if(text==='이메일을 올바르게 작성하셨습니다.'){
        resultStyle={color:'blue',fontSize:'5px'};
    }else if(text==='올바르지 않은 형식의 이메일입니다.'){
        resultStyle = { color: 'red',fontSize:'5px' };
    }
    return (
        <>
            <input onChange={resultInputHandler} className='email' placeholder='이메일'/>
            <div className='result' style={resultStyle}>{text}</div>
        </>
    );
}

export default App;
