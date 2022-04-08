const Build = require('./build');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/' + Build.LANG + '.json')) {
    console.log(
        chalk.green.bold('💝 Queen Natsumi Bot Loading ' + Build.LANG + ' language...⬇️ ')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + Build.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
