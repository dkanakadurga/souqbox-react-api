import React from "react";
import './css/flexstyle.css';
import tradeicon from './Images/tradeicon.png';
const FlexboxPage = () => (
  // <div className="d-inline-flex p-2 col-example">
  //   <img src = {tradeicon} />
  // <br/>  I'm an inline flexbox container!</div>
  <>
  <div className="d-flex flex-row">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
  </div>
  <div className="d-flex flex-row-reverse">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
  </div>
</>
);

export default FlexboxPage;