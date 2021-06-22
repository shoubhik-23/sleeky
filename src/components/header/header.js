import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { style } from "../../components/style";

function Header(props) {
  const classes = style();

  return (
    <Box marginRight="2rem">
      <Typography className={classes.font20}>
        Current Time is : {moment(props.timer).format("hh:mm:ss")}
      </Typography>
    </Box>
  );
}

export default Header;
