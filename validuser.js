function validate(username, password) {
    if (username.match("sidra") && password.match("abcd")) {
        return true;
    }
    else {
        return false;
    }
}
if (validate("sidra", "dfhsd")) {
    console.log("valid user");
}
else {
    console.log("invalid user");
}
