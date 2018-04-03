import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '../../components/Spinner'
 
Enzyme.configure({ adapter: new Adapter() });
 
function setup() {
  const props = {
  }
 
  const enzymeWrapper = mount(<Spinner/>)
 
  return {
    props,
    enzymeWrapper
  }
}
 
describe('components', () => {
  describe('Spinner', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
 
      expect(enzymeWrapper.find('#spinner').hasClass('spinner')).toBe(true)
    });
  })
})