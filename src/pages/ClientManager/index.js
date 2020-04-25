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
  Slide,
  createStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
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
        break;
      default:
        break;
    }
  }, [props.match.params.option]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  function handleCreateOpen() {
    setCreateOpen(true);
  }
  function handleCreateClose() {
    setCreateOpen(false);
  }
  const classes = useStyles();
  return (
    <div>
    <DarkContainer>
      <MaterialTable
        localization={spanishTable}
        columns={columns}
        data={userData}
        title="Clientes"
      />
            <Button onClick={handleCreateOpen}>
        Añadir user
      </Button>
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
              Añadir ejercicio
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
