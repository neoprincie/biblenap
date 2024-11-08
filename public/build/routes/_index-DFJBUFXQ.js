import {
  Link_default
} from "/build/_shared/chunk-VBYALH5A.js";
import {
  Typography_default
} from "/build/_shared/chunk-ZGNAKS46.js";
import "/build/_shared/chunk-77RBFIQX.js";
import {
  Link
} from "/build/_shared/chunk-UNWZNB55.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-B43JI2TA.js";
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

// app/routes/_index.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1731066388000";
}
var meta = () => [{
  title: "Remix Starter"
}, {
  name: "description",
  content: "Welcome to remix!"
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(React.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h4", component: "h1", sx: {
      mb: 2
    }, children: "Material UI Remix in TypeScript example" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { to: "/about", color: "secondary", component: Link, children: "Go to the about page" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-DFJBUFXQ.js.map
