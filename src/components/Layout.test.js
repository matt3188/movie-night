import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import TestUtils from 'react-addons-test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
});

describe('load container and check links', function() {
  it('should have 4 nav links', function() {
    var container = <Layout />;
    var DOM = TestUtils.renderIntoDocument(container);
    var links = TestUtils.scryRenderedDOMComponentsWithTag(
      DOM, 'li');
    expect(links.length).toEqual(4);
  });
});
