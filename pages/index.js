import React from "react";
import Seo from "../components/Seo";

// components
import NavbarComponent from "../components/NavbarComponent";
import VotingCardComponent from "../components/VotingCardComponent";
import { Container, Grid, Typography } from "@mui/material";

const index = () => {
  return (
    <div>
      <Seo title={"Eswatini Blockchain Voting"} />
      <NavbarComponent />
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          mt: 5,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={4} xs={12}>
            <VotingCardComponent
              image={""}
              name={""}
              id={1}
              votes={0}
              disabled={false}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="body1">One Vote For One Candidate</Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <VotingCardComponent
              image={""}
              name={""}
              id={1}
              votes={0}
              disabled={false}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default index;
