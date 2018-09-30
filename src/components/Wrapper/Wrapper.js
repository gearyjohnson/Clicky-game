import React from "react";
import "./Wrapper.css";
// import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Wrapper = props => 
  <div className="wrapper">{props.children}
  </div>
;

export default Wrapper;
