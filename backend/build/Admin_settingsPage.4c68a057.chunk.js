"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5895],{

/***/ 10608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SettingsPage": () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.js
var Link = __webpack_require__(36182);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/constants.js
const DIMENSION = 750;
const SIZE = 100;
const ACCEPTED_FORMAT = ["image/jpeg", "image/png", "image/svg+xml"];

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselInput.js + 1 modules
var CarouselInput = __webpack_require__(73987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselActions.js
var CarouselActions = __webpack_require__(17973);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselSlide.js
var CarouselSlide = __webpack_require__(59689);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.js
var Refresh = __webpack_require__(30815);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60612);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/reducer.js

const initialState = {
  localImage: void 0
};
const reducer = (state = initialState, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "SET_LOCAL_IMAGE": {
      draftState.localImage = action.value;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const LogoModalStepper_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/index.js






const LogoModalStepper = ({
  onChangeLogo,
  customLogo,
  goTo,
  Component,
  modalTitle,
  next,
  prev,
  currentStep
}) => {
  const [{ localImage }, dispatch] = (0,react.useReducer)(LogoModalStepper_reducer, initialState);
  const { formatMessage } = (0,react_intl.useIntl)();
  const setLocalImage = (asset) => {
    dispatch({
      type: "SET_LOCAL_IMAGE",
      value: asset
    });
  };
  const handleCloseModal = () => {
    goTo(null);
  };
  if (!currentStep) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { labelledBy: "modal", onClose: handleCloseModal }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", as: "h2", id: "modal" }, formatMessage(modalTitle))), /* @__PURE__ */ react.createElement(
    Component,
    {
      setLocalImage,
      goTo,
      next,
      prev,
      onClose: handleCloseModal,
      asset: localImage || customLogo,
      onChangeLogo
    }
  ));
};
LogoModalStepper.defaultProps = {
  Component: void 0,
  currentStep: void 0,
  customLogo: void 0,
  modalTitle: void 0,
  next: null,
  prev: null
};
LogoModalStepper.propTypes = {
  Component: (prop_types_default()).elementType,
  currentStep: (prop_types_default()).string,
  customLogo: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }),
  goTo: (prop_types_default()).func.isRequired,
  modalTitle: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }),
  next: (prop_types_default()).string,
  onChangeLogo: (prop_types_default()).func.isRequired,
  prev: (prop_types_default()).string
};
/* harmony default export */ const components_LogoModalStepper = (LogoModalStepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/reducer.js

const reducer_initialState = {
  currentStep: void 0
};
const reducer_reducer = (state = reducer_initialState, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "GO_TO": {
      draftState.currentStep = action.to;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const LogoInput_reducer = (reducer_reducer);


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 2 modules
var Tabs = __webpack_require__(60633);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.js
var FieldInput = __webpack_require__(45377);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PicturePlus.js
var PicturePlus = __webpack_require__(35957);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/parseFileMetadatas.js

const FILE_FORMAT_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-format",
  defaultMessage: "Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."
};
const FILE_SIZING_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-size",
  defaultMessage: "The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"
};
const getFileDimensions = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = function() {
        resolve({ width: img.width, height: img.height });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};
const rawFileToAsset = (rawFile, fileDimensions) => {
  return {
    ext: rawFile.name.split(".").pop(),
    size: rawFile.size / 1e3,
    name: rawFile.name,
    url: URL.createObjectURL(rawFile),
    rawFile,
    width: fileDimensions.width,
    height: fileDimensions.height
  };
};
const parseFileMetadatas = async (file) => {
  let error;
  const isFormatAuthorized = ACCEPTED_FORMAT.includes(file.type);
  if (!isFormatAuthorized) {
    error = new Error("File format");
    error.displayMessage = FILE_FORMAT_ERROR_MESSAGE;
    throw error;
  }
  const fileDimensions = await getFileDimensions(file);
  const areDimensionsAuthorized = fileDimensions.width <= DIMENSION && fileDimensions.height <= DIMENSION;
  if (!areDimensionsAuthorized) {
    error = new Error("File sizing");
    error.displayMessage = FILE_SIZING_ERROR_MESSAGE;
    throw error;
  }
  const asset = rawFileToAsset(file, fileDimensions);
  const isSizeAuthorized = asset.size <= SIZE;
  if (!isSizeAuthorized) {
    error = new Error("File sizing");
    error.displayMessage = FILE_SIZING_ERROR_MESSAGE;
    throw error;
  }
  return asset;
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/FromComputerForm.js















const FileInput = (0,styled_components_browser_esm["default"])(FieldInput/* FieldInput */._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const FromComputerForm = ({ setLocalImage, goTo, next, onClose }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [dragOver, setDragOver] = (0,react.useState)(false);
  const [fileError, setFileError] = (0,react.useState)(void 0);
  const inputRef = (0,react.useRef)(null);
  const handleDragEnter = () => setDragOver(true);
  const handleDragLeave = () => setDragOver(false);
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = async () => {
    handleDragLeave();
    const file = inputRef.current.files[0];
    if (!file) {
      return;
    }
    try {
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goTo(next);
    } catch (err) {
      if (err.displayMessage) {
        setFileError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
        inputRef.current.focus();
      } else {
        throw err;
      }
    }
  };
  const getBorderColor = () => {
    if (dragOver) {
      return "primary500";
    }
    if (fileError) {
      return "danger600";
    }
    return "neutral300";
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("form", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Field/* Field */.g, { name: "logo-upload", error: fileError }, /* @__PURE__ */ react.createElement("label", { htmlFor: "logo-upload" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      paddingTop: 9,
      paddingBottom: 7,
      hasRadius: true,
      justifyContent: "center",
      direction: "column",
      background: dragOver ? "primary100" : "neutral100",
      borderColor: getBorderColor(),
      borderStyle: "dashed",
      borderWidth: "1px",
      position: "relative",
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave
    },
    /* @__PURE__ */ react.createElement(
      Icon/* Icon */.J,
      {
        color: "primary600",
        width: `${60 / 16}rem`,
        height: `${60 / 16}rem`,
        as: PicturePlus/* default */.Z,
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "span" }, formatMessage({
      id: "Settings.application.customization.modal.upload.drag-drop",
      defaultMessage: "Drag and Drop here or"
    }))),
    /* @__PURE__ */ react.createElement(
      FileInput,
      {
        accept: ACCEPTED_FORMAT,
        cursor: "pointer",
        as: "input",
        type: "file",
        name: "files",
        tabIndex: -1,
        zIndex: 1,
        onChange: handleChange,
        ref: inputRef,
        id: "logo-upload"
      }
    ),
    /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "button", onClick: handleClick }, formatMessage({
      id: "Settings.application.customization.modal.upload.cta.browse",
      defaultMessage: "Browse files"
    })),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(
      {
        id: "Settings.application.customization.modal.upload.file-validation",
        defaultMessage: "Max dimension: {dimension}x{dimension}, Max size: {size}KB"
      },
      { size: SIZE, dimension: DIMENSION }
    )))
  ), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({
        id: "Settings.application.customization.modal.cancel",
        defaultMessage: "Cancel"
      }))
    }
  ));
};
FromComputerForm.defaultProps = {
  next: null
};
FromComputerForm.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_FromComputerForm = (FromComputerForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(11817);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/urlToFile.js

const urlToFile = async (url) => {
  try {
    const res = await axios/* default.get */.Z.get(url, { responseType: "blob", timeout: 8e3 });
    const loadedFile = new File([res.data], res.config.url, {
      type: res.headers["content-type"]
    });
    return loadedFile;
  } catch (err) {
    err.displayMessage = {
      id: "Settings.application.customization.modal.upload.error-network",
      defaultMessage: "Network error"
    };
    throw err;
  }
};
/* harmony default export */ const utils_urlToFile = (urlToFile);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/FromUrlForm.js










const FromUrlForm = ({ goTo, next, onClose, setLocalImage }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [logoUrl, setLogoUrl] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)(null);
  const handleChange = (e) => {
    setLogoUrl(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const file = await utils_urlToFile(logoUrl);
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goTo(next);
    } catch (err) {
      if (err.displayMessage) {
        setError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
      } else {
        throw err;
      }
    }
  };
  return /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        handleSubmit();
      }
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        label: formatMessage({
          id: "Settings.application.customization.modal.upload.from-url.input-label",
          defaultMessage: "URL"
        }),
        error,
        onChange: handleChange,
        value: logoUrl,
        name: "logo-url"
      }
    )),
    /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit" }, formatMessage({
          id: "Settings.application.customization.modal.upload.next",
          defaultMessage: "Next"
        }))
      }
    )
  );
};
FromUrlForm.defaultProps = {
  next: null
};
FromUrlForm.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_FromUrlForm = (FromUrlForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/AddLogoDialog.js








const AddLogoDialog = ({ setLocalImage, goTo, next, onClose }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: formatMessage({
        id: "Settings.application.customization.modal.tab.label",
        defaultMessage: "How do you want to upload your assets?"
      }),
      variant: "simple"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8 }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "Settings.application.customization.modal.upload.from-computer",
      defaultMessage: "From computer"
    })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "Settings.application.customization.modal.upload.from-url",
      defaultMessage: "From url"
    }))), /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
      LogoModalStepper_FromComputerForm,
      {
        onClose,
        setLocalImage,
        goTo,
        next
      }
    )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(LogoModalStepper_FromUrlForm, { onClose, setLocalImage, goTo, next })))
  );
};
AddLogoDialog.defaultProps = {
  next: null
};
AddLogoDialog.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_AddLogoDialog = (AddLogoDialog);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/Card.js
var Card = __webpack_require__(99220);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardHeader.js
var CardHeader = __webpack_require__(19093);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardAsset.js
var CardAsset = __webpack_require__(87535);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardBody.js
var CardBody = __webpack_require__(25001);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardContent.js
var CardContent = __webpack_require__(75517);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardTitle.js
var CardTitle = __webpack_require__(20799);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardBadge.js
var CardBadge = __webpack_require__(41384);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/ImageCardAsset.js




const ImageCardAsset = ({ asset }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Card/* Card */.Z, null, /* @__PURE__ */ react.createElement(CardHeader/* CardHeader */.O, null, /* @__PURE__ */ react.createElement(CardAsset/* CardAsset */.H, { size: "S", src: asset.url })), /* @__PURE__ */ react.createElement(CardBody/* CardBody */.e, null, /* @__PURE__ */ react.createElement(CardContent/* CardContent */.a, null, /* @__PURE__ */ react.createElement(CardTitle/* CardTitle */.l, null, asset.name), /* @__PURE__ */ react.createElement(CardTitle/* CardSubtitle */._, null, `${asset.ext.toUpperCase()} - ${asset.width}\u2715${asset.height}`)), /* @__PURE__ */ react.createElement(CardBadge/* CardBadge */.E, null, formatMessage({
    id: "Settings.application.customization.modal.pending.card-badge",
    defaultMessage: "image"
  }))));
};
ImageCardAsset.propTypes = {
  asset: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }).isRequired
};
/* harmony default export */ const LogoModalStepper_ImageCardAsset = (ImageCardAsset);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/PendingLogoDialog.js










const PendingLogoDialog = ({ onClose, asset, prev, next, goTo, setLocalImage, onChangeLogo }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleGoBack = () => {
    setLocalImage(void 0);
    goTo(prev);
  };
  const handleUpload = () => {
    onChangeLogo(asset);
    goTo(next);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold" }, formatMessage({
    id: "Settings.application.customization.modal.pending.title",
    defaultMessage: "Logo ready to upload"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral500" }, formatMessage({
    id: "Settings.application.customization.modal.pending.subtitle",
    defaultMessage: "Manage the chosen logo before uploading it"
  }))), /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleGoBack, variant: "secondary" }, formatMessage({
    id: "Settings.application.customization.modal.pending.choose-another",
    defaultMessage: "Choose another logo"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { maxWidth: (0,build.pxToRem)(180) }, /* @__PURE__ */ react.createElement(LogoModalStepper_ImageCardAsset, { asset }))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({
        id: "Settings.application.customization.modal.cancel",
        defaultMessage: "Cancel"
      })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleUpload }, formatMessage({
        id: "Settings.application.customization.modal.pending.upload",
        defaultMessage: "Upload logo"
      }))
    }
  ));
};
PendingLogoDialog.defaultProps = {
  next: null,
  prev: null
};
PendingLogoDialog.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  asset: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }).isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  onChangeLogo: (prop_types_default()).func.isRequired,
  prev: (prop_types_default()).string,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_PendingLogoDialog = (PendingLogoDialog);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/stepper.js


const stepper = {
  upload: {
    Component: LogoModalStepper_AddLogoDialog,
    modalTitle: {
      id: "Settings.application.customization.modal.upload",
      defaultMessage: "Upload logo"
    },
    next: "pending",
    prev: null
  },
  pending: {
    Component: LogoModalStepper_PendingLogoDialog,
    modalTitle: {
      id: "Settings.application.customization.modal.pending",
      defaultMessage: "Pending logo"
    },
    next: null,
    prev: "upload"
  }
};
/* harmony default export */ const LogoInput_stepper = (stepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/index.js











const LogoInput = ({
  canUpdate,
  customLogo,
  defaultLogo,
  hint,
  label,
  onChangeLogo,
  onResetLogo
}) => {
  const [{ currentStep }, dispatch] = (0,react.useReducer)(LogoInput_reducer, reducer_initialState);
  const { Component, next, prev, modalTitle } = LogoInput_stepper[currentStep] || {};
  const { formatMessage } = (0,react_intl.useIntl)();
  const goTo = (to) => {
    dispatch({
      type: "GO_TO",
      to
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    CarouselInput/* CarouselInput */.F,
    {
      label,
      selectedSlide: 0,
      hint,
      previousLabel: "",
      nextLabel: "",
      onNext: () => {
      },
      onPrevious: () => {
      },
      secondaryLabel: customLogo?.name || "logo.png",
      actions: /* @__PURE__ */ react.createElement(CarouselActions/* CarouselActions */.b, null, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          disabled: !canUpdate,
          onClick: () => goTo(customLogo ? "pending" : "upload"),
          label: formatMessage({
            id: "Settings.application.customization.carousel.change-action",
            defaultMessage: "Change logo"
          }),
          icon: /* @__PURE__ */ react.createElement(Plus["default"], null)
        }
      ), customLogo && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          disabled: !canUpdate,
          onClick: onResetLogo,
          label: formatMessage({
            id: "Settings.application.customization.carousel.reset-action",
            defaultMessage: "Reset logo"
          }),
          icon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null)
        }
      ))
    },
    /* @__PURE__ */ react.createElement(
      CarouselSlide/* CarouselSlide */.q,
      {
        label: formatMessage({
          id: "Settings.application.customization.carousel-slide.label",
          defaultMessage: "Logo slide"
        })
      },
      /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          maxHeight: "40%",
          maxWidth: "40%",
          as: "img",
          src: customLogo?.url || defaultLogo,
          alt: formatMessage({
            id: "Settings.application.customization.carousel.title",
            defaultMessage: "Logo"
          })
        }
      )
    )
  ), /* @__PURE__ */ react.createElement(
    components_LogoModalStepper,
    {
      Component,
      currentStep,
      onChangeLogo,
      customLogo,
      goTo,
      next,
      prev,
      modalTitle
    }
  ));
};
LogoInput.defaultProps = {
  canUpdate: false,
  customLogo: null,
  hint: null
};
LogoInput.propTypes = {
  canUpdate: (prop_types_default()).bool,
  customLogo: prop_types_default().shape({
    url: (prop_types_default()).string,
    name: (prop_types_default()).string
  }),
  label: (prop_types_default()).string.isRequired,
  hint: (prop_types_default()).string,
  defaultLogo: (prop_types_default()).string.isRequired,
  onChangeLogo: (prop_types_default()).func.isRequired,
  onResetLogo: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_LogoInput = (LogoInput);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/reducer.js

const CustomizationInfos_reducer_initialState = {
  menuLogo: {
    display: null,
    submit: {
      rawFile: null,
      isReset: false
    }
  },
  authLogo: {
    display: null,
    submit: {
      rawFile: null,
      isReset: false
    }
  }
};
const CustomizationInfos_reducer_reducer = (state = CustomizationInfos_reducer_initialState, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "SET_CUSTOM_MENU_LOGO": {
      draftState.menuLogo.display = action.value;
      draftState.menuLogo.submit.rawFile = action.value.rawFile;
      break;
    }
    case "SET_CUSTOM_AUTH_LOGO": {
      draftState.authLogo.display = action.value;
      draftState.authLogo.submit.rawFile = action.value.rawFile;
      break;
    }
    case "RESET_CUSTOM_MENU_LOGO": {
      draftState.menuLogo.display = null;
      draftState.menuLogo.submit = {
        rawFile: null,
        isReset: true
      };
      break;
    }
    case "RESET_CUSTOM_AUTH_LOGO": {
      draftState.authLogo.display = null;
      draftState.authLogo.submit = {
        rawFile: null,
        isReset: true
      };
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const CustomizationInfos_reducer = (CustomizationInfos_reducer_reducer);


// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(82492);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/init.js

const init = (initialState, projectSettingsStored) => {
  const copyInitialState = merge_default()(initialState, {
    menuLogo: {
      display: projectSettingsStored.menuLogo
    },
    authLogo: {
      display: projectSettingsStored.authLogo
    }
  });
  return copyInitialState;
};
/* harmony default export */ const CustomizationInfos_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/index.js












const CustomizationInfos = (0,react.forwardRef)(({ canUpdate, projectSettingsStored }, ref) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const {
    logos: { menu, auth }
  } = (0,hooks/* useConfigurations */.um)();
  const [{ menuLogo, authLogo }, dispatch] = (0,react.useReducer)(
    CustomizationInfos_reducer,
    CustomizationInfos_reducer_initialState,
    () => CustomizationInfos_init(CustomizationInfos_reducer_initialState, projectSettingsStored)
  );
  const handleChangeMenuLogo = (asset) => {
    dispatch({
      type: "SET_CUSTOM_MENU_LOGO",
      value: asset
    });
  };
  const handleResetMenuLogo = () => {
    trackUsage("didClickResetLogo", {
      logo: "menu"
    });
    dispatch({
      type: "RESET_CUSTOM_MENU_LOGO"
    });
  };
  const handleChangeAuthLogo = (asset) => {
    dispatch({
      type: "SET_CUSTOM_AUTH_LOGO",
      value: asset
    });
  };
  const handleResetAuthLogo = () => {
    trackUsage("didClickResetLogo", {
      logo: "auth"
    });
    dispatch({
      type: "RESET_CUSTOM_AUTH_LOGO"
    });
  };
  (0,react.useImperativeHandle)(ref, () => ({
    getValues: () => ({ menuLogo: menuLogo.submit, authLogo: authLogo.submit })
  }));
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 7,
      paddingLeft: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.application.customization",
      defaultMessage: "Customization"
    })),
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(
      {
        id: "Settings.application.customization.size-details",
        defaultMessage: "Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"
      },
      { dimension: DIMENSION, size: SIZE }
    )),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { paddingTop: 4, gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      components_LogoInput,
      {
        canUpdate,
        customLogo: menuLogo.display,
        defaultLogo: menu.default,
        hint: formatMessage({
          id: "Settings.application.customization.menu-logo.carousel-hint",
          defaultMessage: "Replace the logo in the main navigation"
        }),
        label: formatMessage({
          id: "Settings.application.customization.carousel.menu-logo.title",
          defaultMessage: "Menu logo"
        }),
        onChangeLogo: handleChangeMenuLogo,
        onResetLogo: handleResetMenuLogo
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      components_LogoInput,
      {
        canUpdate,
        customLogo: authLogo.display,
        defaultLogo: auth.default,
        hint: formatMessage({
          id: "Settings.application.customization.auth-logo.carousel-hint",
          defaultMessage: "Replace the logo in the authentication pages"
        }),
        label: formatMessage({
          id: "Settings.application.customization.carousel.auth-logo.title",
          defaultMessage: "Auth logo"
        }),
        onChangeLogo: handleChangeAuthLogo,
        onResetLogo: handleResetAuthLogo
      }
    )))
  );
});
CustomizationInfos.defaultProps = {
  canUpdate: false,
  projectSettingsStored: null
};
CustomizationInfos.propTypes = {
  canUpdate: (prop_types_default()).bool,
  projectSettingsStored: prop_types_default().shape({
    menuLogo: prop_types_default().shape({
      url: (prop_types_default()).string,
      name: (prop_types_default()).string
    })
  })
};
/* harmony default export */ const components_CustomizationInfos = (CustomizationInfos);

// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/lodash/transform.js
var transform = __webpack_require__(68718);
var transform_default = /*#__PURE__*/__webpack_require__.n(transform);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/prefixAllUrls.js


const prefixAllUrls = (data) => transform_default()(
  data,
  (result, value, key) => {
    if (value && value.url) {
      result[key] = { ...value, url: (0,build.prefixFileUrlWithBackendUrl)(value.url) };
    } else {
      result[key] = value;
    }
  },
  {}
);
/* harmony default export */ const utils_prefixAllUrls = (prefixAllUrls);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/api.js


const fetchProjectSettings = async () => {
  const { data } = await core_utils/* axiosInstance.get */.be.get("/admin/project-settings");
  return utils_prefixAllUrls(data);
};
const postProjectSettings = async (body) => {
  const { data } = await core_utils/* axiosInstance.post */.be.post("/admin/project-settings", body, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return utils_prefixAllUrls(data);
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/getFormData.js
const getFormData = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value && value.rawFile instanceof File) {
      formData.append(key, value.rawFile);
    }
    if (value && value.isReset) {
      formData.append(key, null);
    }
  });
  return formData;
};
/* harmony default export */ const utils_getFormData = (getFormData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/index.js



















const ApplicationInfosPage = () => {
  const inputsRef = (0,react.useRef)();
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const queryClient = (0,lib.useQueryClient)();
  (0,build.useFocusWhenNavigate)();
  const appInfos = (0,build.useAppInfos)();
  const { shouldUpdateStrapi, latestStrapiReleaseTag, strapiVersion } = appInfos;
  const { updateProjectSettings } = (0,hooks/* useConfigurations */.um)();
  const {
    allowedActions: { canRead, canUpdate }
  } = (0,build.useRBAC)(permissions/* default.settings.project-settings */.Z.settings["project-settings"]);
  const canSubmit = canRead && canUpdate;
  const { data } = (0,lib.useQuery)("project-settings", fetchProjectSettings, { enabled: canRead });
  const currentPlan = appInfos.communityEdition ? "app.components.UpgradePlanModal.text-ce" : "app.components.UpgradePlanModal.text-ee";
  const submitMutation = (0,lib.useMutation)((body) => postProjectSettings(body), {
    async onSuccess({ menuLogo, authLogo }) {
      await queryClient.invalidateQueries("project-settings", { refetchActive: true });
      updateProjectSettings({ menuLogo: menuLogo?.url, authLogo: authLogo?.url });
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canUpdate)
      return;
    const inputValues = inputsRef.current.getValues();
    const formData = utils_getFormData(inputValues);
    submitMutation.mutate(formData, {
      onSuccess() {
        const { menuLogo, authLogo } = inputValues;
        if (menuLogo.rawFile) {
          trackUsage("didChangeLogo", {
            logo: "menu"
          });
        }
        if (authLogo.rawFile) {
          trackUsage("didChangeLogo", {
            logo: "auth"
          });
        }
        toggleNotification({
          type: "success",
          message: formatMessage({ id: "app", defaultMessage: "Saved" })
        });
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occurred" }
        });
      }
    });
  };
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Application" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "Settings.application.title", defaultMessage: "Overview" }),
      subtitle: formatMessage({
        id: "Settings.application.description",
        defaultMessage: "Administration panel\u2019s global information"
      }),
      primaryAction: canSubmit && /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(
    Stack/* Stack */.K,
    {
      spacing: 5,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 7,
      paddingLeft: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.application.strapiVersion",
      defaultMessage: "strapi version"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p" }, "v", strapiVersion), /* @__PURE__ */ react.createElement(
      Link/* Link */.r,
      {
        href: appInfos.communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home",
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "Settings.application.get-help",
        defaultMessage: "Get help"
      })
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.application.edition-title",
      defaultMessage: "current plan"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p" }, formatMessage({
      id: currentPlan,
      defaultMessage: `${appInfos.communityEdition ? "Community Edition" : "Enterprise Edition"}`
    })))),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, shouldUpdateStrapi && /* @__PURE__ */ react.createElement(
      Link/* Link */.r,
      {
        href: `https://github.com/strapi/strapi/releases/tag/${latestStrapiReleaseTag}`,
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "Settings.application.link-upgrade",
        defaultMessage: "Upgrade your admin panel"
      })
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      Link/* Link */.r,
      {
        href: "https://strapi.io/pricing-self-hosted",
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "Settings.application.link-pricing",
        defaultMessage: "See all pricing plans"
      })
    ))),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.application.node-version",
      defaultMessage: "node version"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p" }, appInfos.nodeVersion))
  ), canRead && data && /* @__PURE__ */ react.createElement(
    components_CustomizationInfos,
    {
      canUpdate,
      ref: inputsRef,
      projectSettingsStored: data
    }
  ))))));
};
/* harmony default export */ const pages_ApplicationInfosPage = (ApplicationInfosPage);

// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(94654);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/utils/createSectionsRoutes.js


const createSectionsRoutes = (settings) => {
  const allLinks = flatMap_default()(settings, (section) => section.links);
  return allLinks.map((link) => (0,utils/* createRoute */.ot)(link.Component, link.to, link.exact || false));
};
/* harmony default export */ const utils_createSectionsRoutes = (createSectionsRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/utils/getSectionsToDisplay.js
const getSectionsToDisplay = (menu) => {
  return menu.filter((section) => !section.links.every((link) => link.isDisplayed === false));
};
/* harmony default export */ const utils_getSectionsToDisplay = (getSectionsToDisplay);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/utils/defaultRoutes.js
var RolesCreatePage=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(26789)/* ["default"] */ .Z);}return (__webpack_require__(73871)/* ["default"] */ .Z);}();var ProtectedRolesListPage=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(64527)/* ["default"] */ .Z);}return (__webpack_require__(85302)/* ["default"] */ .Z);}();var defaultRoutes=[{Component:function Component(){return{"default":ProtectedRolesListPage};},to:'/settings/roles',exact:true},{Component:function Component(){return{"default":RolesCreatePage};},to:'/settings/roles/duplicate/:id',exact:true},{Component:function Component(){return{"default":RolesCreatePage};},to:'/settings/roles/new',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var component;return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return __webpack_require__.e(/* import() | admin-edit-roles-page */ 2544).then(__webpack_require__.bind(__webpack_require__, 92100));case 2:component=_context.sent;return _context.abrupt("return",component);case 4:case"end":return _context.stop();}},_callee);}))();},to:'/settings/roles/:id',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){var component;return regenerator_default().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return __webpack_require__.e(/* import() | admin-users */ 5199).then(__webpack_require__.bind(__webpack_require__, 46903));case 2:component=_context2.sent;return _context2.abrupt("return",component);case 4:case"end":return _context2.stop();}},_callee2);}))();},to:'/settings/users',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){var component;return regenerator_default().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return __webpack_require__.e(/* import() | admin-edit-users */ 4263).then(__webpack_require__.bind(__webpack_require__, 22282));case 2:component=_context3.sent;return _context3.abrupt("return",component);case 4:case"end":return _context3.stop();}},_callee3);}))();},to:'/settings/users/:id',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee4(){var component;return regenerator_default().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:_context4.next=2;return __webpack_require__.e(/* import() | webhook-edit-page */ 5162).then(__webpack_require__.bind(__webpack_require__, 3672));case 2:component=_context4.sent;return _context4.abrupt("return",component);case 4:case"end":return _context4.stop();}},_callee4);}))();},to:'/settings/webhooks/create',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee5(){var component;return regenerator_default().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:_context5.next=2;return __webpack_require__.e(/* import() | webhook-edit-page */ 5162).then(__webpack_require__.bind(__webpack_require__, 9311));case 2:component=_context5.sent;return _context5.abrupt("return",component);case 4:case"end":return _context5.stop();}},_callee5);}))();},to:'/settings/webhooks/:id',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee6(){var component;return regenerator_default().wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:_context6.next=2;return __webpack_require__.e(/* import() | webhook-list-page */ 4121).then(__webpack_require__.bind(__webpack_require__, 11199));case 2:component=_context6.sent;return _context6.abrupt("return",component);case 4:case"end":return _context6.stop();}},_callee6);}))();},to:'/settings/webhooks',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee7(){var component;return regenerator_default().wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:_context7.next=2;return __webpack_require__.e(/* import() | api-tokens-list-page */ 8056).then(__webpack_require__.bind(__webpack_require__, 8421));case 2:component=_context7.sent;return _context7.abrupt("return",component);case 4:case"end":return _context7.stop();}},_callee7);}))();},to:'/settings/api-tokens',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee8(){var component;return regenerator_default().wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:_context8.next=2;return Promise.all(/* import() | api-tokens-create-page */[__webpack_require__.e(4225), __webpack_require__.e(7375), __webpack_require__.e(4299)]).then(__webpack_require__.bind(__webpack_require__, 9683));case 2:component=_context8.sent;return _context8.abrupt("return",component);case 4:case"end":return _context8.stop();}},_callee8);}))();},to:'/settings/api-tokens/create',exact:true},{Component:function Component(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee9(){var component;return regenerator_default().wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:_context9.next=2;return Promise.all(/* import() | api-tokens-edit-page */[__webpack_require__.e(4225), __webpack_require__.e(7375), __webpack_require__.e(92)]).then(__webpack_require__.bind(__webpack_require__, 28465));case 2:component=_context9.sent;return _context9.abrupt("return",component);case 4:case"end":return _context9.stop();}},_callee9);}))();},to:'/settings/api-tokens/:id',exact:true}];/* harmony default export */ const utils_defaultRoutes = (defaultRoutes);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/utils/routes.js
// This file makes it easier to make the difference between the ee and ce version
var customRoutes=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(5420)/* ["default"] */ .Z);}return (__webpack_require__(35301)/* ["default"] */ .Z);}();/* harmony default export */ const routes = ([].concat((0,toConsumableArray/* default */.Z)(customRoutes),(0,toConsumableArray/* default */.Z)(utils_defaultRoutes)));
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/utils/index.js




// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.js
var SubNav = __webpack_require__(53192);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js + 1 modules
var SubNavHeader = __webpack_require__(38702);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.js
var SubNavSections = __webpack_require__(34446);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js + 1 modules
var SubNavSection = __webpack_require__(29489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.js
var SubNavLink = __webpack_require__(52305);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/SettingsNav/index.js






const SettingsNav = ({ menu }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const filteredMenu = utils_getSectionsToDisplay(menu);
  const sections = filteredMenu.map((section) => {
    return {
      ...section,
      title: section.intlLabel,
      links: section.links.map((link) => {
        return {
          ...link,
          title: link.intlLabel,
          name: link.id
        };
      })
    };
  });
  const label = formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  });
  return /* @__PURE__ */ react.createElement(SubNav/* SubNav */.m, { ariaLabel: label }, /* @__PURE__ */ react.createElement(SubNavHeader/* SubNavHeader */.p, { label }), /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, sections.map((section) => /* @__PURE__ */ react.createElement(SubNavSection/* SubNavSection */.D, { key: section.id, label: formatMessage(section.intlLabel) }, section.links.map((link) => /* @__PURE__ */ react.createElement(SubNavLink/* SubNavLink */.E, { as: react_router_dom_min.NavLink, withBullet: link.hasNotification, to: link.to, key: link.id }, formatMessage(link.intlLabel)))))));
};
SettingsNav.propTypes = {
  menu: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_SettingsNav = (SettingsNav);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/index.js











function SettingsPage() {
  const { settingId } = (0,react_router_dom_min.useParams)();
  const { settings } = (0,build.useStrapiApp)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { isLoading, menu } = (0,hooks/* useSettingsMenu */.Te)();
  const adminRoutes = (0,react.useMemo)(() => {
    return (0,utils/* makeUniqueRoutes */.WW)(
      routes.map(({ to, Component, exact }) => (0,utils/* createRoute */.ot)(Component, to, exact))
    );
  }, []);
  const pluginsRoutes = utils_createSectionsRoutes(settings);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  if (!settingId) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: "/settings/application-infos" });
  }
  const settingTitle = formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  });
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, { sideNav: /* @__PURE__ */ react.createElement(components_SettingsNav, { menu }) }, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title: settingTitle }), /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/settings/application-infos", component: pages_ApplicationInfosPage, exact: true }), adminRoutes, pluginsRoutes));
}
/* harmony default export */ const pages_SettingsPage = ((0,react.memo)(SettingsPage));



/***/ }),

/***/ 73871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49656);


const CreatePage = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, { to: "/404" });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePage);


/***/ }),

/***/ 79578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 56195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 35820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 53558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 99047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 28834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Permissions)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 2 modules
var Tabs = __webpack_require__(60633);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronDown.js
var ChevronDown = __webpack_require__(66942);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronUp.js
var ChevronUp = __webpack_require__(52337);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsButton/index.js






const Wrapper = styled_components_browser_esm["default"].div`
  position: relative;

  ${({ hasConditions, disabled, theme }) => hasConditions && `
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20 / 16}rem;;
      background: ${disabled ? theme.colors.neutral100 : theme.colors.primary600};
    }
  `}
`;
const ConditionsButton = ({ onClick, className, hasConditions, variant }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Wrapper, { hasConditions, className }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant, startIcon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null), onClick }, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })));
};
ConditionsButton.defaultProps = {
  className: null,
  hasConditions: false,
  variant: "tertiary"
};
ConditionsButton.propTypes = {
  onClick: (prop_types_default()).func.isRequired,
  className: (prop_types_default()).string,
  hasConditions: (prop_types_default()).bool,
  variant: (prop_types_default()).string
};
/* harmony default export */ const components_ConditionsButton = ((0,styled_components_browser_esm["default"])(ConditionsButton)``);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60612);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelectNested.js
var MultiSelectNested = __webpack_require__(38953);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/ActionRow/utils/options.js

const getSelectedValues = (rawValue) => Object.values(rawValue).map(
  (x) => Object.entries(x).filter(([, value]) => value).map(([key]) => key)
).flat();
const getNestedOptions = (options) => options.reduce((acc, [label, children]) => {
  acc.push({
    label: upperFirst_default()(label),
    children: children.map((child) => ({
      label: child.displayName,
      value: child.id
    }))
  });
  return acc;
}, []);
const getNewStateFromChangedValues = (options, changedValues) => options.map(([, values]) => values).flat().reduce((acc, curr) => ({ [curr.id]: changedValues.includes(curr.id), ...acc }), {});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/ActionRow/index.js
var IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(53273)/* ["default"] */ .Z);}return (__webpack_require__(79578)/* ["default"] */ .Z);}();var ActionRow=function ActionRow(_ref){var arrayOfOptionsGroupedByCategory=_ref.arrayOfOptionsGroupedByCategory,isFormDisabled=_ref.isFormDisabled,isGrey=_ref.isGrey,label=_ref.label,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var handleChange=function handleChange(val){onChange(name,getNewStateFromChangedValues(arrayOfOptionsGroupedByCategory,val));};return/*#__PURE__*/react.createElement(Flex/* Flex */.k,{as:"li",background:isGrey?'neutral100':'neutral0',paddingBottom:3,paddingTop:3},/*#__PURE__*/react.createElement(Flex/* Flex */.k,{paddingLeft:6,style:{width:180}},/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"sigma",textColor:"neutral600"},formatMessage({id:'Settings.permissions.conditions.can',defaultMessage:'Can'}),"\xA0"),/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"sigma",title:label,textColor:"primary600",ellipsis:true},formatMessage({id:"Settings.roles.form.permissions.".concat(label.toLowerCase()),defaultMessage:label})),/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",formatMessage({id:'Settings.permissions.conditions.when',defaultMessage:'When'}))),/*#__PURE__*/react.createElement(Box/* Box */.x,{style:{maxWidth:430,width:'100%'}},/*#__PURE__*/react.createElement(MultiSelectNested/* MultiSelectNested */.Q,{id:name,customizeContent:function customizeContent(values){return"".concat(values.length," currently selected");},onChange:handleChange,value:getSelectedValues(value),options:getNestedOptions(arrayOfOptionsGroupedByCategory),disabled:isFormDisabled||IS_DISABLED})));};ActionRow.propTypes={arrayOfOptionsGroupedByCategory:(prop_types_default()).array.isRequired,isFormDisabled:(prop_types_default()).bool.isRequired,isGrey:(prop_types_default()).bool.isRequired,label:(prop_types_default()).string.isRequired,name:(prop_types_default()).string.isRequired,value:(prop_types_default()).object.isRequired,onChange:(prop_types_default()).func.isRequired};/* harmony default export */ const ConditionsModal_ActionRow = (ActionRow);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/utils/createDefaultConditionsForm.js

const createConditionsForm = (conditions, valueObject) => {
  return conditions.reduce((acc, current) => {
    acc[current.id] = (0,lodash.get)(valueObject, current.id, false);
    return acc;
  }, {});
};
const createCategoryForm = (arrayOfOptions, valueObject) => {
  return arrayOfOptions.reduce((acc, current) => {
    const [categoryName, relatedConditions] = current;
    const conditionsForm = createConditionsForm(relatedConditions, valueObject);
    acc[categoryName] = conditionsForm;
    return acc;
  }, {});
};
const createDefaultConditionsForm = (actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory) => {
  return actionsToDisplay.reduce((acc, current) => {
    const valueFromModifiedData = (0,lodash.get)(
      modifiedData,
      [...current.pathToConditionsObject, "conditions"],
      {}
    );
    const categoryDefaultForm = createCategoryForm(
      arrayOfOptionsGroupedByCategory,
      valueFromModifiedData
    );
    acc[current.pathToConditionsObject.join("..")] = categoryDefaultForm;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultConditionsForm = (createDefaultConditionsForm);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/index.js














const ConditionsModal = ({ actions, headerBreadCrumbs, isFormDisabled, onClosed, onToggle }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { availableConditions, modifiedData, onChangeConditions } = (0,hooks/* usePermissionsDataManager */.$_)();
  const arrayOfOptionsGroupedByCategory = (0,react.useMemo)(() => {
    return Object.entries(groupBy_default()(availableConditions, "category"));
  }, [availableConditions]);
  const actionsToDisplay = actions.filter(
    ({ isDisplayed, hasSomeActionsSelected, hasAllActionsSelected }) => isDisplayed && (hasSomeActionsSelected || hasAllActionsSelected)
  );
  const initState = (0,react.useMemo)(() => {
    return utils_createDefaultConditionsForm(
      actionsToDisplay,
      modifiedData,
      arrayOfOptionsGroupedByCategory
    );
  }, [actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory]);
  const [state, setState] = (0,react.useState)(initState);
  const handleChange = (name, values) => {
    setState(
      (0,immer_esm["default"])((draft) => {
        if (!draft[name]) {
          draft[name] = {};
        }
        if (!draft[name].default) {
          draft[name].default = {};
        }
        draft[name].default = values;
      })
    );
  };
  const handleSubmit = () => {
    const conditionsWithoutCategory = Object.entries(state).reduce((acc, current) => {
      const [key, value] = current;
      const merged = Object.values(value).reduce((acc1, current1) => {
        return { ...acc1, ...current1 };
      }, {});
      acc[key] = merged;
      return acc;
    }, {});
    onChangeConditions(conditionsWithoutCategory);
    onToggle();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { labelledBy: "condition-modal-breadcrumbs", onClose: onClosed }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { id: "condition-modal-breadcrumbs", label: headerBreadCrumbs.join(", ") }, headerBreadCrumbs.map((label) => /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, { key: label }, upperFirst_default()(
    formatMessage({
      id: label,
      defaultMessage: label
    })
  ))))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, actionsToDisplay.length === 0 && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.permissions.conditions.no-actions",
    defaultMessage: "You first need to select actions (create, read, update, ...) before defining conditions on them."
  })), /* @__PURE__ */ react.createElement("ul", null, actionsToDisplay.map(({ actionId, label, pathToConditionsObject }, index) => {
    const name = pathToConditionsObject.join("..");
    return /* @__PURE__ */ react.createElement(
      ConditionsModal_ActionRow,
      {
        key: actionId,
        arrayOfOptionsGroupedByCategory,
        label,
        isFormDisabled,
        isGrey: index % 2 === 0,
        name,
        onChange: handleChange,
        value: get_default()(state, name, {})
      }
    );
  }))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onToggle }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleSubmit }, formatMessage({
        id: "Settings.permissions.conditions.apply",
        defaultMessage: "Apply"
      }))
    }
  ));
};
ConditionsModal.propTypes = {
  actions: prop_types_default().arrayOf(
    prop_types_default().shape({
      actionId: (prop_types_default()).string.isRequired,
      checkboxName: (prop_types_default()).string,
      hasSomeActionsSelected: (prop_types_default()).bool.isRequired,
      hasAllActionsSelected: (prop_types_default()).bool,
      isDisplayed: (prop_types_default()).bool.isRequired,
      label: (prop_types_default()).string
    })
  ).isRequired,
  headerBreadCrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  onClosed: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ConditionsModal = (ConditionsModal);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/constants.js
const cellWidth = `${120 / 16}rem`;
const firstRowWidth = `${200 / 16}rem`;
const rowHeight = `${53 / 16}rem`;

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/HiddenAction/index.js


const HiddenAction = styled_components_browser_esm["default"].div`
  width: ${cellWidth};
`;
/* harmony default export */ const components_HiddenAction = (HiddenAction);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/CollapseLabel/index.js


const CollapseLabel = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  padding-right: ${({ theme }) => theme.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({ isCollapsable }) => isCollapsable && "cursor: pointer;"}
`;
/* harmony default export */ const components_CollapseLabel = (CollapseLabel);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RowLabelWithCheckbox/index.js










const RowLabelWithCheckbox = ({
  children,
  isCollapsable,
  isActive,
  isFormDisabled,
  label,
  onChange,
  onClick,
  checkboxName,
  someChecked,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", paddingLeft: 6, style: { width: firstRowWidth, flexShrink: 0 } }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(
    BaseCheckbox/* BaseCheckbox */.C,
    {
      name: checkboxName,
      "aria-label": formatMessage(
        {
          id: `Settings.permissions.select-all-by-permission`,
          defaultMessage: "Select all {label} permissions"
        },
        { label }
      ),
      disabled: isFormDisabled,
      onValueChange: (value2) => onChange({
        target: {
          name: checkboxName,
          value: value2
        }
      }),
      indeterminate: someChecked,
      value
    }
  )), /* @__PURE__ */ react.createElement(
    components_CollapseLabel,
    {
      title: label,
      alignItems: "center",
      isCollapsable,
      ...isCollapsable && {
        onClick,
        "aria-expanded": isActive,
        onKeyDown: ({ key }) => (key === "Enter" || key === " ") && onClick(),
        tabIndex: 0,
        role: "button"
      }
    },
    /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        fontWeight: isActive ? "bold" : "",
        textColor: isActive ? "primary600" : "neutral800",
        ellipsis: true
      },
      upperFirst_default()(label)
    ),
    children
  ));
};
RowLabelWithCheckbox.defaultProps = {
  children: null,
  checkboxName: "",
  onChange() {
  },
  value: false,
  someChecked: false,
  isCollapsable: false
};
RowLabelWithCheckbox.propTypes = {
  checkboxName: (prop_types_default()).string,
  children: (prop_types_default()).node,
  label: (prop_types_default()).string.isRequired,
  isCollapsable: (prop_types_default()).bool,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  onChange: (prop_types_default()).func,
  onClick: (prop_types_default()).func.isRequired,
  someChecked: (prop_types_default()).bool,
  value: (prop_types_default()).bool,
  isActive: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_RowLabelWithCheckbox = ((0,react.memo)(RowLabelWithCheckbox));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/createArrayOfValues.js

const createArrayOfValues = (obj) => {
  if (!(0,lodash.isObject)(obj)) {
    return [];
  }
  return (0,lodash.flattenDeep)(
    Object.values(obj).map((value) => {
      if ((0,lodash.isObject)(value)) {
        return createArrayOfValues(value);
      }
      return value;
    })
  );
};
/* harmony default export */ const utils_createArrayOfValues = (createArrayOfValues);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/removeConditionKeyFromData.js
const removeConditionKeyFromData = (obj) => {
  if (!obj) {
    return null;
  }
  return Object.keys(obj).reduce((acc, current) => {
    if (current !== "conditions") {
      acc[current] = obj[current];
    }
    return acc;
  }, {});
};
/* harmony default export */ const utils_removeConditionKeyFromData = (removeConditionKeyFromData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/getCheckboxState.js


const getCheckboxState = (dataObj) => {
  const dataWithoutCondition = utils_removeConditionKeyFromData(dataObj);
  const arrayOfValues = utils_createArrayOfValues(dataWithoutCondition);
  if (!arrayOfValues.length) {
    return { hasAllActionsSelected: false, hasSomeActionsSelected: false };
  }
  const hasAllActionsSelected = arrayOfValues.every((val) => val);
  const hasSomeActionsSelected = arrayOfValues.some((val) => val) && !hasAllActionsSelected;
  return { hasAllActionsSelected, hasSomeActionsSelected };
};
/* harmony default export */ const utils_getCheckboxState = (getCheckboxState);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/Collapse/utils/generateCheckboxesActions.js


const generateCheckboxesActions = (availableActions, modifiedData, pathToData) => {
  return availableActions.map(({ actionId, isDisplayed, applyToProperties, label }) => {
    if (!isDisplayed) {
      return { actionId, hasSomeActionsSelected: false, isDisplayed };
    }
    const baseCheckboxNameArray = [...pathToData.split(".."), actionId];
    const checkboxNameArray = (0,lodash.isEmpty)(applyToProperties) ? [...baseCheckboxNameArray, "properties", "enabled"] : baseCheckboxNameArray;
    const checkboxName = checkboxNameArray.join("..");
    const conditionsValue = (0,lodash.get)(modifiedData, [...baseCheckboxNameArray, "conditions"], null);
    const hasConditions = utils_createArrayOfValues(conditionsValue).some((val) => val);
    if ((0,lodash.isEmpty)(applyToProperties)) {
      const value = (0,lodash.get)(modifiedData, checkboxNameArray, false);
      return {
        actionId,
        checkboxName,
        hasAllActionsSelected: value,
        hasConditions,
        hasSomeActionsSelected: value,
        isDisplayed,
        isParentCheckbox: false,
        label,
        pathToConditionsObject: baseCheckboxNameArray
      };
    }
    const mainData = (0,lodash.get)(modifiedData, checkboxNameArray, null);
    const { hasAllActionsSelected, hasSomeActionsSelected } = utils_getCheckboxState(mainData);
    return {
      actionId,
      checkboxName,
      hasAllActionsSelected,
      hasConditions,
      hasSomeActionsSelected,
      isDisplayed,
      isParentCheckbox: true,
      label,
      pathToConditionsObject: baseCheckboxNameArray
    };
  });
};
/* harmony default export */ const utils_generateCheckboxesActions = (generateCheckboxesActions);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/CarretIcon/index.js


const CarretIcon = (0,styled_components_browser_esm["default"])(CarretDown["default"])`
  display: none;
  width: ${10 / 16}rem;
  transform: rotate(${({ $isActive }) => $isActive ? "180" : "0"}deg);
  margin-left: ${({ theme }) => theme.spaces[2]};
`;
/* harmony default export */ const CollapsePropertyMatrix_CarretIcon = (CarretIcon);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/activeStyle.js


const activeStyle = (theme) => `
  ${Typography/* Typography */.Z} {
    color: ${theme.colors.primary600};
    font-weight: ${theme.fontWeights.bold}
  }
  ${CollapsePropertyMatrix_CarretIcon} {
    display: block;
    path {
      fill: ${theme.colors.primary600}
    };
  }
`;
/* harmony default export */ const utils_activeStyle = (activeStyle);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/Collapse/index.js
var Collapse_IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(20591)/* ["default"] */ .Z);}return (__webpack_require__(56195)/* ["default"] */ .Z);}();var activeRowStyle=function activeRowStyle(theme,isActive){return"\n  ".concat(Collapse_Wrapper," {\n    background-color: ").concat(theme.colors.primary100,";\n    color: ").concat(theme.colors.primary600,";\n    border-radius: ").concat(isActive?'2px 2px 0 0':'2px',";\n  }\n  ").concat(Chevron," {\n    display: flex;\n  }\n  ").concat(components_ConditionsButton," {\n    display: block;\n  }\n  &:hover {\n   ").concat(utils_activeStyle(theme),"\n  }\n\n  &:focus-within {\n    ").concat(function(_ref){var theme=_ref.theme,isActive=_ref.isActive;return activeRowStyle(theme,isActive);},"\n  }\n  \n");};var Collapse_Wrapper=/*#__PURE__*/styled_components_browser_esm["default"].div.withConfig({displayName:"Collapse__Wrapper",componentId:"sc-132fji1-0"})(["flex:1;display:flex;align-items:center;height:",";background-color:",";border:1px solid transparent;"],rowHeight,function(_ref2){var isGrey=_ref2.isGrey,theme=_ref2.theme;return isGrey?theme.colors.neutral100:theme.colors.neutral0;});var BoxWrapper=/*#__PURE__*/styled_components_browser_esm["default"].div.withConfig({displayName:"Collapse__BoxWrapper",componentId:"sc-132fji1-1"})(["display:inline-flex;min-width:100%;","{display:none;}"," &:hover{","}"],components_ConditionsButton,function(_ref3){var isActive=_ref3.isActive,theme=_ref3.theme;return isActive&&activeRowStyle(theme,isActive);},function(_ref4){var theme=_ref4.theme,isActive=_ref4.isActive;return activeRowStyle(theme,isActive);});var Cell=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"Collapse__Cell",componentId:"sc-132fji1-2"})(["width:",";position:relative;"],cellWidth);var Chevron=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({displayName:"Collapse__Chevron",componentId:"sc-132fji1-3"})(["display:none;svg{width:11px;}*{fill:",";}"],function(_ref5){var theme=_ref5.theme;return theme.colors.primary600;});var TinyDot=/*#__PURE__*/styled_components_browser_esm["default"].span.withConfig({displayName:"Collapse__TinyDot",componentId:"sc-132fji1-4"})(["position:absolute;top:-6px;left:37px;width:6px;height:6px;border-radius:20px;background:",";"],function(_ref6){var theme=_ref6.theme;return theme.colors.primary600;});var AbsoluteBox=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({displayName:"Collapse__AbsoluteBox",componentId:"sc-132fji1-5"})(["position:absolute;right:9px;transform:translateY(10px);"]);var Collapse=function Collapse(_ref7){var availableActions=_ref7.availableActions,isActive=_ref7.isActive,isGrey=_ref7.isGrey,isFormDisabled=_ref7.isFormDisabled,label=_ref7.label,onClickToggle=_ref7.onClickToggle,pathToData=_ref7.pathToData;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isModalOpen=_useState2[0],setModalOpen=_useState2[1];var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _usePermissionsDataMa=(0,hooks/* usePermissionsDataManager */.$_)(),modifiedData=_usePermissionsDataMa.modifiedData,onChangeParentCheckbox=_usePermissionsDataMa.onChangeParentCheckbox,onChangeSimpleCheckbox=_usePermissionsDataMa.onChangeSimpleCheckbox;var handleToggleModalIsOpen=function handleToggleModalIsOpen(){setModalOpen(function(s){return!s;});};var handleModalClose=function handleModalClose(){setModalOpen(false);};// This corresponds to the data related to the CT left checkbox
// modifiedData: { collectionTypes: { [ctuid]: {create: {properties: { fields: {f1: true} }, update: {}, ... } } } }
var mainData=get_default()(modifiedData,pathToData.split('..'),{});// The utils we are using: getCheckboxState, retrieves all the boolean leafs of an object in order
// to return the state of checkbox. Since the conditions are not related to the property we need to remove the key from the object.
var dataWithoutCondition=(0,react.useMemo)(function(){return Object.keys(mainData).reduce(function(acc,current){acc[current]=omit_default()(mainData[current],'conditions');return acc;},{});},[mainData]);var _getCheckboxState=utils_getCheckboxState(dataWithoutCondition),hasAllActionsSelected=_getCheckboxState.hasAllActionsSelected,hasSomeActionsSelected=_getCheckboxState.hasSomeActionsSelected;// Here we create an array of <checkbox>, since the state of each one of them is used in
// order to know if whether or not we need to display the associated action in
// the <ConditionsModal />
var checkboxesActions=(0,react.useMemo)(function(){return utils_generateCheckboxesActions(availableActions,modifiedData,pathToData);},[availableActions,modifiedData,pathToData]);var doesConditionButtonHasConditions=checkboxesActions.some(function(_ref8){var hasConditions=_ref8.hasConditions;return hasConditions;});return/*#__PURE__*/react.createElement(BoxWrapper,{isActive:isActive},/*#__PURE__*/react.createElement(Collapse_Wrapper,{isGrey:isGrey},/*#__PURE__*/react.createElement(components_RowLabelWithCheckbox,{isCollapsable:true,isFormDisabled:isFormDisabled,label:label,checkboxName:pathToData,onChange:onChangeParentCheckbox,onClick:onClickToggle,someChecked:hasSomeActionsSelected,value:hasAllActionsSelected,isActive:isActive},/*#__PURE__*/react.createElement(Chevron,{paddingLeft:2},isActive?/*#__PURE__*/react.createElement(ChevronUp/* default */.Z,null):/*#__PURE__*/react.createElement(ChevronDown/* default */.Z,null))),/*#__PURE__*/react.createElement(Flex/* Flex */.k,{style:{flex:1}},checkboxesActions.map(function(_ref9){var actionId=_ref9.actionId,hasConditions=_ref9.hasConditions,hasAllActionsSelected=_ref9.hasAllActionsSelected,hasSomeActionsSelected=_ref9.hasSomeActionsSelected,isDisplayed=_ref9.isDisplayed,isParentCheckbox=_ref9.isParentCheckbox,checkboxName=_ref9.checkboxName,permissionLabel=_ref9.label;if(!isDisplayed){return/*#__PURE__*/react.createElement(components_HiddenAction,{key:actionId});}if(isParentCheckbox){return/*#__PURE__*/react.createElement(Cell,{key:actionId,justifyContent:"center",alignItems:"center"},hasConditions&&/*#__PURE__*/react.createElement(TinyDot,null),/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||Collapse_IS_DISABLED,name:checkboxName,"aria-label":formatMessage({id:"Settings.permissions.select-by-permission",defaultMessage:'Select {label} permission'},{label:"".concat(permissionLabel," ").concat(label)})// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeParentCheckbox({target:{name:checkboxName,value:value}});},indeterminate:hasSomeActionsSelected,value:hasAllActionsSelected}));}return/*#__PURE__*/react.createElement(Cell,{key:actionId,justifyContent:"center",alignItems:"center"},hasConditions&&/*#__PURE__*/react.createElement(TinyDot,null),/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||Collapse_IS_DISABLED,indeterminate:hasConditions,name:checkboxName// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeSimpleCheckbox({target:{name:checkboxName,value:value}});},value:hasAllActionsSelected}));})),isModalOpen&&/*#__PURE__*/react.createElement(components_ConditionsModal,{headerBreadCrumbs:[label,'Settings.permissions.conditions.conditions'],actions:checkboxesActions,isFormDisabled:isFormDisabled,onClosed:handleModalClose,onToggle:handleToggleModalIsOpen})),/*#__PURE__*/react.createElement(AbsoluteBox,null,/*#__PURE__*/react.createElement(components_ConditionsButton,{onClick:handleToggleModalIsOpen,hasConditions:doesConditionButtonHasConditions})));};Collapse.propTypes={availableActions:(prop_types_default()).array.isRequired,isActive:(prop_types_default()).bool.isRequired,isGrey:(prop_types_default()).bool.isRequired,isFormDisabled:(prop_types_default()).bool.isRequired,label:(prop_types_default()).string.isRequired,onClickToggle:(prop_types_default()).func.isRequired,pathToData:(prop_types_default()).string.isRequired};/* harmony default export */ const ContentTypeCollapse_Collapse = (Collapse);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/utils/generateHeadersFromActions.js
const generateHeadersFromActions = (actions, propertyName) => {
  return actions.map((action) => {
    const isActionRelatedToCurrentProperty = Array.isArray(action.applyToProperties) && action.applyToProperties.indexOf(propertyName) !== -1 && action.isDisplayed;
    return { label: action.label, actionId: action.actionId, isActionRelatedToCurrentProperty };
  });
};
/* harmony default export */ const utils_generateHeadersFromActions = (generateHeadersFromActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/Header/index.js







const HeaderLabel = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  width: ${cellWidth};
  flex-shrink: 0;
`;
const PropertyLabelWrapper = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  width: ${firstRowWidth};
  height: ${rowHeight};
  flex-shrink: 0;
`;
const Header = ({ headers, label }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const translatedLabel = formatMessage(
    {
      id: "Settings.roles.form.permission.property-label",
      defaultMessage: "{label} permissions"
    },
    { label }
  );
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(PropertyLabelWrapper, { alignItems: "center", paddingLeft: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral500" }, translatedLabel)), headers.map((header) => {
    if (!header.isActionRelatedToCurrentProperty) {
      return /* @__PURE__ */ react.createElement(HeaderLabel, { key: header.label });
    }
    return /* @__PURE__ */ react.createElement(HeaderLabel, { justifyContent: "center", key: header.label }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral500" }, formatMessage({
      id: `Settings.roles.form.permissions.${header.label.toLowerCase()}`,
      defaultMessage: header.label
    })));
  }));
};
Header.propTypes = {
  headers: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      isActionRelatedToCurrentProperty: (prop_types_default()).bool.isRequired
    })
  ).isRequired,
  label: (prop_types_default()).string.isRequired
};
/* harmony default export */ const CollapsePropertyMatrix_Header = (Header);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RequiredSign/index.js


const Required = styled_components_browser_esm["default"].span`
  color: ${({ theme }) => theme.colors.danger700};
  padding-left: ${({ theme }) => theme.spaces[1]}px;
`;
const RequiredSign = () => /* @__PURE__ */ react.createElement(Required, null, "*");
/* harmony default export */ const components_RequiredSign = (RequiredSign);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/getAvailableActions.js
const getAvailableActions = (actions, targetSubject) => {
  return actions.map((action) => {
    const isDisplayed = Array.isArray(action.subjects) && action.subjects.indexOf(targetSubject) !== -1;
    return { ...action, isDisplayed };
  });
};
/* harmony default export */ const utils_getAvailableActions = (getAvailableActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/index.js



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Curve/index.js




const StyledBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme }) => theme.colors.primary200};
    display: block;
  }
`;
const Svg = styled_components_browser_esm["default"].svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(
  Svg,
  {
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
  /* @__PURE__ */ react.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",
      fill: "#D9D8FF"
    }
  )
));
Curve.defaultProps = {
  fill: "primary200"
};
Curve.propTypes = {
  fill: (prop_types_default()).string
};
/* harmony default export */ const components_Curve = ((0,react.memo)(Curve));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/SubActionRow/index.js
var SubActionRow_IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(76766)/* ["default"] */ .Z);}return (__webpack_require__(53558)/* ["default"] */ .Z);}();var SubActionRow_Cell=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"SubActionRow__Cell",componentId:"sc-7y8yzq-0"})(["width:",";position:relative;"],cellWidth);var RowWrapper=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"SubActionRow__RowWrapper",componentId:"sc-7y8yzq-1"})(["height:",";"],rowHeight);var SubActionRow_Wrapper=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({displayName:"SubActionRow__Wrapper",componentId:"sc-7y8yzq-2"})(["padding-left:","rem;"],31/16);var LeftBorderTimeline=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({displayName:"SubActionRow__LeftBorderTimeline",componentId:"sc-7y8yzq-3"})(["border-left:",";"],function(_ref){var isVisible=_ref.isVisible,theme=_ref.theme;return isVisible?"4px solid ".concat(theme.colors.primary200):'4px solid transparent';});var RowStyle=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"SubActionRow__RowStyle",componentId:"sc-7y8yzq-4"})(["padding-left:",";width:","px;"," ",";"],function(_ref2){var theme=_ref2.theme;return theme.spaces[4];},function(_ref3){var level=_ref3.level;return 145-level*36;},function(_ref4){var isCollapsable=_ref4.isCollapsable,theme=_ref4.theme;return isCollapsable&&"\n      ".concat(CollapsePropertyMatrix_CarretIcon," {\n        display: block;\n        color: ").concat(theme.colors.neutral100,";\n      }\n      &:hover {\n        ").concat(utils_activeStyle(theme),"\n      }\n  ");},function(_ref5){var isActive=_ref5.isActive,theme=_ref5.theme;return isActive&&utils_activeStyle(theme);});var TopTimeline=/*#__PURE__*/styled_components_browser_esm["default"].div.withConfig({displayName:"SubActionRow__TopTimeline",componentId:"sc-7y8yzq-5"})(["padding-top:",";margin-top:",";width:","rem;background-color:",";border-top-left-radius:2px;border-top-right-radius:2px;"],function(_ref6){var theme=_ref6.theme;return theme.spaces[2];},function(_ref7){var theme=_ref7.theme;return theme.spaces[2];},4/16,function(_ref8){var theme=_ref8.theme;return theme.colors.primary200;});var SubActionRow=function SubActionRow(_ref9){var childrenForm=_ref9.childrenForm,isFormDisabled=_ref9.isFormDisabled,recursiveLevel=_ref9.recursiveLevel,pathToDataFromActionRow=_ref9.pathToDataFromActionRow,propertyActions=_ref9.propertyActions,parentName=_ref9.parentName,propertyName=_ref9.propertyName;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _usePermissionsDataMa=(0,hooks/* usePermissionsDataManager */.$_)(),modifiedData=_usePermissionsDataMa.modifiedData,onChangeParentCheckbox=_usePermissionsDataMa.onChangeParentCheckbox,onChangeSimpleCheckbox=_usePermissionsDataMa.onChangeSimpleCheckbox;var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),rowToOpen=_useState2[0],setRowToOpen=_useState2[1];var handleClickToggleSubLevel=function handleClickToggleSubLevel(name){setRowToOpen(function(prev){if(prev===name){return null;}return name;});};var displayedRecursiveChildren=(0,react.useMemo)(function(){if(!rowToOpen){return null;}return childrenForm.find(function(_ref10){var value=_ref10.value;return value===rowToOpen;});},[rowToOpen,childrenForm]);return/*#__PURE__*/react.createElement(SubActionRow_Wrapper,null,/*#__PURE__*/react.createElement(TopTimeline,null),childrenForm.map(function(_ref11,index){var label=_ref11.label,value=_ref11.value,required=_ref11.required,subChildrenForm=_ref11.children;var isVisible=index+1<childrenForm.length;var isArrayType=Array.isArray(subChildrenForm);var isActive=rowToOpen===value;return/*#__PURE__*/react.createElement(LeftBorderTimeline,{key:value,isVisible:isVisible},/*#__PURE__*/react.createElement(RowWrapper,null,/*#__PURE__*/react.createElement(components_Curve,{color:"primary200"}),/*#__PURE__*/react.createElement(Flex/* Flex */.k,{style:{flex:1}},/*#__PURE__*/react.createElement(RowStyle,{level:recursiveLevel,isActive:isActive,isCollapsable:isArrayType},/*#__PURE__*/react.createElement(components_CollapseLabel,(0,esm_extends/* default */.Z)({alignItems:"center",isCollapsable:isArrayType},isArrayType&&{onClick:function onClick(){return handleClickToggleSubLevel(value);},'aria-expanded':isActive,onKeyDown:function onKeyDown(_ref12){var key=_ref12.key;return(key==='Enter'||key===' ')&&handleClickToggleSubLevel(value);},tabIndex:0,role:'button'},{title:label}),/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{ellipsis:true},upperFirst_default()(label)),required&&/*#__PURE__*/react.createElement(components_RequiredSign,null),/*#__PURE__*/react.createElement(CollapsePropertyMatrix_CarretIcon,{$isActive:isActive}))),/*#__PURE__*/react.createElement(Flex/* Flex */.k,{style:{flex:1}},propertyActions.map(function(_ref13){var actionId=_ref13.actionId,propertyLabel=_ref13.label,isActionRelatedToCurrentProperty=_ref13.isActionRelatedToCurrentProperty;if(!isActionRelatedToCurrentProperty){return/*#__PURE__*/react.createElement(components_HiddenAction,{key:actionId});}/*
                       * Usually we use a 'dot' in order to know the key path of an object for which we want to change the value.
                       * Since an action and a subject are both separated by '.' or '::' we chose to use the '..' separators
                       */var checkboxName=[].concat((0,toConsumableArray/* default */.Z)(pathToDataFromActionRow.split('..')),[actionId,'properties',propertyName],(0,toConsumableArray/* default */.Z)(parentName.split('..')),[value]);var checkboxValue=get_default()(modifiedData,checkboxName,false);if(!subChildrenForm){return/*#__PURE__*/react.createElement(SubActionRow_Cell,{key:propertyLabel,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||SubActionRow_IS_DISABLED,name:checkboxName.join('..'),"aria-label":formatMessage({id:"Settings.permissions.select-by-permission",defaultMessage:'Select {label} permission'},{label:"".concat(parentName," ").concat(label," ").concat(propertyLabel)})// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeSimpleCheckbox({target:{name:checkboxName.join('..'),value:value}});},value:checkboxValue}));}var _getCheckboxState=utils_getCheckboxState(checkboxValue),hasAllActionsSelected=_getCheckboxState.hasAllActionsSelected,hasSomeActionsSelected=_getCheckboxState.hasSomeActionsSelected;return/*#__PURE__*/react.createElement(SubActionRow_Cell,{key:propertyLabel,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{key:propertyLabel,disabled:isFormDisabled||SubActionRow_IS_DISABLED,name:checkboxName.join('..'),"aria-label":formatMessage({id:"Settings.permissions.select-by-permission",defaultMessage:'Select {label} permission'},{label:"".concat(parentName," ").concat(label," ").concat(propertyLabel)})// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeParentCheckbox({target:{name:checkboxName.join('..'),value:value}});},value:hasAllActionsSelected,indeterminate:hasSomeActionsSelected}));})))),displayedRecursiveChildren&&isActive&&/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingBottom:2},/*#__PURE__*/react.createElement(SubActionRow,{isFormDisabled:isFormDisabled,parentName:"".concat(parentName,"..").concat(value),pathToDataFromActionRow:pathToDataFromActionRow,propertyActions:propertyActions,propertyName:propertyName,recursiveLevel:recursiveLevel+1,childrenForm:displayedRecursiveChildren.children})));}));};SubActionRow.propTypes={childrenForm:(prop_types_default()).array.isRequired,isFormDisabled:(prop_types_default()).bool.isRequired,parentName:(prop_types_default()).string.isRequired,pathToDataFromActionRow:(prop_types_default()).string.isRequired,propertyActions:(prop_types_default()).array.isRequired,propertyName:(prop_types_default()).string.isRequired,recursiveLevel:(prop_types_default()).number.isRequired};/* harmony default export */ const CollapsePropertyMatrix_SubActionRow = (/*#__PURE__*/(0,react.memo)(SubActionRow));
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/ActionRow/utils/getRowLabelCheckboxeState.js


const getActionIdsFromPropertyActions = (propertyActions) => {
  const actionIds = propertyActions.reduce((acc, current) => {
    if (current.isActionRelatedToCurrentProperty) {
      acc.push(current.actionId);
    }
    return acc;
  }, []);
  return actionIds;
};
const getRowLabelCheckboxeState = (propertyActions, modifiedData, pathToContentType, propertyToCheck, targetKey) => {
  const actionIds = getActionIdsFromPropertyActions(propertyActions);
  const data = actionIds.reduce((acc, current) => {
    const pathToData = [
      ...pathToContentType.split(".."),
      current,
      "properties",
      propertyToCheck,
      targetKey
    ];
    const mainData = (0,lodash.get)(modifiedData, pathToData, false);
    acc[current] = mainData;
    return acc;
  }, {});
  return utils_getCheckboxState(data);
};
/* harmony default export */ const utils_getRowLabelCheckboxeState = (getRowLabelCheckboxeState);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/ActionRow/index.js
var ActionRow_IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(74512)/* ["default"] */ .Z);}return (__webpack_require__(35820)/* ["default"] */ .Z);}();var ActionRow_Cell=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"ActionRow__Cell",componentId:"sc-4agenc-0"})(["width:",";position:relative;"],cellWidth);var ActionRow_Wrapper=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Flex/* Flex */.k).withConfig({displayName:"ActionRow__Wrapper",componentId:"sc-4agenc-1"})(["height:",";flex:1;"," ",";"],rowHeight,function(_ref){var isCollapsable=_ref.isCollapsable,theme=_ref.theme;return isCollapsable&&"\n      ".concat(CollapsePropertyMatrix_CarretIcon," {\n        display: block;\n        color: ").concat(theme.colors.neutral100,";\n      }\n      &:hover {\n        ").concat(utils_activeStyle(theme),"\n      }\n  ");},function(_ref2){var isActive=_ref2.isActive,theme=_ref2.theme;return isActive&&utils_activeStyle(theme);});var ActionRow_ActionRow=function ActionRow(_ref3){var childrenForm=_ref3.childrenForm,label=_ref3.label,isFormDisabled=_ref3.isFormDisabled,name=_ref3.name,required=_ref3.required,pathToData=_ref3.pathToData,propertyActions=_ref3.propertyActions,propertyName=_ref3.propertyName,isOdd=_ref3.isOdd;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),rowToOpen=_useState2[0],setRowToOpen=_useState2[1];var _usePermissionsDataMa=(0,hooks/* usePermissionsDataManager */.$_)(),modifiedData=_usePermissionsDataMa.modifiedData,onChangeCollectionTypeLeftActionRowCheckbox=_usePermissionsDataMa.onChangeCollectionTypeLeftActionRowCheckbox,onChangeParentCheckbox=_usePermissionsDataMa.onChangeParentCheckbox,onChangeSimpleCheckbox=_usePermissionsDataMa.onChangeSimpleCheckbox;var isActive=rowToOpen===name;var recursiveChildren=(0,react.useMemo)(function(){if(!Array.isArray(childrenForm)){return[];}return childrenForm;},[childrenForm]);var isCollapsable=recursiveChildren.length>0;var handleClick=(0,react.useCallback)(function(){if(isCollapsable){setRowToOpen(function(prev){if(prev===name){return null;}return name;});}},[isCollapsable,name]);var handleChangeLeftRowCheckbox=function handleChangeLeftRowCheckbox(_ref4){var value=_ref4.target.value;onChangeCollectionTypeLeftActionRowCheckbox(pathToData,propertyName,name,value);};var _useMemo=(0,react.useMemo)(function(){return utils_getRowLabelCheckboxeState(propertyActions,modifiedData,pathToData,propertyName,name);},[propertyActions,modifiedData,pathToData,propertyName,name]),hasAllActionsSelected=_useMemo.hasAllActionsSelected,hasSomeActionsSelected=_useMemo.hasSomeActionsSelected;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(ActionRow_Wrapper,{alignItems:"center",isCollapsable:isCollapsable,isActive:isActive,background:isOdd?'neutral100':'neutral0'},/*#__PURE__*/react.createElement(Flex/* Flex */.k,null,/*#__PURE__*/react.createElement(components_RowLabelWithCheckbox,{onChange:handleChangeLeftRowCheckbox,onClick:handleClick,isCollapsable:isCollapsable,isFormDisabled:isFormDisabled,label:label,someChecked:hasSomeActionsSelected,value:hasAllActionsSelected,isActive:isActive},required&&/*#__PURE__*/react.createElement(components_RequiredSign,null),/*#__PURE__*/react.createElement(CollapsePropertyMatrix_CarretIcon,{$isActive:isActive})),/*#__PURE__*/react.createElement(Flex/* Flex */.k,null,propertyActions.map(function(_ref5){var label=_ref5.label,isActionRelatedToCurrentProperty=_ref5.isActionRelatedToCurrentProperty,actionId=_ref5.actionId;if(!isActionRelatedToCurrentProperty){return/*#__PURE__*/react.createElement(components_HiddenAction,{key:label});}var checkboxName=[].concat((0,toConsumableArray/* default */.Z)(pathToData.split('..')),[actionId,'properties',propertyName,name]);if(!isCollapsable){var checkboxValue=get_default()(modifiedData,checkboxName,false);return/*#__PURE__*/react.createElement(ActionRow_Cell,{key:actionId,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||ActionRow_IS_DISABLED,name:checkboxName.join('..'),"aria-label":formatMessage({id:"Settings.permissions.select-by-permission",defaultMessage:'Select {label} permission'},{label:"".concat(name," ").concat(label)})// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeSimpleCheckbox({target:{name:checkboxName.join('..'),value:value}});},value:checkboxValue}));}var data=get_default()(modifiedData,checkboxName,{});var _getCheckboxState=utils_getCheckboxState(data),hasAllActionsSelected=_getCheckboxState.hasAllActionsSelected,hasSomeActionsSelected=_getCheckboxState.hasSomeActionsSelected;return/*#__PURE__*/react.createElement(ActionRow_Cell,{key:label,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||ActionRow_IS_DISABLED,name:checkboxName.join('..')// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeParentCheckbox({target:{name:checkboxName.join('..'),value:value}});},"aria-label":formatMessage({id:"Settings.permissions.select-by-permission",defaultMessage:'Select {label} permission'},{label:"".concat(name," ").concat(label)}),value:hasAllActionsSelected,indeterminate:hasSomeActionsSelected}));})))),isActive&&/*#__PURE__*/react.createElement(CollapsePropertyMatrix_SubActionRow,{childrenForm:recursiveChildren,isFormDisabled:isFormDisabled,parentName:name,pathToDataFromActionRow:pathToData,propertyName:propertyName,propertyActions:propertyActions,recursiveLevel:0}));};ActionRow_ActionRow.defaultProps={childrenForm:[],required:false};ActionRow_ActionRow.propTypes={childrenForm:(prop_types_default()).array,label:(prop_types_default()).string.isRequired,isFormDisabled:(prop_types_default()).bool.isRequired,name:(prop_types_default()).string.isRequired,pathToData:(prop_types_default()).string.isRequired,propertyActions:(prop_types_default()).array.isRequired,propertyName:(prop_types_default()).string.isRequired,required:(prop_types_default()).bool,isOdd:(prop_types_default()).bool.isRequired};/* harmony default export */ const CollapsePropertyMatrix_ActionRow = (/*#__PURE__*/(0,react.memo)(ActionRow_ActionRow));
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/index.js







const CollapsePropertyMatrix_Wrapper = styled_components_browser_esm["default"].div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`;
const CollapsePropertyMatrix = ({
  availableActions,
  childrenForm,
  isFormDisabled,
  label,
  pathToData,
  propertyName
}) => {
  const propertyActions = (0,react.useMemo)(
    () => utils_generateHeadersFromActions(availableActions, propertyName),
    [availableActions, propertyName]
  );
  return /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_Wrapper, null, /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_Header, { label, headers: propertyActions }), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, childrenForm.map(({ children: childrenForm2, label: label2, value, required }, i) => /* @__PURE__ */ react.createElement(
    CollapsePropertyMatrix_ActionRow,
    {
      childrenForm: childrenForm2,
      key: value,
      label: label2,
      isFormDisabled,
      name: value,
      required,
      propertyActions,
      pathToData,
      propertyName,
      isOdd: i % 2 === 0
    }
  ))));
};
CollapsePropertyMatrix.propTypes = {
  childrenForm: (prop_types_default()).array.isRequired,
  availableActions: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  propertyName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ContentTypeCollapse_CollapsePropertyMatrix = (CollapsePropertyMatrix);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/index.js






const ContentTypeCollapse_Wrapper = styled_components_browser_esm["default"].div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({ theme, isActive }) => isActive && `border: 1px solid ${theme.colors.primary600};`}
`;
const ContentTypeCollapse = ({
  allActions,
  contentTypeName,
  label,
  index,
  isActive,
  isFormDisabled,
  onClickToggleCollapse,
  pathToData,
  properties
}) => {
  const handleClickToggleCollapse = (0,react.useCallback)(() => {
    onClickToggleCollapse(contentTypeName);
  }, [contentTypeName, onClickToggleCollapse]);
  const availableActions = (0,react.useMemo)(() => {
    return utils_getAvailableActions(allActions, contentTypeName);
  }, [allActions, contentTypeName]);
  return /* @__PURE__ */ react.createElement(ContentTypeCollapse_Wrapper, { isActive }, /* @__PURE__ */ react.createElement(
    ContentTypeCollapse_Collapse,
    {
      availableActions,
      isActive,
      isGrey: index % 2 === 0,
      isFormDisabled,
      label,
      onClickToggle: handleClickToggleCollapse,
      pathToData
    }
  ), isActive && properties.map(({ label: propertyLabel, value, children: childrenForm }) => {
    return /* @__PURE__ */ react.createElement(
      ContentTypeCollapse_CollapsePropertyMatrix,
      {
        availableActions,
        childrenForm,
        isFormDisabled,
        label: propertyLabel,
        pathToData,
        propertyName: value,
        key: value
      }
    );
  }));
};
ContentTypeCollapse.propTypes = {
  allActions: (prop_types_default()).array.isRequired,
  contentTypeName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  onClickToggleCollapse: (prop_types_default()).func.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  properties: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_ContentTypeCollapse = (ContentTypeCollapse);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapses/index.js



const ContentTypeCollapses = ({ actions, isFormDisabled, pathToData, subjects }) => {
  const [collapseToOpen, setCollapseToOpen] = (0,react.useState)(null);
  const handleClickToggleCollapse = (collapseName) => {
    const nextCollapseToOpen = collapseToOpen === collapseName ? null : collapseName;
    setCollapseToOpen(nextCollapseToOpen);
  };
  return subjects.map(({ uid, label, properties }, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ContentTypeCollapse,
      {
        allActions: actions,
        key: uid,
        contentTypeName: uid,
        label,
        isActive: collapseToOpen === uid,
        isFormDisabled,
        index,
        onClickToggleCollapse: handleClickToggleCollapse,
        pathToData: `${pathToData}..${uid}`,
        properties
      }
    );
  });
};
ContentTypeCollapses.defaultProps = {
  actions: [],
  subjects: []
};
ContentTypeCollapses.propTypes = {
  actions: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  subjects: prop_types_default().arrayOf(
    prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      label: (prop_types_default()).string.isRequired,
      properties: (prop_types_default()).array.isRequired
    })
  )
};
/* harmony default export */ const components_ContentTypeCollapses = ((0,react.memo)(ContentTypeCollapses));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/findDisplayedActions.js
const findDisplayedActions = (actions) => actions.filter(({ subjects }) => subjects && subjects.length);
/* harmony default export */ const utils_findDisplayedActions = (findDisplayedActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/getRowLabelCheckboxesState.js


const getActionsIds = (array) => array.map(({ actionId }) => actionId);
const getRelatedActionIdData = (actionIdArray, dataObj) => {
  return actionIdArray.reduce((acc, actionId) => {
    Object.keys(dataObj).forEach((ctUid) => {
      const actionIdData = (0,lodash.get)(dataObj, [ctUid, actionId], {});
      const actionIdState = { [ctUid]: utils_removeConditionKeyFromData(actionIdData) };
      if (!acc[actionId]) {
        acc[actionId] = actionIdState;
      } else {
        acc[actionId] = { ...acc[actionId], ...actionIdState };
      }
    });
    return acc;
  }, {});
};
const getCheckboxesState = (properties, modifiedData) => {
  const actionsIds = getActionsIds(properties);
  const relatedActionsData = getRelatedActionIdData(actionsIds, modifiedData);
  const checkboxesState = Object.keys(relatedActionsData).reduce((acc, current) => {
    acc[current] = utils_getCheckboxState(relatedActionsData[current]);
    return acc;
  }, {});
  return checkboxesState;
};
/* harmony default export */ const getRowLabelCheckboxesState = (getCheckboxesState);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/index.js
var GlobalActions_IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(85822)/* ["default"] */ .Z);}return (__webpack_require__(99047)/* ["default"] */ .Z);}();var CenteredStack=/*#__PURE__*/(0,styled_components_browser_esm["default"])(Stack/* Stack */.K).withConfig({displayName:"GlobalActions__CenteredStack",componentId:"sc-1vxwsjr-0"})(["align-items:center;justify-content:center;width:",";flex-shrink:0;"],cellWidth);var GlobalActions=function GlobalActions(_ref){var actions=_ref.actions,isFormDisabled=_ref.isFormDisabled,kind=_ref.kind;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _usePermissionsDataMa=(0,hooks/* usePermissionsDataManager */.$_)(),modifiedData=_usePermissionsDataMa.modifiedData,onChangeCollectionTypeGlobalActionCheckbox=_usePermissionsDataMa.onChangeCollectionTypeGlobalActionCheckbox;var displayedActions=(0,react.useMemo)(function(){return utils_findDisplayedActions(actions);},[actions]);var checkboxesState=(0,react.useMemo)(function(){return getRowLabelCheckboxesState(displayedActions,modifiedData[kind]);},[modifiedData,displayedActions,kind]);return/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:firstRowWidth}},/*#__PURE__*/react.createElement(Stack/* Stack */.K,{horizontal:true,spacing:0},displayedActions.map(function(_ref2){var label=_ref2.label,actionId=_ref2.actionId;return/*#__PURE__*/react.createElement(CenteredStack,{key:actionId,spacing:3},/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"sigma",textColor:"neutral500"},formatMessage({id:"Settings.roles.form.permissions.".concat(label.toLowerCase()),defaultMessage:label})),/*#__PURE__*/react.createElement(BaseCheckbox/* BaseCheckbox */.C,{disabled:isFormDisabled||GlobalActions_IS_DISABLED,onValueChange:function onValueChange(value){onChangeCollectionTypeGlobalActionCheckbox(kind,actionId,value);},name:actionId,"aria-label":formatMessage({id:"Settings.permissions.select-all-by-permission",defaultMessage:'Select all {label} permissions'},{label:formatMessage({id:"Settings.roles.form.permissions.".concat(label.toLowerCase()),defaultMessage:label})}),value:get_default()(checkboxesState,[actionId,'hasAllActionsSelected'],false),indeterminate:get_default()(checkboxesState,[actionId,'hasSomeActionsSelected'],false)}));})));};GlobalActions.defaultProps={actions:[]};GlobalActions.propTypes={actions:prop_types_default().arrayOf(prop_types_default().shape({label:(prop_types_default()).string.isRequired,actionId:(prop_types_default()).string.isRequired,subjects:(prop_types_default()).array.isRequired})),isFormDisabled:(prop_types_default()).bool.isRequired,kind:(prop_types_default()).string.isRequired};/* harmony default export */ const components_GlobalActions = (/*#__PURE__*/(0,react.memo)(GlobalActions));
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypes/index.js







const ContentTypes_StyledBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  overflow-x: auto;
`;
const ContentTypes = ({ isFormDisabled, kind, layout: { actions, subjects } }) => {
  const sortedSubjects = sortBy_default()([...subjects], "label");
  return /* @__PURE__ */ react.createElement(ContentTypes_StyledBox, { background: "neutral0" }, /* @__PURE__ */ react.createElement(components_GlobalActions, { actions, kind, isFormDisabled }), /* @__PURE__ */ react.createElement(
    components_ContentTypeCollapses,
    {
      actions,
      isFormDisabled,
      pathToData: kind,
      subjects: sortedSubjects
    }
  ));
};
ContentTypes.propTypes = {
  isFormDisabled: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  layout: prop_types_default().shape({
    actions: (prop_types_default()).array,
    subjects: prop_types_default().arrayOf(
      prop_types_default().shape({
        uid: (prop_types_default()).string.isRequired,
        label: (prop_types_default()).string.isRequired,
        properties: (prop_types_default()).array.isRequired
      })
    )
  }).isRequired
};
/* harmony default export */ const components_ContentTypes = ((0,react.memo)(ContentTypes));

// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(47713);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PermissionsDataManagerProvider/index.js



const PermissionsDataManagerProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(contexts/* PermissionsDataManagerContext.Provider */.$l.Provider, { value }, children);
};
PermissionsDataManagerProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: prop_types_default().exact({
    availableConditions: (prop_types_default()).array.isRequired,
    modifiedData: (prop_types_default()).object.isRequired,
    onChangeCollectionTypeLeftActionRowCheckbox: (prop_types_default()).func.isRequired,
    onChangeConditions: (prop_types_default()).func.isRequired,
    onChangeSimpleCheckbox: (prop_types_default()).func.isRequired,
    onChangeParentCheckbox: (prop_types_default()).func.isRequired,
    onChangeCollectionTypeGlobalActionCheckbox: (prop_types_default()).func.isRequired
  }).isRequired
};
/* harmony default export */ const components_PermissionsDataManagerProvider = (PermissionsDataManagerProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/formatActions.js


const formatActions = (actions, modifiedData, pathToData) => {
  return actions.map((action) => {
    const checkboxName = [...pathToData, action.action, "properties", "enabled"];
    const checkboxValue = (0,lodash.get)(modifiedData, checkboxName, false);
    const conditionValue = (0,lodash.get)(modifiedData, [...pathToData, action.action, "conditions"], {});
    const hasConditions = utils_createArrayOfValues(conditionValue).some((val) => val);
    return {
      ...action,
      isDisplayed: checkboxValue,
      checkboxName: checkboxName.join(".."),
      hasSomeActionsSelected: checkboxValue,
      value: checkboxValue,
      hasConditions,
      label: action.displayName,
      actionId: action.action,
      pathToConditionsObject: [...pathToData, action.action]
    };
  });
};
/* harmony default export */ const utils_formatActions = (formatActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/getConditionsButtonState.js

const getConditionsButtonState = (valueObj) => {
  const relatedData = Object.entries(valueObj).reduce((acc, current) => {
    const [catName, { conditions }] = current;
    acc[catName] = conditions;
    return acc;
  }, {});
  const arrayOfValues = utils_createArrayOfValues(relatedData);
  return arrayOfValues.some((val) => val);
};
/* harmony default export */ const utils_getConditionsButtonState = (getConditionsButtonState);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/index.js
var SubCategory_IS_DISABLED=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(8629)/* ["default"] */ .Z);}return (__webpack_require__(34341)/* ["default"] */ .Z);}();var Border=/*#__PURE__*/styled_components_browser_esm["default"].div.withConfig({displayName:"SubCategory__Border",componentId:"sc-akgczm-0"})(["flex:1;align-self:center;border-top:1px solid ",";"],function(_ref){var theme=_ref.theme;return theme.colors.neutral150;});var CheckboxWrapper=/*#__PURE__*/styled_components_browser_esm["default"].div.withConfig({displayName:"SubCategory__CheckboxWrapper",componentId:"sc-akgczm-1"})(["position:relative;word-break:keep-all;",""],function(_ref2){var hasConditions=_ref2.hasConditions,disabled=_ref2.disabled,theme=_ref2.theme;return hasConditions&&"\n    &:before {\n      content: '';\n      position: absolute;\n      top: ".concat(-4/16,"rem;\n      left: ").concat(-8/16,"rem;\n      width: ").concat(6/16,"rem;\n      height: ").concat(6/16,"rem;\n      border-radius: ").concat(20/16,"rem;\n      background: ").concat(disabled?theme.colors.neutral100:theme.colors.primary600,";\n    }\n  ");});var SubCategory=function SubCategory(_ref3){var categoryName=_ref3.categoryName,isFormDisabled=_ref3.isFormDisabled,subCategoryName=_ref3.subCategoryName,actions=_ref3.actions,pathToData=_ref3.pathToData;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isModalOpen=_useState2[0],setModalOpen=_useState2[1];var _usePermissionsDataMa=(0,hooks/* usePermissionsDataManager */.$_)(),modifiedData=_usePermissionsDataMa.modifiedData,onChangeParentCheckbox=_usePermissionsDataMa.onChangeParentCheckbox,onChangeSimpleCheckbox=_usePermissionsDataMa.onChangeSimpleCheckbox;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var mainData=get_default()(modifiedData,pathToData,{});var dataWithoutCondition=(0,react.useMemo)(function(){return Object.keys(mainData).reduce(function(acc,current){acc[current]=utils_removeConditionKeyFromData(mainData[current]);return acc;},{});},[mainData]);var _getCheckboxState=utils_getCheckboxState(dataWithoutCondition),hasAllActionsSelected=_getCheckboxState.hasAllActionsSelected,hasSomeActionsSelected=_getCheckboxState.hasSomeActionsSelected;var handleToggleModalIsOpen=function handleToggleModalIsOpen(){setModalOpen(function(s){return!s;});};var handleModalClose=function handleModalClose(){setModalOpen(false);};// We need to format the actions so it matches the shape of the ConditionsModal actions props
var formattedActions=utils_formatActions(actions,modifiedData,pathToData);var doesButtonHasCondition=utils_getConditionsButtonState(get_default()(modifiedData,(0,toConsumableArray/* default */.Z)(pathToData),{}));return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Box/* Box */.x,null,/*#__PURE__*/react.createElement(Flex/* Flex */.k,{justifyContent:"space-between",alignItems:"center"},/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingRight:4},/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"sigma",textColor:"neutral600"},subCategoryName)),/*#__PURE__*/react.createElement(Border,null),/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingLeft:4},/*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X,{name:pathToData.join('..'),disabled:isFormDisabled||SubCategory_IS_DISABLED// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeParentCheckbox({target:{name:pathToData.join('..'),value:value}});},indeterminate:hasSomeActionsSelected,value:hasAllActionsSelected},formatMessage({id:'app.utils.select-all',defaultMessage:'Select all'})))),/*#__PURE__*/react.createElement(Flex/* Flex */.k,{paddingTop:6,paddingBottom:6},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:2,style:{flex:1}},formattedActions.map(function(_ref4){var checkboxName=_ref4.checkboxName,value=_ref4.value,action=_ref4.action,displayName=_ref4.displayName,hasConditions=_ref4.hasConditions;return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:3,key:action},/*#__PURE__*/react.createElement(CheckboxWrapper,{disabled:isFormDisabled||SubCategory_IS_DISABLED,hasConditions:hasConditions},/*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X,{name:checkboxName,disabled:isFormDisabled||SubCategory_IS_DISABLED// Keep same signature as packages/core/admin/admin/src/components/Roles/Permissions/index.js l.91
,onValueChange:function onValueChange(value){onChangeSimpleCheckbox({target:{name:checkboxName,value:value}});},value:value},displayName)));})),/*#__PURE__*/react.createElement(components_ConditionsButton,{hasConditions:doesButtonHasCondition,onClick:handleToggleModalIsOpen}))),isModalOpen&&/*#__PURE__*/react.createElement(components_ConditionsModal,{headerBreadCrumbs:[categoryName,subCategoryName],actions:formattedActions,isFormDisabled:isFormDisabled,onClosed:handleModalClose,onToggle:handleToggleModalIsOpen}));};SubCategory.propTypes={actions:(prop_types_default()).array.isRequired,categoryName:(prop_types_default()).string.isRequired,isFormDisabled:(prop_types_default()).bool.isRequired,subCategoryName:(prop_types_default()).string.isRequired,pathToData:(prop_types_default()).array.isRequired};/* harmony default export */ const PluginsAndSettings_SubCategory = (SubCategory);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/Row/index.js







const PermissionRow = ({
  childrenForm,
  kind,
  name,
  isOpen,
  isFormDisabled,
  isWhite,
  onOpenCategory,
  pathToData
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleClick = () => {
    onOpenCategory(name);
  };
  const categoryName = (0,react.useMemo)(() => {
    const split = name.split("::");
    return split.pop();
  }, [name]);
  return /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: isOpen,
      onToggle: handleClick,
      id: `accordion-${name}`,
      variant: isWhite ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: upperFirst_default()(categoryName),
        description: `${formatMessage(
          { id: "Settings.permissions.category" },
          { category: categoryName }
        )} ${kind === "plugins" ? "plugin" : kind}`
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6 }, childrenForm.map(({ actions, subCategoryName, subCategoryId }) => /* @__PURE__ */ react.createElement(
      PluginsAndSettings_SubCategory,
      {
        key: subCategoryName,
        actions,
        categoryName,
        isFormDisabled,
        subCategoryName,
        pathToData: [...pathToData, subCategoryId]
      }
    ))))
  );
};
PermissionRow.defaultProps = {};
PermissionRow.propTypes = {
  childrenForm: (prop_types_default()).array.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  isWhite: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onOpenCategory: (prop_types_default()).func.isRequired,
  pathToData: (prop_types_default()).array.isRequired
};
/* harmony default export */ const Row = (PermissionRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/index.js




const PluginsAndSettingsPermissions = ({ isFormDisabled, kind, layout }) => {
  const [openedCategory, setOpenedCategory] = (0,react.useState)(null);
  const handleOpenCategory = (categoryName) => {
    setOpenedCategory(categoryName === openedCategory ? null : categoryName);
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6, background: "neutral0" }, layout.map(({ category, categoryId, childrenForm }, index) => {
    return /* @__PURE__ */ react.createElement(
      Row,
      {
        key: category,
        childrenForm,
        kind,
        isFormDisabled,
        isOpen: openedCategory === category,
        isWhite: index % 2 === 1,
        name: category,
        onOpenCategory: handleOpenCategory,
        pathToData: [kind, categoryId]
      }
    );
  }));
};
PluginsAndSettingsPermissions.propTypes = {
  isFormDisabled: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  layout: prop_types_default().arrayOf(
    prop_types_default().shape({
      category: (prop_types_default()).string.isRequired,
      categoryId: (prop_types_default()).string.isRequired,
      childrenForm: prop_types_default().arrayOf(
        prop_types_default().shape({
          actions: (prop_types_default()).array.isRequired
        })
      ).isRequired
    }).isRequired
  ).isRequired
};
/* harmony default export */ const PluginsAndSettings = (PluginsAndSettingsPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/findMatchingPermissions.js
const findMatchingPermission = (permissions, action, subject) => permissions.find((perm) => perm.action === action && perm.subject === subject);
/* harmony default export */ const findMatchingPermissions = (findMatchingPermission);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/createDefaultCTFormFromLayout.js


const createDefaultCTFormFromLayout_createDefaultConditionsForm = (conditions, initialConditions = []) => conditions.reduce((acc, current) => {
  acc[current.id] = initialConditions.indexOf(current.id) !== -1;
  return acc;
}, {});
const createDefaultPropertyForms = ({ children }, propertyValues, prefix = "") => {
  return children.reduce((acc, current) => {
    if (current.children) {
      return {
        ...acc,
        [current.value]: createDefaultPropertyForms(
          current,
          propertyValues,
          `${prefix}${current.value}.`
        )
      };
    }
    const hasProperty = propertyValues.indexOf(`${prefix}${current.value}`) !== -1;
    acc[current.value] = hasProperty;
    return acc;
  }, {});
};
const createDefaultPropertiesForm = (propertiesArray, ctLayout, matchingPermission) => {
  return propertiesArray.reduce(
    (acc, currentPropertyName) => {
      const foundProperty = ctLayout.properties.find(({ value }) => value === currentPropertyName);
      if (foundProperty) {
        const matchingPermissionPropertyValues = (0,lodash.get)(
          matchingPermission,
          ["properties", foundProperty.value],
          []
        );
        const propertyForm = createDefaultPropertyForms(
          foundProperty,
          matchingPermissionPropertyValues
        );
        acc.properties[currentPropertyName] = propertyForm;
      }
      return acc;
    },
    { properties: {} }
  );
};
const findLayouts = (allLayouts, subjects) => {
  return subjects.reduce((acc, current) => {
    const foundLayout = allLayouts.find(({ uid }) => uid === current) || null;
    if (foundLayout) {
      acc[current] = foundLayout;
    }
    return acc;
  }, {});
};
const createDefaultCTFormFromLayout = ({ subjects }, actionArray, conditionArray, initialPermissions = []) => {
  return actionArray.reduce((defaultForm, current) => {
    const actionSubjects = current.subjects;
    const subjectLayouts = findLayouts(subjects, actionSubjects);
    if ((0,lodash.isEmpty)(subjectLayouts)) {
      return defaultForm;
    }
    const contentTypesActions = Object.keys(subjectLayouts).reduce((acc, currentCTUID) => {
      const { actionId, applyToProperties } = current;
      const currentSubjectLayout = subjectLayouts[currentCTUID];
      const properties = currentSubjectLayout.properties.map(({ value }) => value);
      const doesNothaveProperty = properties.every(
        (property) => (applyToProperties || []).indexOf(property) === -1
      );
      const matchingPermission = findMatchingPermissions(initialPermissions, actionId, currentCTUID);
      const conditionsForm = createDefaultCTFormFromLayout_createDefaultConditionsForm(
        conditionArray,
        (0,lodash.get)(matchingPermission, "conditions", [])
      );
      if ((0,lodash.isEmpty)(applyToProperties) || doesNothaveProperty) {
        (0,lodash.set)(acc, [currentCTUID, actionId], {
          properties: {
            enabled: matchingPermission !== void 0
          },
          conditions: conditionsForm
        });
        return acc;
      }
      const propertiesForm = createDefaultPropertiesForm(
        applyToProperties,
        subjectLayouts[currentCTUID],
        matchingPermission
      );
      (0,lodash.set)(acc, [currentCTUID, actionId], { ...propertiesForm, conditions: conditionsForm });
      return acc;
    }, {});
    return (0,lodash.merge)(defaultForm, contentTypesActions);
  }, {});
};
/* harmony default export */ const utils_createDefaultCTFormFromLayout = (createDefaultCTFormFromLayout);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/createDefaultPluginsFormFromLayout.js



const createSubCategoryForm = (actions, conditions, permissions) => {
  return actions.reduce((acc, current) => {
    const foundMatchingPermission = findMatchingPermissions(permissions, current.action, null);
    acc[current.action] = {
      properties: {
        enabled: foundMatchingPermission !== void 0
      },
      conditions: createDefaultCTFormFromLayout_createDefaultConditionsForm(
        conditions,
        (0,lodash.get)(foundMatchingPermission, "conditions", [])
      )
    };
    return acc;
  }, {});
};
const createChildrenDefaultForm = (childrenForm, conditions, initialPermissions) => {
  return childrenForm.reduce((acc, current) => {
    acc[current.subCategoryId] = createSubCategoryForm(
      current.actions,
      conditions,
      initialPermissions
    );
    return acc;
  }, {});
};
const createDefaultPluginsFormFromLayout = (pluginsLayout, conditions, initialPermissions = []) => {
  return pluginsLayout.reduce((acc, { categoryId, childrenForm }) => {
    const childrenDefaultForm = createChildrenDefaultForm(
      childrenForm,
      conditions,
      initialPermissions
    );
    acc[categoryId] = childrenDefaultForm;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultPluginsFormFromLayout = (createDefaultPluginsFormFromLayout);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatLayoutForSettingsAndPlugins.js

const replaceName = (name) => name.split(" ").join("-");
const formatLayout = (layout, groupByKey) => {
  return (0,lodash.chain)(layout).groupBy(groupByKey).map((item, itemName) => ({
    category: itemName,
    categoryId: replaceName(itemName),
    childrenForm: (0,lodash.chain)(item).groupBy("subCategory").map((actions, subCategoryName) => ({
      subCategoryName,
      subCategoryId: replaceName(subCategoryName),
      actions
    })).value()
  })).value();
};
/* harmony default export */ const formatLayoutForSettingsAndPlugins = (formatLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/init.js



const init = (layout, permissions) => {
  const {
    conditions,
    sections: { collectionTypes, singleTypes, plugins, settings }
  } = layout;
  const layouts = {
    collectionTypes,
    singleTypes,
    plugins: formatLayoutForSettingsAndPlugins(plugins, "plugin"),
    settings: formatLayoutForSettingsAndPlugins(settings, "category")
  };
  const defaultForm = {
    collectionTypes: utils_createDefaultCTFormFromLayout(
      collectionTypes,
      collectionTypes.actions || [],
      conditions,
      permissions
    ),
    singleTypes: utils_createDefaultCTFormFromLayout(
      singleTypes,
      singleTypes.actions || [],
      conditions,
      permissions
    ),
    plugins: utils_createDefaultPluginsFormFromLayout(layouts.plugins, conditions, permissions),
    settings: utils_createDefaultPluginsFormFromLayout(layouts.settings, conditions, permissions)
  };
  return {
    initialData: defaultForm,
    modifiedData: defaultForm,
    layouts
  };
};
/* harmony default export */ const Permissions_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/updateConditionsToFalse.js


const updateConditionsToFalse = (obj) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if ((0,lodash.isObject)(currentValue) && !(0,lodash.has)(currentValue, "conditions")) {
      return { ...acc, [current]: updateConditionsToFalse(currentValue) };
    }
    if ((0,lodash.isObject)(currentValue) && (0,lodash.has)(currentValue, "conditions")) {
      const isActionEnabled = utils_createArrayOfValues((0,lodash.omit)(currentValue, "conditions")).some(
        (val) => val
      );
      if (!isActionEnabled) {
        const updatedConditions = Object.keys(currentValue.conditions).reduce((acc1, current2) => {
          acc1[current2] = false;
          return acc1;
        }, {});
        return { ...acc, [current]: { ...currentValue, conditions: updatedConditions } };
      }
    }
    acc[current] = currentValue;
    return acc;
  }, {});
};
/* harmony default export */ const utils_updateConditionsToFalse = (updateConditionsToFalse);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/updateValues.js

const updateValues = (obj, valueToSet) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if (current === "conditions") {
      acc[current] = currentValue;
      return acc;
    }
    if ((0,lodash.isObject)(currentValue)) {
      return { ...acc, [current]: updateValues(currentValue, valueToSet) };
    }
    acc[current] = valueToSet;
    return acc;
  }, {});
};
/* harmony default export */ const utils_updateValues = (updateValues);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/reducer.js




const initialState = {
  initialData: {},
  modifiedData: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX": {
      const { collectionTypeKind, actionId, value } = action;
      const pathToData = ["modifiedData", collectionTypeKind];
      Object.keys((0,lodash.get)(state, pathToData)).forEach((collectionType) => {
        const collectionTypeActionData = (0,lodash.get)(
          state,
          [...pathToData, collectionType, actionId],
          void 0
        );
        if (collectionTypeActionData) {
          let updatedValues = utils_updateValues(collectionTypeActionData, value);
          if (!value && updatedValues.conditions) {
            const updatedConditions = utils_updateValues(updatedValues.conditions, false);
            updatedValues = { ...updatedValues, conditions: updatedConditions };
          }
          (0,lodash.set)(draftState, [...pathToData, collectionType, actionId], updatedValues);
        }
      });
      break;
    }
    case "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX": {
      const { pathToCollectionType, propertyName, rowName, value } = action;
      let nextModifiedDataState = (0,lodash.cloneDeep)(state.modifiedData);
      const pathToModifiedDataCollectionType = pathToCollectionType.split("..");
      const objToUpdate = (0,lodash.get)(nextModifiedDataState, pathToModifiedDataCollectionType, {});
      Object.keys(objToUpdate).forEach((actionId) => {
        if ((0,lodash.has)(objToUpdate[actionId], `properties.${propertyName}`)) {
          const objValue = (0,lodash.get)(objToUpdate, [actionId, "properties", propertyName, rowName]);
          const pathToDataToSet = [
            ...pathToModifiedDataCollectionType,
            actionId,
            "properties",
            propertyName,
            rowName
          ];
          if (!(0,lodash.isObject)(objValue)) {
            (0,lodash.set)(nextModifiedDataState, pathToDataToSet, value);
          } else {
            const updatedValue = utils_updateValues(objValue, value);
            (0,lodash.set)(nextModifiedDataState, pathToDataToSet, updatedValue);
          }
        }
      });
      if (!value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      (0,lodash.set)(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_CONDITIONS": {
      Object.entries(action.conditions).forEach((array) => {
        const [stringPathToData, conditionsToUpdate] = array;
        (0,lodash.set)(
          draftState,
          ["modifiedData", ...stringPathToData.split(".."), "conditions"],
          conditionsToUpdate
        );
      });
      break;
    }
    case "ON_CHANGE_SIMPLE_CHECKBOX": {
      let nextModifiedDataState = (0,lodash.cloneDeep)(state.modifiedData);
      (0,lodash.set)(nextModifiedDataState, [...action.keys.split("..")], action.value);
      if (!action.value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      (0,lodash.set)(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_TOGGLE_PARENT_CHECKBOX": {
      const { keys, value } = action;
      const pathToValue = [...keys.split("..")];
      let nextModifiedDataState = (0,lodash.cloneDeep)(state.modifiedData);
      const oldValues = (0,lodash.get)(nextModifiedDataState, pathToValue, {});
      const updatedValues = utils_updateValues(oldValues, value);
      (0,lodash.set)(nextModifiedDataState, pathToValue, updatedValues);
      if (!value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      (0,lodash.set)(draftState, ["modifiedData"], nextModifiedDataState);
      break;
    }
    case "RESET_FORM": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "SET_FORM_AFTER_SUBMIT": {
      draftState.initialData = state.modifiedData;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const Permissions_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatSettingsPermissionsToAPI.js
const createConditionsArray = (conditions) => {
  return Object.entries(conditions).filter(([, conditionValue]) => {
    return conditionValue;
  }).map(([conditionName]) => conditionName);
};
const createPermission = (array) => {
  const [actionName, { conditions }] = array;
  return {
    action: actionName,
    subject: null,
    conditions: createConditionsArray(conditions),
    properties: {}
  };
};
const createPermissionsArrayFromCategory = (categoryPermissions) => {
  return Object.values(categoryPermissions).reduce((acc, current) => {
    const permissions = Object.entries(current).reduce((acc1, current1) => {
      const [
        ,
        {
          properties: { enabled }
        }
      ] = current1;
      if (!enabled) {
        return acc1;
      }
      const permission = createPermission(current1);
      acc1.push(permission);
      return acc1;
    }, []);
    return [...acc, ...permissions];
  }, []);
};
const formatSettingsPermissionsToAPI = (settingsPermissionsObject) => {
  return Object.values(settingsPermissionsObject).reduce((acc, current) => {
    const currentCategoryPermissions = createPermissionsArrayFromCategory(current);
    return [...acc, ...currentCategoryPermissions];
  }, []);
};
/* harmony default export */ const utils_formatSettingsPermissionsToAPI = (formatSettingsPermissionsToAPI);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatContentTypesPermissionToAPI.js



const createPropertyArray = (propertyValue, prefix = "") => {
  return Object.entries(propertyValue).reduce((acc, current) => {
    const [name, value] = current;
    if ((0,lodash.isObject)(value)) {
      return [...acc, ...createPropertyArray(value, `${prefix}${name}.`)];
    }
    if (value && !(0,lodash.isObject)(value)) {
      acc.push(`${prefix}${name}`);
    }
    return acc;
  }, []);
};
const createPermissionWithProperties = (action, subject, { conditions, properties }) => {
  return Object.entries(properties).reduce(
    (acc, current) => {
      const [propertyName, propertyValue] = current;
      acc.properties[propertyName] = createPropertyArray(propertyValue);
      return acc;
    },
    { action, subject, conditions: createConditionsArray(conditions), properties: {} }
  );
};
const createPermissionWithoutProperties = (action, subject, { conditions }) => {
  return {
    action,
    subject,
    properties: {},
    conditions: createConditionsArray(conditions)
  };
};
const createSubjectPermissions = (subject, actions) => {
  const permissions = Object.entries(actions).reduce((acc, current) => {
    const [actionName, permissions2] = current;
    const shouldCreatePermission = utils_createArrayOfValues(permissions2).some((val) => val);
    if (!shouldCreatePermission) {
      return acc;
    }
    if (!(0,lodash.has)(permissions2, "properties.enabled")) {
      const createdPermissionsArray = createPermissionWithProperties(
        actionName,
        subject,
        permissions2
      );
      return [...acc, createdPermissionsArray];
    }
    if (!permissions2.properties.enabled) {
      return acc;
    }
    const permission = createPermissionWithoutProperties(actionName, subject, permissions2);
    acc.push(permission);
    return acc;
  }, []);
  return permissions;
};
const formatContentTypesPermissionToAPI = (contentTypesPermissions) => {
  const permissions = Object.entries(contentTypesPermissions).reduce((allPermissions, current) => {
    const [subject, currentSubjectActions] = current;
    const permissions2 = createSubjectPermissions(subject, currentSubjectActions);
    return [...allPermissions, ...permissions2];
  }, []);
  return permissions;
};
/* harmony default export */ const utils_formatContentTypesPermissionToAPI = (formatContentTypesPermissionToAPI);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatPermissionsToAPI.js


const formatPermissionsToAPI = (modifiedData) => {
  const pluginsPermissions = utils_formatSettingsPermissionsToAPI(modifiedData.plugins);
  const settingsPermissions = utils_formatSettingsPermissionsToAPI(modifiedData.settings);
  const collectionTypesPermissions = utils_formatContentTypesPermissionToAPI(
    modifiedData.collectionTypes
  );
  const singleTypesPermissions = utils_formatContentTypesPermissionToAPI(modifiedData.singleTypes);
  return [
    ...pluginsPermissions,
    ...settingsPermissions,
    ...collectionTypesPermissions,
    ...singleTypesPermissions
  ];
};
/* harmony default export */ const utils_formatPermissionsToAPI = (formatPermissionsToAPI);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/tabLabels.js
const TAB_LABELS = [
  {
    labelId: "app.components.LeftMenuLinkContainer.collectionTypes",
    defaultMessage: "Collection Types",
    id: "collectionTypes"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.singleTypes",
    id: "singleTypes",
    defaultMessage: "Single Types"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.plugins",
    defaultMessage: "Plugins",
    id: "plugins"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.settings",
    defaultMessage: "Settings",
    id: "settings"
  }
];
/* harmony default export */ const tabLabels = (TAB_LABELS);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js














const Permissions = (0,react.forwardRef)(({ layout, isFormDisabled, permissions }, ref) => {
  const [{ initialData, layouts, modifiedData }, dispatch] = (0,react.useReducer)(
    Permissions_reducer,
    initialState,
    () => Permissions_init(layout, permissions)
  );
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,react.useImperativeHandle)(ref, () => {
    return {
      getPermissions() {
        const collectionTypesDiff = (0,build.difference)(
          initialData.collectionTypes,
          modifiedData.collectionTypes
        );
        const singleTypesDiff = (0,build.difference)(initialData.singleTypes, modifiedData.singleTypes);
        const contentTypesDiff = { ...collectionTypesDiff, ...singleTypesDiff };
        let didUpdateConditions;
        if (isEmpty_default()(contentTypesDiff)) {
          didUpdateConditions = false;
        } else {
          didUpdateConditions = Object.values(contentTypesDiff).some((permission) => {
            return Object.values(permission).some(
              (permissionValue) => has_default()(permissionValue, "conditions")
            );
          });
        }
        return { permissionsToSend: utils_formatPermissionsToAPI(modifiedData), didUpdateConditions };
      },
      resetForm() {
        dispatch({ type: "RESET_FORM" });
      },
      setFormAfterSubmit() {
        dispatch({ type: "SET_FORM_AFTER_SUBMIT" });
      }
    };
  });
  const handleChangeCollectionTypeLeftActionRowCheckbox = (pathToCollectionType, propertyName, rowName, value) => {
    dispatch({
      type: "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",
      pathToCollectionType,
      propertyName,
      rowName,
      value
    });
  };
  const handleChangeCollectionTypeGlobalActionCheckbox = (collectionTypeKind, actionId, value) => {
    dispatch({
      type: "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",
      collectionTypeKind,
      actionId,
      value
    });
  };
  const handleChangeConditions = (conditions) => {
    dispatch({ type: "ON_CHANGE_CONDITIONS", conditions });
  };
  const handleChangeSimpleCheckbox = (0,react.useCallback)(({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_SIMPLE_CHECKBOX",
      keys: name,
      value
    });
  }, []);
  const handleChangeParentCheckbox = (0,react.useCallback)(({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_TOGGLE_PARENT_CHECKBOX",
      keys: name,
      value
    });
  }, []);
  return /* @__PURE__ */ react.createElement(
    components_PermissionsDataManagerProvider,
    {
      value: {
        availableConditions: layout.conditions,
        modifiedData,
        onChangeConditions: handleChangeConditions,
        onChangeSimpleCheckbox: handleChangeSimpleCheckbox,
        onChangeParentCheckbox: handleChangeParentCheckbox,
        onChangeCollectionTypeLeftActionRowCheckbox: handleChangeCollectionTypeLeftActionRowCheckbox,
        onChangeCollectionTypeGlobalActionCheckbox: handleChangeCollectionTypeGlobalActionCheckbox
      }
    },
    /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        id: "tabs",
        label: formatMessage({
          id: "Settings.permissions.users.tabs.label",
          defaultMessage: "Tabs Permissions"
        })
      },
      /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, tabLabels.map((tabLabel) => /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, { key: tabLabel.id }, formatMessage({ id: tabLabel.labelId, defaultMessage: tabLabel.defaultMessage })))),
      /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, { style: { position: "relative" } }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        components_ContentTypes,
        {
          layout: layouts.collectionTypes,
          kind: "collectionTypes",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        components_ContentTypes,
        {
          layout: layouts.singleTypes,
          kind: "singleTypes",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        PluginsAndSettings,
        {
          layout: layouts.plugins,
          kind: "plugins",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        PluginsAndSettings,
        {
          layout: layouts.settings,
          kind: "settings",
          isFormDisabled
        }
      )))
    )
  );
});
Permissions.defaultProps = {
  permissions: [],
  layout: {
    conditions: [],
    sections: {
      collectionTypes: {},
      singleTypes: {
        actions: []
      },
      settings: [],
      plugins: []
    }
  }
};
Permissions.propTypes = {
  layout: (prop_types_default()).object,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  permissions: (prop_types_default()).array
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));


/***/ }),

/***/ 34341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 67500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => "todo empty role");


/***/ }),

/***/ 52351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41580);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47144);
/* harmony import */ var _strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18374);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75515);
/* harmony import */ var _strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12028);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97132);









const RoleRow = ({ id, name, description, usersCount, icons, rowIndex }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const usersCountText = formatMessage(
    {
      id: `Roles.RoleRow.user-count`,
      defaultMessage: "{number, plural, =0 {#  user} one {#  user} other {# users}}"
    },
    { number: usersCount }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_3__.Tr,
    {
      "aria-rowindex": rowIndex,
      key: id,
      ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.onRowClick)({
        fn: icons[1].onClick
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_4__.Td, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(130) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { ellipsis: true, textColor: "neutral800" }, name)),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_4__.Td, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(250) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { ellipsis: true, textColor: "neutral800" }, description)),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_4__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { textColor: "neutral800" }, usersCountText)),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Table__WEBPACK_IMPORTED_MODULE_4__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { justifyContent: "flex-end", ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.stopPropagation }, icons.map(
      (icon, i) => icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, { key: icon.label, paddingLeft: i === 0 ? 0 : 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_8__/* .IconButton */ .h, { onClick: icon.onClick, label: icon.label, noBorder: true, icon: icon.icon })) : null
    )))
  );
};
RoleRow.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired),
  usersCount: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired),
  icons: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array.isRequired),
  rowIndex: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleRow);


/***/ }),

/***/ 85302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Roles_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.js
var Duplicate = __webpack_require__(65186);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/RoleRow/index.js
var RoleRow = __webpack_require__(52351);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/EmptyRole/index.js
var EmptyRole = __webpack_require__(67500);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.js
var Portal = __webpack_require__(44034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.js
var FocusTrap = __webpack_require__(25896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(80994);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/hot-air-balloon.png
const hot_air_balloon_namespaceObject = __webpack_require__.p + "6d21938306785f176538.png";
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/upgrade-details.png
const upgrade_details_namespaceObject = __webpack_require__.p + "617f9c948fa79e6d73bd.png";
;// CONCATENATED MODULE: ./.cache/admin/src/components/UpgradePlanModal/index.js

















const UpgradeWrapper = styled_components_browser_esm["default"].div`
  position: absolute;
  z-index: 3;
  inset: 0;
  background: ${({ theme }) => (0,build.setHexOpacity)(theme.colors.neutral800, 0.2)};
  padding: 0 ${({ theme }) => theme.spaces[8]};
`;
const UpgradeContainer = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  position: relative;
  max-width: ${830 / 16}rem;
  height: ${415 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
  padding-left: ${64 / 16}rem;

  img:first-of-type {
    position: absolute;
    right: 0;
    top: 0;
    max-width: ${360 / 16}rem;
  }

  img:not(:first-of-type) {
    width: ${130 / 16}rem;
    margin-left: 12%;
    margin-right: ${20 / 16}rem;
    z-index: 0;
  }
`;
const StackFlexStart = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  align-items: flex-start;
  max-width: ${400 / 16}rem;
  z-index: 0;
`;
const CloseButtonContainer = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: absolute;
  right: ${({ theme }) => theme.spaces[4]};
  top: ${({ theme }) => theme.spaces[4]};
`;
const UpgradePlanModal = ({ onClose, isOpen }) => {
  (0,build.useLockScroll)(isOpen);
  const { formatMessage } = (0,react_intl.useIntl)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Portal/* Portal */.h, null, /* @__PURE__ */ react.createElement(UpgradeWrapper, { onClick: onClose }, /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.i, { onEscape: onClose }, /* @__PURE__ */ react.createElement(
    UpgradeContainer,
    {
      onClick: (e) => e.stopPropagation(),
      "aria-labelledby": "upgrade-plan",
      background: "neutral0",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement("img", { src: hot_air_balloon_namespaceObject, alt: "air-balloon" }),
    /* @__PURE__ */ react.createElement(CloseButtonContainer, null, /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { onClick: onClose, "aria-label": "Close", icon: /* @__PURE__ */ react.createElement(Cross["default"], null) })),
    /* @__PURE__ */ react.createElement(StackFlexStart, { spacing: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "primary600" }, formatMessage({
      id: "app.components.UpgradePlanModal.text-ce",
      defaultMessage: "COMMUNITY EDITION"
    })), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha", as: "h2", id: "upgrade-plan" }, formatMessage({
      id: "app.components.UpgradePlanModal.limit-reached",
      defaultMessage: "You have reached the limit"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: "app.components.UpgradePlanModal.text-power",
      defaultMessage: "Unlock the full power of Strapi by upgrading your plan to the Enterprise Edition"
    }))), /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.Q,
      {
        href: "https://strapi.io/pricing-self-hosted",
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "app.components.UpgradePlanModal.button",
        defaultMessage: "Learn more"
      })
    )),
    /* @__PURE__ */ react.createElement("img", { src: upgrade_details_namespaceObject, alt: "upgrade-arrow" })
  ))));
};
UpgradePlanModal.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  isOpen: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_UpgradePlanModal = (UpgradePlanModal);

// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/index.js



















const useSortedRoles = () => {
  const { roles, isLoading } = (0,hooks/* useRolesList */.bF)();
  const query = (0,build.useQuery)();
  const _q = decodeURIComponent(query.get("_q") || "");
  const sortedRoles = (0,match_sorter_cjs/* default */.ZP)(roles, _q, { keys: ["name", "description"] });
  return { isLoading, sortedRoles };
};
const useRoleActions = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const { trackUsage } = (0,build.useTracking)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const handleGoTo = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/${id}`);
    },
    [push]
  );
  const handleToggle = (0,react.useCallback)(() => {
    setIsModalOpen((prev) => !prev);
  }, []);
  const handleToggleModalForCreatingRole = (0,react.useCallback)(() => {
    trackUsage("didShowRBACUpgradeModal");
    setIsModalOpen(true);
  }, [trackUsage]);
  const getIcons = (0,react.useCallback)(
    (role) => [
      {
        onClick: handleToggle,
        label: formatMessage({ id: "app.utils.duplicate", defaultMessage: "Duplicate" }),
        icon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null)
      },
      {
        onClick: () => handleGoTo(role.id),
        label: formatMessage({ id: "app.utils.edit", defaultMessage: "Edit" }),
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
      },
      {
        onClick: handleToggle,
        label: formatMessage({ id: "global.delete", defaultMessage: "Delete" }),
        icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
      }
    ],
    [formatMessage, handleToggle, handleGoTo]
  );
  return {
    isModalOpen,
    handleToggleModalForCreatingRole,
    handleToggle,
    getIcons
  };
};
const RoleListPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  const { sortedRoles, isLoading } = useSortedRoles();
  const { isModalOpen, handleToggle, handleToggleModalForCreatingRole, getIcons } = useRoleActions();
  const rowCount = sortedRoles.length + 1;
  const colCount = 5;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleToggleModalForCreatingRole, startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), size: "S" }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })),
      title: formatMessage({
        id: "global.roles",
        defaultMessage: "roles"
      }),
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount,
      rowCount,
      footer: /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { onClick: handleToggleModalForCreatingRole, icon: /* @__PURE__ */ react.createElement(Plus["default"], null) }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      }))
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.description",
      defaultMessage: "Description"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.users",
      defaultMessage: "Users"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "global.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, sortedRoles?.map((role, rowIndex) => /* @__PURE__ */ react.createElement(
      RoleRow/* default */.Z,
      {
        key: role.id,
        id: role.id,
        name: role.name,
        description: role.description,
        usersCount: role.usersCount,
        icons: getIcons(role),
        rowIndex: rowIndex + 2
      }
    )))
  ), !rowCount && !isLoading && /* @__PURE__ */ react.createElement(EmptyRole/* default */.Z, null)), /* @__PURE__ */ react.createElement(components_UpgradePlanModal, { isOpen: isModalOpen, onClose: handleToggle }));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.roles.main */.Z.settings.roles.main }, /* @__PURE__ */ react.createElement(ListPage, null));
/* harmony default export */ const Roles_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 35301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const customRoutes = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customRoutes);


/***/ }),

/***/ 26789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Roles_CreatePage)
});

// UNUSED EXPORTS: CreatePage

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js + 1 modules
var Textarea = __webpack_require__(64256);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js + 53 modules
var Permissions = __webpack_require__(28834);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Roles/CreatePage/utils/schema.js


const schema = lib/* object */.Ry().shape({
  name: lib/* string */.Z_().required(build.translatedErrors.required),
  description: lib/* string */.Z_().required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Roles/CreatePage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
























const UsersRoleNumber = styled_components_browser_esm["default"].div`
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.primary100};
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  color: ${({ theme }) => theme.colors.primary600};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${12 / 16}rem;
  font-weight: bold;
`;
const CreatePage = () => {
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isSubmitting, setIsSubmiting] = (0,react.useState)(false);
  const { replace } = (0,react_router_dom_min.useHistory)();
  const permissionsRef = (0,react.useRef)();
  const { trackUsage } = (0,build.useTracking)();
  const params = (0,react_router_dom_min.useRouteMatch)("/settings/roles/duplicate/:id");
  const id = get_default()(params, "params.id", null);
  const { isLoading: isLayoutLoading, data: permissionsLayout } = (0,hooks/* useFetchPermissionsLayout */.U_)();
  const { permissions: rolePermissions, isLoading: isRoleLoading } = (0,hooks/* useFetchRole */.Dq)(id);
  const handleCreateRoleSubmit = (data) => {
    lockApp();
    setIsSubmiting(true);
    if (id) {
      trackUsage("willDuplicateRole");
    } else {
      trackUsage("willCreateNewRole");
    }
    Promise.resolve(
      (0,build.request)("/admin/roles", {
        method: "POST",
        body: data
      })
    ).then(async (res) => {
      const { permissionsToSend } = permissionsRef.current.getPermissions();
      if (id) {
        trackUsage("didDuplicateRole");
      } else {
        trackUsage("didCreateNewRole");
      }
      if (res.data.id && !isEmpty_default()(permissionsToSend)) {
        await (0,build.request)(`/admin/roles/${res.data.id}/permissions`, {
          method: "PUT",
          body: { permissions: permissionsToSend }
        });
      }
      return res;
    }).then((res) => {
      setIsSubmiting(false);
      toggleNotification({
        type: "success",
        message: { id: "Settings.roles.created", defaultMessage: "created" }
      });
      replace(`/settings/roles/${res.data.id}`);
    }).catch((err) => {
      console.error(err);
      setIsSubmiting(false);
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }).finally(() => {
      unlockApp();
    });
  };
  const defaultDescription = `${formatMessage({
    id: "Settings.roles.form.created",
    defaultMessage: "Created"
  })} ${(0,date_fns.format)(new Date(), "PPP")}`;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      initialValues: { name: "", description: defaultDescription },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: utils_schema,
      validateOnChange: false
    },
    ({ handleSubmit, values, errors, handleReset, handleChange }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            variant: "secondary",
            onClick: () => {
              handleReset();
              permissionsRef.current.resetForm();
            },
            size: "L"
          },
          formatMessage({
            id: "app.components.Button.reset",
            defaultMessage: "Reset"
          })
        ), /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleSubmit, loading: isSubmitting, size: "L" }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        }))),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        }),
        navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
      id: "Settings.roles.form.description",
      defaultMessage: "Name and description of the role"
    })))), /* @__PURE__ */ react.createElement(UsersRoleNumber, null, formatMessage(
      {
        id: "Settings.roles.form.button.users-with-role",
        defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
      },
      { number: 0 }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "name",
        error: errors.name && formatMessage({ id: errors.name }),
        label: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }),
        onChange: handleChange,
        value: values.name
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      Textarea/* Textarea */.g,
      {
        label: formatMessage({
          id: "global.description",
          defaultMessage: "Description"
        }),
        name: "description",
        error: errors.description && formatMessage({ id: errors.description }),
        onChange: handleChange
      },
      values.description
    ))))), !isLayoutLoading && !isRoleLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
      Permissions/* default */.Z,
      {
        isFormDisabled: false,
        ref: permissionsRef,
        permissions: rolePermissions,
        layout: permissionsLayout
      }
    )) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null))))))
  ));
};
/* harmony default export */ function Roles_CreatePage() {
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.roles.create */.Z.settings.roles.create }, /* @__PURE__ */ react.createElement(CreatePage, null));
}



/***/ }),

/***/ 53273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 20591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 74512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 76766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 85822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 8629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const IS_DISABLED = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IS_DISABLED);


/***/ }),

/***/ 64527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Roles_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.js
var Duplicate = __webpack_require__(65186);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
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
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/EmptyRole/index.js
var EmptyRole = __webpack_require__(67500);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/RoleRow/index.js
var RoleRow = __webpack_require__(52351);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60612);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Roles/ListPage/reducer.js

const initialState = {
  roleToDelete: null,
  showModalConfirmButtonLoading: false,
  shouldRefetchData: false
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_REMOVE_ROLES": {
      draftState.showModalConfirmButtonLoading = true;
      break;
    }
    case "ON_REMOVE_ROLES_SUCCEEDED": {
      draftState.shouldRefetchData = true;
      draftState.roleToDelete = null;
      break;
    }
    case "RESET_DATA_TO_DELETE": {
      draftState.shouldRefetchData = false;
      draftState.roleToDelete = null;
      draftState.showModalConfirmButtonLoading = false;
      break;
    }
    case "SET_ROLE_TO_DELETE": {
      draftState.roleToDelete = action.id;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListPage_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Roles/ListPage/index.js






















const useSortedRoles = () => {
  (0,build.useFocusWhenNavigate)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canCreate, canDelete, canRead, canUpdate }
  } = (0,build.useRBAC)(permissions/* default.settings.roles */.Z.settings.roles);
  const { getData, roles, isLoading } = (0,hooks/* useRolesList */.bF)(false);
  const [{ query }] = (0,build.useQueryParams)();
  const _q = query?._q || "";
  const sortedRoles = (0,match_sorter_cjs/* default */.ZP)(roles, _q, { keys: ["name", "description"] });
  (0,react.useEffect)(() => {
    if (!isLoadingForPermissions && canRead) {
      getData();
    }
  }, [isLoadingForPermissions, canRead, getData]);
  return {
    isLoadingForPermissions,
    canCreate,
    canDelete,
    canRead,
    canUpdate,
    isLoading,
    getData,
    sortedRoles,
    roles
  };
};
const useRoleActions = ({ getData, canCreate, canDelete, canUpdate }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const [isWarningDeleteAllOpened, setIsWarningDeleteAllOpenend] = (0,react.useState)(false);
  const { push } = (0,react_router_dom_min.useHistory)();
  const [{ selectedRoles, showModalConfirmButtonLoading, roleToDelete }, dispatch] = (0,react.useReducer)(
    ListPage_reducer,
    initialState
  );
  const handleDeleteData = async () => {
    try {
      dispatch({
        type: "ON_REMOVE_ROLES"
      });
      await utils/* axiosInstance.post */.be.post("/admin/roles/batch-delete", {
        ids: [roleToDelete]
      });
      await getData();
      dispatch({
        type: "RESET_DATA_TO_DELETE"
      });
    } catch (err) {
      const errorIds = (0,lodash.get)(err, ["response", "payload", "data", "ids"], null);
      if (errorIds && Array.isArray(errorIds)) {
        const errorsMsg = errorIds.join("\n");
        toggleNotification({
          type: "warning",
          message: errorsMsg
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
    handleToggleModal();
  };
  const onRoleDuplicate = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/duplicate/${id}`);
    },
    [push]
  );
  const handleNewRoleClick = () => push("/settings/roles/new");
  const onRoleRemove = (0,react.useCallback)((roleId) => {
    dispatch({
      type: "SET_ROLE_TO_DELETE",
      id: roleId
    });
    handleToggleModal();
  }, []);
  const handleToggleModal = () => setIsWarningDeleteAllOpenend((prev) => !prev);
  const handleGoTo = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/${id}`);
    },
    [push]
  );
  const handleClickDelete = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      if (role.usersCount) {
        toggleNotification({
          type: "info",
          message: { id: "Roles.ListPage.notification.delete-not-allowed" }
        });
      } else {
        onRoleRemove(role.id);
      }
    },
    [toggleNotification, onRoleRemove]
  );
  const handleClickDuplicate = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      onRoleDuplicate(role.id);
    },
    [onRoleDuplicate]
  );
  const getIcons = (0,react.useCallback)(
    (role) => [
      ...canCreate ? [
        {
          onClick: (e) => handleClickDuplicate(e, role),
          label: formatMessage({ id: "app.utils.duplicate", defaultMessage: "Duplicate" }),
          icon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null)
        }
      ] : [],
      ...canUpdate ? [
        {
          onClick: () => handleGoTo(role.id),
          label: formatMessage({ id: "app.utils.edit", defaultMessage: "Edit" }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      ] : [],
      ...canDelete ? [
        {
          onClick: (e) => handleClickDelete(e, role),
          label: formatMessage({ id: "global.delete", defaultMessage: "Delete" }),
          icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
        }
      ] : []
    ],
    [
      formatMessage,
      handleClickDelete,
      handleClickDuplicate,
      handleGoTo,
      canCreate,
      canUpdate,
      canDelete
    ]
  );
  return {
    handleNewRoleClick,
    getIcons,
    selectedRoles,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  };
};
const RoleListPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    isLoadingForPermissions,
    canCreate,
    canRead,
    canDelete,
    canUpdate,
    isLoading,
    getData,
    sortedRoles
  } = useSortedRoles();
  const {
    handleNewRoleClick,
    getIcons,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  } = useRoleActions({ getData, canCreate, canDelete, canUpdate });
  const rowCount = sortedRoles.length + 1;
  const colCount = 6;
  if (isLoadingForPermissions) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null));
  }
  const title = formatMessage({
    id: "global.roles",
    defaultMessage: "roles"
  });
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleNewRoleClick, startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), size: "S" }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null,
      title,
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      as: "h2"
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(
        build.SearchURLQuery,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      )
    }
  ), canRead && /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount,
      rowCount,
      footer: canCreate ? /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { onClick: handleNewRoleClick, icon: /* @__PURE__ */ react.createElement(Plus["default"], null) }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, { "aria-rowindex": 1 }, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.description",
      defaultMessage: "Description"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.users",
      defaultMessage: "Users"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "global.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, sortedRoles?.map((role, index) => /* @__PURE__ */ react.createElement(
      RoleRow/* default */.Z,
      {
        key: role.id,
        id: role.id,
        name: role.name,
        description: role.description,
        usersCount: role.usersCount,
        icons: getIcons(role),
        rowIndex: index + 2
      }
    )))
  ), !rowCount && !isLoading && /* @__PURE__ */ react.createElement(EmptyRole/* default */.Z, null)), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isOpen: isWarningDeleteAllOpened,
      onConfirm: handleDeleteData,
      isConfirmButtonLoading: showModalConfirmButtonLoading,
      onToggleDialog: handleToggleModal
    }
  ));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Roles/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.roles.main */.Z.settings.roles.main }, /* @__PURE__ */ react.createElement(ListPage, null));
/* harmony default export */ const Roles_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 5420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const routes = [];
if (strapi.features.isEnabled(strapi.features.SSO)) {
  routes.push({
    async Component() {
      const component = await __webpack_require__.e(/* import() | sso-settings-page */ 302).then(__webpack_require__.bind(__webpack_require__, 40316));
      return component;
    },
    to: "/settings/single-sign-on",
    exact: true
  });
}
if (strapi.features.isEnabled(strapi.features.AUDIT_LOGS)) {
  routes.push({
    async Component() {
      const component = await Promise.all(/* import() | audit-logs-settings-page */[__webpack_require__.e(4432), __webpack_require__.e(2812)]).then(__webpack_require__.bind(__webpack_require__, 25857));
      return component;
    },
    to: "/settings/audit-logs",
    exact: true
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ })

}]);