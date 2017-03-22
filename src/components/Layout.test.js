import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import TestUtils from 'react-addons-test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
});

describe('load container and check links', () => {
  it('should have 4 nav links', () => {
    const container = <Layout />;
    const DOM = TestUtils.renderIntoDocument(container);
    const links = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'li');
    expect(links.length).toEqual(4);
  });
});
