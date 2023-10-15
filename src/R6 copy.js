import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './r2.css';

function R6() {

    const navigate = useNavigate();



    return (
      <div className="face">
        <h2>Reason 6 why Darelyn is cute</h2>
        <div>
            She makes her boyfriend wolverine when she is angry!!
        </div>
        <div style={{position: 'absolute', paddingTop: '100px', paddingLeft: '100px'}}>
            <img src={require('./img/hand3.png')} style={{height:'700px', zIndex: 2}}></img>
            <img src={require('./img/f1.png')} style={{position:'absolute', zIndex: 1, left: "455px", top:"655px"}}></img>
            <img src={require('./img/f2.png')} style={{position:'absolute', zIndex: 1, left: "150px", top:"530px"}}></img>
            <img src={require('./img/f3.png')} style={{position:'absolute', zIndex: 1, left: "80px", top:"380px"}}></img>
            <img src={require('./img/f5.png')} style={{position:'absolute', zIndex: 1, left: "380px", top:"105px"}}></img>
        </div>


        <div className='hide h'>Darelyn is satisfied, but after eating so much she wants to <a href='' onClick={()=> navigate('/sqrmwrmd', { replace: true })}>excercise</a> </div>
      </div>
    );
  }
  
  export default R6;