import React, {Component} from 'react';
import tradeLogo from './Images/tradeicon.png';
import './css/styleTile.css'
import Messages from './Messages';
import { NavLink } from 'react-router-dom';




class Tile extends React.Component{
constructor(props) {
    super(props)
}


render( ) {
    return(

        <div className = "tileclass">
        <div className = {this.props.className}>
           
            <NavLink to = {this.props.refName} activeClassName = {this.props.activeClassName} strict>
            <div className="imgclass">
                <br/>
           <img src = {this.props.imgIcon}></img>
           </div>
           
           <div className="tiledes">
           <div>{this.props.tileName}</div>
           </div>
           </NavLink>
        </div>
        </div>);
       
        
    }
}
export default Tile;








