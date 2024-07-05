require("dotenv").config();
const Cuybot = require("./app/Cuybot");

const token = process.env.TELEGRAM_API_TOKEN;
const options = {
    polling: true
};

console.log("Starting cuybot...");
const cuybot = new Cuybot(token, options);

const main = () => {
    console.log("Checking features...");
    cuybot.getHelp();
    cuybot.getSticker();
    cuybot.getGreeting();
    cuybot.getFollow();
    cuybot.getQuotes();
    cuybot.getNews();
    cuybot.getQuake();
    console.log('Features ready!');
};

main();

console.log("Bot is ready now!");

// Handle error event
cuybot.on("error", (error) => {
    console.error("Bot encountered an error:", error);
});

// Handle SIGINT (Ctrl+C) to gracefully shutdown the bot
process.once("SIGINT", () => {
    console.log("SIGINT received, shutting down cuybot...");
    cuybot.stopPolling().then(() => {
        console.log("cuybot has stopped polling.");
        process.exit(0);
    });
});
