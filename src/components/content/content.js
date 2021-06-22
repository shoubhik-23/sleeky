import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import moment from "moment";
import React from "react";

function Content(props) {
  return (
    <Box style={{}}>
      {props.data.map((el) => (
        <Typography style={{ fontSize: 18, paddingTop: 20 }}>
          You clicked at {el}
        </Typography>
      ))}
    </Box>
  );
}

export default Content;
