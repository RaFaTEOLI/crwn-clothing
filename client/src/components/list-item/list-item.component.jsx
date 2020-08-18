import React from 'react';

import { ListItemContainer, Item } from './list-item.styles';

const ListItem = () => (
  <ListItemContainer>
    <Item>
      Language
      <b>
        <i>Javascript</i>
      </b>
    </Item>
    <Item>
      Frontend
      <b>
        <i>React</i>
      </b>
    </Item>
    <Item>
      Data Storage
      <b>
        <i>Firebase</i>
      </b>
    </Item>
    <Item>
      Backend
      <b>
        <i>Express</i>
      </b>
    </Item>
    <Item>
      Payment's API
      <b>
        <i>Stripe</i>
      </b>
    </Item>
  </ListItemContainer>
);

export default ListItem;
