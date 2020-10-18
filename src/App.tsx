import React, { useState } from "react";
import styled from 'styled-components'
import './style.css';

import Table from './components/Table';
import Scorers from './components/Scorers';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1070px;
  padding-left: 10px;
  padding-right: 10px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const Button = styled.button`

  border: 0;
  color: #fff;
  font-weight: bold;
  background-color: #C73D78;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 5px;
`

export default function App() {

  const [display, setDisplay] = useState(true);

  return (
    <Center>
      <div>
        <Button onClick={() => setDisplay(true)}>Serie</Button>
        <Button onClick={() => setDisplay(false)}>Poängliga</Button>
        {display ? <Table/> : <Scorers/>}
      </div>
    </Center>
  );
}
