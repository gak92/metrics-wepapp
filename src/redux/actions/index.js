import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './types';

const API_KEY = '914bee6857729bc58d8f8d6ec4224f5d';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';
const REQUESTED_URL = `${BASE_URL}/stock_market/actives?apikey=${API_KEY}}`;

// Actions
const getCompanies = createAsyncThunk(
  actions.GET_COMPANIES,
  async () => {
    const { data } = await axios.get(REQUESTED_URL);
    console.log(data);
    return data;
  },
);

export default getCompanies;
