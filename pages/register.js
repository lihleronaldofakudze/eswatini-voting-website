import React, { useState } from "react";

import axios from "axios";

// material ui
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";

// router
import { useRouter } from "next/router";

const RegisterPage = () => {
  // variables
  const router = useRouter();

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [natid, setNatid] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  // functions
  const register = async () => {
    if (
      email.length !== 0 &&
      password.length !== 0 &&
      fullname.length !== 0 &&
      natid.length !== 0 &&
      age.length !== 0 &&
      region.length !== 0 &&
      city.length !== 0
    ) {
      await axios
        .post("http://localhost:3000/api/voter/voter", {
          natid,
          fullname,
          age,
          region,
          city,
          email,
          password,
        })
        .then((result) => {
          localStorage.setItem("currentUser", natid);
          router.push("/");
        });
    } else {
      window.alert("Please enter required details");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        my: 3,
        py: 3,
      }}
    >
      <Typography variant="h4">Register</Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter national id"
        size="small"
        value={natid}
        type="text"
        onChange={(e) => setNatid(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter full name"
        size="small"
        value={fullname}
        type="text"
        onChange={(e) => setFullname(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter age"
        size="small"
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter region"
        size="small"
        value={region}
        type="region"
        select
        onChange={(e) => setRegion(e.target.value)}
      >
        <MenuItem value="Hhohho">Hhohho</MenuItem>
        <MenuItem value="Manzini">Manzini</MenuItem>
        <MenuItem value="Shiselweni">Shiselweni</MenuItem>
        <MenuItem value="Lubombo">Lubombo</MenuItem>
      </TextField>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter city"
        size="small"
        value={city}
        type="text"
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter email"
        size="small"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
        size="small"
        label="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="error" fullWidth onClick={register}>
        Click to continue
      </Button>
      <Button
        variant="outlined"
        color="success"
        fullWidth
        sx={{ mt: 1 }}
        onClick={() => router.push("/login")}
      >
        I want to login
      </Button>
    </Container>
  );
};

export default RegisterPage;
