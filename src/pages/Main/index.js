import React, { useState, useEffect } from "react";
import * as SC from "./style";
import { Typography } from "@material-ui/core";
import DirectAccessItem from "../../components/DirectAccessItem";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { DarkContainer } from "../../styles/DarkContainer";
import { LightContainer } from "../../styles/LightContainer";

function Main() {
  const [dayState, setDayState] = useState("");
  useEffect(()=>{
    const hora = new Date().getHours();
    if(hora>=12 && hora<=18){
      setDayState("Buenas tardes")
    }else if(hora>=19 && hora<=23){
      setDayState("Buenas noches")
    }else{
      setDayState("Buenos dias")
    }
  },[])
  return (
    <LightContainer>
      <SC.MainContainer>
        <Typography variant="h1">{dayState},</Typography>
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
