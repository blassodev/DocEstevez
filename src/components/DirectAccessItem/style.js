import styled from "styled-components";

export const BaseComponent = styled.div`
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-height: 120px;
  &:hover {
    color: gray;
    & svg {
      color: gray;
    }
    & a {
      color: gray;
    }
  }
  & a {
    color: white;
    display:flex;
    flex-direction: column;
  }
  & svg {
    width: 100px;
    height: 100px;
  }
`;
