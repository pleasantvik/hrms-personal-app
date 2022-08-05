import { pxToRem } from "utils/formatFont";

export default function Button(theme) {
  return {
    MuiButton: {
      defaultProps: {
        size: "medium",
        variant: "contained",
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 40,
          fontSize: pxToRem(14),
          lineHeight: "18px",
          padding: theme.spacing(1, 2),
        },
        sizeMedium: {
          height: 35,
          fontSize: pxToRem(14),
          lineHeight: "15px",
          textTransform: "capitalize",
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
          "&:active": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedInherit: {
          boxShadow: "none",
          backgroundColor: "#DEECF9",
          color: "theme.palette.primary.main",
          "&:hover": {
            backgroundColor: "#EFF6FC",
          },
          "&:active": {
            backgroundColor: "#DEECF9",
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey.A400}`,
          "&:hover": {
            backgroundColor: "theme.palette.action.hover",
          },
        },
        outlined: {
          background: "white !important",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        disabled: {
          background: theme.palette.grey.disabled,
          color: "#A7A9BC",
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        size: "medium",
        variant: "contained",
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 40,
          fontSize: pxToRem(14),
          lineHeight: "18px",
          padding: theme.spacing(1, 2),
        },
        sizeMedium: {
          height: 35,
          fontSize: pxToRem(14),
          lineHeight: "15px",
          textTransform: "capitalize",
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
          "&:active": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedInherit: {
          boxShadow: "none",
          backgroundColor: "#DEECF9",
          color: "theme.palette.primary.main",
          "&:hover": {
            backgroundColor: "#EFF6FC",
          },
          "&:active": {
            backgroundColor: "#DEECF9",
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey.A400}`,
          "&:hover": {
            backgroundColor: "theme.palette.action.hover",
          },
        },
        outlined: {
          background: "white !important",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        disabled: {
          background: theme.palette.grey.disabled,
          color: "#A7A9BC",
        },
        loading: {
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  };
}
