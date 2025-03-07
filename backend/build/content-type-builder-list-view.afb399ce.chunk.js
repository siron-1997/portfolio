"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5905],{

/***/ 76761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js + 1 modules
var Thead = __webpack_require__(63985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js + 1 modules
var Tr = __webpack_require__(47144);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js + 1 modules
var Cell = __webpack_require__(18374);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(26478);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(13588);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(5002);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/ComponentIcon.js




const Wrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  border-radius: 50%;
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary600 : theme.colors.neutral600};
  height: ${({ theme }) => theme.spaces[8]};
  width: ${({ theme }) => theme.spaces[8]};

  svg {
    height: ${({ theme }) => theme.spaces[5]};
    width: ${({ theme }) => theme.spaces[5]};
  }
`;
function ComponentIcon({ isActive }) {
  return /* @__PURE__ */ react.createElement(
    Wrapper,
    {
      alignItems: "center",
      background: isActive ? "primary200" : "neutral200",
      justifyContent: "center",
      isActive
    },
    /* @__PURE__ */ react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ react.createElement(
      "path",
      {
        d: "M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",
        fill: "currentColor"
      }
    ))
  );
}
ComponentIcon.defaultProps = {
  isActive: false
};
ComponentIcon.propTypes = {
  isActive: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/index.js









const CloseButton = (0,styled_components_browser_esm["default"])(dist.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,build.pxToRem)(8)};

  svg {
    width: ${(0,build.pxToRem)(10)};
    height: ${(0,build.pxToRem)(10)};

    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components_browser_esm["default"])(dist.Flex)`
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
function ComponentCard({ component, dzName, index, isActive, isInDevelopmentMode, onClick }) {
  const { modifiedData, removeComponentFromDynamicZone } = (0,useDataManager/* default */.Z)();
  const {
    schema: { displayName }
  } = get_default()(modifiedData, ["components", component], { schema: {} });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ react.createElement(
    ComponentBox,
    {
      as: "button",
      alignItems: "center",
      direction: "column",
      className: isActive ? "active" : "",
      borderRadius: "borderRadius",
      justifyContent: "center",
      paddingLeft: 4,
      paddingRight: 4,
      shrink: 0,
      type: "button",
      onClick
    },
    /* @__PURE__ */ react.createElement(ComponentIcon, { isActive }),
    /* @__PURE__ */ react.createElement(dist.Box, { marginTop: 1, maxWidth: "100%" }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", fontWeight: "bold", ellipsis: true }, displayName)),
    isInDevelopmentMode && /* @__PURE__ */ react.createElement(CloseButton, { as: "button", onClick: onClose, type: "button" }, /* @__PURE__ */ react.createElement(Cross["default"], null))
  );
}
ComponentCard.defaultProps = {
  component: null,
  isActive: false,
  isInDevelopmentMode: false,
  onClick() {
  }
};
ComponentCard.propTypes = {
  component: (prop_types_default()).string,
  dzName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool,
  isInDevelopmentMode: (prop_types_default()).bool,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const components_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Tr/index.js


const Tr_Tr = styled_components_browser_esm["default"].tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,build.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,build.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
/* harmony default export */ const components_Tr = (Tr_Tr);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentList/index.js






function ComponentList({
  customRowComponent,
  component,
  isFromDynamicZone,
  isNestedInDZComponent,
  firstLoopComponentUid
}) {
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const {
    schema: { attributes }
  } = get_default()(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ react.createElement(components_Tr, { isChildOfDynamicZone: isFromDynamicZone, className: "component-row" }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      customRowComponent,
      items: attributes,
      targetUid: component,
      firstLoopComponentUid: firstLoopComponentUid || component,
      editTarget: "components",
      isFromDynamicZone,
      isNestedInDZComponent,
      isSub: true,
      secondLoopComponentUid: firstLoopComponentUid ? component : null
    }
  )));
}
ComponentList.defaultProps = {
  component: null,
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false
};
ComponentList.propTypes = {
  component: (prop_types_default()).string,
  customRowComponent: (prop_types_default()).func,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool
};
/* harmony default export */ const components_ComponentList = (ComponentList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DynamicZoneList/index.js














const StyledAddIcon = (0,styled_components_browser_esm["default"])(Plus["default"])`
  width: ${(0,build.pxToRem)(32)};
  height: ${(0,build.pxToRem)(32)};
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${(0,build.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  padding-top: ${(0,build.pxToRem)(90)};
`;
const ComponentStack = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;
function DynamicZoneList({ customRowComponent, components, addComponent, name, targetUid }) {
  const { isInDevelopmentMode } = (0,useDataManager/* default */.Z)();
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ react.createElement(components_Tr, { className: "dynamiczone-row", isFromDynamicZone: true }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(FixedBox, { paddingLeft: 8 }, /* @__PURE__ */ react.createElement(ScrollableStack, { horizontal: true, spacing: 2 }, isInDevelopmentMode && /* @__PURE__ */ react.createElement("button", { type: "button", onClick: handleClickAdd }, /* @__PURE__ */ react.createElement(ComponentStack, { spacing: 1 }, /* @__PURE__ */ react.createElement(StyledAddIcon, null), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "primary600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("button.component.add"),
    formatMessage: "Add a component"
  })))), components.map((component, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ComponentCard,
      {
        key: component,
        dzName: name,
        index,
        component,
        isActive: activeTab === index,
        isInDevelopmentMode,
        onClick: () => toggle(index)
      }
    );
  }))), /* @__PURE__ */ react.createElement(ComponentContentBox, null, components.map((component, index) => {
    const props = {
      customRowComponent,
      component
    };
    return /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        tabId: `${index}`,
        key: component,
        style: { display: activeTab === index ? "block" : "none" }
      },
      /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...props,
          isFromDynamicZone: true,
          targetUid,
          key: component
        }
      )))
    );
  }))));
}
DynamicZoneList.defaultProps = {
  addComponent() {
  },
  components: [],
  customRowComponent: null,
  name: null
};
DynamicZoneList.propTypes = {
  addComponent: (prop_types_default()).func,
  components: prop_types_default().instanceOf(Array),
  customRowComponent: (prop_types_default()).func,
  name: (prop_types_default()).string,
  targetUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/BoxWrapper.js


const BoxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
/* harmony default export */ const List_BoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/NestedTFooter/index.js






const IconBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = ({ children, icon, color, ...props }) => {
  return /* @__PURE__ */ react.createElement(ButtonBox, { paddingBottom: 4, paddingTop: 4, as: "button", type: "button", ...props }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(IconBox, { color, "aria-hidden": true, background: `${color}200` }, icon), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: `${color}600` }, children))));
};
NestedTFooter.propTypes = {
  color: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).string.isRequired,
  icon: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_NestedTFooter = (NestedTFooter);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/index.js
















function List({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  isMain,
  isNestedInDZComponent,
  isSub,
  items,
  secondLoopComponentUid,
  targetUid
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      build.EmptyBodyTable,
      {
        colSpan: 2,
        content: {
          id: (0,getTrad/* default */.Z)("table.content.create-first-content-type"),
          defaultMessage: "Create your first Collection-Type"
        }
      }
    ));
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      build.EmptyBodyTable,
      {
        action: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClickAddField, size: "L", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), variant: "secondary" }, formatMessage({
          id: (0,getTrad/* default */.Z)("table.button.no-fields"),
          defaultMessage: "Add new field"
        })),
        colSpan: 2,
        content: isInContentTypeView ? {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.collection-type"),
          defaultMessage: "Add your first field to this Collection-Type"
        } : {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.component"),
          defaultMessage: "Add your first field to this component"
        }
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(List_BoxWrapper, null, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingLeft: 6,
      paddingRight: isMain ? 6 : 0,
      ...isMain && { style: { overflowX: "auto" } }
    },
    /* @__PURE__ */ react.createElement("table", null, isMain && /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement("th", { colSpan: "2" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement("tbody", null, items.map((item) => {
      const { type } = item;
      const CustomRow = customRowComponent;
      return /* @__PURE__ */ react.createElement(react.Fragment, { key: item.name }, /* @__PURE__ */ react.createElement(
        CustomRow,
        {
          ...item,
          isNestedInDZComponent,
          targetUid,
          editTarget,
          firstLoopComponentUid,
          isFromDynamicZone,
          secondLoopComponentUid
        }
      ), type === "component" && /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...item,
          customRowComponent,
          targetUid,
          isNestedInDZComponent: isFromDynamicZone,
          editTarget,
          firstLoopComponentUid
        }
      ), type === "dynamiczone" && /* @__PURE__ */ react.createElement(
        components_DynamicZoneList,
        {
          ...item,
          customRowComponent,
          addComponent: addComponentToDZ,
          targetUid
        }
      ));
    })))
  ), isMain && isInDevelopmentMode && /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { icon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onClickAddField }, formatMessage({
    id: (0,getTrad/* default */.Z)(
      `form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`
    ),
    defaultMessage: "Add another field"
  })), isSub && isInDevelopmentMode && /* @__PURE__ */ react.createElement(
    components_NestedTFooter,
    {
      icon: /* @__PURE__ */ react.createElement(Plus["default"], null),
      onClick: onClickAddField,
      color: isFromDynamicZone ? "primary" : "neutral"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)(`form.button.add.field.to.component`),
      defaultMessage: "Add another field"
    })
  ));
}
List.defaultProps = {
  addComponentToDZ() {
  },
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false,
  isMain: false,
  isSub: false,
  items: [],
  secondLoopComponentUid: null,
  targetUid: null
};
List.propTypes = {
  addComponentToDZ: (prop_types_default()).func,
  customRowComponent: (prop_types_default()).func,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool,
  isMain: (prop_types_default()).bool,
  items: prop_types_default().instanceOf(Array),
  secondLoopComponentUid: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  isSub: (prop_types_default()).bool
};
/* harmony default export */ const components_List = (List);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Lock.js

function v(t) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",
      fill: "#8E8EA9"
    })
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/icons/Curve.js




const StyledBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
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
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
    }
  )
));
Curve.propTypes = {
  color: (prop_types_default()).string.isRequired
};
/* harmony default export */ const icons_Curve = (Curve);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/UpperFirst/index.js


const UpperFirst = ({ content }) => upperFirst_default()(content);
UpperFirst.defaultProps = {
  content: null
};
UpperFirst.propTypes = {
  content: (prop_types_default()).string
};
/* harmony default export */ const components_UpperFirst = (UpperFirst);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/BoxWrapper.js


const BoxWrapper_BoxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: relative;
`;
/* harmony default export */ const ListRow_BoxWrapper = (BoxWrapper_BoxWrapper);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js + 4 modules
var AttributeIcon = __webpack_require__(66848);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/DisplayedType.js





const DisplayedType = ({ type, customField, repeatable }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  if (customField) {
    return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)("attribute.customField"),
      defaultMessage: "Custom field"
    }));
  }
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${readableType}`),
    defaultMessage: type
  }), "\xA0", repeatable && formatMessage({
    id: (0,getTrad/* default */.Z)("component.repeatable"),
    defaultMessage: "(repeatable)"
  }));
};
DisplayedType.defaultProps = {
  customField: null,
  repeatable: false
};
DisplayedType.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool
};
/* harmony default export */ const ListRow_DisplayedType = (DisplayedType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/index.js




















function ListRow({
  configurable,
  customField,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  name,
  onClick,
  relation,
  repeatable,
  secondLoopComponentUid,
  target,
  targetUid,
  type
}) {
  const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const isMorph = type === "relation" && relation.includes("morph");
  const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
  const contentType = get_default()(contentTypes, [target], {});
  const contentTypeFriendlyName = get_default()(contentType, ["schema", "displayName"], "");
  const isPluginContentType = get_default()(contentType, "plugin");
  const src = target ? "relation" : ico;
  const handleClick = () => {
    if (isMorph) {
      return;
    }
    if (configurable !== false) {
      const attrType = type;
      onClick(
        // Tells where the attribute is located in the main modifiedData object : contentType, component or components
        editTarget,
        // main data type uid
        secondLoopComponentUid || firstLoopComponentUid || targetUid,
        // Name of the attribute
        name,
        // Type of the attribute
        attrType,
        customField
      );
    }
  };
  let loopNumber;
  if (secondLoopComponentUid && firstLoopComponentUid) {
    loopNumber = 2;
  } else if (firstLoopComponentUid) {
    loopNumber = 1;
  } else {
    loopNumber = 0;
  }
  return /* @__PURE__ */ react.createElement(
    ListRow_BoxWrapper,
    {
      as: "tr",
      ...(0,build.onRowClick)({
        fn: handleClick,
        condition: isInDevelopmentMode && configurable && !isMorph
      })
    },
    /* @__PURE__ */ react.createElement("td", { style: { position: "relative" } }, loopNumber !== 0 && /* @__PURE__ */ react.createElement(icons_Curve, { color: isFromDynamicZone ? "primary200" : "neutral150" }), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { paddingLeft: 2, spacing: 4, horizontal: true }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: src, customField }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, name))),
    /* @__PURE__ */ react.createElement("td", null, target ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)(
        `modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`
      ),
      defaultMessage: "Relation with"
    }), "\xA0", /* @__PURE__ */ react.createElement("span", { style: { fontStyle: "italic" } }, /* @__PURE__ */ react.createElement(components_UpperFirst, { content: contentTypeFriendlyName }), "\xA0", isPluginContentType && `(${formatMessage({
      id: (0,getTrad/* default */.Z)(`from`),
      defaultMessage: "from"
    })}: ${isPluginContentType})`)) : /* @__PURE__ */ react.createElement(ListRow_DisplayedType, { type, customField, repeatable })),
    /* @__PURE__ */ react.createElement("td", null, isInDevelopmentMode ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end", ...build.stopPropagation }, configurable ? /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 1 }, !isMorph && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleClick,
        label: `${formatMessage({
          id: "app.utils.edit",
          defaultMessage: "Edit"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
      }
    ), /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: (e) => {
          e.stopPropagation();
          removeAttribute(
            editTarget,
            name,
            secondLoopComponentUid || firstLoopComponentUid || ""
          );
        },
        label: `${formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
      }
    )) : /* @__PURE__ */ react.createElement(v, null)) : (
      /*
        In production mode the edit icons aren't visible, therefore
        we need to reserve the same space, otherwise the height of the
        row might collapse, leading to bad positioned curve icons
      */
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { height: (0,build.pxToRem)(32) })
    ))
  );
}
ListRow.defaultProps = {
  configurable: true,
  customField: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  onClick() {
  },
  relation: "",
  repeatable: false,
  secondLoopComponentUid: null,
  target: null,
  targetUid: null,
  type: null
};
ListRow.propTypes = {
  configurable: (prop_types_default()).bool,
  customField: (prop_types_default()).string,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  relation: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool,
  secondLoopComponentUid: (prop_types_default()).string,
  target: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_ListRow = ((0,react.memo)(ListRow));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getAttributeDisplayedType.js
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
/* harmony default export */ const utils_getAttributeDisplayedType = (getAttributeDisplayedType);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layer.js
var Layer = __webpack_require__(98432);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/LinkToCMSettingsView/index.js







const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = ({
  disabled,
  isTemporary,
  isInContentTypeView,
  contentTypeKind,
  targetUid
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { collectionTypesConfigurations, componentsConfigurations, singleTypesConfigurations } = cmPermissions;
  const label = formatMessage({ id: "content-type-builder.form.button.configure-view" });
  let permissionsToApply = collectionTypesConfigurations;
  const handleClick = () => {
    if (isTemporary) {
      return false;
    }
    if (isInContentTypeView) {
      push(`/content-manager/collectionType/${targetUid}/configurations/edit`);
    } else {
      push(`/content-manager/components/${targetUid}/configurations/edit`);
    }
    return false;
  };
  if (isInContentTypeView && contentTypeKind === "singleType") {
    permissionsToApply = singleTypesConfigurations;
  }
  if (!isInContentTypeView) {
    permissionsToApply = componentsConfigurations;
  }
  return /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissionsToApply }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      startIcon: /* @__PURE__ */ react.createElement(Layer/* default */.Z, null),
      variant: "tertiary",
      onClick: handleClick,
      disabled: isTemporary || disabled
    },
    label
  ));
};
LinkToCMSettingsView.defaultProps = {
  contentTypeKind: "collectionType",
  isInContentTypeView: true,
  isTemporary: false,
  targetUid: ""
};
LinkToCMSettingsView.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  contentTypeKind: (prop_types_default()).string,
  isInContentTypeView: (prop_types_default()).bool,
  isTemporary: (prop_types_default()).bool,
  targetUid: (prop_types_default()).string
};
/* harmony default export */ const ListView_LinkToCMSettingsView = ((0,react.memo)(LinkToCMSettingsView));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/index.js
























const ListView = () => {
  const { initialData, modifiedData, isInDevelopmentMode, isInContentTypeView, submitData } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const match = (0,react_router_dom_min.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID");
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema,
    onOpenModalEditCustomField
  } = (0,useFormModalNavigation/* default */.Z)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = get_default()(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = get_default()(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = get_default()(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = has_default()(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !isEqual_default()(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = async (forTarget2, targetUid2, attributeName, type, customField) => {
    const attributeType = utils_getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    if (customField) {
      onOpenModalEditCustomField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        customFieldUid: customField
      });
    } else {
      onOpenModalEditField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        step
      });
    }
  };
  let label = get_default()(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = match?.params.currentUID === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,getTrad/* default */.Z)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Prompt,
    {
      message: formatMessage({ id: (0,getTrad/* default */.Z)("prompt.unsaved") }),
      when: hasModelBeenModified
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      primaryAction: isInDevelopmentMode && /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null),
          variant: "secondary",
          onClick: () => {
            onOpenModalAddField({ forTarget, targetUid });
          }
        },
        formatMessage({ id: (0,getTrad/* default */.Z)("button.attributes.add.another") })
      ), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          onClick: () => submitData(),
          type: "submit",
          disabled: isEqual_default()(modifiedData, initialData)
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )),
      secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null), variant: "tertiary", onClick: onEdit }, formatMessage({
        id: "app.utils.edit",
        defaultMessage: "Edit"
      })),
      title: upperFirst_default()(label),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("listView.headerLayout.description"),
        defaultMessage: "Build the data architecture of your content"
      }),
      navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/plugins/content-type-builder/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
    ListView_LinkToCMSettingsView,
    {
      key: "link-to-cm-settings-view",
      targetUid,
      isTemporary,
      isInContentTypeView,
      contentTypeKind,
      disabled: isCreatingFirstContentType
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      items: attributes,
      customRowComponent: (props) => /* @__PURE__ */ react.createElement(components_ListRow, { ...props, onClick: handleClickEditField }),
      addComponentToDZ: handleClickAddComponentToDZ,
      targetUid,
      editTarget: forTarget,
      isMain: true
    }
  )))));
};
/* harmony default export */ const pages_ListView = (ListView);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);



const p = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
  paddingLeft: 10,
  paddingRight: 10
}, e);
p.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node.isRequired
};



/***/ }),

/***/ 67838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 98432:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function h(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",
      fill: "#212134"
    })
  });
}



/***/ })

}]);