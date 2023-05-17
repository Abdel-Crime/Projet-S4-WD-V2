const { readFile } = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const READ_OPTION = { encoding: 'UTF-8'}

module.exports = async() => {
    const contenu = await readFileAsync('../HTML/voitureReprog.html',READ_OPTION);


    return contenu;
}