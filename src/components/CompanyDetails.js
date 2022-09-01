import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { NavLink, useParams } from 'react-router-dom';
import { getCompanyDetails } from '../redux/actions';
import styles from './CompanyDetails.module.css';

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetailsReducer);
  const { symbol } = useParams();

  useEffect(() => {
    dispatch(getCompanyDetails(symbol));
  }, []);

  return (
    <div className={styles.whiteText}>
      <NavLink to="/">&larr;</NavLink>
      <h1>Company Profile</h1>
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
