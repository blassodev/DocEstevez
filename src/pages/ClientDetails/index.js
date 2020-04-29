import React from "react";
import { DarkContainer } from "../../styles/DarkContainer";
import MaterialTable from "material-table";
import spanishTable from "../../lang/material-table/spanish.json";
import { useHistory } from "react-router-dom";
import { useClient } from "../../hooks/useClient";
import CustomChart from '../../components/CustomChart'

function ClientDetails(props) {
  const history = useHistory();
  const { setUsersData, usersData } = useClient();
  function addMeasurement(newMeasurement) {
    // We call dispatch function for userData state
    setUsersData((prevUserData) => {
      const updatedUserData = prevUserData.map((user) => {
        if (user.dni === props.match.params.dni) {
          return {
            ...user,
            measurements: [
              ...user.measurements,
              {
                date: newMeasurement.date,
                weight: newMeasurement.weight,
                physicalActivity: newMeasurement.physicalActivity,
              },
            ],
          };
        }

        return user;
      });
      return updatedUserData;
    });
  }
  const selectedClientIndex = usersData.findIndex(
    (client) => client.dni === props.match.params.dni
  );
  const columns = [
    { title: "Fecha", field: "date", editable: "never" },
    { title: "Peso", field: "weight" },
    {
      title: "Actividad Física",
      field: "physicalActivity",
      lookup: {
        1: "Sedentario",
        2: "Ligeramente activo",
        3: "Activo",
        4: "Muy activo",
        5: "Atleta profesional",
      },
    },
  ];
  return (
    <DarkContainer>
      {console.log(props.match.params.option)}
      <MaterialTable
        style={{ margin: "50px" }}
        localization={spanishTable}
        columns={columns}
        data={usersData[selectedClientIndex].measurements}
        title={
          usersData[selectedClientIndex].name +
          " " +
          usersData[selectedClientIndex].surname
        }
        options={{
          exportButton: true,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const now = new Date();
                  let month = new Date().getMonth()+1;
                  if(month.toString.length===1) month = "0"+month
                  newData.date = now.getDate() + "/" + month + "/" +  now.getFullYear()
                  console.log(newData)
                  addMeasurement(newData);
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  /* let data = this.state.data;
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
                        this.setState({ data }, () => resolve()); */
                }
                resolve();
              }, 1000);
            }),
        }}
      />
                      <CustomChart data={usersData[selectedClientIndex].measurements}/>

    </DarkContainer>
  );
}

export default ClientDetails;
