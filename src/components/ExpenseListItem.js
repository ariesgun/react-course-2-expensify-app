import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>${amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expense
  };
};

export default connect(mapStateToProps)(ExpenseListItem);
