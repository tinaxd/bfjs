const fs = require ('fs')
const bfparse = require ('../index')
const assert = require ('assert')
const path = require ('path')

describe ('Brainfuck parser', function() {
  it ('hello world 1', function(done) {
    fs.readFile(path.join(__dirname, '..', 'bfs', 'helloworld.bf'), 'utf-8', (err, data) => {
      assert.strictEqual(bfparse(data), 'Hello World!\n')
      setImmediate(done)
    })
  })

  it ('hello world 2', function(done) {
    fs.readFile(path.join(__dirname, '..', 'bfs', 'hwsimple.bf'), 'utf-8', (err, data) => {
      assert.strictEqual(bfparse(data), 'Hello World!\n')
      setImmediate(done)
    })
  })

  it ('add2', function(done) {
    fs.readFile(path.join(__dirname, '..', 'bfs', 'add2.bf'), 'utf-8', (err, data) => {
      assert.strictEqual(bfparse(data), '7')
      setImmediate(done)
    })
  })
})