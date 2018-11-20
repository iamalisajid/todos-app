import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { WELCOME } from '../../utils/copies';
import { Welcome, ButtonGroup, NavButton } from './styles';
import { APP_ROUTES, BTN_ACTIONS } from '../../utils/constants';

const Dashboard = () => (
  <Fragment>
    <Welcome>
      <h1>
        <FormattedMessage id="dashboard.welcome.title" defaultMessage={WELCOME.TITLE} />
      </h1>
      <FormattedMessage id="dashboard.welcome.message" defaultMessage={WELCOME.MESSAGE} />
      <ButtonGroup>
        <NavButton variant="success" as="a" href={APP_ROUTES.TODOS}>
          <FormattedMessage id="todos" defaultMessage={BTN_ACTIONS.TODO} />
        </NavButton>
        <NavButton variant="primary" as="a" href={APP_ROUTES.CONTACTS}>
          <FormattedMessage id="contacts" defaultMessage={BTN_ACTIONS.CONTACT} />
        </NavButton>
      </ButtonGroup>
    </Welcome>
  </Fragment>
);

export default Dashboard;
