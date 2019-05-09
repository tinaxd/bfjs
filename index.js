const Brainfuck = require ('./parser')

function parseBrainfuck(bf) {
  const parser = new Brainfuck()
  return parser.parseString(bf)
}

module.exports = parseBrainfuck
