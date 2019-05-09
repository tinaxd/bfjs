class Brainfuck {
  constructor (size) {
    this.codepointer = 0
    this.pointer = 0
    this.skipping = 0
    this.looppos = []
    const s = size || 30000
    this.array = new Array(s).fill(0)
  }

  parse (bf, istream, ostream) {
    while (this.codepointer < bf.length) {
      if (this.skipping !== 0) {
        if (bf[this.codepointer] === '[') {
          this.skipping++
          this.codepointer++
        } else if (bf[this.codepointer] === ']') {
          this.skipping--
          this.codepointer++
        } else {
          this.codepointer++
        }
        continue
      }
      switch (bf[this.codepointer]) {
        case '>':
          this.pointer++
          this.codepointer++
          break
        case '<':
          this.pointer--
          this.codepointer++
          break
        case '+':
          this.array[this.pointer]++
          this.codepointer++
          break
        case '-':
          this.array[this.pointer]--
          this.codepointer++
          break
        case '.':
          ostream.push(String.fromCharCode(this.array[this.pointer]))
          this.codepointer++
          break
        case ',':
          console.log('Not implemented yet')
          this.codepointer++
          break
        case '[':
          if (this.array[this.pointer] !== 0) {
            this.looppos.push(this.codepointer)
            this.codepointer++
          } else {
            this.skipping++
            this.codepointer++
          }
          break
        case ']':
          if (this.array[this.pointer] === 0) {
            this.codepointer++
            this.looppos.pop()
          } else {
            this.codepointer = this.looppos.pop()
          }
          break
        default:
          this.codepointer++
      }
      continue
    }
  }

  parseString (bfcode) {
    this.codepointer = 0
    const buffer = []
    this.parse(bfcode.split(''), undefined, buffer)
    console.log(buffer.join(''))
    return buffer.join('')
  }
}

module.exports = Brainfuck
