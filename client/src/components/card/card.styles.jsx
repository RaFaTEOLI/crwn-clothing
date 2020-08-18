import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 407px;
  height: 130px;
  background: #f2f2f2;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 800px) {
    width: 40vh;
    height: 100%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 10px;
  width: 30%;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 70%;
`;

export const DevHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DevFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DevName = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 21px;
  color: #000000;
`;

export const DevDescription = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  color: #000000;
`;
