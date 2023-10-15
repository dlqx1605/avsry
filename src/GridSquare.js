import './grid.css'


function GridSquare({children, place, index}) {

  return (
    <div className={`grid_square ${children ? "" : "outline"}`} onClick={children ? ()=>{} : ()=>place(index)} onContextMenu={children ? (e)=>{e.preventDefault();place(index)} : ()=>{}}>
        {children}
    </div>  
  );
}

export default GridSquare;
