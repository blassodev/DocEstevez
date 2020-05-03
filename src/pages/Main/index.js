import React from "react";
import * as SC from "./style";
import { Typography } from "@material-ui/core";
import DirectAccessItem from "../../components/DirectAccessItem";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { DarkContainer } from "../../styles/DarkContainer";
import { LightContainer } from "../../styles/LightContainer";

function Main() {
  return (
    <LightContainer>
      <SC.MainContainer>
        <Typography variant="h1">Buenos dias,</Typography>
        <Typography variant="h2">Doctor Estévez</Typography>
        <SC.DirectAccessCard variant="outlined">
          <DirectAccessItem icon={<PersonIcon />} link="/ClientManager" light>
            Gestionar clientes
          </DirectAccessItem>
          <DirectAccessItem icon={<PersonAddIcon />} link="/ClientManager/add" light>
            Añadir cliente
          </DirectAccessItem>
        </SC.DirectAccessCard>
      </SC.MainContainer>
    </LightContainer>
  );
}

export default Main;
