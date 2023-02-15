import styled from "styled-components";

export const Adaptativa = styled.div`
  width: 70%;
  margin: 15px auto 20px;
  box-shadow: 0px 1px 9px gainsboro;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;

  @media only screen and (max-width: 1150px) {
    width: 90%;
    margin: 15px auto 20px;
  }

  @media only screen and (max-width: 460px) {
    padding: 30px 19px;
  }
`;