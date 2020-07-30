import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// Before Styled Components
// import './custom-button.styles.scss';
// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
// <button
//   className={`${inverted ? 'inverted' : ''} ${
//     isGoogleSignIn ? 'google-sign-in' : ''
//   } custom-button`}
//   {...otherProps}
// >
//   {children}
// </button>
// After Styled Components
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
