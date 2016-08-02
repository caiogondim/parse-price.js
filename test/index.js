const test = require('tape')
const parsePrice = require('../src/')
const prices = require('./prices-examples')

prices.forEach(price => {
  test(price.name, t => {
    const parsedPrice = parsePrice(price.input)
    t.equal(parsedPrice, price.expectedOutput)
    t.end()
  })
})
