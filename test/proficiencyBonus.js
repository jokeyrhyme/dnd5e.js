// @flow

const test = require('ava')

const { proficiencyBonus } = require('../index.js')

test('expected values', (t) => {
  const fixtures = [
    { level: 1, expected: 2 },
    { level: 4, expected: 2 },
    { level: 5, expected: 3 },
    { level: 8, expected: 3 },
    { level: 9, expected: 4 },
    { level: 12, expected: 4 },
    { level: 13, expected: 5 },
    { level: 16, expected: 5 },
    { level: 17, expected: 6 },
    { level: 20, expected: 6 }
  ]
  fixtures.forEach(({ level, expected }) => {
    t.is(proficiencyBonus({ level }), expected)
  })
})
