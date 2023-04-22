"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_1 = require("./algorithms/run/main");
var app = (0, express_1.default)();
app.use(express_1.default.json());
function start() {
    return function () {
        console.log('Server started!');
    };
}
app.get('/users', function (req, res) {
    var users = (0, main_1.getUsers)();
    return res.json({ users: users });
});
app.post('./user', function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, age = _a.age, isCoding = _a.isCoding;
    var users = (0, main_1.createUsers)({ name: name, email: email, age: age, isCoding: isCoding });
    return res.json({ users: users });
});
app.listen(3333, start());
//# sourceMappingURL=server.js.map