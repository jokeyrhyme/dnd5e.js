const test = require('ava')

const { remainingAbilityScorePoints } = require('../index.js')

test('remainingAbilityScorePoints', (t) => {
  const fixtures = [
    { scores: [ 15, 15, 15, 8, 8, 8 ], expected: 0 },
    { scores: [ 13, 13, 13, 12, 12, 12 ], expected: 0 },
    { scores: [ 15, 14, 8, 8, 8, 8 ], expected: 11 }
  ]
  fixtures.forEach(({ scores, expected }) => {
    t.is(remainingAbilityScorePoints({ scores }), expected)
  })
})
