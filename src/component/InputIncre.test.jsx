import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

// import InputIncre from './InputIncre';

import InputIncreHooks, {InputUnIncre} from './InputIncreHooks';

let InputIncre  = InputUnIncre;

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('normal render', () => {
  act(() => {
    render(<InputIncre max={100} min={0}/>, container);
  });
  const inputDom = document.querySelector('input');
  expect(inputDom.value).toBe('0');
});

describe('normal value',()=>{
  it('add button and validate value',()=>{
    act(() => {
      render(<InputIncre max={100} min={0}/>, container);
    });
    const inputDom = document.querySelector('input');
    expect(inputDom.value).toBe('0');
    let addBtn = document.querySelector('button[name=add]');
    act(()=>{
      addBtn.dispatchEvent(new MouseEvent('click',{ bubbles: true }));
    });
    expect(inputDom.value).toBe('1');
  });

  it('change value directly',()=>{
    act(() => {
      render(<InputIncre max={100} min={0}/>, container);
    });
    const inputDom = document.querySelector('input');
    Simulate.change(inputDom,{target:{value:'20'}});
    expect(inputDom.value).toBe('20');
    Simulate.change(inputDom,{target:{value:'200'}});
    expect(inputDom.value).toBe('200');
    Simulate.blur(inputDom);
    expect(inputDom.value).toBe('100');
  });

  it('minus button and validate value',()=>{
    act(() => {
      render(<InputIncre max={100} min={0}/>, container);
    });
    const inputDom = document.querySelector('input');
    expect(inputDom.value).toBe('0');
    Simulate.change(inputDom,{target:{value:'20'}});
    expect(inputDom.value).toBe('20');
    let minusBtn = document.querySelector('button[name=decre]');
    act(()=>{
      minusBtn.dispatchEvent(new MouseEvent('click',{ bubbles: true }));
    });
    expect(inputDom.value).toBe('19');
  });

  it('add and minus buttons works together',()=>{
    act(() => {
      render(<InputIncre max={100} min={0}/>, container);
    });
    const inputDom = document.querySelector('input');
    expect(inputDom.value).toBe('0');
    let minusBtn = document.querySelector('button[name=decre]');
    let addBtn = document.querySelector('button[name=add]');
    act(()=>{
      addBtn.dispatchEvent(new MouseEvent('click',{ bubbles: true }));
      minusBtn.dispatchEvent(new MouseEvent('click',{ bubbles: true }));
    });
    expect(inputDom.value).toBe('0');
  });
});

describe('invalidate num', ()=>{
  it('change value directly with invalidate num',()=>{
    act(() => {
      render(<InputIncre max={100} min={0}/>, container);
    });
    const inputDom = document.querySelector('input');
    Simulate.change(inputDom,{target:{value:'200'}});
    expect(inputDom.value).toBe('200');
    Simulate.blur(inputDom);
    expect(inputDom.value).toBe('100');
  });

});


