import React from 'react'

function Countries(props){
    return(<div className="offices_slider toot">

        {props.country.map(el=><div className="ctn-img">
            <img src={el.link}/>
            <div className="office_desc">
               <p>{el.name}</p>
               <button className="btn">{el.value}</button>
            </div>
        </div>)}

    </div>)
}
export default Countries