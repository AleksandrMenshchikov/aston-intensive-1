class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit1 extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

class Rabbit2 extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
}

class Rabbit3 extends Animal {
    constructor(name) {
        super();
        this.setName(name);
        this.created = Date.now();
    }

    setName(name) {
        this.name = name;
    }
}

let rabbit1 = new Rabbit1("Первый кролик");
let rabbit2 = new Rabbit2("Второй кролик");
let rabbit3 = new Rabbit3("Третий кролик");
alert(rabbit1.name);
alert(rabbit2.name);
alert(rabbit3.name);
