import { useNavigate } from 'react-router-dom';

function Landing() {

    const navigate = useNavigate();
    
    function click() {
        navigate('/homeee', { replace: true });

    }

    return (
      <div className="Home">
        <h1>Welcome</h1>
        <button onClick={click}>Let's go!</button>
        <div style={{paddingTop:'10px'}}>
            Continuing on to the next page means that you have agreed to the <a href='' onClick={()=>window.open('/tc', 'rel=noopener noreferrer')}>terms and conditions</a>
        </div>

      </div>
    );
  }
  
  export default Landing;
  