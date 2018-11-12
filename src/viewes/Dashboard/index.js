import React, { Fragment } from 'react';
import { WELCOME } from '../../utils/copies';
import { Welcome, ButtonGroup, NavButton } from './styles';
import { APP_ROUTES } from '../../utils/constants';

const Dashboard = () => (
  <Fragment>
    <Welcome>
      <h1>{WELCOME.TITLE}</h1>
      {WELCOME.MESSAGE}
      <ButtonGroup>
        <NavButton variant="success" as="a" href={APP_ROUTES.TODOS}>
          Todos
        </NavButton>
        <NavButton variant="primary" as="a" href={APP_ROUTES.CONTACTS}>
          Contacts
        </NavButton>
      </ButtonGroup>
    </Welcome>
  </Fragment>
);

export default Dashboard;
