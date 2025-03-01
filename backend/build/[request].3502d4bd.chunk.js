(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[6750],{

/***/ 1099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DeploymentsEmptyState)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(32064);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.js
var EmptyPermissions = __webpack_require__(65169);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(51277);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/EmotionUnhappy.js

function i(e) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-5-5h2a3 3 0 016 0h2a5 5 0 10-10 0zm1-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
      fill: "#212134"
    })
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.js
var ArrowRight = __webpack_require__(37323);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useFormattedMessage.js
var useFormattedMessage = __webpack_require__(1041);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeploymentsEmptyState/index.js









const wrapIcon = (icon) => /* @__PURE__ */ react.createElement("div", { style: { fontSize: "6rem" } }, icon);
const getIcon = (listDeployAvailability) => {
  switch (listDeployAvailability) {
    case "MISSING_CONFIG_OBJECT":
      return wrapIcon(/* @__PURE__ */ react.createElement(ExclamationMarkCircle["default"], null));
    case "MISSING_CONFIG_VARIABLE":
      return wrapIcon(/* @__PURE__ */ react.createElement(EmptyPermissions["default"], null));
    case "MISSING_DEPLOYMENTS":
      return wrapIcon(/* @__PURE__ */ react.createElement(EmptyDocuments["default"], null));
    case "ERROR_DEPLOYMENTS":
    case "ERROR_AVAILABILITY_GENERIC":
    case "ERROR_AVAILABILITY_FORBIDDEN":
    case "ERROR_CONFIG":
    default:
      return wrapIcon(/* @__PURE__ */ react.createElement(i, null));
  }
};
const getTextId = (listDeployAvailability) => {
  switch (listDeployAvailability) {
    case "MISSING_CONFIG_OBJECT":
      return "deployments-empty-state.missing-config-object";
    case "MISSING_CONFIG_VARIABLE":
      return "deployments-empty-state.missing-config-variable";
    case "MISSING_DEPLOYMENTS":
      return "deployments-empty-state.missing-deployments";
    case "ERROR_DEPLOYMENTS":
      return "deployments-empty-state.error-deployments";
    case "ERROR_AVAILABILITY_GENERIC":
      return "deployments-empty-state.error-availability";
    case "ERROR_AVAILABILITY_FORBIDDEN":
      return "deployments-empty-state.error-forbidden";
    case "ERROR_CONFIG":
      return "deployments-empty-state.error-config";
    default:
      return "deployments-empty-state.default";
  }
};
const DeploymentsEmptyState = ({ type }) => {
  if (type === "AVAILABLE") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
  const messageId = getTextId(type);
  const message = (0,useFormattedMessage/* useFormattedMessage */.w)(messageId);
  const linkText = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "deployments-empty-state.missing-config-variable.link-text"
  );
  const action = type === "MISSING_CONFIG_VARIABLE" && /* @__PURE__ */ react.createElement(
    LinkButton/* LinkButton */.Q,
    {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null),
      to: "/settings/vercel-deploy"
    },
    linkText
  );
  return /* @__PURE__ */ react.createElement(EmptyStateLayout/* EmptyStateLayout */.x, { icon: getIcon(type), content: message, action });
};
/* harmony default export */ const components_DeploymentsEmptyState = ((0,react.memo)(DeploymentsEmptyState));


/***/ }),

/***/ 62192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75515);
/* harmony import */ var _hooks_useFormattedMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1041);



const FormattedMessage = ({ labelId, variant, textColor }) => {
  const label = (0,_hooks_useFormattedMessage__WEBPACK_IMPORTED_MODULE_1__/* .useFormattedMessage */ .w)(labelId);
  if (variant || textColor) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, { variant, textColor }, label);
  }
  return label;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedMessage);


/***/ }),

/***/ 1041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useFormattedMessage)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97132);
/* harmony import */ var _utils_getTrad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22279);


const useFormattedMessage = (labelId) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const label = formatMessage({ id: (0,_utils_getTrad__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(labelId) });
  return label;
};


/***/ }),

/***/ 51324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pluginId.js
var pluginId = __webpack_require__(21042);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.js + 1 modules
var Alert = __webpack_require__(18986);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.js
var Link_Link = __webpack_require__(36182);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(22279);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/Notifications/Notification.js





const getId = (msg) => typeof msg === "string" ? msg : (0,getTrad/* default */.Z)(msg?.id);
const getDefaultMessage = (msg) => {
  if (typeof msg === "string")
    return msg;
  return msg?.defaultMessage || (0,getTrad/* default */.Z)(msg?.id);
};
const Notification = ({ onClose: mainOnClose, notification }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { message, link, type, id, onClose, timeout, blockTransition } = notification;
  const formattedMessage = (msg) => typeof msg === "string" ? msg : formatMessage(msg, msg.values);
  const handleClose = (0,react.useCallback)(() => {
    if (onClose) {
      onClose();
    }
    mainOnClose();
  }, [id]);
  (0,react.useEffect)(() => {
    let timeoutToClear;
    if (!blockTransition) {
      timeoutToClear = setTimeout(() => {
        handleClose();
      }, timeout || 2500);
    }
    return () => clearTimeout(timeoutToClear);
  }, [blockTransition, handleClose, timeout]);
  let variant;
  if (type === "info") {
    variant = "default";
  } else if (type === "warning") {
    variant = "danger";
  } else {
    variant = "success";
  }
  return /* @__PURE__ */ react.createElement(
    Alert/* Alert */.b,
    {
      action: link ? /* @__PURE__ */ react.createElement(Link_Link/* Link */.r, { href: link.url, isExternal: true }, formatMessage({
        id: getId(link.label),
        defaultMessage: getDefaultMessage(link.label)
      })) : void 0,
      onClose: handleClose,
      closeLabel: "Close",
      title: "",
      variant
    },
    formattedMessage({
      id: getId(message),
      defaultMessage: getDefaultMessage(message)
    })
  );
};
/* harmony default export */ const Notifications_Notification = (Notification);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/Notifications/index.js




const Notifications = ({ children }) => {
  const [notification, setNotification] = (0,react.useState)(void 0);
  const displayNotification = (config) => {
    setNotification(config);
  };
  const onClose = () => {
    setNotification(void 0);
  };
  return /* @__PURE__ */ react.createElement(build.NotificationsProvider, { toggleNotification: displayNotification }, /* @__PURE__ */ react.createElement(
    Stack/* Stack */.K,
    {
      left: "50%",
      marginLeft: "-250px",
      position: "fixed",
      spacing: 2,
      top: `${46 / 16}rem`,
      width: `${500 / 16}rem`,
      zIndex: 10
    },
    notification && /* @__PURE__ */ react.createElement(
      Notifications_Notification,
      {
        key: notification.id,
        onClose,
        notification
      }
    )
  ), children);
};
/* harmony default export */ const components_Notifications = (Notifications);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/SymmetricBox/index.js


const SymmetricBox = ({
  paddingHorizontal = 0,
  paddingVertical = 0,
  children
}) => {
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical
    },
    children
  );
};
/* harmony default export */ const components_SymmetricBox = (SymmetricBox);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/FormattedMessage/index.js
var FormattedMessage = __webpack_require__(62192);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeployButton/ErrorUtils.js
const getErrorNotification = (type) => {
  const baseConfig = {
    id: type,
    blockTransition: true,
    type: "warning"
  };
  switch (type) {
    case "MISSING_CONFIG_OBJECT":
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.missing-config-object" }
      };
    case "MISSING_CONFIG_VARIABLE":
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.missing-config-variable.intro" },
        link: {
          label: {
            id: "deploy-error-message.missing-config-variable.link-text"
          },
          url: "/settings/vercel-deploy"
        }
      };
    case "ERROR_AVAILABILITY":
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.error-availability" }
      };
    case "ERROR_FORBIDDEN":
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.error-forbidden" }
      };
    case "ERROR_DEPLOY":
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.error-deploy" }
      };
    default:
      return {
        ...baseConfig,
        message: { id: "deploy-error-message.default" }
      };
  }
};

// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/utils/api.js + 1 modules
var api = __webpack_require__(52585);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useFormattedMessage.js
var useFormattedMessage = __webpack_require__(1041);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeployButton/index.js
/* provided dependency */ var console = __webpack_require__(25108);










const getDeployErrorState = (hasDeployError, availabilityApiError, runDeployAvailability) => {
  if (hasDeployError)
    return "ERROR_DEPLOY";
  if (availabilityApiError) {
    switch (availabilityApiError) {
      case "FORBIDDEN":
        return "ERROR_FORBIDDEN";
      case "GENERIC_ERROR":
      default:
        return "ERROR_AVAILABILITY";
    }
  }
  return runDeployAvailability;
};
const DeployButton = ({
  availabilityApiError,
  runDeployAvailability,
  onDeployed
}) => {
  const toggleNotification = (0,build.useNotification)();
  const labelLoader = (0,useFormattedMessage/* useFormattedMessage */.w)("deploy-button.loader");
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [hasDeployError, setHasDeployError] = (0,react.useState)(false);
  const canDeploy = runDeployAvailability == "AVAILABLE";
  const deployErrorState = getDeployErrorState(
    hasDeployError,
    availabilityApiError,
    runDeployAvailability
  );
  (0,react.useEffect)(() => {
    const hasDeployedSuccessfully = deployErrorState === "AVAILABLE";
    if (!hasDeployedSuccessfully) {
      const notification = getErrorNotification(deployErrorState);
      toggleNotification(notification);
    }
  }, [deployErrorState, toggleNotification, getErrorNotification]);
  const runDeployHandler = async () => {
    try {
      setHasDeployError(false);
      setIsLoading(true);
      const response = await (0,api/* runDeploy */.ED)();
      if (onDeployed)
        onDeployed(false);
    } catch (error) {
      console.error("[vercel-deploy] Error while running deploy", error);
      if (onDeployed)
        onDeployed(true);
      setHasDeployError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ react.createElement("div", { style: { display: "flex", alignItems: "center" } }, isLoading && /* @__PURE__ */ react.createElement(components_SymmetricBox, { paddingHorizontal: 4 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true }, labelLoader)), /* @__PURE__ */ react.createElement(components_SymmetricBox, { paddingHorizontal: 4 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: runDeployHandler, disabled: !canDeploy || isLoading }, /* @__PURE__ */ react.createElement("div", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ react.createElement(Plus["default"], null), /* @__PURE__ */ react.createElement("span", { style: { width: "8px" } }), /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "deploy-button.label" })))));
};
/* harmony default export */ const components_DeployButton = (DeployButton);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useInterval.js

function useInterval(callback, delay) {
  const savedCallback = (0,react.useRef)();
  (0,react.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0,react.useEffect)(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useDeployments.js
/* provided dependency */ var useDeployments_console = __webpack_require__(25108);



const INTERVAL_DELAY = 1e3;
const finalStates = ["CANCELED", "ERROR", "READY"];
const containsNonFinalState = (deployments) => {
  const nonFinalStateIndex = deployments.findIndex(
    (d) => !finalStates.includes(d.state)
  );
  return nonFinalStateIndex >= 0;
};
function useDeployments(usePolling, onDeploymentsFetched) {
  const initialDeployments = [];
  const [deployments, setDeployments] = (0,react.useState)(initialDeployments);
  const [hasError, setHasError] = (0,react.useState)(false);
  const [isLoadingDeployments, setIsLoadingDeployments] = (0,react.useState)(true);
  const triggerCallback = (deployments2) => {
    if (!onDeploymentsFetched)
      return;
    const hasNonFinalState = containsNonFinalState(deployments2);
    onDeploymentsFetched(hasNonFinalState);
  };
  const fetchDeployments = () => {
    (0,api/* getDeployments */.R_)().then((response) => {
      setDeployments(response.deployments);
      triggerCallback(response.deployments);
    }).catch((error) => {
      useDeployments_console.error(
        "[vercel-deploy] error while retrieving deployments",
        error
      );
      setHasError(true);
      setDeployments([]);
      triggerCallback([]);
    }).finally(() => {
      setIsLoadingDeployments(false);
    });
  };
  (0,react.useEffect)(() => {
    if (!usePolling) {
      fetchDeployments();
    }
  }, [
    setDeployments,
    setIsLoadingDeployments,
    usePolling,
    onDeploymentsFetched
  ]);
  const delay = usePolling ? INTERVAL_DELAY : null;
  useInterval(() => {
    fetchDeployments();
  }, delay);
  return [isLoadingDeployments, deployments, hasError];
}

// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeploymentsEmptyState/index.js + 1 modules
var DeploymentsEmptyState = __webpack_require__(1099);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js + 1 modules
var Thead = __webpack_require__(63985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js + 1 modules
var Tr = __webpack_require__(47144);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js + 1 modules
var Cell = __webpack_require__(18374);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js + 1 modules
var Tbody = __webpack_require__(550);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(84495);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(32064);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeploymentsList/index.js












const getDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
const getStateColor = (deploymentState) => {
  switch (deploymentState) {
    case "ERROR":
    case "CANCELED":
      return "danger700";
    case "READY":
      return "success700";
    default:
      return "neutral700";
  }
};
const getStateBackgroundColor = (deploymentState) => {
  switch (deploymentState) {
    case "ERROR":
    case "CANCELED":
      return "danger100";
    case "READY":
      return "success100";
    default:
      return "neutral100";
  }
};
const DeploymentsList = ({ deployments, usePolling }) => {
  const ROW_COUNT = deployments.length + 1;
  const COL_COUNT = 5;
  const labelLoader = (0,useFormattedMessage/* useFormattedMessage */.w)("home-page.deployments.loader");
  const headerFontVariant = "sigma";
  const cellTextColor = "neutral800";
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: COL_COUNT, rowCount: ROW_COUNT }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
    FormattedMessage/* default */.Z,
    {
      variant: headerFontVariant,
      labelId: "deployments-list.table-header.app-name"
    }
  )), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
    FormattedMessage/* default */.Z,
    {
      variant: headerFontVariant,
      labelId: "deployments-list.table-header.state"
    }
  ), usePolling && /* @__PURE__ */ react.createElement(components_SymmetricBox, { paddingHorizontal: 2, paddingVertical: 0 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true }, labelLoader))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
    FormattedMessage/* default */.Z,
    {
      variant: headerFontVariant,
      labelId: "deployments-list.table-header.creation-date"
    }
  )), /* @__PURE__ */ react.createElement(Cell.Th, null))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, deployments.map((entry) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: entry.uid }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: cellTextColor }, entry.name)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
    Badge/* Badge */.C,
    {
      textColor: getStateColor(entry.state),
      backgroundColor: getStateBackgroundColor(entry.state)
    },
    entry.state
  )), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: cellTextColor }, getDate(entry.created))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
    Tooltip/* Tooltip */.u,
    {
      description: /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "deployments-list.table-body.visit-url-text" })
    },
    /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.Q,
      {
        href: `https://${entry.url}`,
        variant: "tertiary",
        style: { border: "none" }
      },
      /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
    )
  ), /* @__PURE__ */ react.createElement(
    Tooltip/* Tooltip */.u,
    {
      description: /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "deployments-list.table-body.inspect-url-text" })
    },
    /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.Q,
      {
        href: entry.inspectorUrl,
        variant: "tertiary",
        style: { border: "none" }
      },
      /* @__PURE__ */ react.createElement(Eye["default"], null)
    )
  ))))));
};
/* harmony default export */ const components_DeploymentsList = (DeploymentsList);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeploymentsContainer/index.js







const DeploymentsContainer = ({ usePolling, onDeploymentsFetched }) => {
  const labelLoader = (0,useFormattedMessage/* useFormattedMessage */.w)("deployments-container.loader");
  const [isLoadingDeployments, deployments, hasDeploymentsError] = useDeployments(usePolling, onDeploymentsFetched);
  const hasEmptyDeployments = !deployments || deployments?.length <= 0;
  if (isLoadingDeployments && hasEmptyDeployments) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, labelLoader));
  }
  if (hasDeploymentsError) {
    return /* @__PURE__ */ react.createElement(DeploymentsEmptyState/* default */.Z, { type: "ERROR_DEPLOYMENTS" });
  }
  if (hasEmptyDeployments) {
    return /* @__PURE__ */ react.createElement(DeploymentsEmptyState/* default */.Z, { type: "MISSING_DEPLOYMENTS" });
  }
  return /* @__PURE__ */ react.createElement(components_DeploymentsList, { deployments, usePolling });
};
/* harmony default export */ const components_DeploymentsContainer = (DeploymentsContainer);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useDeployAvailability.js
/* provided dependency */ var useDeployAvailability_console = __webpack_require__(25108);


function useDeployAvailability() {
  const initialAvailability = {};
  const [availability, setAvailability] = (0,react.useState)(initialAvailability);
  const [apiError, setApiError] = (0,react.useState)(void 0);
  const [isLoadingAvailability, setIsLoadingAvailability] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    (0,api/* deployAvailability */.Ns)().then((response) => {
      setAvailability(response.data);
    }).catch((error) => {
      useDeployAvailability_console.error(
        "[vercel-deploy] error while retrieving availability",
        error
      );
      setAvailability({});
      if (error && error.response && error.response.status === 403) {
        setApiError("FORBIDDEN");
      } else {
        setApiError("GENERIC_ERROR");
      }
    }).finally(() => {
      setIsLoadingAvailability(false);
    });
  }, [setIsLoadingAvailability, setAvailability]);
  return [isLoadingAvailability, availability, apiError];
}

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pages/HomePage/index.js













const getDeploymentsEmptyStateType = (availabilityApiError, listDeployAvailability) => {
  if (availabilityApiError) {
    switch (availabilityApiError) {
      case "FORBIDDEN":
        return "ERROR_AVAILABILITY_FORBIDDEN";
      case "GENERIC_ERROR":
      default:
        return "ERROR_AVAILABILITY_GENERIC";
    }
  }
  return listDeployAvailability;
};
const HomePage = () => {
  const headerTitle = (0,useFormattedMessage/* useFormattedMessage */.w)("home-page.header.title");
  const headerSubtitle = (0,useFormattedMessage/* useFormattedMessage */.w)("home-page.header.subtitle");
  const [isLoadingAvailability, availability, apiError] = useDeployAvailability();
  const [useDeploymentsPolling, setUseDeploymentsPolling] = (0,react.useState)(false);
  const onDeploymentsFetched = (hasNonFinalState) => {
    setUseDeploymentsPolling(hasNonFinalState);
  };
  if (isLoadingAvailability) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  const canListDeploy = availability?.listDeploy == "AVAILABLE";
  const onDeployed = (hasError) => {
    if (hasError)
      return;
    setUseDeploymentsPolling(true);
  };
  return /* @__PURE__ */ react.createElement(components_Notifications, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/" }, "Go back"),
      primaryAction: /* @__PURE__ */ react.createElement(
        components_DeployButton,
        {
          availabilityApiError: apiError,
          runDeployAvailability: availability?.runDeploy,
          onDeployed
        }
      ),
      title: headerTitle,
      subtitle: headerSubtitle,
      as: "h2"
    }
  )), /* @__PURE__ */ react.createElement(components_SymmetricBox, { paddingHorizontal: 10, paddingVertical: 2 }, canListDeploy ? /* @__PURE__ */ react.createElement(
    components_DeploymentsContainer,
    {
      usePolling: useDeploymentsPolling,
      onDeploymentsFetched
    }
  ) : /* @__PURE__ */ react.createElement(
    DeploymentsEmptyState/* default */.Z,
    {
      type: getDeploymentsEmptyStateType(
        apiError,
        availability?.listDeploy
      )
    }
  )));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/plugins/${(pluginId_default())}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { component: build.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 68479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_SettingsApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pluginId.js
var pluginId = __webpack_require__(21042);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.js
var FieldInput = __webpack_require__(45377);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/DeploymentsEmptyState/index.js + 1 modules
var DeploymentsEmptyState = __webpack_require__(1099);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/utils/api.js + 1 modules
var api = __webpack_require__(52585);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/FormattedMessage/index.js
var FormattedMessage = __webpack_require__(62192);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/components/ExternalLink/index.js


const ExternalLink = ({ href, children }) => {
  return /* @__PURE__ */ react.createElement("span", { style: { marginRight: "0.5em", marginLeft: "0.3em" } }, /* @__PURE__ */ react.createElement(Link/* Link */.r, { isExternal: true, href }, children));
};
/* harmony default export */ const components_ExternalLink = (ExternalLink);

// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/hooks/useFormattedMessage.js
var useFormattedMessage = __webpack_require__(1041);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pages/SettingsPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);












const BoxField = ({ fieldName, fieldHint, children }) => {
  const horizontalPadding = 10;
  const verticalPadding = 2;
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingLeft: horizontalPadding,
      paddingRight: horizontalPadding,
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding
    },
    /* @__PURE__ */ react.createElement(Field/* Field */.g, { name: fieldName, hint: fieldHint }, children)
  );
};
const SettingsContainer = () => {
  const deployHookPlaceholder = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "settings-page.deploy-hook.placeholder"
  );
  const apiTokenPlaceholder = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "settings-page.api-token.placeholder"
  );
  const appNamePlaceholder = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "settings-page.app-name.placeholder"
  );
  const teamIdPlaceholder = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "settings-page.team-id.placeholder"
  );
  const labelLoader = (0,useFormattedMessage/* useFormattedMessage */.w)(
    "settings-page.settings-container.loader"
  );
  const [apiError, setApiError] = (0,react.useState)(void 0);
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const initialConfig = {};
  const [pluginConfig, setPluginConfig] = (0,react.useState)(initialConfig);
  (0,react.useEffect)(() => {
    (0,api/* getConfig */.iE)().then((response) => {
      setPluginConfig(response.data);
    }).catch((error) => {
      console.error(
        "[vercel-deploy] error while retrieving plugin config",
        error
      );
      setPluginConfig({});
      if (error && error.response && error.response.status === 403) {
        setApiError("FORBIDDEN");
      } else {
        setApiError("GENERIC_ERROR");
      }
    }).finally(() => {
      setIsLoading(false);
    });
  }, [setIsLoading, setPluginConfig, setApiError]);
  const deployHook = pluginConfig.deployHook || "";
  const apiToken = pluginConfig.apiToken ? `${pluginConfig.apiToken}[...]` : "";
  const appFilter = pluginConfig.appFilter || "";
  const teamFilter = pluginConfig.teamFilter || "";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, labelLoader));
  }
  if (apiError) {
    const emptyStateType = apiError === "FORBIDDEN" ? "ERROR_AVAILABILITY_FORBIDDEN" : "ERROR_CONFIG";
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral100" }, /* @__PURE__ */ react.createElement(DeploymentsEmptyState/* default */.Z, { type: emptyStateType }));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    BoxField,
    {
      fieldName: "vercel-deploy-hook",
      fieldHint: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.deploy-hook.learn-more-intro" }), /* @__PURE__ */ react.createElement(components_ExternalLink, { href: "https://vercel.com/docs/git/deploy-hooks" }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.deploy-hook.learn-more-link-text" })))
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { required: true }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.deploy-hook.label" })), /* @__PURE__ */ react.createElement(
      FieldInput/* FieldInput */._,
      {
        type: "text",
        placeholder: deployHookPlaceholder,
        value: deployHook,
        disabled: true
      }
    ), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null))
  ), /* @__PURE__ */ react.createElement(
    BoxField,
    {
      fieldName: "vercel-deploy-api-token",
      fieldHint: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.api-token.learn-more-intro" }), /* @__PURE__ */ react.createElement(components_ExternalLink, { href: "https://vercel.com/account/tokens" }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.api-token.learn-more-link-text" })))
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { required: true }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.api-token.label" })), /* @__PURE__ */ react.createElement(
      FieldInput/* FieldInput */._,
      {
        type: "text",
        placeholder: apiTokenPlaceholder,
        value: apiToken,
        disabled: true
      }
    ), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null))
  ), /* @__PURE__ */ react.createElement(
    BoxField,
    {
      fieldName: "vercel-deploy-app-name",
      fieldHint: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.app-name.learn-more-intro" }), /* @__PURE__ */ react.createElement(components_ExternalLink, { href: "https://vercel.com/dashboard" }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.app-name.learn-more-link-text" })), /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.app-name.learn-more-outro" }))
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.app-name.label" })), /* @__PURE__ */ react.createElement(
      FieldInput/* FieldInput */._,
      {
        type: "text",
        placeholder: appNamePlaceholder,
        value: appFilter,
        disabled: true
      }
    ), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null))
  ), /* @__PURE__ */ react.createElement(
    BoxField,
    {
      fieldName: "vercel-deploy-team-id",
      fieldHint: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.team-id.learn-more-intro" }), /* @__PURE__ */ react.createElement(components_ExternalLink, { href: "https://vercel.com/dashboard" }, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.team-id.learn-more-link-text" })), /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.team-id.learn-more-outro" }))
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, /* @__PURE__ */ react.createElement(FormattedMessage/* default */.Z, { labelId: "settings-page.team-id.label" })), /* @__PURE__ */ react.createElement(
      FieldInput/* FieldInput */._,
      {
        type: "text",
        placeholder: teamIdPlaceholder,
        value: teamFilter,
        disabled: true
      }
    ), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null))
  ));
};
const SettingsPage = () => {
  const headerTitle = (0,useFormattedMessage/* useFormattedMessage */.w)("settings-page.header.title");
  const headerSubtitle = (0,useFormattedMessage/* useFormattedMessage */.w)("settings-page.header.subtitle");
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(HeaderLayout/* HeaderLayout */.T, { title: headerTitle, subtitle: headerSubtitle, as: "h2" })), /* @__PURE__ */ react.createElement(SettingsContainer, null));
};
/* harmony default export */ const pages_SettingsPage = ((0,react.memo)(SettingsPage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pages/SettingsApp/index.js





const SettingsApp = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/settings/${(pluginId_default())}`, component: pages_SettingsPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { component: build.NotFound })));
};
/* harmony default export */ const pages_SettingsApp = (SettingsApp);


/***/ }),

/***/ 52585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ns": () => (/* binding */ deployAvailability),
  "iE": () => (/* binding */ getConfig),
  "R_": () => (/* binding */ getDeployments),
  "ED": () => (/* binding */ runDeploy)
});

// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/node_modules/axios/index.js
var axios = __webpack_require__(34551);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/utils/axiosInstance.js


const instance = axios_default().create({
  baseURL: ""
});
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${build.auth.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      build.auth.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
/* harmony default export */ const axiosInstance = (instance);

// EXTERNAL MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/pluginId.js
var pluginId = __webpack_require__(21042);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-vercel-deploy/admin/src/utils/api.js
/* provided dependency */ var console = __webpack_require__(25108);


const runDeploy = async () => {
  try {
    const data = await axiosInstance(`/${(pluginId_default())}/deploy/run`, { method: "GET" });
    return data.data;
  } catch (error) {
    console.error("[vercel-deploy] Error while running a deploy -", error);
    throw error;
  }
};
const getConfig = async () => {
  try {
    const response = await axiosInstance(`/${(pluginId_default())}/config`, { method: "GET" });
    return response.data;
  } catch (error) {
    console.error("[vercel-deploy] Error while fetching configs -", error);
    throw error;
  }
};
const getDeployments = async () => {
  try {
    const response = await axiosInstance(`/${(pluginId_default())}/deploy/list`, { method: "GET" });
    return response.data;
  } catch (error) {
    console.error(
      "[vercel-deploy] Error while fetching deployments list -",
      error
    );
    throw error;
  }
};
const deployAvailability = async () => {
  try {
    const response = await axiosInstance(`/${(pluginId_default())}/deploy/availability`, {
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(
      "[vercel-deploy]: Error while fetching deploy availability -",
      error
    );
    throw error;
  }
};


/***/ }),

/***/ 22279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21042);
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pluginId__WEBPACK_IMPORTED_MODULE_0__);

const getTrad = (id) => id ? `${(_pluginId__WEBPACK_IMPORTED_MODULE_0___default())}.${id}` : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 34551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(23777);


/***/ }),

/***/ 71067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var settle = __webpack_require__(57238);
var cookies = __webpack_require__(83089);
var buildURL = __webpack_require__(18845);
var buildFullPath = __webpack_require__(65342);
var parseHeaders = __webpack_require__(20534);
var isURLSameOrigin = __webpack_require__(27918);
var createError = __webpack_require__(65441);
var transitionalDefaults = __webpack_require__(68610);
var Cancel = __webpack_require__(7336);
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(createError("Request aborted", config, "ECONNABORTED", request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(createError("Network Error", config, null, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
        request
      ));
      request = null;
    };
    if (utils.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request.setRequestHeader(key, val);
        }
      });
    }
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request.send(requestData);
  });
};


/***/ }),

/***/ 23777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var bind = __webpack_require__(34360);
var Axios = __webpack_require__(28923);
var mergeConfig = __webpack_require__(55435);
var defaults = __webpack_require__(62087);
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults);
axios.Axios = Axios;
axios.Cancel = __webpack_require__(7336);
axios.CancelToken = __webpack_require__(4709);
axios.isCancel = __webpack_require__(48521);
axios.VERSION = (__webpack_require__(53954).version);
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(45980);
axios.isAxiosError = __webpack_require__(13057);
module.exports = axios;
module.exports["default"] = axios;


/***/ }),

/***/ 7336:
/***/ ((module) => {

"use strict";

function Cancel(message) {
  this.message = message;
}
Cancel.prototype.toString = function toString() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;


/***/ }),

/***/ 4709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var Cancel = __webpack_require__(7336);
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
module.exports = CancelToken;


/***/ }),

/***/ 48521:
/***/ ((module) => {

"use strict";

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 28923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var buildURL = __webpack_require__(18845);
var InterceptorManager = __webpack_require__(52916);
var dispatchRequest = __webpack_require__(49625);
var mergeConfig = __webpack_require__(55435);
var validator = __webpack_require__(68212);
var validators = validator.validators;
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional = config.transitional;
  if (transitional !== void 0) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data
    }));
  };
});
module.exports = Axios;


/***/ }),

/***/ 52916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
module.exports = InterceptorManager;


/***/ }),

/***/ 65342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isAbsoluteURL = __webpack_require__(75199);
var combineURLs = __webpack_require__(41618);
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 65441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var enhanceError = __webpack_require__(51347);
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 49625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var transformData = __webpack_require__(50360);
var isCancel = __webpack_require__(48521);
var defaults = __webpack_require__(62087);
var Cancel = __webpack_require__(7336);
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel("canceled");
  }
}
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );
  utils.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }
    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 51347:
/***/ ((module) => {

"use strict";

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 55435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
module.exports = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};


/***/ }),

/***/ 57238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createError = __webpack_require__(65441);
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      "Request failed with status code " + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 50360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var defaults = __webpack_require__(62087);
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};


/***/ }),

/***/ 62087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(34155);

var utils = __webpack_require__(46504);
var normalizeHeaderName = __webpack_require__(84742);
var enhanceError = __webpack_require__(51347);
var transitionalDefaults = __webpack_require__(68610);
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = __webpack_require__(71067);
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = __webpack_require__(71067);
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, "Accept");
    normalizeHeaderName(headers, "Content-Type");
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data.toString();
    }
    if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;


/***/ }),

/***/ 68610:
/***/ ((module) => {

"use strict";

module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 53954:
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};


/***/ }),

/***/ 34360:
/***/ ((module) => {

"use strict";

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 18845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
module.exports = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};


/***/ }),

/***/ 41618:
/***/ ((module) => {

"use strict";

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};


/***/ }),

/***/ 83089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
module.exports = utils.isStandardBrowserEnv() ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }()
);


/***/ }),

/***/ 75199:
/***/ ((module) => {

"use strict";

module.exports = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 13057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
};


/***/ }),

/***/ 27918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
module.exports = utils.isStandardBrowserEnv() ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }()
);


/***/ }),

/***/ 84742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 20534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(46504);
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};


/***/ }),

/***/ 45980:
/***/ ((module) => {

"use strict";

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 68212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);

var VERSION = (__webpack_require__(53954).version);
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
module.exports = {
  assertOptions,
  validators
};


/***/ }),

/***/ 46504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(34360);
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
module.exports = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};


/***/ }),

/***/ 18986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ L)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var utils = __webpack_require__(15585);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Alert/utils.js
const s = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger100 : o === "success" ? r.colors.success100 : o === "warning" ? r.colors.warning100 : r.colors.primary100, n = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger200 : o === "success" ? r.colors.success200 : o === "warning" ? r.colors.warning200 : r.colors.primary200, c = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger700 : o === "success" ? r.colors.success700 : o === "warning" ? r.colors.warning700 : r.colors.primary700;


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.js








const w = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`, k = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border: 1px solid ${n};
  background: ${s};
  box-shadow: ${({
  theme: o
}) => o.shadows.filterShadow};
`, y = styled_components_browser_esm["default"].button`
  border: none;
  background: transparent;
  font-size: ${12 / 16}rem;
  svg path {
    fill: ${({
  theme: o
}) => o.colors.neutral700};
  }
  margin-top: ${({
  theme: o
}) => o.spaces[1]};
  ${utils/* buttonFocusStyle */.BF};
`, A = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  font-size: ${20 / 16}rem;
  svg path {
    fill: ${c};
  }
`, I = ({
  variant: o,
  ...e
}) => o === "success" ? (0,jsx_runtime.jsx)(dist.CheckCircle, {
  ...e
}) : o === "danger" || o === "warning" ? (0,jsx_runtime.jsx)(dist.ExclamationMarkCircle, {
  ...e
}) : (0,jsx_runtime.jsx)(dist.Information, {
  ...e
}), R = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${c};

    svg path {
      fill: ${c};
    }
  }
`, L = ({
  title: o,
  children: e,
  variant: n = "default",
  onClose: p,
  closeLabel: c,
  titleAs: h = "p",
  action: i,
  ...g
}) => (0,jsx_runtime.jsx)(k, {
  hasRadius: !0,
  paddingLeft: 5,
  paddingRight: 6,
  paddingTop: 5,
  variant: n,
  ...g,
  children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, {
    alignItems: "flex-start",
    children: [(0,jsx_runtime.jsx)(A, {
      paddingRight: 3,
      variant: n,
      children: (0,jsx_runtime.jsx)(I, {
        variant: n,
        "aria-hidden": !0
      })
    }), (0,jsx_runtime.jsxs)(w, {
      role: n === "danger" ? "alert" : "status",
      children: [(0,jsx_runtime.jsx)(Box/* Box */.x, {
        paddingBottom: 2,
        paddingRight: 1,
        children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
          fontWeight: "bold",
          textColor: "neutral800",
          as: h,
          children: o
        })
      }), (0,jsx_runtime.jsx)(Box/* Box */.x, {
        paddingBottom: i ? 2 : 5,
        paddingRight: 2,
        children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
          as: "p",
          textColor: "neutral800",
          children: e
        })
      }), i && (0,jsx_runtime.jsx)(R, {
        paddingBottom: 5,
        variant: n,
        children: i
      })]
    }), (0,jsx_runtime.jsx)(y, {
      onClick: p,
      "aria-label": c,
      children: (0,jsx_runtime.jsx)(dist.Cross, {
        "aria-hidden": !0
      })
    })]
  })
});



/***/ }),

/***/ 67838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ s),
  "T": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var dist = __webpack_require__(98402);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist.useCallbackRef)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const x = () => {
  const t = (0,react.useRef)(null), [o, a] = (0,react.useState)(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && a(t.current.getBoundingClientRect());
  }, [t]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: t,
    headerSize: o
  };
}, p = (t) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = x();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
    style: { height: d?.height },
    ref: o
  }, a && /* @__PURE__ */ react.createElement(s, {
    ref: r,
    ...t
  })), !a && /* @__PURE__ */ react.createElement(s, {
    ...t,
    sticky: !0,
    width: d?.width
  }));
};
p.displayName = "HeaderLayout";
const L = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(t) => t.width}px;
  z-index: 4;
  box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
`, s = react.forwardRef(
  ({ navigationAction: t, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ react.createElement(L, {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 3,
      paddingBottom: 3,
      background: "neutral0",
      width: g,
      "data-strapi-header-sticky": !0
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, t && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingRight: 3
    }, t), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "beta",
      as: "h1",
      ...u
    }, d), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      textColor: "neutral600"
    }, r) : r), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, a) : null), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, o ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 2
    }, o) : void 0))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      ref: y,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 8,
      paddingTop: t ? 6 : 8,
      background: "neutral100",
      "data-strapi-header": !0
    }, t ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingBottom: 2
    }, t) : null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      as: "h1",
      variant: "alpha",
      ...u
    }, d), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, a) : null), o), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "epsilon",
      textColor: "neutral600",
      as: "p"
    }, r) : r);
  }
);
s.displayName = "BaseHeaderLayout";
s.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
s.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
p.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
p.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ }),

/***/ 32064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49656);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Button_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92577);
/* harmony import */ var _Button_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78474);
/* harmony import */ var _BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21817);









const L = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_2__/* .BaseButtonWrapper */ .G)`
  padding: ${({ theme: e, size: o }) => `${o === "S" ? e.spaces[2] : "10px"} ${e.spaces[4]}`};
  background: ${({ theme: e }) => e.colors.buttonPrimary600};
  border: 1px solid ${({ theme: e }) => e.colors.buttonPrimary600};
  border-radius: ${({ theme: e }) => e.borderRadius};
  ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: flex;
    align-items: center;
  }
  ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({ theme: e }) => e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getDisabledStyle */ .sg}
    &:active {
      ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getDisabledStyle */ .sg}
    }
  }
  &:hover {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getHoverStyle */ .yP}
  }
  &:active {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getActiveStyle */ .tB}
  }
  ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getVariantStyle */ .PD}
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};
`, l = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  ({ variant: e, startIcon: o, endIcon: f, disabled: i, children: s, size: m, href: n, to: p, ...u }, v) => {
    const b = n ? "_blank" : void 0, $ = n ? "noreferrer noopener" : void 0;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(L, {
      ref: v,
      "aria-disabled": i,
      size: m,
      variant: e,
      target: b,
      rel: $,
      to: i ? void 0 : p,
      href: i ? "#" : n,
      ...u,
      as: p && !i ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink : "a"
    }, o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
      "aria-hidden": !0,
      paddingRight: 2
    }, o), m === "S" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
      variant: "pi",
      fontWeight: "bold"
    }, s) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
      fontWeight: "bold"
    }, s), f && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
      "aria-hidden": !0,
      paddingLeft: 2
    }, f));
  }
);
l.displayName = "LinkButton";
l.defaultProps = {
  disabled: !1,
  startIcon: void 0,
  endIcon: void 0,
  size: "S",
  variant: "default",
  onClick: void 0,
  href: void 0,
  to: void 0
};
l.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  href(e) {
    if (!e.disabled && !e.to && !e.href)
      return new Error("href must be defined");
  },
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7__.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf(_Button_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .BUTTON_SIZES */ .Gt),
  startIcon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  to(e) {
    if (!e.disabled && !e.href && !e.to)
      return new Error("to must be defined");
  },
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf(_Button_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .VARIANTS */ .ZC)
};



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function r(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",
      fill: "#212134"
    })
  });
}



/***/ }),

/***/ 37323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function i(a) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L23.86 11.86a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L10.02 22.02a.2.2 0 010-.282L18.26 13.5H.2a.2.2 0 01-.2-.2v-2.6z",
      fill: "#212134"
    })
  });
}



/***/ }),

/***/ 17772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function l(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",
      fill: "#32324D"
    })
  });
}



/***/ })

}]);