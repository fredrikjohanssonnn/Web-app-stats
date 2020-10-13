import React from 'react';
import styled from 'styled-components'

import Team from './Team';
import { teams } from '../data'

export const Wrapper = styled.table`
border-spacing:20px;
border-collapse: separate;
`

const Table = () => {
  return (
    <Wrapper>
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
          position={index}
        />
        ))}
        </tbody>
    </Wrapper>
  )
}

export default Table;