import React from 'react';

const Team = ({ name, played, wins, even, lose, points }) => {
  return (
    <tr>
          <td>{'0'}</td>
          <td>{name}</td>
          <td>{played}</td>
          <td>{wins}</td>
          <td>{even}</td>
          <td>{lose}</td>
          <td>{points}</td>
    </tr>
  )
}

export default Team;