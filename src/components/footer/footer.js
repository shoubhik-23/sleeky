import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { style } from "../../components/style";

function Footer(props) {
  const classes = style();

  return (
    <Box className={classes.justify}>
      <Typography className={classes.font20}>
        You clicked {props.data} times.
      </Typography>
    </Box>
  );
}

export default Footer;
