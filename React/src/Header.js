import React, {component} from 'react';
import Tile from './Tile';
import tradeicon from './Images/tradeicon.png';
import logisticsicon from './Images/logisticsicon.png';
import rawmaterialicon from './Images/rawmaterialicon.png';
import sundryicon from './Images/sunDryicon.png';
import stockicon from './Images/stockicon.png';
import './css/header.css';


class Header extends React.Component {
    constructor(props) {
        super(props)
        
     }

    render() {
        return( 
            <div>
             <div>&nbsp;&nbsp;Actions</div>   
             <div className="firstrow">
             <Tile imgIcon={tradeicon}  tileName = "Traded Goods" refName = "/TradedGoods" activeClassName = "live" className= "tile"/>
             <Tile imgIcon={rawmaterialicon} tileName = "Raw Material" refName = "/RawMaterial" activeClassName = "live" className="tile"/>
             <Tile imgIcon = {sundryicon} tileName = "Sundry Items" refName="/SundryItems"activeClassName = "live" className="tile"/>
             </div>
             <div className="secondrow">
             <Tile imgIcon = {logisticsicon} tileName = "Logistics Manager" refName="/LogisticsManager" activeClassName = "live"  className="tile" />
             <Tile imgIcon = {stockicon} tileName = "Stock Check" refName="/StockCheck" activeClassName = "live" className="tile"/>
             </div>

            </div>
        )
    }
}

export default Header;