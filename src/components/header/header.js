import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";

function Header(props) {
  return (
    <Box style={{ marginRight: "2rem" }}>
      <Typography
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Current Time is : {moment(props.timer).format("hh:mm:ss")}
      </Typography>
    </Box>
  );
}

export default Header;
