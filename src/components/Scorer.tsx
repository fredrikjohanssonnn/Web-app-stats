import React from 'react'
import { Item, Row } from './Team'

interface Props {
    name: string;
    played: number;
    scored: number;
    position: number;
}

const Scorer: React.FC<Props> = ({ position, name, played, scored }) => {
    return (
        <Row>
            <Item>{position +1}</Item>
            <td>{name}</td>
            <Item>{played}</Item>
            <Item>{scored}</Item>
        </Row>
    )
}

export default Scorer
