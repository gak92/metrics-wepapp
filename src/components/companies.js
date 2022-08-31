import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import getCompanies from '../redux/actions';
import Company from './Company';

const Companies = () => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.companiesReducer);

  useEffect(
    () => {
      dispatch(getCompanies());
    },
    [],
  );

  return (
    <div className="d-flex flex-wrap gap-1">
      {
        companiesList.map((company) => (
          <Company
            key={company.symbol}
            symbol={company.symbol}
            name={company.name}
            price={company.price}
          />
        ))
      }
    </div>
  );
};

export default Companies;
