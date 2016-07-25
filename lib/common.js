const abilityModifier = ({ score = 8 }) => Math.floor((score - 10) / 2)

const proficiencyBonus = ({ level = 1 }) => Math.ceil(level / 4) + 1

module.exports = {
  abilityModifier,
  proficiencyBonus
}
