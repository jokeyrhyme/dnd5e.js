// @flow

const proficiencyBonus = ({ level = 1 }) => Math.ceil(level / 4) + 1

module.exports = {
  proficiencyBonus
}
