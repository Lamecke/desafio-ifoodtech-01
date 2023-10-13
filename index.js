const { heroLevel } = require("./heroLevel")
const { matchingMaker } = require("./matchingMaker")
const { hero } = require("./hero")

heroLevel("manga", 9000)
matchingMaker(40, 50)

let hero01 = new hero("carioca", 34,"wizard")
hero01.atack()