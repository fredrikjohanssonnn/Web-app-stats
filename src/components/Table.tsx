import React from 'react';
import Team from './Team';
import teams from '../data.ts'

const Table = () => {
  return (
    <table>
        <thead>
          <tr>
          <th>Position</th>
          <th>Lag</th>
          <th>S</th>
          <th>V</th>
          <th>O</th>
          <th>F</th>
          <th>P</th>
          </tr>
        </thead>
        <tbody>
        {teams.map((team, index) => (
          <Team
          name={team.name}
          played={team.played}
          wins={team.wins}
          even={team.even}
          lose={team.lose}
          points={team.points}
          key={index}
        />
        ))}
        </tbody>
    </table>
  )
}

export default Table;