import React from 'react'
import ListNav from './ListNav'


function Nav(props){
    return(<div className="part1">
    <img className="immmg" src="data:image/png;base64,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"/>
    <div className="menu">{props.navmenu.map((el,i)=><div className="menu"><ListNav key={i} menus={el}/></div>)}</div>
    
</div>)

}

export default Nav