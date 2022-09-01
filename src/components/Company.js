import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import stockBg from '../images/stock_bg.jpg';

const Company = (props) => {
  const { symbol, name, price } = props;
  console.log(props);

  return (
    <Card className="bg-dark text-white">
      <NavLink to={`/${symbol}`}>
        <Card.Img src={stockBg} alt="Card image" style={{ width: '256px' }} />
        <Card.ImgOverlay>
          <Card.Title>{symbol}</Card.Title>
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
