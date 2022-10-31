import React from 'react'
import { useState } from 'react'
import './Display.css'

const Display = (props) => {
    const [color, setColor] = useState("");


    const createBox = (e) =>{
        e.preventDefault();
        const newBox = {
            color: color
        };
        props.addBox(newBox);
        setColor("")
    }

    return (
        <div>

            <div>
                <form onSubmit={createBox}>
                    <label>Color</label>
                    <input onChange={(e) => setColor(e.target.value)} value={color}/>
                    <button>Add box</button>
                </form>
            </div>
            <div className="container">
                {props.boxes.map( (box, idx) => {
                    const boxStyle = {
                        width : 100 +"px",
                        height: 100 + "px",
                        background : box.color
                    }
                    return<div key={idx}>
                        <p style={boxStyle}></p>
                    </div>
                }

                )}
            </div>

        </div>
        
    )
}

export default Display