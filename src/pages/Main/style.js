import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const MainContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const DirectAccessCard = styled(Paper)`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 80vw;
  height: 60vh;
`;
