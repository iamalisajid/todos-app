import React, { Fragment } from 'react';
import { WELCOME } from '../../utils/copies';
import { Welcome, ButtonGroup, NavButton } from './styles';

const Dashboard = () => (
  <Fragment>
    <Welcome>
      <h1>{WELCOME.TITLE}</h1>
      {WELCOME.MESSAGE}
      <ButtonGroup>
        <NavButton success as="a" href="/todos">Todos</NavButton>
        <NavButton primary as="a" href="/contacts">Contacts</NavButton>
      </ButtonGroup>
    </Welcome>
  </Fragment>
);

export default Dashboard;
