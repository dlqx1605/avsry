import { useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r1.css';

function R1() {

    const navigate = useNavigate();
    const [moving, setMoving] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            let t = parseInt(document.querySelector("img").style.top.replace("vh",""))
            let l = parseInt(document.querySelector("img").style.left.replace("vw",""))
            t = Math.min(Math.max(15, t + Math.random()*21 -10),85)
            l = Math.min(Math.max(15, l + Math.random()*21 -10),85)
            document.querySelector("img").style.top = `${t}vh`
            document.querySelector("img").style.left = `${l}vw`
          }, 100);
        if (!moving) {
            clearInterval(interval)
        }
          return () => clearInterval(interval);
      }, [moving]);

      function cursorChange(e) {
        e.target.style.display='none'
        setMoving(true)
        document.querySelector(".r1").className = "r1 net"
      }

      function birdCaught() {
        if (!moving){
            return
        }
        setMoving(false);
        document.querySelector(".r1").className = "r1";
        document.querySelector(".dimage img").src=require('./img/dsleepr1.png')
        document.querySelector(".htext").className = "htext";
      }

    return (
      <div className="r1" style={{width:"95vw", height:"95vh"}}>
        <h2>Reason 1 why Darelyn is cute</h2>
        <div>
            She gets annoyed by a yellow bird but gets scared of a white bird
            <br/>
            Catch the bird so Darelyn can sleep!
            <br/>
            <br/>
            <span className='htext hide'>Congratulations! Darelyn is <a href='' onClick={()=> navigate('/slpslpslp', { replace: true })}>asleep</a>!</span>
        </div>
        <img onClick={birdCaught} src={require('./img/r1.jpg')}  style={{width:"75px", height:"75px", position:"absolute", top:"50vh", left:"50vw"}}></img>
        <button onClick={(e)=>cursorChange(e)} >Start</button>
        <div className='dimage'>
            <img src={require('./img/dannoyedr1.png')} style={{position:"absolute", left: "0", bottom: "0", width:"15vw"}}></img>
        </div>
      </div>
    );
  }
  
  export default R1;
  