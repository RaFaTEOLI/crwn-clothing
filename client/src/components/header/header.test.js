import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockClearCart;
  let mockUserSignOut;

  beforeEach(() => {
    mockClearCart = jest.fn();
    mockUserSignOut = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123',
      },
      clearCart: mockClearCart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(wrapper.find('OptionLink').at(2).text()).toBe('SIGN OUT');
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        clearCart: mockClearCart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find('OptionLink').at(2).text()).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        clearCart: mockClearCart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
