import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
// components
import NavbarComponent from "../components/NavbarComponent";
import VotingCardComponent from "../components/VotingCardComponent";
import { Container, Grid, Typography } from "@mui/material";

const index = ({ candidates }) => {
  const router = useRouter();

  useEffect(() => {
    let user = localStorage.getItem("currentUser");

    if (user === null) {
      router.push("/login");
    } else {
      console.log("Current User", user);
    }
  }, []);

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
          {candidates?.map((candidate, index) => (
            <>
              <Grid item md={4} xs={12}>
                <VotingCardComponent
                  image={candidate.candidate_one_image}
                  name={candidate.candidate_one_name}
                  position={candidate.position}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography variant="body2" color="textSecondary">
                  One Vote For One Candidate
                </Typography>
                <Typography variant="h6">{candidate.position}</Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <VotingCardComponent
                  image={candidate.candidate_two_image}
                  name={candidate.candidate_two_name}
                  position={candidate.position}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const getCandidates = await fetch(
    "http://localhost:3000/api/candidates/candidates"
  );
  const candidates = await getCandidates.json();

  return {
    props: {
      candidates,
    },
  };
};
