function sample(arg) {
    if (typeof arg == "string") {
        console.log("Hello " + arg);
    }
    else if (typeof arg == "number") {
        console.log("age=" + arg);
    }
}
sample("sidra");
sample(20);
