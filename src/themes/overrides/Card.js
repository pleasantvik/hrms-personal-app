export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[16],
          borderRadius: "4px",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
        title: {},
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
