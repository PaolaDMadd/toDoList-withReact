import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

// // test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// shallow does a fake render(it will call but doesn't modify the DOM as in our case we don't have one) of a component.

describe('App', () => {
  it('Runs the tests', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.state());
    expect(true).toEqual(true);

  });
});


