export default function Accordion(theme) {
  return {
    MuiAccordion: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          // boxShadow: theme.shadows[16],
          borderRadius: "4px",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          padding: theme.spacing(1.5, 1),
          border: "1px solid #e3e3e3",
        },
      },
    },
  };
}
