import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './types';

const API_KEY = '914bee6857729bc58d8f8d6ec4224f5d';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';
const REQUESTED_URL = `${BASE_URL}/stock_market/actives?apikey=${API_KEY}`;

// Actions
const getCompanies = createAsyncThunk(
  actions.GET_COMPANIES,
  async () => {
    const response = await axios.get(REQUESTED_URL);
    return response.data;
  },
);

const getCompanyDetails = createAsyncThunk(
  actions.GET_COMPANY_DETAIL,
  async (symbol) => {
    const response = await axios.get(`${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`);
    return response.data;
  },
);

export { getCompanies, getCompanyDetails };
