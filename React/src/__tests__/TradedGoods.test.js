import React from 'react';
import { shallow } from 'enzyme';
import TradedGoods from '../TradedGoods';
import Messages from '../Messages';
import Orders from '../Orders';
import { isMainThread } from 'worker_threads';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<TradedGoods />)
});

it('contains header', () => {
    expect(wrapped.find('Header').length).toEqual(1);
});

it('contains messages', () => {
    expect(wrapped.find('Messages').length).toEqual(1);
});

it('contains orders', () => {
    expect(wrapped.find('Orders').length).toEqual(1);
});