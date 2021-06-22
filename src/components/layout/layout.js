import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Content from "../content/content";
import Footer from "../footer/footer";
import Logo from "../assets/images/logo.png";
import Header from "../header/header";
import { style } from "../../components/style";
import Sidebar from "../sidebar/sidebar";
import clsx from "clsx";

function Layout(props) {
  const classes = style();
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
    <Box className={classes.main}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Paper elevation={5}>
              <Grid item container xs={12} className={classes.paper}>
                <Grid item xs={3} md={1} className={classes.justify}>
                  <Box className={classes.imageBox}>
                    <img className={classes.image} src={Logo} alt="logo"></img>
                  </Box>
                </Grid>
                <Grid item xs={9} md={11} className={classes.justEnd}>
                  <Header timer={timer}></Header>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid item container xs={12} style={{ height: "80vh" }}>
          <Grid item xs={3} md={1} className={classes.sidebar}>
            <Sidebar onClickButtonHandler={onClickButtonHandler}></Sidebar>
          </Grid>

          <Grid
            item
            xs={9}
            md={11}
            style={{ paddingLeft: props.width === "xs" ? "20px" : "40px" }}
            className={classes.content}
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
          <Grid item xs={9} md={11} className={classes.footer}>
            <Footer data={clickedTimingArray.length}></Footer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withWidth()(Layout);
