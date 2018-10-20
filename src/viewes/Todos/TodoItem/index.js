import React from 'react'
import { string, number, func } from 'prop-types'
import { BTN_ACTIONS } from '../../../utils/constants'

const TodoItem = ({ text, onSelection, onDeletion, id }) => {
    return (
        <li className="list-group-item" onClick={onSelection.bind(this, id)}>
            {text}
            <button className="btn btn-danger float-right" onClick={onDeletion.bind(this, id)}>
                {BTN_ACTIONS.DELETE}
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    id: number.isRequired,
    text: string.isRequired,
    onSelection: func.isRequired,
    onDeletion: func.isRequired
}

export default TodoItem;
