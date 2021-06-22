import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Content from "../content/content";
import Footer from "../footer/footer";
import Logo from "../assets/images/logo.png";

function Layout(props) {
  const [timer, setTimer] = useState(new Date());
  const [clickedTimingArray, setClickedTimingArray] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);
  }, []);
  const onClickButtonHandler = () => {
    let temp = [...clickedTimingArray];
    temp.push(moment(new Date()).format("hh:mm:ss"));
    setClickedTimingArray(temp);
  };

  return (
    <Box style={{ height: "100vh", position: "relative" }}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Paper elevation={4}>
              <Grid
                item
                container
                xs={12}
                style={{
                  backgroundColor: "#ccffcc",
                  height: "10vh",
                }}
              >
                <Grid item xs={2}>
                  <Box>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={Logo}
                      alt="logo"
                    ></img>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      marginRight: "2rem",
                    }}
                  >
                    Current Time is : {moment(timer).format("hh:mm:ss")}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid item container xs={12} style={{ height: "80vh" }}>
          <Grid item xs={3} md={1} style={{ backgroundColor: "#ffffb3" }}>
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
                onClick={onClickButtonHandler}
              >
                Click Here
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={9}
            md={11}
            style={{
              display: "flex",

              maxHeight: "80vh",
              paddingLeft: props.width === "xs" ? "20px" : "40px",
              overflowY: "auto",
            }}
          >
            <Content data={clickedTimingArray}></Content>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={12}
          style={{ position: "absolute", bottom: 0, height: "10vh" }}
        >
          <Grid
            item
            xs={3}
            md={1}
            style={{ backgroundColor: "#ffffb3" }}
          ></Grid>
          <Grid
            item
            xs={9}
            md={11}
            style={{
              backgroundColor: "#b3e6ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Footer data={clickedTimingArray.length}></Footer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withWidth()(Layout);
