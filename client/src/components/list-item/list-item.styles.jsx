import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  width: 407px;
  height: 130px;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 40vh;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 200px; */
  width: 100%;
  height: 24px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  background: #f2f2f2;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
