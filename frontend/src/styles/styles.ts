const headerStyles = {
  appbar: {
    //backgroundColor: "transparent",
    position: "static", //position is static, not affected by scrolling
    boxShadow: "none",  //no shadow
  },
  toolbar: {
    display: "flex",  //display uses flexbox layout, how children are controlled
  }
};

const logoStyles = {
  div : {
    display: "flex",
    marginRight: "auto",
    alignItems: "center",
    gap: "8px",
  }
}

export { headerStyles, logoStyles };