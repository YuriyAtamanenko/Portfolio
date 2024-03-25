import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Container = styled.main`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;
