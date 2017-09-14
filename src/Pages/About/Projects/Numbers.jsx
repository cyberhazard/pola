import React from 'react';
import styled from 'styled-components';

const Numbers = styled.div`
  margin-right: 7rem;
  margin-top: 1rem;
`;

const Number = styled.div`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
`;

const Text1 = styled.span`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 2.4rem;
  font-weight: 700;
  padding-left: 1rem;
`;

const Text2 = styled.div`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

export default ({ number, text1, text2 }) => (
  <Numbers>
    <Number>{(+number).toLocaleString()}
      <Text1>{text1}</Text1>
    </Number>
    <Text2>{text2}</Text2>
  </Numbers>
);
