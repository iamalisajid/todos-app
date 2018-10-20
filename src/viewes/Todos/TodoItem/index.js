import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ text, onSelection, onDeletion }) => {
    return (
        <li className="list-group-item" onClick={onSelection}>
            {text}
            <button className="btn btn-danger float-right" onClick={onDeletion}>
                Delete
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired,
    onDeletion: PropTypes.func.isRequired
}

export default Index