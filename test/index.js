const test = require('tape')
const parsePrice = require('../src/')

test('lorem', t => {
  t.equal(3, parsePrice(1, 2))
  t.end()
})
