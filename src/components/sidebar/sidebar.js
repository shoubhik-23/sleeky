import React from "react";
import { Box, Button } from "@material-ui/core";

function Sidebar(props) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 80,
      }}
    >
      <Button
        color="primary"
        variant="contained"
        onClick={props.onClickButtonHandler}
      >
        Click Here
      </Button>
    </Box>
  );
}

export default Sidebar;
