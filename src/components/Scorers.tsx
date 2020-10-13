import React from 'react'
import { scorers } from '../data'

import Scorer from './Scorer'
import { Wrapper, Header, Name } from './Table'

const Scorers = () => {
    return (
        <Wrapper>
        <thead>
          <tr>
          <Header>Position</Header>
          <Name>Namn</Name>
          <Header>Spelade matcher</Header>
          <Header>Gjorda mål</Header>
          </tr>
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
    </Wrapper>
    )
}

export default Scorers
