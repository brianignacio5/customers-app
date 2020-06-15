/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.ts":
/*!***********************!*\
  !*** ./server/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar body_parser_1 = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar dbConnection_1 = __webpack_require__(/*! ./dbConnection */ \"./server/dbConnection.ts\");\nvar error_1 = __importDefault(__webpack_require__(/*! ./middleware/error */ \"./server/middleware/error.ts\"));\nvar logger_1 = __importDefault(__webpack_require__(/*! ./middleware/logger */ \"./server/middleware/logger.ts\"));\nvar App = /** @class */ (function () {\n    function App(controllers) {\n        this.app = express_1.default();\n        this.config();\n        this.setMiddlewares();\n        this.setRoutes(controllers);\n    }\n    App.prototype.config = function () {\n        this.app.use(body_parser_1.json());\n        this.app.use(body_parser_1.urlencoded({ extended: false }));\n        dbConnection_1.connectToDb();\n    };\n    App.prototype.setRoutes = function (controllers) {\n        for (var _i = 0, controllers_1 = controllers; _i < controllers_1.length; _i++) {\n            var controller = controllers_1[_i];\n            this.app.use(\"/\", controller.router);\n        }\n    };\n    App.prototype.setMiddlewares = function () {\n        this.app.use(logger_1.default);\n        this.app.use(error_1.default);\n    };\n    App.prototype.start = function (port) {\n        this.app.listen(port, function () {\n            console.log(\"App is listening on port \" + port);\n        });\n    };\n    return App;\n}());\nexports.default = App;\n\n\n//# sourceURL=webpack:///./server/app.ts?");

/***/ }),

/***/ "./server/controllers/contactsController.ts":
/*!**************************************************!*\
  !*** ./server/controllers/contactsController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar contacts_1 = __importDefault(__webpack_require__(/*! ../models/contacts */ \"./server/models/contacts.ts\"));\nvar httpException_1 = __importDefault(__webpack_require__(/*! ../types/httpException */ \"./server/types/httpException.ts\"));\nvar ContactController = /** @class */ (function () {\n    function ContactController() {\n        var _this = this;\n        this.path = \"/contacts\";\n        this.router = express_1.Router();\n        this.contact = contacts_1.default;\n        this.createContact = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var contactData, newContact, savedContact, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        contactData = req.body;\n                        newContact = new this.contact(contactData);\n                        return [4 /*yield*/, newContact.save()];\n                    case 1:\n                        savedContact = _a.sent();\n                        savedContact\n                            ? res.send(savedContact)\n                            : next(new httpException_1.default(404, new Error(\"Error creating new contact\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _a.sent();\n                        next(new httpException_1.default(404, error_1));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.deleteContactById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var contactId, deleteResult, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        contactId = req.params.id;\n                        return [4 /*yield*/, this.contact.findByIdAndDelete(contactId)];\n                    case 1:\n                        deleteResult = _a.sent();\n                        deleteResult\n                            ? res.send(deleteResult)\n                            : next(new httpException_1.default(404, new Error(\"Error deleting contact\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_2 = _a.sent();\n                        next(new httpException_1.default(404, error_2));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getAllContacts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customerId, contactsQuery, contacts, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        customerId = req.body.customer;\n                        contactsQuery = customerId\n                            ? this.contact.find({ customer: customerId })\n                            : this.contact.find();\n                        return [4 /*yield*/, contactsQuery.exec()];\n                    case 1:\n                        contacts = _a.sent();\n                        contacts\n                            ? res.send(contacts)\n                            : next(new httpException_1.default(404, new Error(\"Error getting contacts\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_3 = _a.sent();\n                        next(new httpException_1.default(404, error_3));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getContactById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var contactId, requestedContact, error_4;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        contactId = req.params.id;\n                        return [4 /*yield*/, this.contact.findById(contactId).exec()];\n                    case 1:\n                        requestedContact = _a.sent();\n                        requestedContact\n                            ? res.send(requestedContact)\n                            : next(new httpException_1.default(404, new Error(\"Error getting contact by id\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_4 = _a.sent();\n                        next(new httpException_1.default(404, error_4));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.updateContactById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var contactId, modifiedContact, requestedContact, error_5;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        contactId = req.params.id;\n                        modifiedContact = req.body;\n                        return [4 /*yield*/, this.contact\n                                .findByIdAndUpdate(contactId, modifiedContact)\n                                .exec()];\n                    case 1:\n                        requestedContact = _a.sent();\n                        requestedContact\n                            ? res.send(requestedContact)\n                            : next(new httpException_1.default(404, new Error(\"Contact can't be updated.\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_5 = _a.sent();\n                        next(new httpException_1.default(404, error_5));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.router.get(this.path, this.getAllContacts);\n        this.router.post(this.path, this.createContact);\n        this.router.get(this.path + \"/:id\", this.getContactById);\n        this.router.put(this.path + \"/:id\", this.updateContactById);\n        this.router.delete(this.path + \"/:id\", this.deleteContactById);\n    }\n    return ContactController;\n}());\nexports.default = ContactController;\n\n\n//# sourceURL=webpack:///./server/controllers/contactsController.ts?");

/***/ }),

/***/ "./server/controllers/customersController.ts":
/*!***************************************************!*\
  !*** ./server/controllers/customersController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar customers_1 = __importDefault(__webpack_require__(/*! ../models/customers */ \"./server/models/customers.ts\"));\nvar httpException_1 = __importDefault(__webpack_require__(/*! ../types/httpException */ \"./server/types/httpException.ts\"));\nvar CustomerController = /** @class */ (function () {\n    function CustomerController() {\n        var _this = this;\n        this.path = \"/customers\";\n        this.router = express_1.Router();\n        this.customer = customers_1.default;\n        this.getAllCustomers = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customers, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.customer.find()];\n                    case 1:\n                        customers = _a.sent();\n                        customers\n                            ? res.send(customers)\n                            : next(new httpException_1.default(404, new Error(\"Customer not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _a.sent();\n                        next(new httpException_1.default(404, error_1));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getCustomerById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var id, requestedCustomer, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        id = req.params.id;\n                        return [4 /*yield*/, this.customer.findById(id)];\n                    case 1:\n                        requestedCustomer = _a.sent();\n                        requestedCustomer\n                            ? res.send(requestedCustomer)\n                            : next(new httpException_1.default(404, new Error(\"Customer not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_2 = _a.sent();\n                        next(new httpException_1.default(404, error_2));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.createCustomer = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customerData, newCustomer, savedCustomer, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        customerData = req.body;\n                        newCustomer = new this.customer(customerData);\n                        return [4 /*yield*/, newCustomer.save()];\n                    case 1:\n                        savedCustomer = _a.sent();\n                        savedCustomer\n                            ? res.send(savedCustomer)\n                            : next(new httpException_1.default(404, new Error(\"Customer not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_3 = _a.sent();\n                        next(new httpException_1.default(404, error_3));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.updateCustomer = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customerId, customerData, updatedCustomer, error_4;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        customerId = req.params.id;\n                        customerData = req.body;\n                        return [4 /*yield*/, this.customer.findByIdAndUpdate(customerId, customerData)];\n                    case 1:\n                        updatedCustomer = _a.sent();\n                        updatedCustomer\n                            ? res.send(updatedCustomer)\n                            : next(new httpException_1.default(404, new Error(\"Customer not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_4 = _a.sent();\n                        console.log(error_4);\n                        next(new httpException_1.default(404, error_4));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.deleteCustomer = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customerId, deleteResult, error_5;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        customerId = req.params.id;\n                        return [4 /*yield*/, this.customer.findByIdAndDelete(customerId)];\n                    case 1:\n                        deleteResult = _a.sent();\n                        deleteResult\n                            ? res.send(deleteResult)\n                            : next(new httpException_1.default(404, new Error(\"Customer not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_5 = _a.sent();\n                        console.log(error_5);\n                        next(new httpException_1.default(404, error_5));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.router.get(this.path, this.getAllCustomers);\n        this.router.get(this.path + \"/:id\", this.getCustomerById);\n        this.router.post(this.path, this.createCustomer);\n        this.router.put(this.path + \"/:id\", this.updateCustomer);\n        this.router.delete(this.path + \"/:id\", this.deleteCustomer);\n    }\n    return CustomerController;\n}());\nexports.default = CustomerController;\n\n\n//# sourceURL=webpack:///./server/controllers/customersController.ts?");

/***/ }),

/***/ "./server/controllers/invoicesControllers.ts":
/*!***************************************************!*\
  !*** ./server/controllers/invoicesControllers.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar invoices_1 = __importDefault(__webpack_require__(/*! ../models/invoices */ \"./server/models/invoices.ts\"));\nvar httpException_1 = __importDefault(__webpack_require__(/*! ../types/httpException */ \"./server/types/httpException.ts\"));\nvar InvoiceController = /** @class */ (function () {\n    function InvoiceController() {\n        var _this = this;\n        this.path = \"/invoices\";\n        this.router = express_1.Router();\n        this.invoice = invoices_1.default;\n        this.createInvoice = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var invoiceData, newInvoice, savedInvoice, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        invoiceData = req.body;\n                        newInvoice = new this.invoice(invoiceData);\n                        return [4 /*yield*/, newInvoice.save()];\n                    case 1:\n                        savedInvoice = _a.sent();\n                        savedInvoice\n                            ? res.send(savedInvoice)\n                            : next(new httpException_1.default(404, new Error(\"Invoice was not created\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _a.sent();\n                        next(new httpException_1.default(404, error_1));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getAllInvoices = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var customerId, invoiceQuery, invoices, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        customerId = req.body.customer;\n                        invoiceQuery = customerId\n                            ? this.invoice.find({ customer: customerId })\n                            : this.invoice.find();\n                        if (req.body.fromDate) {\n                            invoiceQuery = invoiceQuery.where(\"date\").gte(req.body.fromDate);\n                        }\n                        if (req.body.toDate) {\n                            invoiceQuery = invoiceQuery.where(\"date\").lte(req.body.toDate);\n                        }\n                        return [4 /*yield*/, invoiceQuery.exec()];\n                    case 1:\n                        invoices = _a.sent();\n                        invoices\n                            ? res.send(invoices)\n                            : next(new httpException_1.default(404, new Error(\"Invoices not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_2 = _a.sent();\n                        next(new httpException_1.default(404, error_2));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.getInvoiceById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var id, requestedInvoice, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        id = req.params.id;\n                        return [4 /*yield*/, this.invoice.findById(id).exec()];\n                    case 1:\n                        requestedInvoice = _a.sent();\n                        requestedInvoice\n                            ? res.send(requestedInvoice)\n                            : next(new httpException_1.default(404, new Error(\"Invoice not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_3 = _a.sent();\n                        next(new httpException_1.default(404, error_3));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.updateInvoiceById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var id, modifiedInvoice, requestedInvoice, error_4;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        id = req.params.id;\n                        modifiedInvoice = req.body;\n                        return [4 /*yield*/, this.invoice\n                                .findByIdAndUpdate(id, modifiedInvoice)\n                                .exec()];\n                    case 1:\n                        requestedInvoice = _a.sent();\n                        requestedInvoice\n                            ? res.send(requestedInvoice)\n                            : next(new httpException_1.default(404, new Error(\"Invoice not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_4 = _a.sent();\n                        next(new httpException_1.default(404, error_4));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.deleteInvoiceById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            var id, deleteResult, error_5;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        id = req.params.id;\n                        return [4 /*yield*/, this.invoice.findByIdAndDelete(id).exec()];\n                    case 1:\n                        deleteResult = _a.sent();\n                        deleteResult\n                            ? res.send(deleteResult)\n                            : next(new httpException_1.default(404, new Error(\"Invoice not found\")));\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_5 = _a.sent();\n                        next(new httpException_1.default(404, error_5));\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.router.get(this.path, this.getAllInvoices);\n        this.router.post(this.path, this.createInvoice);\n        this.router.get(this.path + \"/:id\", this.getInvoiceById);\n        this.router.put(this.path + \"/:id\", this.updateInvoiceById);\n        this.router.delete(this.path + \"/:id\", this.deleteInvoiceById);\n    }\n    return InvoiceController;\n}());\nexports.default = InvoiceController;\n\n\n//# sourceURL=webpack:///./server/controllers/invoicesControllers.ts?");

/***/ }),

/***/ "./server/dbConnection.ts":
/*!********************************!*\
  !*** ./server/dbConnection.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.connectToDb = void 0;\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction connectToDb() {\n    return __awaiter(this, void 0, void 0, function () {\n        var mongoUri, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    mongoUri = mongodb+srv://bignacio5:chimichurri23@cluster0-mol3q.mongodb.net/customers?retryWrites=true&w=majority || \"mongodb://localhost:17569/customersapp\";\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 3, , 4]);\n                    return [4 /*yield*/, mongoose_1.default.connect(mongoUri, {\n                            useFindAndModify: false,\n                            useNewUrlParser: true,\n                            useUnifiedTopology: true,\n                        })];\n                case 2:\n                    _a.sent();\n                    console.log(\"Succesfully connected to DB\");\n                    return [3 /*break*/, 4];\n                case 3:\n                    error_1 = _a.sent();\n                    console.log(\"Error connecting to DB\", error_1);\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.connectToDb = connectToDb;\n\n\n//# sourceURL=webpack:///./server/dbConnection.ts?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./server/app.ts\"));\nvar customersController_1 = __importDefault(__webpack_require__(/*! ./controllers/customersController */ \"./server/controllers/customersController.ts\"));\nvar invoicesControllers_1 = __importDefault(__webpack_require__(/*! ./controllers/invoicesControllers */ \"./server/controllers/invoicesControllers.ts\"));\nvar contactsController_1 = __importDefault(__webpack_require__(/*! ./controllers/contactsController */ \"./server/controllers/contactsController.ts\"));\nvar port = typeof Object({\"DB_URI\":mongodb+srv://bignacio5:chimichurri23@cluster0-mol3q.mongodb.net/customers?retryWrites=true&w=majority}).PORT === \"string\" ? parseInt(Object({\"DB_URI\":mongodb+srv://bignacio5:chimichurri23@cluster0-mol3q.mongodb.net/customers?retryWrites=true&w=majority}).PORT) : 3000;\nvar app = new app_1.default([\n    new customersController_1.default(),\n    new invoicesControllers_1.default(),\n    new contactsController_1.default(),\n]);\napp.start(port);\n\n\n//# sourceURL=webpack:///./server/index.ts?");

/***/ }),

/***/ "./server/middleware/error.ts":
/*!************************************!*\
  !*** ./server/middleware/error.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction errorMiddleware(error, req, res, next) {\n    var status = error.status || 500;\n    var message = error.message || \"Something went wrong\";\n    res.status(status).send({ message: message, status: status, stack: error.stack });\n}\nexports.default = errorMiddleware;\n\n\n//# sourceURL=webpack:///./server/middleware/error.ts?");

/***/ }),

/***/ "./server/middleware/logger.ts":
/*!*************************************!*\
  !*** ./server/middleware/logger.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar loggerMiddleware = function (req, res, next) {\n    console.log(\"Request \" + req.method + \" \" + req.path);\n    next();\n};\nexports.default = loggerMiddleware;\n\n\n//# sourceURL=webpack:///./server/middleware/logger.ts?");

/***/ }),

/***/ "./server/models/contacts.ts":
/*!***********************************!*\
  !*** ./server/models/contacts.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar contactSchema = new mongoose_1.Schema({\n    customer: {\n        ref: \"Customer\",\n        type: mongoose_1.Schema.Types.ObjectId,\n    },\n    email: String,\n    firstName: String,\n    lastName: String,\n    phone1: Number,\n    phone2: Number,\n});\nvar contactModel = mongoose_1.model(\"Contact\", contactSchema);\nexports.default = contactModel;\n\n\n//# sourceURL=webpack:///./server/models/contacts.ts?");

/***/ }),

/***/ "./server/models/customers.ts":
/*!************************************!*\
  !*** ./server/models/customers.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar customerType_1 = __webpack_require__(/*! ../types/customerType */ \"./server/types/customerType.ts\");\nvar customersSchema = new mongoose_1.Schema({\n    address: String,\n    city: String,\n    country: String,\n    disRef: String,\n    email: String,\n    name: String,\n    notes: String,\n    payment: String,\n    telephone: Number,\n    type: {\n        type: String,\n        enum: Object.values(customerType_1.customerType),\n        default: customerType_1.customerType.Inactive,\n    },\n    zip: Number,\n});\nvar customersModel = mongoose_1.model(\"Customer\", customersSchema);\nexports.default = customersModel;\n\n\n//# sourceURL=webpack:///./server/models/customers.ts?");

/***/ }),

/***/ "./server/models/invoices.ts":
/*!***********************************!*\
  !*** ./server/models/invoices.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar invoiceStatus_1 = __webpack_require__(/*! ../types/invoiceStatus */ \"./server/types/invoiceStatus.ts\");\nvar invoiceSchema = new mongoose_1.Schema({\n    amount: Number,\n    customer: {\n        ref: \"Customer\",\n        type: mongoose_1.Schema.Types.ObjectId,\n    },\n    date: Date,\n    orderStatus: String,\n    status: {\n        type: String,\n        enum: Object.values(invoiceStatus_1.invoiceStatus),\n        default: invoiceStatus_1.invoiceStatus.Unpaid,\n    },\n});\nvar invoiceModel = mongoose_1.model(\"Invoice\", invoiceSchema);\nexports.default = invoiceModel;\n\n\n//# sourceURL=webpack:///./server/models/invoices.ts?");

/***/ }),

/***/ "./server/types/customerType.ts":
/*!**************************************!*\
  !*** ./server/types/customerType.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.customerType = void 0;\nvar customerType;\n(function (customerType) {\n    customerType[customerType[\"Lead\"] = 0] = \"Lead\";\n    customerType[customerType[\"Active\"] = 1] = \"Active\";\n    customerType[customerType[\"Inactive\"] = 2] = \"Inactive\";\n})(customerType = exports.customerType || (exports.customerType = {}));\n\n\n//# sourceURL=webpack:///./server/types/customerType.ts?");

/***/ }),

/***/ "./server/types/httpException.ts":
/*!***************************************!*\
  !*** ./server/types/httpException.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HttpException = /** @class */ (function (_super) {\n    __extends(HttpException, _super);\n    function HttpException(status, err) {\n        var _this = _super.call(this, err.message) || this;\n        _this.status = status;\n        return _this;\n    }\n    return HttpException;\n}(Error));\nexports.default = HttpException;\n\n\n//# sourceURL=webpack:///./server/types/httpException.ts?");

/***/ }),

/***/ "./server/types/invoiceStatus.ts":
/*!***************************************!*\
  !*** ./server/types/invoiceStatus.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.invoiceStatus = void 0;\nvar invoiceStatus;\n(function (invoiceStatus) {\n    invoiceStatus[invoiceStatus[\"Unpaid\"] = 0] = \"Unpaid\";\n    invoiceStatus[invoiceStatus[\"Partially paid\"] = 1] = \"Partially paid\";\n    invoiceStatus[invoiceStatus[\"Paid\"] = 2] = \"Paid\";\n})(invoiceStatus = exports.invoiceStatus || (exports.invoiceStatus = {}));\n\n\n//# sourceURL=webpack:///./server/types/invoiceStatus.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });