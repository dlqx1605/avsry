import './image.css';

function Image(props) {

    function outline() {
        if (props.index === props.selected) {
            props.setIndex(-1)
        } else if (props.selected === -1) {
            props.setIndex(props.index)
        } else {
            props.swap(props.index, props.selected)
            props.setIndex(-1)
        }
    }
  return (
    <img className={`image ${props.index === props.selected ? "active" : ""}`} onClick={outline} 
    src={require(`${props.image[0]}`)} id={props.index} style={{transform:`rotate(${props.image[1]}deg)`}}></img> 
  );
}

export default Image;
