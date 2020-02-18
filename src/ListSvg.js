import React from 'react'

function ListSvg(props){

    return(<div className = "brands">
        <h1 className="global">We are a global company with local culture</h1>
        {props.tabsvg.map(el=><div className="brans-logos">
            <a  href={el.link}>
                <svg className="brand-logos" width="150px" height="32" viewBox="0 0 200 32" xmlns={el.svglink}><path d={el.path}></path></svg>
            </a>    
        </div>)}
        
    </div>)

}
export default ListSvg