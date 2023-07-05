import './App.css';
import React, {useState} from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import './components/Input.css'
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


    return (
        <>
            <Input onChange={resultInputHandler} className='email' placeholder='이메일'/>
            <Result className={`${text ==='이메일을 올바르게 작성하셨습니다.'?'pass':'fail'}`}>{text}</Result>
        </>
    );
}

export default App;
