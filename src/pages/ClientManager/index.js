import React, { useEffect, useState } from "react";
import { DarkContainer } from "../../styles/DarkContainer";
import MaterialTable from "material-table";

function ClientManager(props) {
  
  function handleAddUser() {}
  const [userData, setUserData] = useState([
    {
      name: "Blas",
      surname: "Santome",
      dni: "54229366G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [{
        date: "25/04/2020",
        weight: 74,
        physicalActivity: "active"
      },]
    },
    {
      name: "Antonio",
      surname: "Santome",
      dni: "54229266G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [{
        date: "25/04/2020",
        weight: 74,
        physicalActivity: "active"
      },]
    },
  ]);
  function addMeasurement(userDni, newMeasurement) {
    // We call dispatch function for userData state
    setUserData(prevUserData => {
  
      const updatedUserData = prevUserData.map(user => {
        if (user.dni === userDni) {
          return { ...user, measurements: [...user.measurements, { date: newMeasurement.date, weight: newMeasurement.weight, physicalActivity: newMeasurement.physicalActivity }] }
        }
  
        return user
      })
    return updatedUserData

  })
}
  const columns = [
    { title: "Dni", field: "dni" },
    { title: "Nombre", field: "name" },
    { title: "Apellidos", field: "surname" },
    { title: "Edad", field: "age" },
    { title: "Sexo", field: "gender" },
    { title: "Altura", field: "height" },
  ];

  useEffect(() => {
    const newMeasurement = {
      date: 'algo',
      weight: 45,
      physicalActivity: "mucha"
    }
      addMeasurement("54229266G", newMeasurement);
    switch (props.match.params.option) {
      case "add":
        break;
      default:
        break;
    }
  }, [props.match.params.option]);
  return (
    <DarkContainer>
      <MaterialTable columns={columns} data={userData} title="Demo Title" />
    </DarkContainer>
  );
}

export default ClientManager;
