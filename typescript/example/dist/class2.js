class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(msg);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + "......";
    }
    loveKimchi() {
        console.log('love-kimchi~');
    }
}
const jay = new KoreanProgrammer('jay', 2222);
//# sourceMappingURL=class2.js.map