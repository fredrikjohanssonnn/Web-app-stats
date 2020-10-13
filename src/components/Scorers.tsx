import React from 'react'
import { scorers } from '../data'

import Scorer from './Scorer'
import { Wrapper } from './Table'

const Scorers = () => {
    return (
        <Wrapper>
        <thead>
          <tr>
          <th>Position</th>
          <th>Namn</th>
          <th>Spelade matcher</th>
          <th>Gjorda mål</th>
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
