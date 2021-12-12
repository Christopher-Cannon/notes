console.log(`
--- process ---
`);

console.log("CPU:", process.env.PROCESSOR_IDENTIFIER);
console.log("Cores:", process.env.NUMBER_OF_PROCESSORS);
console.log("OS:", process.env.OS);
console.log("Computer Name:", process.env.COMPUTERNAME);
console.log("Username:", process.env.USERNAME);
console.log("Language:", process.env.LANG);

console.log(`
--- os ---
`);

const os = require("os");

console.log("CPU Model:", os.cpus()[0].model);
console.log("CPU Speed:", (os.cpus()[0].speed).toFixed(2) + "MHz");
console.log("CPU Count:", os.cpus().length);
console.log("totalmem:", (os.totalmem() / 1000000).toFixed(2) + "MB");
console.log("freemem:", (os.freemem() / 1000000).toFixed(2) + "MB");
console.log("hostname:", os.hostname());
console.log("version:", os.version());
console.log("release:", os.release());
console.log("type:", os.type());
console.log("platform:", os.platform());
console.log("uptime:", (os.uptime() / 60 / 60).toFixed(2) + " Hours");
console.log("User Name:", os.userInfo().username);
console.log("Home Directory:", os.userInfo().homedir);
console.log("Network:", os.networkInterfaces());
