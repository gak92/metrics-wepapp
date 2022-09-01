import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { NavLink, useParams } from 'react-router-dom';
import { getCompanyDetails } from '../redux/actions';

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetailsReducer);
  // console.log('Company Details: ', companyDetails);

  const { symbol } = useParams();
  // console.log('Symbol: ', symbol);

  useEffect(() => {
    dispatch(getCompanyDetails(symbol));
  }, []);

  return (
    <div>
      <NavLink to="/">&larr;</NavLink>
      <h1>This is company details page</h1>
      {companyDetails.map(({
        symbol, companyName, price, description,
      }) => (
        <div key={symbol}>
          <p>{symbol}</p>
          <p>{companyName}</p>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyDetails;
