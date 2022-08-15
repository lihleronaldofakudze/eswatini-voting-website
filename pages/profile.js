import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// material ui
import {
  Container,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";

// components
import NavbarComponent from "../components/NavbarComponent";

const ProfilePage = () => {
  const router = useRouter();

  // state
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const logout = async () => {
    router.push("/login");
  };

  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">My Profile</Typography>
        <Avatar
          sx={{
            width: 100,
            height: 100,
          }}
        />
        <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
          Change Profile Picture
        </Button>
        <TextField
          variant="standard"
          label="Name"
          fullWidth
          type="text"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Surname"
          fullWidth
          type="text"
          margin="normal"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Age"
          fullWidth
          type="number"
          margin="normal"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Region"
          fullWidth
          type="text"
          margin="normal"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Near City"
          fullWidth
          type="text"
          margin="normal"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="error" fullWidth>
          Save New Changes
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{ mt: 5 }}
          fullWidth
          onClick={logout}
        >
          I want to exit this voting website.
        </Button>
      </Container>
    </>
  );
};

export default ProfilePage;
