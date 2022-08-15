import React, { useState } from "react";

// material ui
import { Container, TextField, Button, Typography } from "@mui/material";

// router
import { useRouter } from "next/router";

const LoginPage = () => {
  // variables
  const router = useRouter();

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // functions
  const login = async () => {
    router.push("/");
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
      }}
    >
      <Typography variant="h4">Login</Typography>
      <Typography variant="h6">Please enter all required details</Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
        label="Enter email password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="error" fullWidth onClick={login}>
        Click to continue
      </Button>
      <Button
        variant="outlined"
        color="success"
        fullWidth
        sx={{ mt: 1 }}
        onClick={() => router.push("/register")}
      >
        Create a new Account
      </Button>
    </Container>
  );
};

export default LoginPage;
