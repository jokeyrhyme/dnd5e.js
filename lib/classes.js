const BARBARIAN = 'BARBARIAN'
const BARD = 'BARD'
const CLERIC = 'CLERIC'
const DRUID = 'DRUID'
const FIGHTER = 'FIGHTER'
const MONK = 'MONK'
const PALADIN = 'PALADIN'
const RANGER = 'RANGER'
const ROGUE = 'ROGUE'
const SORCERER = 'SORCERER'
const WARLOCK = 'WARLOCK'
const WIZARD = 'WIZARD'

const CLASS_DATA = {
  [BARBARIAN]: {
    hitDie: 'd12'
  },
  [BARD]: {
    hitDie: 'd8'
  },
  [CLERIC]: {
    hitDie: 'd8'
  },
  [DRUID]: {
    hitDie: 'd8'
  },
  [FIGHTER]: {
    hitDie: 'd10'
  },
  [MONK]: {
    hitDie: 'd8'
  },
  [PALADIN]: {
    hitDie: 'd10'
  },
  [RANGER]: {
    hitDie: 'd10'
  },
  [ROGUE]: {
    hitDie: 'd8'
  },
  [SORCERER]: {
    hitDie: 'd6'
  },
  [WARLOCK]: {
    hitDie: 'd8'
  },
  [WIZARD]: {
    hitDie: 'd6'
  }
}

const CLASS_IDS = [
  BARBARIAN,
  BARD,
  CLERIC,
  DRUID,
  FIGHTER,
  MONK,
  PALADIN,
  RANGER,
  ROGUE,
  SORCERER,
  WARLOCK,
  WIZARD
]

module.exports = {
  CLASS_DATA,
  CLASS_IDS
}
