export default function Input(theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        variant: "outlined",
        size: "medium",
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          paddingRight: 5,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[400],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey.A200,
            },
          },
          textAlign: "left",
        },
        input: {
          fontSize: 14,
          lineHeight: 1.5,
        },
      },
    },
  };
}
