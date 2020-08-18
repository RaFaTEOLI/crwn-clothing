import React from 'react';

import gitHubIcon from '../../assets/25231.png';

import {
  CardContainer,
  ImageContainer,
  DevContainer,
  DevName,
  DevDescription,
  DevHeader,
  DevFooter,
} from './card.styles';

import Label from '../label/label.component';

const Card = () => (
  <CardContainer>
    <ImageContainer>
      <img
        src="https://avatars3.githubusercontent.com/u/40833512?s=460&u=67631b166ec3d929e67f32e7ae0172e3dcbac913&v=4"
        style={{ height: '100%' }}
        alt="Rafael's Profile"
      />
    </ImageContainer>
    <DevContainer>
      <DevHeader>
        <DevName>Rafael Tessarolo</DevName>
        <DevDescription>
          I love building React and Node.js applications ❤
        </DevDescription>
      </DevHeader>

      <DevFooter>
        <Label
          color="#666666"
          icon={gitHubIcon}
          name="GitHub"
          link="https://github.com/RaFaTEOLI"
        />
        <Label
          color="#2867B2"
          icon="https://www.spiner.com.br/wp-content/uploads/2019/02/midias-sociais-linkedin-icon.png"
          name="LinkedIn"
          link="https://www.linkedin.com/in/rafateoli/"
        />
      </DevFooter>
    </DevContainer>
  </CardContainer>
);

export default Card;
