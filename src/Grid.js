import { useState } from "react";
import './grid.css'
import Image from "./Image";
import GridSquare from "./GridSquare"
import Store from "./Store";


function Grid() {
    let pieces = []
    const dir = [0,90,180,270]
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            pieces.push([`./img/puz/row-${i}-column-${j}.png`, dir[Math.floor(Math.random() * dir.length)]])
        }
    }

    let pieces_shuffled =  pieces
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    
    const [store, setStore] = useState(pieces_shuffled)

    const [placed, setPlaced] = useState({})

    const [ind, setInd] = useState(-1)

    function swap(i1, i2) {
        let temp1, temp2
        if (i1 > 999 && i2 > 999) {
            temp1 = placed[i1]
            temp2 = placed[i2]
            setPlaced({...placed, [i2] : temp1, [i1] : temp2})
        } else if (i1 < 999 && i2 < 999) {
            temp1 = store[i1]
            temp2 = store[i2]
            let cp = [...store]
            cp[i1] = temp2
            cp[i2] = temp1
            setStore(cp)
        } else {
            let mx = Math.max(i1,i2)
            let mn = Math.min(i1,i2)
            temp1 = placed[mx]
            temp2 = store[mn]
            let cpstore = [...store]
            cpstore[mn] = temp1
            setStore(cpstore)
            setPlaced({...placed, [mx]: temp2})
        }
    }

    function place(index) {
        if (ind === -1) {
            return
        } else if (ind > 999) {
            let cp = {...placed}
            let temp = placed[ind]
            delete cp[ind]
            cp[index] = temp
            setPlaced(cp)
        } else {
            let cp = [...store]
            let temp = store[ind]
            cp.splice(ind, 1)
            setStore(cp)
            setPlaced({...placed, [index]: temp})
        }
        setInd(-1)
    }

    function remove(index) {
        
        let cp = {...placed}
        let temp = placed[index]
        delete cp[index]
        setPlaced(cp)
        setStore([...store, temp])
    }

    function rotate() {
        if (ind !== -1) {
            let cp;
            if (ind > 999) {
                cp = JSON.parse(JSON.stringify(placed))
                cp[ind] = [placed[ind][0], (placed[ind][1] + 90)%360]
                setPlaced(cp)
            } else {
                let cp = JSON.parse(JSON.stringify(store))
                cp[ind] = [store[ind][0], (store[ind][1] + 90)%360]
                setStore(cp)
            }
            setInd(-1)
        }
    }

    const grid = [];
    for (let i = 1000; i < 1081; i++) {
        if (i in placed) {
            grid.push(<GridSquare key={i} index={i} place={remove}><Image image={placed[i]} index={i} key={i} setIndex={setInd} selected={ind} swap={swap}/></GridSquare>);
        } else {
            grid.push(<GridSquare key={i} index={i} place={place}/>);
        }
    }
  return (
    <div>
        <div className="grid">
            {grid}
        </div>
        <Store setIndex={setInd} selected={ind} swap={swap} store={store}/>  
        <button onClick={()=>rotate()}>Rotate</button>
    </div>

  );
}

export default Grid;
