const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve('js/constants/countdown.js'), 'utf8', function(err, data) {
  if (err) throw err

  result = new Function(data)()
  expected = 3000

  if (result !== expected) {
    throw new Error(`FAILED: ${result} is not equal to ${expected}`)
  }

  console.log('\x1b[32m', `SUCCESS: countdown equals 3000`);
})