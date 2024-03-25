import styled from '@emotion/styled';

export const List = styled.ul`
 margin-top: 55px;
padding: 20px 0px;
  display: flex;
  align-content: flex-start;
    justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 50px;


   @media screen and (min-width: 768px) {
    margin-top: 0px;
    justify-content: space-between
  }
  @media screen and (min-width: 1440px) {
 justify-content: space-around;
  }


  }
`;
