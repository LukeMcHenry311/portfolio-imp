import React from 'react';
import styled from 'styled-components';
import './PText.css';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.3 em;
  color: black;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;


// props = {
//   children: {someProp: value},
//   color: "red"
// }

const PText = ({children, color}) => {

  return (
    <PStyle className="para"> {/* Use the PStyle component */}
      <p style={{color: color}}>{children}</p>
    </PStyle>
  );
};

export default PText;