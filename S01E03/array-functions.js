const people = [
  {name: 'Wally', location: 'Moscow'},
  {name: 'Jess', location: 'Auckland'},
  {name: 'Bruce Wayne', location: 'Gotham'}
]

const wally = people.find(function (person) {
  return person.name === 'Wally'

  // This is equivalent to:
  if (person.name === 'Wally') {
    return true
  } else {
    return false
  }

  // boolean expression ? do this if true : do this if false
  wally ? console.log('Wally lives in:', wally.location) : console.log('Wally not found 😔')

  // Only evaluate the right side of the expression if the left side is true
  wally && console.log('Wally lives in:', wally.location)
})

// This is the same as above but using ES6 syntax (arrow functions)
const wallyAgain = people.find(person => person.name === 'Wally')

const produce = [
  'eggplant',
  'banana',
  'breadfruit',
  'zucchini',
  'carrot',
  'lychee',
  'apple',
  'taro'
]

const shortProduce = produce.filter(yum => yum.length <= 6)

// console.log(produce)
// console.log(shortProduce)

const harakeke = [
  'Jason',
  'Francine',
  'Grant',
  'Aubrey',
  'Jenny',
  'Rebecca',
  'Micah',
  'Lane',
  'Evandah',
  'Fetuolemoana',
  'Jess',
  'Ari',
  'Ngapeita',
  'David',
  'Ben',
  'Riki'
]

const capitalisedNames = harakeke.map(student => student.toUpperCase())

// console.log(capitalisedNames)
// console.log(harakeke)

const fn = (text) => console.log(text)

fn('Hello!')
