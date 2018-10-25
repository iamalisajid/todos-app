import React from 'react';
import {func} from 'prop-types'
import {BTN_ACTIONS, FILTERS} from '../../../utils/constants';

const TodoFilter = ({handleFilter}) => (
  <div id='toolbar' className="Filter-group">
    <div className='wrapper text-center'>
      <div className="btn-group">
        <button className="btn btn-default" onClick={handleFilter} value={FILTERS.SHOW_ALL}>
          {BTN_ACTIONS.ALL}
        </button>
        <button className="btn btn-warning" onClick={handleFilter} value={FILTERS.SHOW_ACTIVE}>
          {BTN_ACTIONS.ACTIVE}
        </button>
        <button className="btn btn-info" onClick={handleFilter} value={FILTERS.SHOW_COMPLETED}>
          {BTN_ACTIONS.COMPLETED}
        </button>
      </div>
    </div>
  </div>
);

TodoFilter.propType = {
  handleFilter: func.isRequired
}
export default TodoFilter;
