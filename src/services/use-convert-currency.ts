import { useState, useCallback } from 'react';
import { CurrencyConversionResponse } from 'types/api';
import { api } from 'services/api';

const convertCurrency = (
  from: string,
  to: string,
  amount: number
): Promise<{ data: CurrencyConversionResponse }> =>
  api.get('/convert', {
    params: {
      from,
      to,
      amount,
    },
  });

export const useConvertCurrency = () => {
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convert = useCallback(
    async (from: string, to: string, amount: number) => {
      setIsConverting(true);
      setError(null);
      try {
        const response = await convertCurrency(from, to, amount);

        return response.data.response;
      } catch (err) {
        console.error('Currency conversion error:', err);
        setError('Failed to convert currency. Please try again.');
      } finally {
        setIsConverting(false);
      }
    },
    []
  );

  return { convert, isConverting, error };
};
