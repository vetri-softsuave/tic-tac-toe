import React,{useState} from "react";
import './Box.css';

const Box = () =>{
   const [symbol, setSymbol] = useState('X');
    const clickHandler = (event) =>{
        console.log("haii");
        setSymbol('O');
    }

return <div className="box" onClick={clickHandler}>
    {symbol}
</div>
};

export default Box;