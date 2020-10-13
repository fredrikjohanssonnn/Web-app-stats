import * as React from "react";
import styled from 'styled-components'
import './style.css';

import Table from './components/Table';
import Scorers from './components/Scorers';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1070px;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
`

export default function App() {
  return (
    <Wrapper>
      <div>
        <Title>Serie</Title>
        <Table/>
      </div>
      <div>
        <Title>Skytteliga</Title>
        <Scorers/>
      </div>
    </Wrapper>
  );
}
