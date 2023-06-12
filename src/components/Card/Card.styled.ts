import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 250px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-family: 'Hind Siliguri';

  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;

  font-size: 25px;
`;

export const CardDescription = styled.p`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
`;
