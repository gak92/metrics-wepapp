import React from 'react';
import PropTypes from 'prop-types';

function Company(props) {
  const { symbol, name, price } = props;

  return (
    <div>
      <p>
        symbol:
        {symbol}
      </p>
      <p>
        Name:
        {name}
      </p>
      <p>
        Price:
        {price}
      </p>
    </div>
  );
}

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Company;
