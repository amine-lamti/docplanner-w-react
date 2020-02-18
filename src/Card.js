import React from 'react'

function Card(props) {
    return (<div className="for">
        {props.cards.map(el =>
            <div className={el.select ? 'cardPM active' : ' cardPM desactive'}>
                <p> {el.name}</p>
                <h2>{el.title}</h2>
                <div className="select-img">
                    {el.select ? <select className="mod-slc"> 
                    {el.select.map(el => <option>{el}</option>)}
                </select> : <div className="mod-slc"></div>}


                <img className="img" src={el.image} />
                </div>
                
            </div>
        )}
    </div>)
}
export default Card