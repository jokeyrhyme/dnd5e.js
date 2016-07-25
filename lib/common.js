// Player's Handbook, page 13
const abilityModifier = ({ score = 8 }) => Math.floor((score - 10) / 2)

// Player's Handbook, page 13
const abilityScorePointCost = ({ score = 8 }) => {
  if (score <= 13) {
    return Math.max(8, score) - 8 // clamp score to 8 or higher
  }
  return abilityScorePointCost({ score: 13 }) + 2 * (score - 13)
}

// Player's Handbook, page 15
const proficiencyBonus = ({ level = 1 }) => Math.ceil(level / 4) + 1

// Player's Handbook, page 13
const remainingAbilityScorePoints = ({ scores = [] }) => scores.reduce(
  (total, score) => total - abilityScorePointCost({ score }),
  27
)

module.exports = {
  abilityModifier,
  abilityScorePointCost,
  proficiencyBonus,
  remainingAbilityScorePoints
}
