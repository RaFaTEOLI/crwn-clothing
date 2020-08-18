import React from 'react';

import { ContactPageContainer, InfoContainer } from './contact.styles';
import ListItem from '../../components/list-item/list-item.component';
import Card from '../../components/card/card.component';

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <InfoContainer>
        <h2>Application Info</h2>
        <ListItem />
      </InfoContainer>

      <InfoContainer>
        <h2>Developer Info</h2>
        <Card />
      </InfoContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
