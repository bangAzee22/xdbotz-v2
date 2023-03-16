const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62821696380850'] // no own
global.author = 'AzeeXd' // nama author 
global.packname = 'AzeeXd' // nama pack sticker
global.namabot = 'OCOBOT' // nama bot mu
global.group = 'https://tinyurl.com/2kjqcg5w' // grup mu
global.pic = 'https://telegra.ph/file/b96926809d93d9f045777.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
