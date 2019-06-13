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
             <Tile imgIcon={tradeicon} tileName = "Traded Goods" refName="/TradedGoods" className="tile"/>
             <Tile imgIcon={rawmaterialicon} tileName = "Raw Material" refName = "/RawMaterial" className = "tile"/>
             <Tile imgIcon = {sundryicon} tileName = "Sundry Items" refName="/SundryItems" className="tile"/>
             </div>
             <div class="secondrow">
             <Tile imgIcon = {logisticsicon} tileName = "Logistics Manager" refName="/LogisticsManager"  className="tile" />
             <Tile imgIcon = {stockicon} tileName = "Stock Check" refName="StockCheck" className="tile"/>
             </div>

            </div>
        )
    }
}

export default Header;