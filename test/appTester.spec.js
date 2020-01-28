
// ========================== SAMPLE TESTER FILE ===============================================

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


// need test in appTester.jsx

// import React from 'react';
// import { shallow } from 'enzyme';
// import MyComponent from '../client/src/components/appTester.jsx';

// describe('MyComponent', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });