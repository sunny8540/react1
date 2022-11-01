import React from "react";
import './index.css';
function List(props){
    return(
        <>
            <div className="main">
                <div className="img"><img src={props.imgs}/></div>
                <div className="dis">
                <p>netflix original series</p>
                <p1>{props.name}</p1>
                <div className="but"><a href={props.link}>watch now</a></div>
                </div>
            </div>
        </>
    )
}
export default List;