import * as React from "react";
import './style.css';

import Table from './components/Table';
import Scorers from './components/Scorers';

export default function App() {
  return (
    <React.Fragment>
      <Table/>
      <Scorers/>
    </React.Fragment>
  );
}
