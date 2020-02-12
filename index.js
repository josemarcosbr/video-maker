const readline = require('readline-sync')
function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Digite algo para pesquisar na Wikipedia:')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Quem e', 'O que e', 'A hitoria sobre']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }
    console.log(content)
}

start()