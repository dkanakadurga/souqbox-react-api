import React, {component} from 'react';
import Tile from './Tile';
import tradeicon from './Images/tradeicon.png';
import logisticsicon from './Images/logisticsicon.png';
import rawmaterialicon from './Images/rawmaterialicon.png';
import sundryicon from './Images/sunDryicon.png';
import stockicon from './Images/stockicon.png';
import './css/home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
     }
    render() {
        return( 
            <div>
             <Tile imgIcon={tradeicon} tileName = "Traded Goods" refName="/TradedGoods" className="tile live"/>
             <Tile imgIcon={rawmaterialicon} tileName = "Raw Material" className = "tile"/>
             <Tile imgIcon = {sundryicon} tileName = "Sundry Items" className="tile"/>
             <Tile imgIcon = {logisticsicon} tileName = "Logistics Manager" className="tile" />
             <Tile imgIcon = {stockicon} tileName = "Stock Check" className="tile"/>

            </div>
        )
    }
}

export default Home;