"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3552],{

/***/ 72751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(8181);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(15559);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 2 modules
var Tabs = __webpack_require__(60633);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,lib/* object */.Ry)().shape({
  code: (0,lib/* string */.Z_)().required(),
  displayName: (0,lib/* string */.Z_)().max(50, "Settings.locales.modal.locales.displayName.error").required(build.translatedErrors.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var constants = __webpack_require__(7982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js





const editLocale = async (id, payload, toggleNotification) => {
  try {
    const data = await (0,build.request)(`/i18n/locales/${id}`, {
      method: "PUT",
      body: payload
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.edit.success") }
    });
    return data;
  } catch {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return null;
  }
};
const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const modifyLocale = async (id, payload) => {
    setLoading(true);
    const editedLocale = await editLocale(id, payload, toggleNotification);
    dispatch({ type: constants/* UPDATE_LOCALE */.OT, editedLocale });
    setLoading(false);
  };
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js





const fetchDefaultLocalesList = async (toggleNotification) => {
  try {
    const data = await (0,build.request)("/i18n/iso-locales", {
      method: "GET"
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return [];
  }
};
const useDefaultLocales = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,build.useNotification)();
  const { isLoading, data } = (0,react_query_lib.useQuery)(
    "default-locales",
    () => fetchDefaultLocalesList(toggleNotification).then((data2) => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    })
  );
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js









const BaseForm = ({ locale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, errors } = (0,formik_dist.useFormikContext)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const localeDetails = !isLoading && defaultLocales.find((row) => row.code === locale.code);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: localeDetails?.code || locale.code,
      disabled: true
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: localeDetails?.code || locale.code }, localeDetails?.name || locale.code)
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm);
BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: "isDefault",
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault,
      disabled: isDefaultLocale
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js


















const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleSubmit = async ({ displayName, isDefault }) => {
    await editLocale(locale.id, { name: displayName, isDefault });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "edit-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: {
        code: locale?.code,
        displayName: locale?.name || "",
        isDefault: Boolean(locale?.isDefault)
      },
      onSubmit: handleSubmit,
      validationSchema: schemas
    },
    /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "edit-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.edit"),
      defaultMessage: "Edit a locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, { locale })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, { isDefaultLocale: Boolean(locale && locale.isDefault) }))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isEditing }, formatMessage({ id: "global.save" }))
      }
    ))
  ));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js





const deleteLocale = async (id, toggleNotification) => {
  try {
    const data = await (0,build.request)(`/i18n/locales/${id}`, {
      method: "DELETE"
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.delete.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return e;
  }
};
const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const removeLocale = async (id) => {
    setLoading(true);
    await deleteLocale(id, toggleNotification);
    dispatch({ type: constants/* DELETE_LOCALE */.HC, id });
    setLoading(false);
  };
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isConfirmButtonLoading: isDeleting,
      onConfirm: handleDelete,
      onToggleDialog: onClose,
      isOpen: isOpened
    }
  );
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js






const addLocale = async ({ code, name, isDefault }, toggleNotification) => {
  const data = await (0,build.request)("/i18n/locales", {
    method: "POST",
    body: {
      name,
      code,
      isDefault
    }
  });
  toggleNotification({
    type: "success",
    message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.success") }
  });
  return data;
};
const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const persistLocale = async (locale) => {
    setLoading(true);
    try {
      const newLocale = await addLocale(locale, toggleNotification);
      dispatch({ type: constants/* ADD_LOCALE */.xz, newLocale });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 2 modules
var Combobox = __webpack_require__(31950);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.Z)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.h,
    {
      "aria-busy": isLoading,
      error,
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: computedValue,
      onClear: value ? onClear : void 0,
      onChange: (selectedLocaleKey) => {
        const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
        if (selectedLocale) {
          onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
        }
      },
      placeholder: formatMessage({
        id: "components.placeholder.select",
        defaultMessage: "Select"
      })
    },
    options.map((option) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: option.value, key: option.value }, option.label))
  );
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear() {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js







const BaseForm_BaseForm = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, setFieldValue, errors } = (0,formik_dist.useFormikContext)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    components_LocaleSelect,
    {
      error: errors.code,
      value: values.code,
      onLocaleChange: handleLocaleChange,
      onClear: handleClear
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm_BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm_AdvancedForm = () => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm_AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js


















const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const handleLocaleAdd = async (values) => {
    await addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "add-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: initialFormValues,
      onSubmit: handleLocaleAdd,
      validationSchema: schemas,
      validateOnChange: false
    },
    /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "add-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.add"),
      defaultMessage: "Add new locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2", variant: "beta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isAdding }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
      }
    ))
  ));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
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
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js












const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 4, rowCount: locales.length + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "Actions")))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, locales.map((locale) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      key: locale.id,
      ...(0,build.onRowClick)({
        fn: () => onEditLocale(locale),
        condition: onEditLocale
      })
    },
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.id)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.default") }) : null)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
      Stack/* Stack */.K,
      {
        horizontal: true,
        spacing: 1,
        style: { justifyContent: "flex-end" },
        ...build.stopPropagation
      },
      onEditLocale && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onEditLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.edit") }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          noBorder: true
        }
      ),
      onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onDeleteLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.delete") }),
          icon: /* @__PURE__ */ react.createElement(Trash["default"], null),
          noBorder: true
        }
      )
    ))
  ))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js
















const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleCreateModal, size: "S" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })),
      title: formatMessage({ id: (0,utils/* getTrad */.O)("plugin.name") }),
      subtitle: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.description") })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, locales?.length > 0 ? /* @__PURE__ */ react.createElement(
    LocaleList_LocaleTable,
    {
      locales,
      onDeleteLocale: handleDeleteLocale,
      onEditLocale: handleEditLocale
    }
  ) : /* @__PURE__ */ react.createElement(
    dist.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments["default"], { width: void 0, height: void 0 }),
      content: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.empty.title") }),
      action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleCreateModal }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })) : null
    }
  )), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, { onClose: onToggleCreateModal }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, { onClose: closeModalToEdit, locale: localeToEdit }), /* @__PURE__ */ react.createElement(components_ModalDelete, { localeToDelete, onClose: closeModalToDelete }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(
    components_LocaleList,
    {
      canUpdateLocale,
      canDeleteLocale,
      onToggleCreateModal: handleToggleModalCreate,
      isCreating: isOpenedCreateModal
    }
  ) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/permissions.js
var permissions = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,build.useRBAC)(permissions/* default */.Z);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    SettingsPage_LocaleSettingsPage,
    {
      canReadLocale: canRead,
      canCreateLocale: canCreate,
      canUpdateLocale: canUpdate,
      canDeleteLocale: canDelete
    }
  );
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ }),

/***/ 31950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ I),
  "X": () => (/* binding */ W)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
// EXTERNAL MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
var compute_scroll_into_view_dist = __webpack_require__(70389);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/utils.js


const utils_t = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
}, f = {
  Close: "Close",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  Previous: "Previous",
  Select: "Select",
  UpLevel: "UpLevel"
};
function utils_d(e = [], n = null, i = []) {
  const o = String(n ?? "").toLowerCase();
  return o ? e.filter((s) => s.props.children.toString().toLowerCase().includes(o) && i.indexOf(s) < 0) : e;
}
function utils_C(e, n) {
  if (!n && e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Open;
  if (e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Next;
  if (e === keyboardKeys/* KeyboardKeys.UP */.y.UP)
    return utils_t.Previous;
  if (e === keyboardKeys/* KeyboardKeys.HOME */.y.HOME)
    return utils_t.First;
  if (e === keyboardKeys/* KeyboardKeys.END */.y.END)
    return utils_t.Last;
  if (e === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE)
    return utils_t.Close;
  if (e === keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER)
    return utils_t.CloseSelect;
  if (e === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE || e === keyboardKeys/* KeyboardKeys.CLEAR */.y.CLEAR || e.length === 1)
    return utils_t.Type;
}
function utils_S(e, n, i) {
  switch (i) {
    case utils_t.First:
      return 0;
    case utils_t.Last:
      return n;
    case utils_t.Previous:
      return Math.max(0, e - 1);
    case utils_t.Next:
      return Math.min(n, e + 1);
    default:
      return e;
  }
}
function utils_P(e) {
  (0,compute_scroll_into_view_dist/* default */.Z)(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: i, top: o, left: s }) => {
    i.scrollTop = o, i.scrollLeft = s;
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js
var components = __webpack_require__(81318);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(88533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/components.js
var Combobox_components = __webpack_require__(74020);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxList.js



const o = ({ options: i, activeOptionRef: r }) => ((0,react.useEffect)(() => {
  r.current && utils_P(r.current);
}, [r]), i);
o.defaultProps = {
  activeOptionRef: void 0
};
o.propTypes = {
  options: prop_types.array.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
























const I = ({
  children: s,
  clearLabel: G,
  creatable: x,
  createMessage: J,
  disabled: c,
  error: M,
  hasMoreItems: Q,
  hint: R,
  label: g,
  labelAction: X,
  loading: L,
  loadingMessage: Y,
  noOptionsMessage: Z,
  onChange: S,
  onClear: B,
  onCreateOption: ee,
  onInputChange: D,
  onLoadMore: te,
  placeholder: oe,
  required: F,
  value: d,
  ...ne
}) => {
  const re = () => s.find((t) => t.props?.value.toLowerCase() === d.toLowerCase()).props?.children, [a, T] = (0,react.useState)(0), [ae, ie] = (0,react.useState)(null), [l, A] = (0,react.useState)(s), [u, le] = (0,react.useState)(!1), [r, k] = (0,react.useState)(""), C = (0,react.useRef)(), O = (0,react.useRef)(!1), v = (0,react.useRef)(), P = (0,react.useRef)(), se = (0,react.useRef)(), V = (0,react.useRef)(!0), i = (0,useId/* useId */.M)("combobox"), K = `${i}-label`;
  if (!g && !ne["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  (0,react.useEffect)(() => {
    A(utils_d(s, r));
  }, [r, s]), (0,react.useEffect)(() => {
    u && C.current && utils_P(C.current);
  }, [a, u]), (0,react.useLayoutEffect)(() => {
    V.current && (V.current = !1);
  }, [d]);
  const ce = u ? `${i}-${a}` : "", N = () => {
    S(null), k("");
  }, pe = (t) => {
    D && D(t);
    const n = v.current.value;
    A(utils_d(s, n)), T(0), ie(null), r !== n && k(n), u || f(!0, !1);
  }, de = (t) => {
    const { key: n } = t, p = x && r ? l.length : l.length - 1, h = utils_C(n, u);
    switch (d && !r && n === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE && N(), h) {
      case utils_t.Next: {
        if (a === p) {
          m(0);
          break;
        }
        m(utils_S(a, p, h));
        break;
      }
      case utils_t.Previous: {
        if (a === 0) {
          m(p);
          break;
        }
        m(utils_S(a, p, h));
        break;
      }
      case utils_t.Last:
      case utils_t.First: {
        if (a === p) {
          m(0);
          break;
        }
        m(utils_S(a, p, h));
        break;
      }
      case utils_t.CloseSelect:
        t.preventDefault(), w(a);
        break;
      case utils_t.Close:
        t.preventDefault(), f(!1);
        break;
      case utils_t.Open:
        f(!0);
        break;
    }
  }, fe = (t) => {
    if (t.preventDefault(), d && !O.current && k(""), O.current) {
      O.current = !1;
      return;
    }
    f(!1, !1);
  }, m = (t) => {
    T(t);
  }, ue = (t) => {
    m(t), w(t);
  }, H = () => {
    O.current = !0;
  }, w = (t) => {
    const n = l[t];
    if (k(""), n) {
      S(n.props.value), f(!1);
      return;
    }
    x && (ee(r), f(!1));
  }, f = (t, n = !0) => {
    le(t), n && v.current.focus();
  }, me = react.Children.toArray(l).map((t, n) => {
    const p = a === n;
    return (0,react.cloneElement)(t, {
      id: `${i}-${n}`,
      "aria-selected": ae === n,
      "aria-posinset": n + 1,
      "aria-setsize": react.Children.toArray(l).length,
      ref(h) {
        p && (C.current = h);
      },
      onClick: () => ue(n),
      onMouseDown: H,
      isSelected: p
    });
  }), be = () => {
    v.current.focus(), B && B(), N();
  }, ge = () => {
    v.current.focus(), f(!0);
  }, Ce = () => {
    const t = l.findIndex((n) => n.props?.children === r);
    return r && t === -1;
  }, he = (t) => {
    t.preventDefault(), f(t, !0);
  };
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, {
    hint: R,
    error: M,
    id: i,
    required: F
  }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, {
    "aria-live": "polite",
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, d), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: g || R || M ? 1 : 0
  }, g && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, {
    action: X
  }, g), /* @__PURE__ */ react.createElement(Combobox_components/* MainRow */.d8, {
    ref: P,
    $disabled: c,
    hasError: M
  }, /* @__PURE__ */ react.createElement(Combobox_components/* InputContainer */.fv, {
    wrap: "wrap"
  }, !r && d && /* @__PURE__ */ react.createElement(Combobox_components/* ValueContainer */.K7, {
    id: `${i}-selected-value`
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, re())), /* @__PURE__ */ react.createElement(Combobox_components/* Input */.II, {
    "aria-activedescendant": ce,
    "aria-autocomplete": "list",
    "aria-controls": `${i}-listbox`,
    "aria-disabled": c,
    "aria-expanded": u,
    "aria-haspopup": "listbox",
    "aria-labelledby": g ? K : void 0,
    autoComplete: "off",
    autoCorrect: "off",
    id: i,
    onBlur: c ? void 0 : fe,
    onClick: c ? void 0 : he,
    onInput: c ? void 0 : pe,
    onKeyDown: c ? void 0 : de,
    placeholder: d ? "" : oe,
    readOnly: c,
    ref: v,
    required: F,
    role: "combobox",
    spellCheck: "off",
    type: "text",
    value: r
  })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (d || r) && /* @__PURE__ */ react.createElement(components/* IconBox */.zb, {
    id: `${i}-clear`,
    "aria-label": G,
    disabled: c,
    paddingLeft: 3,
    as: "button",
    onClick: be,
    type: "button"
  }, /* @__PURE__ */ react.createElement(dist.Cross, null)), /* @__PURE__ */ react.createElement(components/* CaretBox */.AV, {
    disabled: c,
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    onClick: ge,
    tabIndex: -1,
    type: "button"
  }, /* @__PURE__ */ react.createElement(dist.CarretDown, null)))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), u && /* @__PURE__ */ react.createElement(Popover/* Popover */.J, {
    id: `${i}-popover`,
    source: P,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `${i}-listbox-popover-intersection`,
    onReachEnd: Q && !L ? te : void 0
  }, /* @__PURE__ */ react.createElement("div", {
    role: "listbox",
    ref: se,
    id: `${i}-listbox`,
    "aria-labelledby": g ? K : void 0
  }, (Boolean(l.length) || x) && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(o, {
    activeOptionRef: C,
    options: me
  }), Ce() && x && /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, {
    isSelected: a === l.length,
    ref: (t) => {
      a === l.length && (C.current = t);
    },
    onMouseDown: H,
    onClick: () => w(),
    taindex: 0
  }, J(r))), !l.length && !x && !L && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: C
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    textColor: "neutral800"
  }, Z(r))), L && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, {
    small: !0
  }, Y)))));
}, W = (s) => /* @__PURE__ */ react.createElement(I, {
  ...s,
  creatable: !0
});
I.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (s) => `Create "${s}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
W.defaultProps = I.defaultProps;
I.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  creatable: prop_types.bool,
  createMessage: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.string,
  hasMoreItems: prop_types.bool,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  label: prop_types.string,
  labelAction: prop_types.element,
  loading: prop_types.bool,
  loadingMessage: prop_types.string,
  noOptionsMessage: prop_types.func,
  onChange: prop_types.func.isRequired,
  onClear: prop_types.func,
  onCreateOption: prop_types.func,
  onInputChange: prop_types.func,
  onLoadMore: prop_types.func,
  placeholder: prop_types.string,
  value: prop_types.string
};
W.propTypes = {
  ...I.propTypes,
  onCreateOption: prop_types.func.isRequired
};



/***/ }),

/***/ 90608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75515);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74020);




const r = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ isSelected: e, children: p, ...i }, n) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_js__WEBPACK_IMPORTED_MODULE_1__/* .OptionBox */ .Zq, {
  hasRadius: !0,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2,
  paddingBottom: 2,
  role: "option",
  background: "neutral0",
  isSelected: e,
  ref: n,
  ...i
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
  textColor: e ? "primary600" : "neutral800",
  fontWeight: e ? "bold" : null
}, p)));
r.defaultProps = {
  isSelected: !1
};
r.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.string, prop_types__WEBPACK_IMPORTED_MODULE_3__.number]).isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};
r.displayName = "ComboboxOption";



/***/ }),

/***/ 74020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ g),
/* harmony export */   "K7": () => (/* binding */ p),
/* harmony export */   "Zq": () => (/* binding */ $),
/* harmony export */   "d8": () => (/* binding */ c),
/* harmony export */   "fv": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11047);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15585);




const c = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  padding-left: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};

  ${({ theme: o, $disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${(0,_themes_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .inputFocusStyle */ .k3)()}
`, p = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`, u = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`, g = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40 / 16}rem;
  border: none;
  flex: 1;
  font-size: ${14 / 16}rem;
  color: ${({ theme: o }) => o.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`, $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({ isSelected: o, theme: r }) => o && `background: ${r.colors.primary100};`}

  &:hover {
    background: ${({ theme: o }) => o.colors.primary100};
  }
`;



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

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);



const r = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, e = ({ labelledBy: o, ...t }) => {
  const n = o || "main-content-title";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r, {
    "aria-labelledby": n,
    id: "main-content",
    tabIndex: -1,
    ...t
  });
};
e.defaultProps = {
  labelledBy: void 0
};
e.propTypes = {
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
};



/***/ })

}]);