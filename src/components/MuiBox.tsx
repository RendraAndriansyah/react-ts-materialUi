import { Box } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    <>
      <Box
        component={"div"}
        sx={{
          backgroundColor: "primary.main",
          display: "grid",
          color: "whitesmoke",
          width: "15rem",
          height: "15rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Rendra
      </Box>
      <Box
        display={"flex"}
        bgcolor="crimson"
        color={"antiquewhite"}
        width="15rem"
        height={"15rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Andriansyah
      </Box>
    </>
  );
};

export default MuiBox;
