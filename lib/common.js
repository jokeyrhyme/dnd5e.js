const { isArrayLike } = require('iterall')

const { CONSTITUTION, abilityModifier } = require('./abilityScores.js')
const {
  CLASS_DATA, averageHitDieRoll, headClass, maximumHitDieRoll
} = require('./classes.js')

const assertAbilityScore = ({ abilityScores, id }) => {
  if (!Number.isFinite(abilityScores[id])) {
    throw new TypeError(`abilityScores["${id}"] must be a Number`)
  }
}

const assertAbilityScores = ({ abilityScores }) => {
  if (!abilityScores || typeof abilityScores !== 'object') {
    throw new TypeError('abilityScores must be an Object')
  }
}

const assertClasses = ({ classes }) => {
  if (!isArrayLike(classes)) {
    throw new TypeError('classes must be Array-like')
  }
  if (!classes.length) {
    throw new TypeError('classes must not be empty')
  }
}

// Player's Handbook, pages 12, 15
// strictly honours your initial choice of class
// optimises rolls vs averages against classes for level 2 and up
const hitPoints = ({ abilityScores = {}, classes = [] }) => {
  assertAbilityScores({ abilityScores })
  assertAbilityScore({ abilityScores, id: CONSTITUTION })
  assertClasses({ classes })

  const modifier = abilityModifier({ score: abilityScores[CONSTITUTION] })
  const initialHP = maximumHitDieRoll(CLASS_DATA[headClass({ classes })]) + modifier

  const laterHP = classes.reduce((total, klass) => {
    return total + klass.hitPointRolls.reduce((classTotal, roll) => {
      const maximumRoll = maximumHitDieRoll(CLASS_DATA[klass.class])
      const averageRoll = averageHitDieRoll({ hitDie: maximumRoll })
      return classTotal + modifier + Math.max(averageRoll, roll)
    }, 0)
  }, 0)

  return initialHP + laterHP
}

// Player's Handbook, page 15
const proficiencyBonus = ({ level = 1 }) => Math.ceil(level / 4) + 1

module.exports = {
  hitPoints,
  proficiencyBonus
}
