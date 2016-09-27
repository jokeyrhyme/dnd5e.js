const test = require('ava')

const {
  averageHitDieRoll, headClass, sortClassesByHitDie, tailClasses
} = require('../index.js')

test('averageHitDieRoll', (t) => {
  const fixtures = [
    { hitDie: 6, expected: 4 },
    { hitDie: 10, expected: 6 },
    { hitDie: 12, expected: 7 }
  ]
  fixtures.forEach(({ hitDie, expected }) => {
    t.is(averageHitDieRoll({ hitDie }), expected)
  })
})

test('headClass', (t) => {
  const fixtures = [
    { classes: [ { class: 'WIZARD', level: 3 } ], expected: 'WIZARD' },
    { classes: [ { class: 'WIZARD', level: 3 }, { class: 'FIGHTER', level: 2 } ], expected: 'WIZARD' }
  ]
  fixtures.forEach(({ classes, expected }) => {
    t.deepEqual(headClass({ classes }), expected)
  })
})

test('tailClasses', (t) => {
  const fixtures = [
    { classes: [ { class: 'WIZARD', level: 3 } ], expected: [ 'WIZARD', 'WIZARD' ] },
    { classes: [ { class: 'WIZARD', level: 3 }, { class: 'FIGHTER', level: 2 } ], expected: [ 'WIZARD', 'WIZARD', 'FIGHTER', 'FIGHTER' ] }
  ]
  fixtures.forEach(({ classes, expected }) => {
    t.deepEqual(tailClasses({ classes }), expected)
  })
})

test('tailClasses, sortClassesByHitDie', (t) => {
  const fixtures = [
    { classes: [ { class: 'WIZARD', level: 3 } ], expected: [ 'WIZARD', 'WIZARD' ] },
    {
      classes: [
        { class: 'FIGHTER', level: 2 },
        { class: 'WIZARD', level: 2 }
      ],
      expected: [ 'WIZARD', 'WIZARD', 'FIGHTER' ]
    },
    {
      classes: [
        { class: 'FIGHTER', level: 2 },
        { class: 'WIZARD', level: 2 },
        { class: 'ROGUE', level: 1 }
      ],
      expected: [ 'WIZARD', 'WIZARD', 'ROGUE', 'FIGHTER' ]
    }
  ]
  fixtures.forEach(({ classes, expected }) => {
    const result = tailClasses({ classes })
    result.sort(sortClassesByHitDie)
    t.deepEqual(result, expected)
  })
})
