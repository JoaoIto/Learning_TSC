"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = exports.getUsers = void 0;
var users = [];
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
function createUsers(user) {
    users.push(user);
    return user;
}
exports.createUsers = createUsers;
//# sourceMappingURL=main.js.map