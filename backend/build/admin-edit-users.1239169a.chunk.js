"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4263],{

/***/ 22282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var src_permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(23998);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/api.js

const fetchUser = async (id) => {
  const { data } = await core_utils/* axiosInstance.get */.be.get(`/admin/users/${id}`);
  return data.data;
};
const putUser = async (id, body) => {
  const { data } = await core_utils/* axiosInstance.put */.be.put(`/admin/users/${id}`, body);
  return data.data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(17405);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(81288);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(12201)/* ["default"] */ .Z);}return (__webpack_require__(31605)/* ["default"] */ .Z);}();var fieldsToPick=['email','firstname','lastname','username','isActive','roles'];var EditPage=function EditPage(_ref){var canUpdate=_ref.canUpdate;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRouteMatch=(0,react_router_dom_min.useRouteMatch)('/settings/users/:id'),id=_useRouteMatch.params.id;var _useHistory=(0,react_router_dom_min.useHistory)(),push=_useHistory.push;var _useAppInfos=(0,build.useAppInfos)(),setUserDisplayName=_useAppInfos.setUserDisplayName;var toggleNotification=(0,build.useNotification)();var _useOverlayBlocker=(0,build.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;(0,build.useFocusWhenNavigate)();var _useQuery=(0,lib.useQuery)(['user',id],function(){return fetchUser(id);},{retry:false,keepPreviousData:false,staleTime:1000*20,onError:function onError(err){var status=err.response.status;// Redirect the use to the homepage if is not allowed to read
if(status===403){toggleNotification({type:'info',message:{id:'notification.permission.not-allowed-read',defaultMessage:'You are not allowed to see this document'}});push('/');}console.log(err.response.status);}}),status=_useQuery.status,data=_useQuery.data;var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(body,actions){var _data,userInfos,userDisplayName,errors,fieldsErrors;return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:lockApp();_context.prev=1;_context.next=4;return putUser(id,omit_default()(body,'confirmPassword'));case 4:_data=_context.sent;toggleNotification({type:'success',message:formatMessage({id:'notification.success.saved',defaultMessage:'Saved'})});userInfos=build.auth.getUserInfo();// The user is updating himself
if(id.toString()===userInfos.id.toString()){build.auth.setUserInfo(_data);userDisplayName=get_default()(body,'username')||(0,utils/* getFullName */.Pp)(body.firstname,body.lastname);setUserDisplayName(userDisplayName);}actions.setValues(pick_default()(body,fieldsToPick));_context.next=17;break;case 11:_context.prev=11;_context.t0=_context["catch"](1);// FIXME when API errors are ready
errors=(0,utils/* formatAPIErrors */.Iz)(_context.t0.response.data);fieldsErrors=Object.keys(errors).reduce(function(acc,current){acc[current]=errors[current].id;return acc;},{});actions.setErrors(fieldsErrors);toggleNotification({type:'warning',message:get_default()(_context.t0,'response.data.message','notification.error')});case 17:unlockApp();case 18:case"end":return _context.stop();}},_callee,null,[[1,11]]);}));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments);};}();var isLoading=status!=='success';var headerLabel=isLoading?{id:'app.containers.Users.EditPage.header.label-loading',defaultMessage:'Edit user'}:{id:'app.containers.Users.EditPage.header.label',defaultMessage:'Edit {name}'};var initialData=Object.keys(pick_default()(data,fieldsToPick)).reduce(function(acc,current){if(current==='roles'){acc[current]=((data===null||data===void 0?void 0:data.roles)||[]).map(function(_ref3){var id=_ref3.id;return id;});return acc;}acc[current]=data===null||data===void 0?void 0:data[current];return acc;},{});var headerLabelName=initialData.username||(0,utils/* getFullName */.Pp)(initialData.firstname,initialData.lastname);var title=formatMessage(headerLabel,{name:headerLabelName});if(isLoading){return/*#__PURE__*/react.createElement(Main/* Main */.o,{"aria-busy":"true"},/*#__PURE__*/react.createElement(build.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(HeaderLayout/* HeaderLayout */.T,{primaryAction:/*#__PURE__*/react.createElement(Button/* Button */.z,{disabled:true,startIcon:/*#__PURE__*/react.createElement(Check/* default */.Z,null),type:"button",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(build.Link,{startIcon:/*#__PURE__*/react.createElement(ArrowLeft/* default */.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(ContentLayout/* ContentLayout */.D,null,/*#__PURE__*/react.createElement(build.LoadingIndicatorPage,null)));}return/*#__PURE__*/react.createElement(Main/* Main */.o,null,/*#__PURE__*/react.createElement(build.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(dist.Formik,{onSubmit:handleSubmit,initialValues:initialData,validateOnChange:false,validationSchema:users/* editValidation */.YM},function(_ref4){var errors=_ref4.errors,values=_ref4.values,handleChange=_ref4.handleChange,isSubmitting=_ref4.isSubmitting;return/*#__PURE__*/react.createElement(build.Form,null,/*#__PURE__*/react.createElement(HeaderLayout/* HeaderLayout */.T,{primaryAction:/*#__PURE__*/react.createElement(Button/* Button */.z,{disabled:isSubmitting||!canUpdate,startIcon:/*#__PURE__*/react.createElement(Check/* default */.Z,null),loading:isSubmitting,type:"submit",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(build.Link,{startIcon:/*#__PURE__*/react.createElement(ArrowLeft/* default */.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(ContentLayout/* ContentLayout */.D,null,(data===null||data===void 0?void 0:data.registrationToken)&&/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingBottom:6},/*#__PURE__*/react.createElement(MagicLink,{registrationToken:data.registrationToken})),/*#__PURE__*/react.createElement(Stack/* Stack */.K,{spacing:7},/*#__PURE__*/react.createElement(Box/* Box */.x,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(Stack/* Stack */.K,{spacing:4},/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'Details'})),/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},utils_layout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(build.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:!canUpdate,error:errors[input.name],onChange:handleChange,value:values[input.name]||''})));});})))),/*#__PURE__*/react.createElement(Box/* Box */.x,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(Stack/* Stack */.K,{spacing:4},/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"delta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:!canUpdate,error:errors.roles,onChange:handleChange,value:values.roles}))))))));}));};EditPage.propTypes={canUpdate:(prop_types_default()).bool.isRequired};/* harmony default export */ const Users_EditPage = (EditPage);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedEditPage/index.js






const ProtectedEditPage = () => {
  const toggleNotification = (0,build.useNotification)();
  const permissions = (0,react.useMemo)(() => {
    return {
      read: src_permissions/* default.settings.users.read */.Z.settings.users.read,
      update: src_permissions/* default.settings.users.update */.Z.settings.users.update
    };
  }, []);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,build.useRBAC)(permissions);
  const { state } = (0,react_router_dom_min.useLocation)();
  const from = (0,lodash.get)(state, "from", "/");
  (0,react.useEffect)(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: from });
  }
  return /* @__PURE__ */ react.createElement(Users_EditPage, { canUpdate });
};
/* harmony default export */ const Users_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 82464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12028);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65186);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);







const Envelope = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "text",
  {
    transform: "translate(-23 -9)",
    fill: "#4B515A",
    fillRule: "evenodd",
    fontSize: "32",
    fontFamily: "AppleColorEmoji, Apple Color Emoji"
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tspan", { x: "23", y: "36" }, "\u2709\uFE0F")
));
const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const handleCopy = () => {
    toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
  };
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentBox,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, { onCopy: handleCopy, text: target }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_4__/* .IconButton */ .h, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null) })),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Envelope, null),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 31605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 81288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91216);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82562);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86647);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23998);








const rotation = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
const fetchData = async () => {
  const { data } = await _core_utils__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value,
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .W, { key: role.id, value: role.id }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 17405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YM": () => (/* reexport */ edit),
  "Rw": () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js


const commonUserSchema = {
  firstname: lib/* string */.Z_().trim().required(build.translatedErrors.required),
  lastname: lib/* string */.Z_(),
  email: lib/* string */.Z_().email(build.translatedErrors.email).lowercase().required(build.translatedErrors.required),
  username: lib/* string */.Z_().nullable(),
  password: lib/* string */.Z_().min(8, build.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: lib/* string */.Z_().min(8, build.translatedErrors.minLength).oneOf([lib/* ref */.iH("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(build.translatedErrors.required) : passSchema;
  })
};
const schema = {
  ...commonUserSchema,
  currentPassword: lib/* string */.Z_().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(build.translatedErrors.required) : passSchema;
  }),
  preferedLanguage: lib/* string */.Z_().nullable()
};
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: lib/* array */.IX().min(1, build.translatedErrors.required).required(build.translatedErrors.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js



const edit_schema = lib/* object */.Ry().shape({
  ...commonUserSchema,
  isActive: lib/* bool */.Xg(),
  ...roles
});
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ }),

/***/ 12201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      {
        target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
      },
      formatMessage({
        id: "app.components.Users.MagicLink.connect",
        defaultMessage: "Copy and share this link to give access to this user"
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login` }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 86647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function e(a) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.057 18c.552 0 1 .451 1 .997v4.006a1 1 0 01-.941.995l-.059.002c-.552 0-1-.451-1-.997v-4.006a1 1 0 01.941-.995l.06-.002zm-3.06-.736l.055.03c.478.276.64.89.367 1.364l-2.002 3.468a1 1 0 01-1.31.394l-.055-.03a1.002 1.002 0 01-.368-1.363l2.003-3.469a1 1 0 011.31-.394zm7.42.394l2.002 3.468a1 1 0 01-.314 1.331l-.053.033a1.002 1.002 0 01-1.365-.363l-2.003-3.469a1 1 0 01.314-1.33l.054-.034a1.002 1.002 0 011.364.364zm-9.548-2.66l.033.054c.276.478.11 1.091-.364 1.364L3.07 18.42a1 1 0 01-1.331-.314l-.033-.053a1.001 1.001 0 01.364-1.365l3.468-2.003a1 1 0 011.33.314zm11.79-.313l3.468 2.002a1 1 0 01.393 1.31l-.03.055c-.276.478-.89.64-1.363.367l-3.469-2.003a1 1 0 01-.394-1.309l.03-.055c.276-.479.89-.64 1.364-.367zm4.344-3.628a1 1 0 01.995.941l.002.06c0 .551-.451 1-.997 1h-4.006a1 1 0 01-.995-.942L18 12.057c0-.552.451-1 .997-1h4.006zm-18 0a1 1 0 01.995.941l.002.06c0 .551-.451 1-.998 1H.998a1 1 0 01-.996-.942L0 12.057c0-.552.451-1 .998-1h4.004zm17.454-5.059l.033.054c.277.478.11 1.091-.363 1.365l-3.469 2.002a1 1 0 01-1.33-.314l-.034-.053a1.002 1.002 0 01.364-1.365l3.468-2.003a1 1 0 011.331.314zM3.07 5.684l3.468 2.003a1 1 0 01.394 1.31l-.03.055c-.276.478-.89.64-1.364.367L2.07 7.417a1 1 0 01-.394-1.31l.03-.055c.276-.479.89-.64 1.364-.368zm14.926-4.008l.056.03c.478.276.64.89.367 1.364l-2.003 3.468a1 1 0 01-1.309.394l-.055-.03a1.002 1.002 0 01-.367-1.364l2.002-3.468a1 1 0 011.31-.394zm-10.58.394L9.42 5.538a1 1 0 01-.314 1.33l-.053.034a1.002 1.002 0 01-1.365-.364L5.684 3.07a1 1 0 01.314-1.331l.054-.033a1.002 1.002 0 011.365.364zM12.058 0c.552 0 1 .451 1 .998v4.004a1 1 0 01-.941.996L12.057 6c-.552 0-1-.451-1-.998V.998a1 1 0 01.941-.996l.06-.002z",
      fill: "#212134"
    })
  });
}



/***/ })

}]);