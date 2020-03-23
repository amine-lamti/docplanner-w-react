import React from 'react'

function Countries(props){
    return(<div className="toot">

        {props.country.map(el=><div className="ctn-img">
            <img src={el.link}/>
            <div className="bloxes">
               <p>{el.name}</p>
               <button className="btn">{el.value}</button>
            </div>
        </div>)}

    </div>)
}
export default Countries