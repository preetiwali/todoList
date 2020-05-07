import React from 'react';
import './Listitem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function Listitem(props) {
    const items = props.items;
    const listitems = items.map(item =>
        {
            return <div className="listitem" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} 
                    onChange={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }></input>
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash" 
                    onClick={ () => props.deleteItem(item.key)}></FontAwesomeIcon>
                </span>
                </p>
            </div>
        }) 
    return(
        <div>
        <FlipMove duration={250} easing="ease-in-out">
        {listitems}
        </FlipMove>
        </div>
    )
}

export default Listitem;