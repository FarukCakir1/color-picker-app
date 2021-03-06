import SizeHelpers from "./SizeHelpers"
export default {
    singlePalette : {
      height: "100vh",
      width: "100vw",
    },
    boxes: {
      width: "100%",
      height:" 90%",
    },
    goBackBtn: {
      width: "100%",
      height: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.253)",
      [SizeHelpers.down("md")]: {
        height: "25%"
      },
      [SizeHelpers.down("sm")]: {
        height: "25%"
      }
    }
  }