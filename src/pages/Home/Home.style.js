import styled from "styled-components";

export const Adaptativa = styled.main`
  width: 70%;
  margin: 50px auto;
  box-shadow: 0px 1px 9px gainsboro;
  padding: 40px;
  border-radius: 5px;
  background-color: #fff;

  @media only screen and (max-width: 1150px) {
    width: 90%;
    margin: 30px auto;
  }

  @media only screen and (max-width: 460px) {
    padding: 40px 25px;
  }
`;