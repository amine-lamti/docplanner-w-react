import React from 'react'

function BlockBox(props){
    return(<div className="statistiques">
        <div>
            <h1>The world's<br/> biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner<br/>
               Group to life in almost 20 countries.
            </p>
            <img src="https://www.docplanner.com/img/logo.png"/>
        </div>
        <div className="all-stats">
            {props.blocks.map(el=><div className="stats1">
                <img src={el.link}/>
                <h3>{el.title}</h3>
                <p>{el.prg}</p>
            </div>)}
        </div>
    </div>)
}
export default BlockBox