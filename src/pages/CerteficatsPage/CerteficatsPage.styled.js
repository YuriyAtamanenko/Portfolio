import styled from '@emotion/styled';

export const CertificateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  padding: 20px 0;

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }
`;

export const Iframe = styled.iframe`
  width: 350px;
  height: 1450px;
  border: none;

  @media screen and (min-width: 1440px) {
    width: 800px;
    height: 3350px;
  }
`;
