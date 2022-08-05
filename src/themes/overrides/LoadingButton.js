const LoadingButton = (theme) => {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  };
};

export default LoadingButton;
