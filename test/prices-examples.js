// ISO codes from https://en.wikipedia.org/wiki/ISO_4217

var prices = [
  {
    input: '100.000.000,99',
    expectedOutput: 100000000.99,
    name: 'no currency symbol'
  },
  {
    input: 'US$ 3.900,90',
    expectedOutput: 3900.90,
    name: 'USD'
  },
  {
    input: '£5,016.43',
    expectedOutput: 5016.43,
    name: 'GBP'
  },
  {
    input: 'R$ 100.000.000,90',
    expectedOutput: 100000000.90,
    name: 'BRL'
  },
  {
    input: '3 295 руб',
    expectedOutput: 3295,
    name: 'RUB without cents'
  },
  {
    input: '3 295,05 руб',
    expectedOutput: 3295.05,
    name: 'RUB with cents'
  },
  {
    input: '1,590 ₪',
    expectedOutput: 1590,
    name: 'ILS without cents'
  },
  {
    input: '1,590.89 ₪',
    expectedOutput: 1590.89,
    name: 'ILS with cents'
  }
]

// -------------------------------------------------------------------
// Euro
// -------------------------------------------------------------------

// Based on http://www.evertype.com/standards/euro/formats.html
prices = prices.concat([
  {
    input: '1.234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Austria'
  },
  {
    input: '€1.234,56',
    expectedOutput: 1234.56,
    name: 'EUR Belgium'
  },
  {
    input: '1.234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Catalonia'
  },
  {
    input: '1 234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Finland'
  },
  {
    input: '1 234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR France'
  },
  {
    input: '1.234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Germany'
  },
  {
    input: '€1.234,56',
    expectedOutput: 1234.56,
    name: 'EUR Greece'
  },
  {
    input: '€1,234.56',
    expectedOutput: 1234.56,
    name: 'EUR Ireland'
  },
  {
    input: '€1,234.56',
    expectedOutput: 1234.56,
    name: 'EUR Italy'
  },
  {
    input: '€1,234.56',
    expectedOutput: 1234.56,
    name: 'EUR Luxembourg'
  },
  {
    input: '€1.234,56',
    expectedOutput: 1234.56,
    name: 'EUR Netherlands'
  },
  {
    input: '1 234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Portugal'
  },
  {
    input: '1.234,56 €',
    expectedOutput: 1234.56,
    name: 'EUR Spain'
  }
])

module.exports = prices
