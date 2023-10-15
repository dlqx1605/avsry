import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r2.css';

function R5() {

    const navigate = useNavigate();


    const [moving, setMoving] = useState(true)
    const [score, setScore] = useState(0)
    let image = [
        <img src={require('./img/bbt.png')} style={{position:"absolute", left: `${Math.random()*95}vw`, top: "-10vh", width:"5vh"}}
        onMouseEnter={(e) => eat(e)}/>,
    ]

    const [ilist, setIlist] = useState(image)

    function eat(e) {
        setIlist(ilist => ilist.slice(1))
        setScore(s => {
            if (s == 9) {
                setMoving(false);
            }
            return s+1
        })
    }

    useEffect(() => {
            const interval = setInterval(() => {
                let e = document.querySelector("img")
                if (e === null) {
                   setIlist(ilist => Math.random() > 0.5 ? [
                    <img src={require('./img/bbt.png')} style={{position:"absolute", left: `${Math.random()*95}vw`, top: "-10vh", width:"5vh"}} onMouseEnter={(e) => eat(e)}/>] : 
                    [<img src={require('./img/spb.png')} style={{position:"absolute", left: `${Math.random()*95}vw`, top: "-10vh", width:"5vw"}} onMouseEnter={(e) => eat(e)}/>
                ]) 
                } else {
                    let t = parseInt(e.style.top.replace("vh",""))
                    if (t > 90) {
                        setIlist(ilist => ilist.slice(1))
                    }
                    t += 5
                    e.style.top = `${t}vh`
                }
              }, 20);
            if (!moving) {
                clearInterval(interval)
                document.querySelector('.h').className = 'h';
            }
          return () => clearInterval(interval);
      }, [moving]);

    return (
      <div className="face">
        <h2>Reason 5 why Darelyn is cute</h2>
        <div>
            She is OBSESSED with SPB and BBT
            <br/>
            SHE HAS EATEN {score} SO FAR! MAKE IT STOP!
        </div>


        <div className='hide h'>Darelyn is <a href='' onClick={()=> navigate('/sqrmwrmd', { replace: true })}>satisfied</a> </div>
        {ilist}
      </div>
    );
  }
  
  export default R5;