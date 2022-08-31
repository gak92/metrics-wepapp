import React from 'react';
import Company from './Company';

const Companies = () => {
  const companiesList = [{
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    change: -1.55,
    price: 86.94,
    changesPercentage: -1.7516053,
  }, {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    change: -7.12,
    price: 277.7,
    changesPercentage: -2.4998226,
  }, {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    change: -2.47,
    price: 158.91,
    changesPercentage: -1.5305498,
  }, {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    change: -1.06,
    price: 128.73,
    changesPercentage: -0.8167021,
  }, {
    symbol: 'F',
    name: 'Ford Motor Company',
    change: -0.12,
    price: 15.45,
    changesPercentage: -0.7707122,
  }, {
    symbol: 'CCL',
    name: 'Carnival Corporation & plc',
    change: -0.06,
    price: 9.77,
    changesPercentage: -0.610371,
  }, {
    symbol: 'NIO',
    name: 'NIO Inc.',
    change: 0.02,
    price: 19.83,
    changesPercentage: 0.10096142,
  }, {
    symbol: 'SNAP',
    name: 'Snap Inc.',
    change: -0.26,
    price: 10.01,
    changesPercentage: -2.5316477,
  }, {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    change: -3.33,
    price: 154.68,
    changesPercentage: -2.107463,
  }, {
    symbol: 'APE',
    name: 'AMC Entertainment Holdings, Inc.',
    change: -0.86,
    price: 5.2,
    changesPercentage: -14.1914215,
  }, {
    symbol: 'AMC',
    name: 'AMC Entertainment Holdings, Inc.',
    change: -0.2,
    price: 9.27,
    changesPercentage: -2.1119304,
  }, {
    symbol: 'ITUB',
    name: 'Itaú Unibanco Holding S.A.',
    change: -0.12,
    price: 5.13,
    changesPercentage: -2.285712,
  }, {
    symbol: 'SWN',
    name: 'Southwestern Energy Company',
    change: -0.43,
    price: 7.1,
    changesPercentage: -5.7104955,
  }, {
    symbol: 'BBBY',
    name: 'Bed Bath & Beyond Inc.',
    change: -1.24,
    price: 12.11,
    changesPercentage: -9.288395,
  }, {
    symbol: 'BAC',
    name: 'Bank of America Corporation',
    change: 0.19,
    price: 34.09,
    changesPercentage: 0.5604679,
  }, {
    symbol: 'SOFI',
    name: 'SoFi Technologies, Inc.',
    change: -0.09,
    price: 5.91,
    changesPercentage: -1.5000026,
  }, {
    symbol: 'EEM',
    name: 'iShares MSCI Emerging Markets ETF',
    change: -0.47,
    price: 39.29,
    changesPercentage: -1.18209,
  }, {
    symbol: 'INTC',
    name: 'Intel Corporation',
    change: -0.68,
    price: 32.26,
    changesPercentage: -2.0643604,
  }, {
    symbol: 'PLTR',
    name: 'Palantir Technologies Inc.',
    change: -0.02,
    price: 7.79,
    changesPercentage: -0.2560817,
  }, {
    symbol: 'T',
    name: 'AT&T Inc.',
    change: 0.04,
    price: 17.82,
    changesPercentage: 0.2249663,
  }, {
    symbol: 'SHOP',
    name: 'Shopify Inc.',
    change: -0.58,
    price: 31.36,
    changesPercentage: -1.8159045,
  }, {
    symbol: 'ABEV',
    name: 'Ambev S.A.',
    change: -0.09,
    price: 2.95,
    changesPercentage: -2.9605236,
  }, {
    symbol: 'AAL',
    name: 'American Airlines Group Inc.',
    change: -0.18,
    price: 13.33,
    changesPercentage: -1.3323487,
  }, {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    change: -0.48,
    price: 108.94,
    changesPercentage: -0.43867278,
  }, {
    symbol: 'VALE',
    name: 'Vale S.A.',
    change: -0.62,
    price: 12.63,
    changesPercentage: -4.6792445,
  }, {
    symbol: 'BBD',
    name: 'Banco Bradesco S.A.',
    change: -0.09,
    price: 3.78,
    changesPercentage: -2.3255794,
  }, {
    symbol: 'PBR',
    name: 'Petróleo Brasileiro S.A. - Petrobras',
    change: -0.9,
    price: 14.23,
    changesPercentage: -5.9484506,
  }, {
    symbol: 'UBER',
    name: 'Uber Technologies, Inc.',
    change: -0.03,
    price: 28.71,
    changesPercentage: -0.10438652,
  }, {
    symbol: 'NLY',
    name: 'Annaly Capital Management, Inc.',
    change: -0.1,
    price: 6.44,
    changesPercentage: -1.5290505,
  }, {
    symbol: 'NOK',
    name: 'Nokia Oyj',
    change: 0.01,
    price: 4.82,
    changesPercentage: 0.20790496,
  }];

  return (
    <div>
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
