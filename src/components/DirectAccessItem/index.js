import React from "react";
import * as SC from "./style";
import { Link } from "react-router-dom";

function DirectAccessItem(props) {
  function handleOnClick() {}
  return (
    <SC.BaseComponent onClick={handleOnClick}>
      <Link to={props.link}>
        {props.children}
        {props.icon}
      </Link>
    </SC.BaseComponent>
  );
}

export default DirectAccessItem;
