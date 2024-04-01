function validemail(email) {
    if (email.startsWith("@")) {
        console.log("invalid email");
    }
    else if (email.endsWith("@")) {
        console.log("invalid email");
    }
    else if (email.match("@")) {
        console.log("valid email");
    }
    else {
        console.log("valid user");
    }
}
console.log(validemail("sidragmail.com"));
