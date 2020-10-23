var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade[StarbuksGrade["WELCOME"] = 0] = "WELCOME";
    StarbuksGrade[StarbuksGrade["dddd"] = 1] = "dddd";
    StarbuksGrade[StarbuksGrade["GREEN"] = 2] = "GREEN";
    StarbuksGrade[StarbuksGrade["GOLD"] = 3] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarbuksGrade.GREEN));
console.log(StarbuksGrade["0"]);
//# sourceMappingURL=enum.js.map