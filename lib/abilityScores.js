const STRENGTH = 'STRENGTH'
const DEXTERITY = 'DEXTERITY'
const CONSTITUTION = 'CONSTITUTION'
const INTELLIGENCE = 'INTELLIGENCE'
const WISDOM = 'WISDOM'
const CHARISMA = 'CHARISMA'

const ABILITY_IDS = [
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
]

// Player's Handbook, page 13
const abilityModifier = ({ score = 8 }) => Math.floor((score - 10) / 2)

// Player's Handbook, page 13
const abilityScorePointCost = ({ score = 8 }) => {
  if (score <= 13) {
    return Math.max(8, score) - 8 // clamp score to 8 or higher
  }
  return abilityScorePointCost({ score: 13 }) + 2 * (score - 13)
}

// Player's Handbook, page 13
const remainingAbilityScorePoints = ({ scores = [] }) => scores.reduce(
  (total, score) => total - abilityScorePointCost({ score }),
  27
)

module.exports = {
  ABILITY_IDS,
  abilityModifier,
  abilityScorePointCost,
  remainingAbilityScorePoints
}
