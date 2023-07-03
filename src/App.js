import './App.css';
import { useState } from 'react';
import ColorfulBox from './components/ColorfulBox';

function App() {
    const [colors, setColors] = useState([
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
    ]);

    const colorChangeHandler = (index) => {
            setColors((prevColors) => {
            const newColors = [...prevColors];
            if (newColors[index] === 'blue') {
                newColors[index] = 'white';
            } else {
                newColors[index] = 'blue';
            }
            return newColors;
        });
    };

    return (
        <div className='container'>
            <div className='one-column'>
                <ColorfulBox
                    className='one'
                    color={colors[0]}
                    onClick={() => colorChangeHandler(0)}
                />
                <ColorfulBox
                    className='two'
                    color={colors[1]}
                    onClick={() => colorChangeHandler(1)}
                />
                <ColorfulBox
                    className='three'
                    color={colors[2]}
                    onClick={() => colorChangeHandler(2)}
                />
            </div>
            <div className='two-column'>
                <ColorfulBox
                    className='four'
                    color={colors[3]}
                    onClick={() => colorChangeHandler(3)}
                />
                <ColorfulBox
                    className='five'
                    color={colors[4]}
                    onClick={() => colorChangeHandler(4)}
                />
                <ColorfulBox
                    className='sixth'
                    color={colors[5]}
                    onClick={() => colorChangeHandler(5)}
                />
            </div>
            <div className='three-column'>
                <ColorfulBox
                    className='seven'
                    color={colors[6]}
                    onClick={() => colorChangeHandler(6)}
                />
                <ColorfulBox
                    className='eight'
                    color={colors[7]}
                    onClick={() => colorChangeHandler(7)}
                />
                <ColorfulBox
                    className='nine'
                    color={colors[8]}
                    onClick={() => colorChangeHandler(8)}
                />
            </div>
        </div>
    );
}

export default App;
