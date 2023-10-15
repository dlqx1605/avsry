import Image from "./Image.js"
import './store.css'


function Store({store, setIndex, selected, swap}) {

  return (
    <div className="store">
        {store.map((img, i) => {
            return <Image image={img} index={i} key={i} setIndex={setIndex} selected={selected} swap={swap}></Image>
        })}
    </div>  
  );
}

export default Store;
