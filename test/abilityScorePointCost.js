const test = require('ava')

const { abilityScorePointCost } = require('../index.js')

test('abilityScorePointCost', (t) => {
  const fixtures = [
    { score: 8, expected: 0 },
    { score: 9, expected: 1 },
    { score: 13, expected: 5 },
    { score: 14, expected: 7 },
    { score: 15, expected: 9 }
  ]
  fixtures.forEach(({ score, expected }) => {
    t.is(abilityScorePointCost({ score }), expected)
  })
})
