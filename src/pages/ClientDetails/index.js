import React, { useEffect, useState } from "react";
import { DarkContainer } from "../../styles/DarkContainer";
import { LightContainer } from "../../styles/LightContainer";
import MaterialTable from "material-table";
import spanishTable from "../../lang/material-table/spanish.json";
import { useHistory } from "react-router-dom";
import { useClient } from "../../hooks/useClient";
import CustomChart from "../../components/CustomChart";
import { IconButton, Dialog, DialogTitle, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import IMCTable from "../../components/IMCTable";
import BorderAllRoundedIcon from "@material-ui/icons/BorderAllRounded";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function ClientDetails(props) {
  const history = useHistory();
  const { setUsersData, usersData } = useClient();
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteMeasurement = (oldMeasurement) => {
    const measurements = usersData[selectedClientIndex].measurements.filter(
      (_, idx) =>
        idx !==
        usersData[selectedClientIndex].measurements.indexOf(oldMeasurement)
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
  };
  const addMeasurement = (newMeasurement) => {
    // We call dispatch function for userData state
    setUsersData((prevUserData) => {
      const updatedUserData = prevUserData.map((user) => {
        if (user.dni === props.match.params.dni) {
          return {
            ...user,
            measurements: [
              ...user.measurements,
              {
                ...newMeasurement,
              },
            ],
          };
        }

        return user;
      });
      return updatedUserData;
    });
  };
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
  const completeMeasurements = (weight, physicalActivity) => {
    if (!weight || !physicalActivity) {
      const measurements = usersData[selectedClientIndex].measurements.map(
        (measurement) => {
          const imc =
            Math.round(
              (measurement.weight /
                Math.pow(usersData[selectedClientIndex].height, 2)) *
                100
            ) / 100;
          let tmb = 0;
          if (usersData[selectedClientIndex].gender === "Hombre") {
            tmb =
              Math.round(
                (66 +
                  13.17 * measurement.weight +
                  5 * (5 * usersData[selectedClientIndex].height) -
                  6.75 * usersData[selectedClientIndex].age) *
                  100
              ) / 100;
          } else {
            tmb =
              Math.round(
                (655 +
                  9.6 * measurement.weight +
                  1.8 * usersData[selectedClientIndex].height +
                  4.7 * usersData[selectedClientIndex].age) *
                  100
              ) / 100;
          }
          let kcal = 0;
          switch (measurement.physicalActivity) {
            case "1":
              kcal = Math.round(tmb * 1.2 * 100) / 100;
              break;
            case "2":
              kcal = Math.round(tmb * 1.375 * 100) / 100;
              break;
            case "3":
              kcal = Math.round(tmb * 1.72 * 100) / 100;
              break;
            case "4":
              kcal = Math.round(tmb * 1.375 * 100) / 100;
              break;
            case "5":
              kcal = Math.round(tmb * 1.9 * 100) / 100;
              break;
            default:
              break;
          }
          let bodyType = 0;

          if (
            usersData[selectedClientIndex].age <= 65 &&
            usersData[selectedClientIndex].age >= 20
          ) {
            if (imc <= 16) {
              bodyType = 7;
            } else if (imc >= 16 && imc <= 16.99) {
              bodyType = 8;
            } else if (imc >= 17 && imc <= 18.49) {
              bodyType = 9;
            } else if (imc >= 18.5 && imc <= 24.99) {
              bodyType = 10;
            } else if (imc >= 25 && imc <= 29.99) {
              bodyType = 11;
            } else if (imc >= 30 && imc <= 34.99) {
              bodyType = 12;
            } else if (imc >= 35 && imc <= 39.99) {
              bodyType = 13;
            } else if (imc >= 40) {
              bodyType = 14;
            }
          } else if (usersData[selectedClientIndex].age > 65) {
            if (usersData[selectedClientIndex].gender === "Mujer") {
              if (imc <= 21.9) {
                bodyType = 1;
              } else if (imc >= 22 && imc <= 27) {
                bodyType = 2;
              } else if (imc >= 27.1 && imc <= 32) {
                bodyType = 3;
              } else if (imc >= 32.1 && imc <= 37) {
                bodyType = 4;
              } else if (imc >= 37.1 && imc <= 41.9) {
                bodyType = 5;
              } else if (imc >= 42) {
                bodyType = 6;
              }
            } else {
              if (imc <= 21.9) {
                bodyType = 1;
              } else if (imc >= 22 && imc <= 27) {
                bodyType = 2;
              } else if (imc >= 27.1 && imc <= 30) {
                bodyType = 3;
              } else if (imc >= 30.1 && imc <= 35) {
                bodyType = 4;
              } else if (imc >= 35.1 && imc <= 39.9) {
                bodyType = 5;
              } else if (imc >= 40) {
                bodyType = 6;
              }
            }
          }
          return {
            ...measurement,
            imc: imc,
            tmb: tmb,
            kcal: kcal,
            bodyType: bodyType,
          };
        }
      );
      return measurements;
    } else {
      const imc =
        Math.round(
          (weight / Math.pow(usersData[selectedClientIndex].height, 2)) * 100
        ) / 100;
      let tmb = 0;
      if (usersData[selectedClientIndex].gender === "Hombre") {
        tmb =
          Math.round(
            (66 +
              13.17 * +5 * (5 * usersData[selectedClientIndex].height) -
              6.75 * usersData[selectedClientIndex].age) *
              100
          ) / 100;
      } else {
        tmb =
          Math.round(
            (655 +
              9.6 * weight +
              1.8 * usersData[selectedClientIndex].height +
              4.7 * usersData[selectedClientIndex].age) *
              100
          ) / 100;
      }
      let kcal = 0;
      switch (physicalActivity) {
        case "1":
          kcal = Math.round(tmb * 1.2 * 100) / 100;
          break;
        case "2":
          kcal = Math.round(tmb * 1.375 * 100) / 100;
          break;
        case "3":
          kcal = Math.round(tmb * 1.72 * 100) / 100;
          break;
        case "4":
          kcal = Math.round(tmb * 1.375 * 100) / 100;
          break;
        case "5":
          kcal = Math.round(tmb * 1.9 * 100) / 100;
          break;
        default:
          break;
      }
      let bodyType = 0;

      if (
        usersData[selectedClientIndex].age <= 65 &&
        usersData[selectedClientIndex].age >= 20
      ) {
        if (imc <= 16) {
          bodyType = 7;
        } else if (imc >= 16 && imc <= 16.99) {
          bodyType = 8;
        } else if (imc >= 17 && imc <= 18.49) {
          bodyType = 9;
        } else if (imc >= 18.5 && imc <= 24.99) {
          bodyType = 10;
        } else if (imc >= 25 && imc <= 29.99) {
          bodyType = 11;
        } else if (imc >= 30 && imc <= 34.99) {
          bodyType = 12;
        } else if (imc >= 35 && imc <= 39.99) {
          bodyType = 13;
        } else if (imc >= 40) {
          bodyType = 14;
        }
      } else if (usersData[selectedClientIndex].age > 65) {
        if (usersData[selectedClientIndex].gender === "Mujer") {
          if (imc <= 21.9) {
            bodyType = 1;
          } else if (imc >= 22 && imc <= 27) {
            bodyType = 2;
          } else if (imc >= 27.1 && imc <= 32) {
            bodyType = 3;
          } else if (imc >= 32.1 && imc <= 37) {
            bodyType = 4;
          } else if (imc >= 37.1 && imc <= 41.9) {
            bodyType = 5;
          } else if (imc >= 42) {
            bodyType = 6;
          }
        } else {
          if (imc <= 21.9) {
            bodyType = 1;
          } else if (imc >= 22 && imc <= 27) {
            bodyType = 2;
          } else if (imc >= 27.1 && imc <= 30) {
            bodyType = 3;
          } else if (imc >= 30.1 && imc <= 35) {
            bodyType = 4;
          } else if (imc >= 35.1 && imc <= 39.9) {
            bodyType = 5;
          } else if (imc >= 40) {
            bodyType = 6;
          }
        }
      }
      const measurement = {
        imc: imc,
        tmb: tmb,
        kcal: kcal,
        bodyType: bodyType,
      };
      return measurement;
    }
  };
  useEffect(() => {
    if (usersData[selectedClientIndex].measurements) {
      const measurements = completeMeasurements();
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
    }
  }, []);

  const columns = [
    { title: "Fecha", field: "date", editable: "never" },
    { title: "Peso", field: "weight" },
    { title: "IMC", field: "imc", editable: "never" },
    { title: "TMB", field: "tmb", editable: "never" },
    { title: "Calorias", field: "kcal", editable: "never" },
    {
      title: "Interpretación",
      field: "bodyType",
      editable: "never",
      lookup: {
        0: "Menor de 20",
        1: "Bajo peso",
        2: "Normopeso",
        3: "Sobrepeso",
        4: "Obesidad I",
        5: "Obesidad II",
        6: "Obesidad III",
        7: "Bajo peso muy grave",
        8: "Bajo peso grave",
        9: "Bajo peso",
        10: "Normopeso",
        11: "Sobrepeso",
        12: "Obesidad I",
        13: "Obesidad II",
        14: "Obesidad III",
      },
    },
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
      <LightContainer
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
          style={{ width: "80vw" }}
          columns={columns}
          data={[]}
          title={
            usersData[selectedClientIndex].name +
            " " +
            usersData[selectedClientIndex].surname
          }
          actions={[
            {
              icon: () => <BorderAllRoundedIcon />,
              position: "toolbar",
              tooltip: "Mostrar tabla IMC",
              onClick: handleOpen,
            },
          ]}
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
                    newData = [
                      ...newData,
                      completeMeasurements(
                        newData.weight,
                        newData.physicalActivity
                      ),
                    ];
                    addMeasurementWNM(newData);
                  }
                  resolve();
                }, 1000);
              }),
          }}
        />
        <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
          <DialogTitle id="simple-dialog-title">
            Tabla de relación de IMC
          </DialogTitle>
          <IMCTable />
        </Dialog>
      </LightContainer>
    );
  }
  return (
    <LightContainer
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
        actions={[
          {
            icon: () => <BorderAllRoundedIcon />,
            position: "toolbar",
            tooltip: "Mostrar tabla IMC",
            onClick: handleOpen,
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                
                  if(newData.weight && newData.physicalActivity){
                    const now = new Date();
                    let month = new Date().getMonth() + 1;
                    if (month.toString.length === 1) month = "0" + month;
                    newData.date =
                      now.getDate() + "/" + month + "/" + now.getFullYear();
                    const calculatedNewData = completeMeasurements(
                      newData.weight,
                      newData.physicalActivity
                    );
                    addMeasurement({ ...newData, ...calculatedNewData });
                  }else{
                    setErrorOpen(true);
                    reject();
                  }
                  
                
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
              

                  deleteMeasurement(oldData)
                
                resolve();
              }, 1000);
            }),
        }}
      />

      <CustomChart
        data={usersData ? usersData[selectedClientIndex].measurements : []}
      />
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
         {" "}
        <DialogTitle id="simple-dialog-title">
          Tabla de relación de IMC
        </DialogTitle>
        <IMCTable />
      </Dialog>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={()=>setErrorOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={()=>setErrorOpen(false)} severity="error">
          Debes cubrir todos los campos
        </Alert>
      </Snackbar>
    </LightContainer>
  );
}

export default ClientDetails;
