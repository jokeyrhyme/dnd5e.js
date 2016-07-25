const fill = require('lodash.fill')
const flatten = require('lodash.flatten')

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

const MAXIMUM_HIT_DIE_ROLL = /d(\d+)/

/*
interface MultiClass {
  class: String // from CLASS_IDS
  level: Number
}
*/

// averageHitDieRoll ({ hitDie: Number }) => Number
const averageHitDieRoll = ({ hitDie }) => Math.ceil((hitDie + 1) / 2)

// headClass ({ classes: MultiClass[] }) => String
const headClass = ({ classes = [] }) => classes[0].class

// maximumHitDieRoll ({ hitDie: String }) => Number
const maximumHitDieRoll = ({ hitDie }) => parseInt(hitDie.match(MAXIMUM_HIT_DIE_ROLL)[1], 10)

// sortClassesByHitDie (a: String, b: String) => Number
const sortClassesByHitDie = (a, b) => {
  return maximumHitDieRoll(CLASS_DATA[a]) - maximumHitDieRoll(CLASS_DATA[b])
}

// tailClasses ({ classes: MultiClass[] }) => String[]
const tailClasses = ({ classes = [] }) => {
  const [ , ...tail ] = flatten(
    classes.map(({ class: classId, level }) => fill(new Array(level), classId))
  )
  return tail
}

module.exports = {
  CLASS_DATA,
  CLASS_IDS,
  MAXIMUM_HIT_DIE_ROLL,
  averageHitDieRoll,
  headClass,
  maximumHitDieRoll,
  sortClassesByHitDie,
  tailClasses
}
