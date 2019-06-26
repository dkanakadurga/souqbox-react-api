import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import moxios from 'moxios';
import  App  from '../App';
import Home from '../Home';
import TradedGoods from '../TradedGoods';
import RawMaterial from '../RawMaterial';
import Orders from '../Orders';
import StockCheck from '../StockCheck';
import SundryItems from '../SundryItems';
import { Route } from 'react-router-dom';
import LogisticsManager from '../LogisticsManager';

// jest.mock('firebase/app');


test('valid path should pass', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

 expect(wrapper.find(Home)).toHaveLength(1);
  
});

test('LogisticsManager path should pass', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/LogisticsManager']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LogisticsManager)).toHaveLength(1);
});

test('RawMaterial path should pass', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/RawMaterial']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(RawMaterial)).toHaveLength(1);
})

test('SundryItems patrh should pass', () => {
 const wrapper = mount(
   <MemoryRouter initialEntries={['/SundryItems']}>
     <App/>
   </MemoryRouter>
 );
 expect(wrapper.find(SundryItems)).toHaveLength(1);
})

test('TradedFGoods poath should pass', () => {
//   moxios.install();
//   moxios.stubRequest('http://localhost:3000/orders', {
//     status: 200,
//     response: []
// });
  const wrapper = mount(
    <MemoryRouter initialEntries={['/TradedGoods']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(TradedGoods)).toHaveLength(1);
})

test('StockCheck path shoild pass', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/StockCheck']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(StockCheck)).toHaveLength(1);
})