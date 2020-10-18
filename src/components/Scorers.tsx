import React from 'react'
import { scorers } from '../data'

import Scorer from './Scorer'
import { HeaderContainer, TableContainer, Header, Name } from './Table'

const Scorers = () => {
    return (
        <TableContainer>
        <thead>
          <HeaderContainer>
            <Header>Position</Header>
            <Name>Namn</Name>
            <Header>Spelade matcher</Header>
            <Header>Gjorda mål</Header>
          </HeaderContainer>
        </thead>
        <tbody>
        {scorers.map((scorer, index) => (
          <Scorer
          position={index}
          name={scorer.name}
          played={scorer.played}
          scored={scorer.scored}
        />
        ))}
        </tbody>
    </TableContainer>
    )
}

export default Scorers
