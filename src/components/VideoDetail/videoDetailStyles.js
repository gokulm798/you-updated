import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  margin-left: calc(94px + 4.5em + 80px);

  @media screen and (max-width: 1580px) {
    display:flex;
    flex-direction:column;
    padding:0 20rem 0 20rem;
    margin-left: 0;
    margin: auto;
  }

  @media screen and (max-width: 957px) {
    width: 90%;
    flex-direction: column;
    margin-left: 0;
    margin: auto;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 854px;
  max-height: 483px;

  @media screen and (max-width: 1580px) {
    max-width: 240.5px;
    max-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    width: 100%;
    max-height: none;
    min-width: 0;
  }
`;

export const VideoTitle = styled.h4`
  color: #e3e3e3;
  font-weight: 400;
  margin-bottom: 0;
`;

export const VideoChannel = styled.small`

`;

export const VideoDescription = styled.small`

`;

export const Divider = styled.br``;

export const Frame = styled.iframe`
  width: 100%;
  height: 200px;
  max-width: 554px;
  max-height: 880px;
  display: block;
  margin: 2em auto;
  border: none;

  @media screen and (max-width: 1580px) {
    max-width: 100%;
    max-height: 250.25px;
  }

  @media screen and (max-width: 957px) {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
`;

// export const VideoTitle = styled.p`
//   color: #e3e3e3;
//   display: block;
//   margin: 0 0 4px 0;
//   max-height: 3.2rem;
//   overflow: hidden;
//   font-size: 0.9rem;
//   font-weight: 500;
//   line-height: 1.6rem;
// `;
