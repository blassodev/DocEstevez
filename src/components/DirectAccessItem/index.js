import React from "react";
import * as SC from './style'
import { Link } from "react-router-dom";

function DirectAccessItem(props) {
    return(
        <SC.BaseComponent>
            <Link to={props.link}/>
            {props.icon}
        </SC.BaseComponent>
    );
}

export default DirectAccessItem;
