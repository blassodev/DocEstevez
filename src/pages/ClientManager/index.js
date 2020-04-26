import React, { useEffect, useState } from "react";
import { DarkContainer } from "../../styles/DarkContainer";
import MaterialTable from "material-table";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  createStyles,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CloseIcon from "@material-ui/icons/Close";
import spanishTable from "../../lang/material-table/spanish.json";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ClientManager(props) {
  const [userData, setUserData] = useState([
    {
      name: "Blas",
      surname: "Santome",
      dni: "54229366G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [
        {
          date: "25/04/2020",
          weight: 74,
          physicalActivity: "active",
        },
      ],
    },
    {
      name: "Antonio",
      surname: "Santome",
      dni: "54229266G",
      age: 18,
      gender: "Hombre",
      height: 1.8,
      measurements: [
        {
          date: "25/04/2020",
          weight: 74,
          physicalActivity: "active",
        },
      ],
    },
  ]);
  const [createOpen, setCreateOpen] = useState(false);
  function addMeasurement(userDni, newMeasurement) {
    // We call dispatch function for userData state
    setUserData((prevUserData) => {
      const updatedUserData = prevUserData.map((user) => {
        if (user.dni === userDni) {
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
  function addClient(newClient) {
    setUserData((prevUserData) => {
      return [...prevUserData, newClient];
    });
  }
  function deleteClient(client) {
    setUserData((prevUserData) => {
      prevUserData.splice(prevUserData.indexOf(client));
      return prevUserData;
    });
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
    const newClient = {
      name: "Diego",
      surname: "Davila",
      dni: "12345678B",
      age: 45,
      gender: "Indefinido",
      height: 1.5,
      measurements: [
        {
          date: "32/02/2020",
          weight: 120,
          physicalActivity: "nadena",
        },
      ],
    };
    const newMeasurement = {
      date: "algo",
      weight: 45,
      physicalActivity: "mucha",
    };
    addMeasurement("54229266G", newMeasurement);
    addClient(newClient);

    switch (props.match.params.option) {
      case "add":
        setCreateOpen(true);
        break;
      default:
        break;
    }
  }, [props.match.params.option]);

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };
  const handleCreateClose = () => {
    setCreateOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <DarkContainer>
        <MaterialTable
          localization={spanishTable}
          columns={columns}
          data={userData}
          title="Clientes"
          options={{
            exportButton: true,
          }}
          actions={[
            {
              icon: () => <AddBoxIcon />,
              position: "toolbar",
              tooltip: "Crear ejercicio",
              onClick: handleCreateOpen,
            },
          ]}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  deleteClient(oldData);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </DarkContainer>
      <Dialog
        fullScreen
        open={createOpen}
        onClose={handleCreateClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCreateClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Añadir Cliente
            </Typography>
            <Button autoFocus color="inherit">
              guardar
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}

export default ClientManager;
