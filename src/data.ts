export let teams = [
  {
    name: 'Stepbrothers',
    played: 4,
    wins: 1,
    even: 1,
    lose: 2,
    points: 4,
  },
  {
    name: 'IBK Magic',
    played: 4,
    wins: 1,
    even: 0,
    lose: 3,
    points: 3,
  },
  {
    name: 'Timber',
    played: 4,
    wins: 1,
    even: 1,
    lose: 2,
    points: 4,
  },
  {
    name: 'Ramböll',
    played: 4,
    wins: 3,
    even: 0,
    lose: 1,
    points: 9,
  },
  {
    name: 'Sköle Rhinos',
    played: 4,
    wins: 3,
    even: 0,
    lose: 1,
    points: 9,
  },
  {
    name: 'Old and Tired',
    played: 4,
    wins: 2,
    even: 1,
    lose: 1,
    points: 5,
  },
  {
    name: 'SK Jägarna',
    played: 4,
    wins: 2,
    even: 0,
    lose: 2,
    points: 6,
  },
  {
    name: 'Loosenake',
    played: 4,
    wins: 2,
    even: 0,
    lose: 2,
    points: 4,
  },
  {
    name: 'Sarg-ut BK',
    played: 4,
    wins: 1,
    even: 2,
    lose: 1,
    points: 5,
  },
  {
    name: 'Semlon',
    played: 4,
    wins: 1,
    even: 1,
    lose: 2,
    points: 4,
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
  {
    name: 'Tomas Amérus',
    played: 1,
    scored: 1,
  },
  {
    name: 'Daniel Nordlund',
    played: 1,
    scored: 1,
  },
]

scorers.sort((a, b) => b.scored - a.scored)