import React from 'react';
import styled from 'styled-components'

interface Props {
  position: number,
  name: string;
  played: number;
  wins: number;
  even: number;
  lose: number;
  points: number;
}

export const Row = styled.tr`
 font-weight: 300;
 color: #000;
`

export const Item = styled.td`
  text-align: center;
`

const Team: React.FC<Props> = ({ position, name, played, wins, even, lose, points }) => {
  return (
    <Row>
          <Item>{position + 1}</Item>
          <td>{name}</td>
          <Item>{played}</Item>
          <Item>{wins}</Item>
          <Item>{even}</Item>
          <Item>{lose}</Item>
          <Item>{points}</Item>
    </Row>
  )
}

export default Team;