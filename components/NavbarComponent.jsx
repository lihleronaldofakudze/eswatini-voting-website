import React from "react";

// material ui
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";

const NavbarComponent = () => {
  // variables
  const router = useRouter();

  return (
    <AppBar position="relative" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => router.push("/")}
          sx={{
            cursor: "pointer",
          }}
        >
          Eswatini Online Voting
        </Typography>
        <Box>
          <Button
            variant="text"
            color="inherit"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => router.push("/polls")}
          >
            Polls
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => router.push("/about")}
          >
            About
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => router.push("/profile")}
          >
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
