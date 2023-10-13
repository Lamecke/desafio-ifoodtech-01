class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atack() {
        let atack = ""
        if (this.type === "wizard")
            atack = "magic"
        else if (this.type === "warrio")
            atack = "sword"
        else if (this.type === "monk")
            atack = "martial art"
        else
            atack = "shuriken"
        console.log(`o ${this.type} atacou usando ${atack}`)

    }
}
exports.hero = hero