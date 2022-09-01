import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import stockBg from '../images/stock_bg.jpg';

const Company = (props) => {
  const { symbol, name, price } = props;

  return (
    <Card className="bg-dark text-white" style={{ width: '32%' }}>
      <NavLink to={`/${symbol}`}>
        <Card.Img src={stockBg} alt="Card image" style={{ opacity: '0.4' }} />
        <Card.ImgOverlay>
          <Card.Title className="d-flex justify-content-between">
            {symbol}
            <FontAwesomeIcon icon={faRightLong} />
          </Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.ImgOverlay>
      </NavLink>
    </Card>
  );
};

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Company;
