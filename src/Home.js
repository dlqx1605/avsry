import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    
    function click() {
        const txt = "Sometimes, Darelyn can be very very very very very very very very very very annoying, but this will be more annoying than her! sadbasklrwiuh29q78rgbilafgQ9387WIEGARISEGRF0793t3qg"
        if (document.querySelector("input").value === txt) {
            navigate('/bdbd', { replace: true });
        } else {
            alert("you got that wrong!!")
        }
    }

    return (
      <div className="Home">
        <h2>Reason 1 why Darelyn is cute</h2>
        <div style={{paddingBottom:'20px'}}>
            She always finds annoying loop holes like how she is using image to text to type this out!!
        </div>
 
        <img src={require('./img/home.png')}></img>
        <div>
            <input></input>
            <button onClick={click}>Submit</button>
        </div>

      </div>
    );
  }
  
  export default Home;
  