var interest = /** @class */ (function () {
    function interest(p, r, t) {
        this.principle = p;
        this.rate = r;
        this.time = t;
        var SI = p * (1 + (r * t));
        console.log(" Simple interest= " + SI);
    }
    return interest;
}());
var i = new interest(1000, 10, 2);
