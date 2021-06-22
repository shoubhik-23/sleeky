import { makeStyles } from "@material-ui/styles";
export const style = makeStyles((theme) => {
  return {
    justify: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    justEnd: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    footer: {
      backgroundColor: "#b3e6ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    main: { height: "100vh", position: "relative" },
    paper: { backgroundColor: "#ccffcc", height: "100px" },
    imageBox: { width: "80%", height: 50 },
    image: { width: "100%", height: "100%" },
    sidebar: { backgroundColor: "#ffffb3", marginTop: 1 },
    sidebarDiv: { height: "80vh", width: 1000 },
    content: {
      display: "flex",

      maxHeight: "70vh",

      overflowY: "auto",
    },
    bottom: { position: "absolute", bottom: 0, height: "100px" },
    blue: { backgroundColor: "#ffffb3" },
    font20: {
      fontSize: 20,
      fontWeight: 600,
    },
    font18: { fontSize: 18, paddingTop: 20 },
  };
});
