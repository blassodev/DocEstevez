import React, { useEffect } from "react";
import { DarkContainer } from "../../styles/DarkContainer";
import MaterialTable from "material-table";
import spanishTable from "../../lang/material-table/spanish.json";
import { useHistory } from "react-router-dom";
import { useClient } from "../../hooks/useClient";
import CustomChart from "../../components/CustomChart";
import { IconButton } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

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
  function addMeasurementWNM(newMeasurement) {
    // We call dispatch function for userData state
    setUsersData((prevUserData) => {
      const updatedUserData = prevUserData.map((user) => {
        if (user.dni === props.match.params.dni) {
          return {
            ...user,
            measurements: [
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
  useEffect(() => {
    const measurements = usersData[selectedClientIndex].measurements.map(
      (measurement) => {
        const imc = Math.round(
          measurement.weight *
            Math.pow(usersData[selectedClientIndex].height, 2),
          2
        );
        let tmb = 0;
        if (usersData[selectedClientIndex].gender === "Hombre") {
          tmb = Math.round(
            66 +
              13.17 * measurement.weight +
              5 * (5 * usersData[selectedClientIndex].height) -
              6.75 * usersData[selectedClientIndex].age,
            2
          );
        } else {
          tmb = Math.round(
            655 +
              9.6 * measurement.weight +
              1.8 * usersData[selectedClientIndex].height +
              4.7 * usersData[selectedClientIndex].age,
            2
          );
        }
        return {
          ...measurement,
          imc: imc,
          tmb: tmb,
        };
      }
    );
    setUsersData((prevUserData) => {
      const updatedUserData = prevUserData.map((user) => {
        if (user.dni === props.match.params.dni) {
          return {
            ...user,
            measurements: measurements,
          };
        }
        return user;
      });
      return updatedUserData;
    });
  }, [props.match.params.dni, setUsersData, selectedClientIndex]);

  const columns = [
    { title: "Fecha", field: "date", editable: "never" },
    { title: "Peso", field: "weight" },
    { title: "IMC", field: "imc" },
    { title: "TMB", field: "tmb" },
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
  if (!usersData[selectedClientIndex].measurements) {
    return (
      <DarkContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => history.push("/ClientManager")}
          style={{ alignSelf: "flex-start", margin: "5px" }}
        >
          <ArrowBackRoundedIcon />
        </IconButton>
        <MaterialTable
          localization={spanishTable}
          columns={columns}
          data={[]}
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
                    let month = new Date().getMonth() + 1;
                    if (month.toString.length === 1) month = "0" + month;
                    newData.date =
                      now.getDate() + "/" + month + "/" + now.getFullYear();
                    console.log(newData);
                    addMeasurementWNM(newData);
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 1000);
              }),
          }}
        />
      </DarkContainer>
    );
  }
  return (
    <DarkContainer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={() => history.push("/ClientManager")}
        style={{ alignSelf: "flex-start", margin: "5px" }}
      >
        <ArrowBackRoundedIcon />
      </IconButton>
      <MaterialTable
        style={{ width: "80vw" }}
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
                  let month = new Date().getMonth() + 1;
                  if (month.toString.length === 1) month = "0" + month;
                  newData.date =
                    now.getDate() + "/" + month + "/" + now.getFullYear();
                  addMeasurement(newData);
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            }),
        }}
      />

      <CustomChart
        data={usersData ? usersData[selectedClientIndex].measurements : []}
      />
    </DarkContainer>
  );
}

export default ClientDetails;
