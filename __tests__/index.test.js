/* global it, expect, describe */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../pages/index.js';

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
