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
    paper: { backgroundColor: "#ccffcc", height: "10vh" },
    imageBox: { width: "80%", height: 50 },
    image: { width: "100%", height: "100%" },
    sidebar: { backgroundColor: "#ffffb3", marginTop: 1 },
    content: {
      display: "flex",

      maxHeight: "80vh",

      overflowY: "auto",
    },
  };
});
