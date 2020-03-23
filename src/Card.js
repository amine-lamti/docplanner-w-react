import React from 'react'

function Card(props) {
    return (
    <div className="for">
        {props.cards.map(el =>(<div className={el.name === "For Patients" ? 'green-box' : 'blue-box'}>
                <p> {el.name}</p>
                <h2>{el.title}</h2>
                <div className="displayflex">
               {el.select ? <select className="select-service"> 
                    {el.select.map(el => <option>{el}</option>)}
                </select> : <div className="mod-slc"></div>}
                <div>
                <img className="img-service" src={el.image} alt=""/>
                </div>
                </div>
        </div>))}
        </div>)}
        
export default Card