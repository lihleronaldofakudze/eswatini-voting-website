import React from "react";

// material ui
import { Container, Typography } from "@mui/material";

// components
import NavbarComponent from "../components/NavbarComponent";

const AboutPage = () => {
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
        <Typography variant="h4" color="error">
          About Eswatini Online Voting
        </Typography>
        <Typography variant="h6">
          dolor eu dolore consectetur. Reprehenderit proident anim pariatur ad
          proident cupidatat et. Est tempor adipisicing magna pariatur labore In
          ad aliqua exercitation sit dolore aliquip ut est et ea amet eu
          voluptate exercitation. elit anim fugiat.' ' Duis dolor minim ad
          veniam. Reprehenderit dolore commodo do proident
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
