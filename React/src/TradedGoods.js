import React, {Component} from 'react';
import Header from './Header';
import Orders from './Orders';
import Messages from './Messages';
import './css/tradedstyle.css'



class TradedGoods extends React.Component {
    constructor(props) {
        super(props)
    }

render() {
    return(
        <div className="container">
       <div>
        <div className = "headerClass"><Header/> </div>    
       </div> 
       <div className = "orderHeading">Orders</div>
       <div className = "ordersClass"><Orders/></div>
       <div className = "messageHeading">Messages</div>
       <div  className="messagesClass"><Messages/> </div>
      </div>);
}

}

export default TradedGoods;