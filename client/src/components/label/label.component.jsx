import React from 'react';

import { LabelContainer, Item } from './label.styles';

const Label = ({ color, icon, name, link }) => (
  <LabelContainer color={color} href={link} target="_blank">
    <Item>
      <img height="12" src={icon} alt="Icon" />
    </Item>
    <Item>{name}</Item>
  </LabelContainer>
);

export default Label;
