import React, { useState } from "react";

// material ui
import { Container, TextField, Button, Typography } from "@mui/material";

// components
import NavbarComponent from "../components/NavbarComponent";

const ContactPage = () => {
  // state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // functions
  const login = async () => {
    if (email.length !== 0 && message.length !== 0) {
      window.alert("Email sent");
      setEmail("");
      setMessage("");
    } else {
      window.alert("Please enter required details");
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="xs"
        sx={{
          mt: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Send Us A Message Now</Typography>
        <Typography variant="h6">Please enter your message below</Typography>
        <TextField
          variant="outlined"
          fullWidth
          type="password"
          margin="normal"
          label="Enter message"
          value={message}
          multiline
          maxRows={4}
          minRows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="error" fullWidth onClick={login}>
          Send email
        </Button>
      </Container>
    </>
  );
};

export default ContactPage;
