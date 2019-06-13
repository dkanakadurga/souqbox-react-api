import React from 'react';
import Orders from './Orders';
import Home from './Home';
import { Route } from 'react-router-dom';
import TradedGoods from './TradedGoods';
import RawMaterial from './RawMaterial';
import SundryItems from './SundryItems';
import LogisticsManager from './LogisticsManager';
import StockCheck from './StockCheck';


function App() {
  return (
    <div>
     <Route path = "/" exact component = {Home}/>
     <Route path = "/TradedGoods" component = {TradedGoods}/>
     <Route path = "/RawMaterial" component = {RawMaterial}/>
     <Route path = "/SundryItems" component = {SundryItems}/>
     <Route path = "/LogisticsManager" component = {LogisticsManager}/>
     <Route path = "/StockCheck" component = {StockCheck}/>
     </div>
  );
}

export default App;







