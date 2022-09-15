import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin: 2em 2px;
  background-color: #292929;
  max-height: 480px;
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 30px;

  @media screen and (max-width: 1580px) {
    display:flex;
    flex-direction:column;
    width: 100%;
    margin-left: 2px;
    padding-left: 0;
    max-height: 280.25px;
  }
  

  @media screen and (max-width: 957px) {
    width: 50%;
    padding-left: 0;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  margin: 2em 0 0;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1580px) {
    margin: 5px 0 5px 5px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Thumbnail = styled.img`
  border: none;
  background-size: cover;
`;

export const ItemTitle = styled.span`
  color: #e3e3e3;
  display: inline-block;
`;

export const ItemChannel = styled.p`
  color: #e3e3e3;
`;
