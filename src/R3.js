import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r2.css';

function R3() {

    const navigate = useNavigate();

    
    function click() {
        const txt = "Sorry Darelyn :("
        if (document.querySelector("input").value === txt) {
            document.querySelector(".h").className="h"
            document.querySelector("input").className = "hide"
            document.querySelector("button").className = "hide"
        } else {
            alert("Wrong! Darelyn is getting emoer!!!!")
        }
    }

    return (
      <div className="r3">
        <h2>Reason 3 why Darelyn is cute</h2>
        <div>
            She has a specific face when she is emo/annoyed
        </div>
        <div>Oh no, Darelyn has woken up and is grumpy! <br/> Find the hidden message in her wish voucher to make Darelyn happy again!</div>
        <br/>
        <div className='hide h'>Yay! Darelyn is pleased with the voucher and has begun to make <a href='' onClick={()=> navigate('/dcjc', { replace: true })}>wishes</a>...</div>
        <input/>
        <button onClick={click}>Submit</button>
        <img src={require('./img/dr32.png')} style={{position:"absolute", left: "0", bottom: "0", width:"15vw"}}></img>
        <img src={require('./img/dr31.png')} style={{position:"absolute", right: "0", bottom: "0", width:"15vw"}}></img>

      </div>
    );
  }
  
  export default R3;
  