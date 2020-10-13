import React from 'react';
import styled from 'styled-components'

import Team from './Team';
import { teams } from '../data'

export const Wrapper = styled.table`
  border-spacing:20px;
  border-collapse: separate;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const Header = styled.th`
  font-size: 12px;
`

export const Name = styled.th`
  text-align: left;
  font-size: 12px;
`

const Table = () => {
  return (
    <Wrapper>
        <thead>
          <tr>
          <Header>Position</Header>
          <Name>Lag</Name>
          <Header>Spelade</Header>
          <Header>Vunna</Header>
          <Header>Oavgjorda</Header>
          <Header>Förlorade</Header>
          <Header>Poäng</Header>
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