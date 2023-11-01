exports.id = "main";
exports.modules = {

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nodegui/react-nodegui */ "./node_modules/@nodegui/react-nodegui/dist/index.js");
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nodegui/nodegui */ "./node_modules/@nodegui/nodegui/dist/index.js");
/* harmony import */ var _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_nodegui_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/nodegui.jpg */ "./assets/nodegui.jpg");




const minSize = {
  width: 500,
  height: 520
};
const winIcon = new _nodegui_nodegui__WEBPACK_IMPORTED_MODULE_2__["QIcon"](_assets_nodegui_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_SUBMIT') {
    return {
      value: action.value,
      isValid: action.value.includes('@') // IN A REAL APP THIS WOULD BE A FUNCTION HANDLER WITH VALIDATION LOGIC

    };
  }

  return {
    value: '',
    isValid: false
  };
};

const App = () => {
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const textInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [emailState, dispatchEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(emailReducer, {
    value: '',
    isValid: false
  });
  const buttonHandler = Object(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["useEventHandler"])({
    clicked: () => setCount(prevCount => prevCount += 1)
  }, []);
  const emailSubmitHandler = Object(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["useEventHandler"])({
    clicked: () => {
      console.log('Validate Email Logic');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (count !== 0) {
      console.log('Count is higher than its initial state.');
    }

    const text = textInputRef.current.toPlainText();

    if (text.length) {
      console.log('Text Input Ref: ' + text);
    }
  }, [count, textInputRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Window"], {
    windowIcon: winIcon,
    windowTitle: "",
    minSize: minSize,
    styleSheet: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Text"], null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    on: buttonHandler,
    text: 'Increase Count',
    cursor: 13
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["PlainTextEdit"], {
    ref: textInputRef,
    placeholderText: 'Type any text here...'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["LineEdit"], {
    placeholderText: 'Type your email',
    ref: emailInputRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    on: emailSubmitHandler,
    text: 'Submit Email',
    cursor: 13
  }), emailState.isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "Email is valid!"), !emailState.isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "Email is not valid!")));
};

const styleSheet = `
* {
  font-size: 20px;
  font-weight: 700;
}

#container {
  padding: 15px;
}

QPlainTextEdit {
  height: 100px;
  margin-bottom: 10px;
}

QLineEdit {
  padding: 10px 0;
}

QPushButton {
  color: #ffffff;
  background-color: #4885ed;
  padding: 15px 0;
}

QLineEdit, QPushButton, QPlainTextEdit {
  width: 300px;
}
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_1__["hot"])(App));

/***/ })

};
//# sourceMappingURL=main.ed067827bc89475e454b.hot-update.js.map