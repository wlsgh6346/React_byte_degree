function createUserAction() {
    return {
        do() { },
        name: ''
    };
}
class UserImpl {
    login() {
        return false;
    }
}
function checkUser(user) {
    if (user.login()) {
        return "APPROVED";
    }
    else {
        return "REJECTED";
    }
}
//# sourceMappingURL=type-alias.js.map