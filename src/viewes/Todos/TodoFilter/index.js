import React from 'react';
import { func } from 'prop-types';
import { BTN_ACTIONS, FILTERS } from '../../../utils/constants';
import { Button, TextCenter,ButtonGroup } from '../../../globalStyles';
import { FilterGroup } from '../styles';

const TodoFilter = ({ handleFilter }) => (
  <FilterGroup>
    <TextCenter>
      <ButtonGroup>
        <Button default onClick={handleFilter} value={FILTERS.SHOW_ALL}>
          {BTN_ACTIONS.ALL}
        </Button>
        <Button warning onClick={handleFilter} value={FILTERS.SHOW_ACTIVE}>
          {BTN_ACTIONS.ACTIVE}
        </Button>
        <Button info onClick={handleFilter} value={FILTERS.SHOW_COMPLETED}>
          {BTN_ACTIONS.COMPLETED}
        </Button>
      </ButtonGroup>
    </TextCenter>
  </FilterGroup>
);

TodoFilter.propType = {
  handleFilter: func.isRequired
};
export default TodoFilter;
