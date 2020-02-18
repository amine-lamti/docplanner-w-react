import React from 'react'


function Footer(props){
    return(
    <div className="span">
        <p>We are leaders in 10 countries:</p>
        {props.infos.map(el => <a class="link" href={el.link}>{el.name},</a>)}<p></p>
<p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
www.docplanner.com © 2020</p> 
    
    </div>
    )
 
}
export default Footer

