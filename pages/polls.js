import React, { useState } from "react";

// material ui
import { Container, TextField, Button, Typography, Stack } from "@mui/material";

// components
import NavbarComponent from "../components/NavbarComponent";

const PollsPage = ({ polls }) => {
  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="md"
        sx={{
          mt: 10,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Polls</Typography>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Voter Id</th>
              <th>Voted For</th>
            </tr>
          </thead>
          <tbody>
            {polls?.map((poll) => (
              <tr>
                <td>{poll.candidates_id}</td>
                <td>{poll.voter_id}</td>
                <td>{poll.voted_for}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default PollsPage;

export const getStaticProps = async () => {
  const getPolls = await fetch("http://localhost:3000/api/votings/voting");
  const polls = await getPolls.json();

  return {
    props: {
      polls,
    },
  };
};
