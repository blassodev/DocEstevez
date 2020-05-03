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
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Snackbar,
  FormLabel,
  createStyles,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CloseIcon from "@material-ui/icons/Close";
import spanishTable from "../../lang/material-table/spanish.json";
import * as SC from "./style";
import { useClient } from "../../hooks/useClient";
import { useHistory } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MuiAlert from "@material-ui/lab/Alert";
import { LightContainer } from "../../styles/LightContainer";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    table: {
      padding: "24px",
    },
  })
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ClientManager(props) {
  const history = useHistory();
  const now = new Date();
  let month = new Date().getMonth() + 1;
  if (month.toString.length === 1) month = "0" + month;
  const { setUsersData, usersData } = useClient();
  const [createOpen, setCreateOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [createError, setCreateError] = useState({
    open: false,
    message: "",
  });
  const [createClient, setCreateClient] = useState({
    name: "",
    surname: "",
    dni: "",
    age: 0,
    gender: "",
    height: 0,
  });

  function deleteClient(client) {
    setUsersData((prevUserData) => {
      return prevUserData.filter(
        (_, idx) => idx !== prevUserData.indexOf(client)
      );
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
    switch (props.match.params.option) {
      case "add":
        setCreateOpen(true);
        break;
      default:
        break;
    }
  }, [props.match.params.option]);
  const handleSnackClose = () => {
    setSnackOpen(false);
  };
  const handleSnackOpen = () => {
    setSnackOpen(true);
  };
  const handleCreateOpen = () => {
    setCreateOpen(true);
  };
  const handleCreateClose = () => {
    setCreateOpen(false);
  };
  const handleChange = (event) => {
    setCreateClient({
      ...createClient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (createClient.name.length < 4) {
      setCreateError({
        error: true,
        message: "El nombre debe tener 4 caracteres como minimo",
      });
    } else if (createClient.surname.length < 4) {
      setCreateError({
        error: true,
        message: "El apellido debe tener 4 caracteres como minimo",
      });
    } else if (!/^[0-9]{8,8}[A-Za-z]$/.test(createClient.dni)) {
      setCreateError({
        error: true,
        message: "El dni no tiene el formato correcto",
      });
    } else if (!/[1-9]/.test(createClient.age)) {
      setCreateError({
        error: true,
        message: "La edad tiene que ser un numero",
      });
    } else if (!/[1-9]/.test(createClient.height)) {
      setCreateError({
        error: true,
        message: "La altura tiene que ser un numero",
      });
    } else if (
      createClient.gender !== "Hombre" &&
      createClient.gender !== "Mujer"
    ) {
      setCreateError({
        error: true,
        message: "El genero tiene que ser un Hombre o Mujer",
      });
    } else {
      setCreateError({
        error: false,
        message: "",
      });
      setUsersData((prevUserData) => {
        return [...prevUserData, createClient];
      });
      handleSnackOpen();
      handleCreateClose();
    }
  };
  const classes = useStyles();
  return (
    <div>
      <LightContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => history.push("/")}
          style={{ alignSelf: "flex-start", margin: "5px" }}
        >
          <ArrowBackRoundedIcon />
        </IconButton>
        <MaterialTable
          style={{ width: "80vw" }}
          localization={spanishTable}
          columns={columns}
          data={usersData}
          title="Clientes"
          options={{
            exportButton: true,
          }}
          actions={[
            {
              icon: () => <AddBoxIcon />,
              position: "toolbar",
              tooltip: "Añadir cliente",
              onClick: handleCreateOpen,
            },
          ]}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  deleteClient(oldData);

                  resolve();
                }, 500);
              }),
          }}
          onRowClick={(event, rowData, togglePanel) => {
            history.push(`/ClientDetails/${rowData.dni}`);
          }}
        />
      </LightContainer>
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
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              guardar
            </Button>
          </Toolbar>
        </AppBar>
        <SC.DialogForm onSubmit={(e) => handleSubmit(e)}>
          <Alert
            severity="error"
            style={{ display: createError.error ? "inherit" : "none" }}
          >
            {createError.message}
          </Alert>
          <TextField
            label="Nombre"
            name="name"
            onChange={(e) => handleChange(e)}
            value={createClient["name"]}
          />
          <TextField
            label="Apellidos"
            name="surname"
            onChange={(e) => handleChange(e)}
            value={createClient["surname"]}
          />
          <TextField
            label="DNI"
            name="dni"
            onChange={(e) => handleChange(e)}
            value={createClient["dni"]}
          />
          <TextField
            label="Edad"
            name="age"
            onChange={(e) => handleChange(e)}
            type="number"
            value={createClient["age"]}
          />
          <TextField
            label="Altura"
            onChange={(e) => handleChange(e)}
            type="number"
            name="height"
            value={createClient["height"]}
          />
          <FormLabel
            component="legend"
            onChange={(e) => handleChange(e)}
            style={{ marginTop: "10px" }}
          >
            Sexo
          </FormLabel>
          <RadioGroup
            row
            name="gender"
            onChange={(e) => handleChange(e)}
            value={createClient["gender"]}
          >
            <FormControlLabel
              value="Hombre"
              control={<Radio color="primary" />}
              label="Hombre"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Mujer"
              control={<Radio color="primary" />}
              label="Mujer"
              labelPlacement="start"
            />
          </RadioGroup>
        </SC.DialogForm>
      </Dialog>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleSnackClose} severity="success">
          Usuario creado
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ClientManager;
