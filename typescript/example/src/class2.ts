interface Person {
    name: string;
    say(message: string): void;
}
interface Programmer {
    writeCode(requirement: string): string;
}

abstract class Korean implements Person {
    public abstract jumin: number;

    constructor(public name: string) {
    }

    say(msg: string) {
        console.log(msg);
    }

    abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Programmer {

    constructor(public name: string, public jumin: number) {
        super(name);
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + "......";
    }

    loveKimchi(): void {
        console.log('love-kimchi~');
    }
}

const jay = new KoreanProgrammer('jay', 2222);

