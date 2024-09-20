import { useState, useMemo, useEffect, useCallback } from 'react';
import { useCurrencies } from 'services/use-currencies';
import { useConvertCurrency } from 'services/use-convert-currency';
import { Currency } from 'types/api';
import useDebounce from 'hooks/use-debounce';
import { formatStringNumber, isValidNumberInput } from 'utils/number-utils';

interface CurrencyOption {
  value: string;
  label: string;
}

type InputType = 'from' | 'to';

export const useConverter = () => {
  const { currencies, isLoading: isLoadingCurrencies } = useCurrencies();
  const { convert, isConverting, error } = useConvertCurrency();

  const [amounts, setAmounts] = useState({ from: '', to: '' });
  const [currencyValues, setCurrencyValues] = useState({ from: '', to: '' });
  const [activeInput, setActiveInput] = useState<InputType>('from');

  const debouncedFromAmount = useDebounce(amounts.from, 500);
  const debouncedToAmount = useDebounce(amounts.to, 500);

  const currencyOptions = useMemo<CurrencyOption[]>(
    () =>
      Object.values(currencies).map((currency: Currency) => ({
        value: currency.short_code,
        label: `${currency.name} (${currency.short_code})`,
      })),
    [currencies]
  );

  const handleAmountChange = (value: string, type: InputType) => {
    if (isValidNumberInput(value)) {
      setAmounts((prev) => ({ ...prev, [type]: value }));
      setActiveInput(type);
    }
  };

  const handleCurrencyChange = (value: string, type: InputType) => {
    setCurrencyValues((prev) => ({ ...prev, [type]: value }));
  };

  const performConversion = useCallback(
    async (
      amount: string,
      fromCurrency: string,
      toCurrency: string,
      setResult: (value: string) => void
    ) => {
      if (amount && fromCurrency && toCurrency) {
        const result = await convert(
          fromCurrency,
          toCurrency,
          parseFloat(amount)
        );
        if (result) {
          setResult(formatStringNumber(result.value.toString()));
        }
      }
    },
    [convert]
  );

  useEffect(() => {
    const { from: fromCurrency, to: toCurrency } = currencyValues;

    if (activeInput === 'from' && debouncedFromAmount) {
      performConversion(
        debouncedFromAmount,
        fromCurrency,
        toCurrency,
        (value) => setAmounts((prev) => ({ ...prev, to: value }))
      );
    } else if (activeInput === 'to' && debouncedToAmount) {
      performConversion(debouncedToAmount, toCurrency, fromCurrency, (value) =>
        setAmounts((prev) => ({ ...prev, from: value }))
      );
    }
  }, [
    debouncedFromAmount,
    debouncedToAmount,
    currencyValues,
    activeInput,
    performConversion,
  ]);

  return {
    fromAmount: amounts.from,
    toAmount: amounts.to,
    fromCurrency: currencyValues.from,
    toCurrency: currencyValues.to,
    handleFromAmountChange: (value: string) =>
      handleAmountChange(value, 'from'),
    handleToAmountChange: (value: string) => handleAmountChange(value, 'to'),
    handleFromCurrencyChange: (value: string) =>
      handleCurrencyChange(value, 'from'),
    handleToCurrencyChange: (value: string) =>
      handleCurrencyChange(value, 'to'),
    currencyOptions,
    isLoadingCurrencies,
    isConverting,
    error,
  };
};
