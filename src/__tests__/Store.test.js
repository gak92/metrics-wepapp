import '@testing-library/jest-dom';
import companiesReducer from "../redux/reducers/companiesReducer";

const mockData = [
  {
    "symbol": "TSLA",
    "name": "Tesla, Inc.",
    "price": 269.745,
  },
  {
    "symbol": "AMD",
    "name": "Advanced Micro Devices, Inc.",
    "price": 79.875,
  },
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "price": 155.76,
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com, Inc.",
    "price": 124.9,
  },
  {
    "symbol": "F",
    "name": "Ford Motor Company",
    "price": 14.925,
  },
  {
    "symbol": "CCL",
    "name": "Carnival Corporation & plc",
    "price": 9.185,
  }
];

const initialState = [];
const mockCompaniesLoaded = () => ({ type: 'stock/companies/get_companies/fulfilled', payload: mockData });


describe('Test functionality', () => {
  it('Check initial state', () => {
    expect(companiesReducer(undefined, {})).toEqual(initialState);
  });

  it('Check dispatch data', () => {
    expect(companiesReducer([], mockCompaniesLoaded())).toEqual(mockData);
  });
});
