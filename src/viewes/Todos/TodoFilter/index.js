import React from 'react';
import { func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { BTN_ACTIONS, FILTERS } from '../../../utils/constants';
import { Button, Center, ButtonGroup } from '../../../globalStyles';
import { FilterGroup } from '../styles';

const TodoFilter = ({ handleFilter }) => (
  <FilterGroup>
    <Center>
      <ButtonGroup>
        <Button variant="default" onClick={handleFilter} value={FILTERS.SHOW_ALL}>
          <FormattedMessage id="all" defaultMessage={BTN_ACTIONS.ALL} />
        </Button>
        <Button variant="warning" onClick={handleFilter} value={FILTERS.SHOW_ACTIVE}>
          <FormattedMessage id="active" defaultMessage={BTN_ACTIONS.ACTIVE} />
        </Button>
        <Button variant="primary" onClick={handleFilter} value={FILTERS.SHOW_COMPLETED}>
          <FormattedMessage id="completed" defaultMessage={BTN_ACTIONS.COMPLETED} />
        </Button>
      </ButtonGroup>
    </Center>
  </FilterGroup>
);

TodoFilter.propTypes = {
  handleFilter: func.isRequired,
};
export default TodoFilter;
