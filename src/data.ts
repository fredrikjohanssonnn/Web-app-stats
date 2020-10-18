export let teams = [
  {
    name: 'Stepbrothers',
    played: 3,
    wins: 0,
    even: 1,
    lose: 2,
    points: 1,
  },
  {
    name: 'IBK Magic',
    played: 3,
    wins: 1,
    even: 0,
    lose: 2,
    points: 3,
  },
  {
    name: 'Timber',
    played: 3,
    wins: 0,
    even: 1,
    lose: 2,
    points: 1,
  },
  {
    name: 'Ramböll',
    played: 3,
    wins: 3,
    even: 0,
    lose: 0,
    points: 9,
  },
  {
    name: 'Sköle Rhinos',
    played: 3,
    wins: 2,
    even: 0,
    lose: 1,
    points: 6,
  },
]

teams.sort((a, b) => b.points - a.points)

export let scorers = [
  {
    name: 'Fredrik Johansson',
    played: 4,
    scored: 1,
  },
  {
    name: 'Lazaros Athanasiadis',
    played: 4,
    scored: 1,
  },
  {
    name: 'Alexander Aspenrud',
    played: 4,
    scored: 4,
  },
  {
    name: 'Oskar Prenkert',
    played: 3,
    scored: 3,
  },
  {
    name: 'Johan Rågberger',
    played: 2,
    scored: 2,
  },
  {
    name: 'Joacim Lind',
    played: 2,
    scored: 1,
  },
  {
    name: 'Jim Stjernström',
    played: 4,
    scored: 5,
  },
]

scorers.sort((a, b) => b.scored - a.scored)