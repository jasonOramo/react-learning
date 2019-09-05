import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import styled, { find } from 'styled-components/test-utils';

import StyledCom from './StyledCom';


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



it('check render', ()=>{
  act(() => {
    render(<StyledCom />, container);
  });
  const abc = find(document.body, StyledCom);
  const firstP = document.querySelector('p[name=first]');
  expect(firstP).not.toBeNull();
  expect(abc.contains(firstP)).toBe(true);
});
