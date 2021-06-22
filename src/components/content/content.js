import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { style } from "../../components/style";
import React from "react";

function Content(props) {
  const classes = style();
  return (
    <Box>
      {props.data.map((el) => (
        <Typography className={classes.font18}>You clicked at {el}</Typography>
      ))}
    </Box>
  );
}

export default Content;
