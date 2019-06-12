import React, {Component} from 'react';
import tradeLogo from './Images/tradeicon.png';
import './css/styleTile.css'




class Tile extends React.Component{
constructor(props) {
    super(props)
}


render( ) {
    return(
        
        <div className = {this.props.className}>
            <a className = "anchor" href = {this.props.refName}>
           <img src = {this.props.imgIcon}></img>
           <div>{this.props.tileName}</div>
           </a>
        </div>);
       
        
    }
}
export default Tile;








