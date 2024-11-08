import {
  ThemeProvider_default,
  createCssVarsProvider,
  createTheme,
  createTypography,
  identifier_default,
  red_default,
  styleFunctionSx_default
} from "/build/_shared/chunk-77RBFIQX.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  createHotContext
} from "/build/_shared/chunk-IR7O5KDZ.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@mui/material/styles/ThemeProvider.js
var React4 = __toESM(require_react());

// node_modules/@mui/material/styles/ThemeProviderNoVars.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
function ThemeProviderNoVars({
  theme: themeInput,
  ...props
}) {
  const scopedTheme = identifier_default in themeInput ? themeInput[identifier_default] : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider_default, {
    ...props,
    themeId: scopedTheme ? identifier_default : void 0,
    theme: scopedTheme || themeInput
  });
}

// node_modules/@mui/material/styles/ThemeProviderWithVars.js
var React3 = __toESM(require_react());

// node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var defaultConfig = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};

// node_modules/@mui/material/styles/ThemeProviderWithVars.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
"use client";
var {
  CssVarsProvider: InternalCssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: (theme2) => {
    const newTheme = {
      ...theme2,
      typography: createTypography(theme2.palette, theme2.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});
var CssVarsProvider = InternalCssVarsProvider;

// node_modules/@mui/material/styles/ThemeProvider.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
"use client";
function ThemeProvider({
  theme: theme2,
  ...props
}) {
  if (typeof theme2 === "function") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeProviderNoVars, {
      theme: theme2,
      ...props
    });
  }
  const muiTheme = identifier_default in theme2 ? theme2[identifier_default] : theme2;
  if (!("colorSchemes" in muiTheme)) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeProviderNoVars, {
      theme: theme2,
      ...props
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CssVarsProvider, {
    theme: theme2,
    ...props
  });
}

// app/src/ClientStyleContext.tsx
var React5 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ClientStyleContext.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
var ClientStyleContext_default = React5.createContext({
  reset: () => {
  }
});

// app/src/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/theme.ts"
  );
  import.meta.hot.lastModified = "1731066388000";
}
var theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

export {
  ThemeProvider,
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-5MNOWTVB.js.map
