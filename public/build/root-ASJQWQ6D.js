import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-5MNOWTVB.js";
import {
  Link_default
} from "/build/_shared/chunk-VBYALH5A.js";
import "/build/_shared/chunk-K4VCC7TT.js";
import {
  Typography_default,
  capitalize_default,
  memoTheme_default
} from "/build/_shared/chunk-ZGNAKS46.js";
import {
  ClassNameGenerator_default,
  clsx_default,
  composeClasses,
  createBox,
  createContainer,
  createTheme,
  generateUtilityClass,
  generateUtilityClasses,
  identifier_default,
  require_prop_types,
  styled_default,
  useDefaultProps,
  useEnhancedEffect_default,
  withEmotionCache
} from "/build/_shared/chunk-77RBFIQX.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-UNWZNB55.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IR7O5KDZ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var React2 = __toESM(require_react());

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
var useUtilityClasses = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: theme.transitions?.create?.("fill", {
    duration: (theme.vars ?? theme).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (props) => !props.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
      props: {
        color
      },
      style: {
        color: (theme.vars ?? theme).palette?.[color]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (theme.vars ?? theme).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (theme.vars ?? theme).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
})));
var SvgIcon = /* @__PURE__ */ React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;
  const hasSvgAsChild = /* @__PURE__ */ React.isValidElement(children) && children.type === "svg";
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SvgIconRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref,
    ...more,
    ...other,
    ...hasSvgAsChild && children.props,
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  });
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types.default.string
} : void 0;
if (SvgIcon) {
  SvgIcon.muiName = "SvgIcon";
}
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/useEnhancedEffect.js
"use client";
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/utils/index.js
"use client";

// node_modules/@mui/material/Box/Box.js
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/material/Box/boxClasses.js
var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
var boxClasses_default = boxClasses;

// node_modules/@mui/material/Box/Box.js
"use client";
var defaultTheme = createTheme();
var Box = createBox({
  themeId: identifier_default,
  defaultTheme,
  defaultClassName: boxClasses_default.root,
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var Box_default = Box;

// node_modules/@mui/material/Container/Container.js
var import_prop_types3 = __toESM(require_prop_types());
"use client";
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiContainer"
  })
});
true ? Container.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types3.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: import_prop_types3.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types3.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
var Container_default = Container;

// app/src/ProTip.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/ProTip.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ProTip.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
function LightBulbIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgIcon_default, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" }, void 0, false, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = LightBulbIcon;
function ProTip() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { sx: {
    mt: 6,
    mb: 3,
    color: "text.secondary"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon, { sx: {
      mr: 1,
      verticalAlign: "middle"
    } }, void 0, false, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    "Pro tip: See more ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { href: "https://mui.com/material-ui/getting-started/templates/", children: "templates" }, void 0, false, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    " in the Material\xA0UI documentation."
  ] }, void 0, true, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c2 = ProTip;
var _c;
var _c2;
$RefreshReg$(_c, "LightBulbIcon");
$RefreshReg$(_c2, "ProTip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/src/Copyright.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/Copyright.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/Copyright.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
function Copyright() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "body2", align: "center", sx: {
    color: "text.secondary"
  }, children: [
    "Copyright \xA9 ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link_default, { color: "inherit", href: "https://mui.com/", children: "Your Website" }, void 0, false, {
      fileName: "app/src/Copyright.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] }, void 0, true, {
    fileName: "app/src/Copyright.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = Copyright;
var _c3;
$RefreshReg$(_c3, "Copyright");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/src/Layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/Layout.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { maxWidth: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { sx: {
    my: 4
  }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProTip, {}, void 0, false, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Copyright, {}, void 0, false, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c4 = Layout;
var _c4;
$RefreshReg$(_c4, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
var Document = _s(withEmotionCache(_c5 = _s(({
  children,
  title
}, emotionCache) => {
  _s();
  const clientStyleData = React2.useContext(ClientStyleContext_default);
  useEnhancedEffect_default2(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "theme-color", content: theme_default.palette.primary.main }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "emotion-insertion-point", content: "emotion-insertion-point" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}, "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default2];
})), "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default2];
});
_c22 = Document;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c32 = App;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 100,
          columnNumber: 19
        }, this);
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      message
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 12
    }, this);
  }
  if (error instanceof Error) {
    console.error(error);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "There was an error" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.message }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c42 = ErrorBoundary;
var _c5;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c5, "Document$withEmotionCache");
$RefreshReg$(_c22, "Document");
$RefreshReg$(_c32, "App");
$RefreshReg$(_c42, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default
};
//# sourceMappingURL=/build/root-ASJQWQ6D.js.map
