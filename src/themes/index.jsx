import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import jssPreset from "@mui/styles/jssPreset";
import StylesProvider from "@mui/styles/StylesProvider";
import { ToastContainer } from "react-toastify";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { create } from "jss";
import jssPluginSyntaxExtend from "jss-plugin-extend";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import breakpoints from "./breakpoints";
import shape from "./shape";
import typography from "./typography";
import ComponentsOverrides from "./overrides";
import GlobalStyles from "./globalStyles";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginSyntaxExtend()],
});

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shadows,
      breakpoints,
      shape,
      typography,
      customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StylesProvider jss={jss}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
            <ToastContainer position="top-right" />
          </ThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </LocalizationProvider>
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeConfig;
