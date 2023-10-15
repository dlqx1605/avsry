import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Grid from './Grid'
import './r2.css';

function R6() {

    const navigate = useNavigate();



    return (
      <div className="puzzle">
        <h2>Congratulations you have reached the final page!</h2>
        <div>
            Fix the puzzle and send a screenshot for verification to claim your prize!
        </div>
        <Grid/>
      </div>
    );
  }
  
  export default R6;