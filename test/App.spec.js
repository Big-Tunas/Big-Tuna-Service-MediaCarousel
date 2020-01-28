// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from '../client/src/components/App.jsx';


// describe('My Test Suite', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });


// describe('App', () => {
//   test('App exists', () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });



import React from 'react';
import renderer from 'react-test-renderer';
import App, { Counter } from '../client/src/components/appTester.jsx';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Counterzz', () => {
  test('snapshot renders!!!!', () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
