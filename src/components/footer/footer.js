import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";

function Footer(props) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontSize: 20, fontWeight: 600 }}>
        {" "}
        You clicked {props.data} times
      </Typography>
    </Box>
  );
}

export default Footer;
