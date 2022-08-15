import React from "react";

// material ui
import {
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

const VotingCardComponent = ({ image, name, id, votes, disabled }) => {
  // variables
  const addVote = async () => {};
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
          disabled={disabled}
        >
          {`Vote ${name}`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VotingCardComponent;
