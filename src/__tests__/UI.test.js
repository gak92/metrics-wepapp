import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Companies from '../components/Companies';
import Company from '../components/Company';
import store from '../redux/configureStore';

describe('Testing UI', () => {
  it('Headers render correctly', () => {
    const tree = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Header contain text', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    const element = screen.getByText('Financial Stock Companies');
    expect(element).toBeInTheDocument();
  });

  it('Test Companies', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Companies />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Test Company', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Company />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
