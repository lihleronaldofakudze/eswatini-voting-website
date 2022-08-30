import React, { useEffect, useState } from "react";
import axios from "axios";

// material ui
import {
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

const VotingCardComponent = ({ image, name, position }) => {
  // state
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const natid = localStorage.getItem("currentUser");
    axios.get(`http://localhost:3000/api/voter/${natid}`).then((data) => {
      console.log(data.data[0]);
      const { voted } = data.data[0];
      setVoted(voted);
    });
  });

  const addVote = async () => {
    let natid = localStorage.getItem("currentUser");
    await axios
      .post("http://localhost:3000/api/votings/voting", {
        candidates_id: position,
        voter_id: natid,
        voted_for: name,
      })
      .then(async (_) => {
        axios.patch(`http://localhost:3000/api/voter/${natid}`).then((_) => {
          window.location.reload();
        });
      });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={`Eswatini Vote For ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={addVote}
          disabled={voted}
        >
          {`Vote ${name}`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VotingCardComponent;
