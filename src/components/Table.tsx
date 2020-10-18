import React from 'react';
import styled from 'styled-components'

import Team from './Team';
import { teams } from '../data'

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  text-align: left;
  min-width: 400px;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const Header = styled.th`
  font-size: 12px;
  padding: 18px 15px;
`

export const HeaderContainer = styled.tr`
  background-color: #FFBEDA;
  font-weight: bold;
`

export const Name = styled.th`
  text-align: left;
  font-size: 12px;
  padding: 18px 0px;
`

const Table = () => {
  return (
    <TableContainer>
        <thead>
          <HeaderContainer>
            <Header>Position</Header>
            <Name>Lag</Name>
            <Header>Spelade</Header>
            <Header>Vunna</Header>
            <Header>Oavgjorda</Header>
            <Header>Förlorade</Header>
            <Header>Poäng</Header>
          </HeaderContainer>
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
    </TableContainer>
  )
}

export default Table;