const test = require('ava')

const { abilityModifier } = require('../index.js')

test('abilityModifier', (t) => {
  const fixtures = [
    { score: 1, expected: -5 },
    { score: 8, expected: -1 },
    { score: 10, expected: 0 },
    { score: 11, expected: 0 },
    { score: 12, expected: 1 },
    { score: 13, expected: 1 },
    { score: 20, expected: 5 }
  ]
  fixtures.forEach(({ score, expected }) => {
    t.is(abilityModifier({ score }), expected)
  })
})
