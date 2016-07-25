const abilityModifier = ({ score = 8 }) => Math.floor((score - 10) / 2)

const abilityScorePointCost = ({ score = 8 }) => {
  if (score <= 13) {
    return Math.max(8, score) - 8 // clamp score to 8 or higher
  }
  return abilityScorePointCost({ score: 13 }) + 2 * (score - 13)
}

const proficiencyBonus = ({ level = 1 }) => Math.ceil(level / 4) + 1

module.exports = {
  abilityModifier,
  abilityScorePointCost,
  proficiencyBonus
}
