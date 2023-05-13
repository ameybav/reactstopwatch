import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [btnText, setBtnText] = useState(false);
    const timerId = useRef(null);
    
    const handleTimer = () => {
        setBtnText(!btnText);
    }

    useEffect(() => {
        if (btnText) {
            timerId.current = setInterval(() => {
                setSeconds((s) => {
                    if (s===59) {
                        setMinutes((m) => {
                            if (m === 59) {
                                setHours((h) => h+1);
                                return 0;
                            } else {
                                s = 0;
                                return m+1;
                            }
                        })
                        return 0;
                    } else {
                        return s+1;
                    }
                })
            }, 100);
        } else {
            clearInterval(timerId.current);
        }

    }, [btnText]);

    // function handleTimer () {
    //     if (btnText) {
    //         clearInterval(timerId.current);
    //         setBtnText(false);
    //     } else {
    //         setBtnText(true);
    //         timerId.current = setInterval(() => {
    //             setSeconds((s) => {
    //                 if (s===59) {
    //                     setMinutes((m) => {
    //                         if (m === 59) {
    //                             setHours((h) => h+1);
    //                             return 0;
    //                         } else {
    //                             s = 0;
    //                             return m+1;
    //                         }
    //                     })
    //                     return 0;
    //                 } else {
    //                     return s+1;
    //                 }
    //             })
    //         }, 100);
    //     }
    // }

    function resetTimer() {
        clearInterval(timerId.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        // setBtnText(true);
    }


    return (
        <div className='App'>
            <div className='Timer'>
                {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2,"0")}
            </div>
            <div>
                <button 
                    className='btn' 
                    onClick={handleTimer}
                >{btnText ? "Stop" : "Start"}
                </button>
                <button className='btn' onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    )
}

export default App
