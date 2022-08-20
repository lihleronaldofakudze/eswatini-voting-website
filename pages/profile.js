import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

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
  const [fullname, setFullname] = useState("");
  const [natid, setNatid] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const natid = localStorage.getItem("currentUser");
    axios.get(`http://localhost:3000/api/voter/${natid}`).then((data) => {
      console.log(data.data[0]);
      const { fullname, surname, age, region, city, natid, email, password } =
        data.data[0];
      setFullname(fullname);
      setNatid(natid);
      setAge(age);
      setRegion(region);
      setCity(city);
      setEmail(email);
      setPassword(password);
    });
  });

  const logout = async () => {
    localStorage.clear();
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
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Surname"
          fullWidth
          type="text"
          margin="normal"
          value={natid}
          onChange={(e) => setNatid(e.target.value)}
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
        <TextField
          variant="standard"
          label="Email"
          fullWidth
          type="text"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

// export const getStaticProps = async () => {
//   const natid = window.localStorage.getItem("currentUser");
//   const getCandidate = await fetch(`http://localhost:3000/api/voter/${natid}`);
//   const candidate = await getCandidate.json();

//   return {
//     props: {
//       candidate,
//     },
//   };
// };
