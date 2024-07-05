require("dotenv").config()
const Cuybot = require("./app/Cuybot")

const token = "7060613505:AAGG3j3a2z6l8Ed1ATYGG6N8j__PxMmR92A"
const options = {
    polling: true
}

console.log("starting cuybot...")
const cuybot = new Cuybot(token, options)

const main = () => {
    console.log("checking feature...")
    cuybot.getHelp()
    cuybot.getSticker()
    cuybot.getGreeting()
    cuybot.getFollow()
    cuybot.getQuotes()
    cuybot.getNews()
    cuybot.getQuake()
    console.log('feature ready!')
}
main()
console.log("bot is ready now!")
