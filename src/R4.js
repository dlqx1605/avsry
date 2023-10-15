import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r2.css';

function R4() {

    const navigate = useNavigate();

    let temp = []
    for (let i = 0; i < 10; i++) {
        temp.push({id : i, img:        
        <img src={require('./img/tix.png')} style={{position:"absolute", left: `${Math.random()*90}vw`, top:  `${Math.random()*90}vh`, width:"5vw"}} onClick={(e) => click(e)} id={i}/>
        })
    }


    const [moving, setMoving] = useState(true)
    const [init, setInit] = useState(temp)

    useEffect(() => {
        const interval = setInterval(() => {
            setInit(init => {
                let temp = []
                const start = init.slice(-1)[0].id+1
                for (let i = start; i < init.length + start; i++){
                    temp.push({id : i, img:      
                        <img src={require('./img/tix.png')} style={{position:"absolute", left: `${Math.random()*90}vw`, top:  `${Math.random()*90}vh`, width:"5vw"}} onClick={(e) => click(e)} id={i}/>
                    })
                }
                return init.concat(temp)
            });
          }, 5000);

        if (!moving) {
            clearInterval(interval)
        }
          return () => clearInterval(interval);
      }, [moving]);
    


    function click(e) {
       setInit(oldValues => {
        let r = oldValues.filter(img => img.id !== Number(e.target.id))
        if (r.length === 0) {
            document.querySelector(".h").className = "h";
            setMoving(false)
           }
        return r
        })
    }   

    return (
      <div className="r3">
        <h2>Reason 4 why Darelyn is cute</h2>
        <div>
            She always finds annoying loopholes!
        </div>
        <img src={require('./img/dp.png')} style={{position:"absolute", left: "0", bottom: "0", width:"15vw"}}></img>
        <div className='hide h'>Darelyn's wishes have stopped multiplying but she has already wished for <a href='' onClick={()=> navigate('/spbbt', { replace: true })}>SPB and BBT</a> </div>
        {init.map((i) => i.img)}
      </div>
    );
  }
  
  export default R4;