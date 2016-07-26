const test = require('ava')

const { hitPoints } = require('../index.js')

test('hitPoints', (t) => {
  const fixtures = [
    {
      abilityScores: { CONSTITUTION: 12 },
      classes: [ { class: 'WIZARD', hitPointRolls: [ 3, 5 ], level: 3 } ],
      expected: (6 + 1) + (4 + 1) + (5 + 1)
    },
    {
      abilityScores: { CONSTITUTION: 14 },
      classes: [
        { class: 'WIZARD', hitPointRolls: [ 3, 5 ], level: 3 },
        { class: 'FIGHTER', hitPointRolls: [ 5, 7 ], level: 2 }
      ],
      expected: (6 + 2) + (4 + 2) + (5 + 2) + (6 + 2) + (7 + 2)
    },
    {
      abilityScores: { CONSTITUTION: 16 },
      classes: [
        { class: 'WIZARD', hitPointRolls: [ 3, 5 ], level: 3 },
        { class: 'FIGHTER', hitPointRolls: [ 5, 7 ], level: 2 },
        { class: 'ROGUE', hitPointRolls: [ 4, 6 ], level: 2 }
      ],
      expected: (6 + 3) + (4 + 3) + (5 + 3) + (6 + 3) + (7 + 3) + (5 + 3) + (6 + 3)
    }
  ]
  fixtures.forEach(({ abilityScores, classes, expected }) => {
    t.is(hitPoints({ abilityScores, classes }), expected)
  })
})
