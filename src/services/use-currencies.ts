import { useState, useEffect } from 'react';
import { api } from 'services/api';
import { Currencies, CurrencyResponse } from 'types/api';

const fetchCurrencies = (): Promise<{ data: CurrencyResponse }> =>
  api.get('/currencies');

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<Currencies>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetchCurrencies();
        setCurrencies(response.data.response);
      } catch (err) {
        console.error('Currencies fetch error:', err);
        setError('Failed to fetch currencies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getCurrencies();
  }, []);

  return { currencies, isLoading, error };
};
