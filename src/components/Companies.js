import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getCompanies } from '../redux/actions';
import Company from './Company';

const Companies = () => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.companiesReducer);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // console.log(companiesList.length);
    if (companiesList.length === 0) {
      dispatch(getCompanies());
    }
  }, []);

  const searchHandler = (event) => {
    // console.log(event.target.value);
    const searchVal = event.target.value;
    if (searchVal) {
      setSearchParams({ searchVal });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search company by Name ..."
        value={searchParams.keyword}
        onChange={searchHandler}
      />
      <div className="d-flex flex-wrap gap-1 justify-content-center">
        {
          companiesList.filter((company) => {
            const companyName = company.name.toLowerCase();
            const searchQuery = searchParams.get('searchVal');
            // console.log('Search Query: ', !searchQuery);
            if (searchQuery) {
              // console.log(companyName.includes(searchQuery));
              return companyName.includes(searchQuery);
            }
            // console.log('All true');
            return true;
          })
            .map((company) => (
              <Company
                key={company.symbol}
                symbol={company.symbol}
                name={company.name}
                price={company.price}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Companies;
