// import React from "react";

// const StyleComponentWithOutCSS =()=>{
//     return <div className="style-component">
//         <h4> Style I didn't add the css file but it will take from the StyleComponent</h4>
//     </div>
// }

// export default StyleComponentWithOutCSS

import styled from "styled-components";

const CustompDiv = styled.div`
  border: 2px solid;
  border-radius: 5px;
  border-color: green;
`;

const StyleComponentWithOutCSS = () => {
  return (
    <CustompDiv className="style-component">
      <h3>Hello Apply style on this h1 from StyleComponent</h3>
    </CustompDiv>
  );
};

export default StyleComponentWithOutCSS;
