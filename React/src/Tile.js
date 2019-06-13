import React, {Component} from 'react';
import tradeLogo from './Images/tradeicon.png';
import './css/styleTile.css'
import Messages from './Messages';




class Tile extends React.Component{
constructor(props) {
    super(props)
}


render( ) {
    return(

        <div className = "tileclass">
        <div className = {this.props.className}>
           
            <a className = "anchor" href = {this.props.refName}>
            <div className="imgclass">
                <br/>
           <img src = {this.props.imgIcon}></img>
           </div>
           
           <div className="tiledes">
           <div>{this.props.tileName}</div>
           </div>
           </a>
        </div>
        </div>);
       
        
    }
}
export default Tile;








