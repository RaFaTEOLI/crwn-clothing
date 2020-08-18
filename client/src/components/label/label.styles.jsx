import styled from 'styled-components';

export const LabelContainer = styled.a`
  width: 63px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 5px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 2px;
  text-decoration: none;
  color: white;

  &:hover {
    color: black;
    background: #bfbfbf;
  }
`;

export const Item = styled.div`
  padding: 2px;
  padding-right: 5px;
`;
