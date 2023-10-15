import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r2.css';

function R2() {

    const navigate = useNavigate();

    const chars = ["⧍", "⏧", "⨳", "⦞", "⨄",
     "⭈", "≝", "⍼", "⩐", "⩩", 
     "⍨", "℘", "⫁", "⌭", "⨓", 
     "◕", '෴', "✺", "〠", "⚗", 
     "ᔱ", "☃", "⛕", "⛡"]

    const filler = [new Audio(require("./img/r2fill1.mp3")), new Audio(require("./img/r2fill2.mp3")), new Audio(require("./img/r2fill3.mp3")), new Audio(require("./img/r2fill4.mp3"))]
    const ka = new Audio(require("./img/r2key.mp3"))
    let order = [...new Set(Array.from({length: 24}, () => Math.floor(Math.random() * 24)).slice(0,8))]
    order = order.sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      })
    const key = order.reduce((acc, curr) => acc += chars[curr],"")
    console.log(key)
    let ar = []
    for (var i = 0; i < 24; i++){
            ar.push(<div className='pad'>
                <img src={require('./img/dsleepr2.png')} style={{width:"64px", height:"64px", display:"block"}}
                onClick={ order.includes(i) ? ()=>ka.play() :  ()=> filler[Math.floor(filler.length * Math.random())].play()}/>
                <span>{`${i+1}. ${chars[i]}`}</span>
                </div>)
    }
   
    return (
      <div className="r1" style={{width:"95vw", height:"95vh"}}>
        <h2>Reason 2 why Darelyn is cute</h2>
        <div>
            She makes <a onClick={()=>ka.play()} href=''>funny sounds</a> when she is sleeping
        </div>
        <div className='grid'>
            {ar}
        </div>
        <br/>
        <br/>
        <div className='h hide'>
            Uh oh, Darelyn is <a href='' onClick={()=> navigate('/emememmeo', { replace: true })}>awake</a> again...
        </div>
        <input/>
        <button onClick={()=> document.querySelector("input").value == key ? document.querySelector('.h').className = 'h' : alert("That is wrong!")}>Submit</button>
      </div>
    );
  }
  
  export default R2;
  